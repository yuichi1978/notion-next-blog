import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { fetchPages } from "../../utils/notion";
import { TagProps, Params } from "../../types/types";
import { getMultiSelect } from "../../utils/property";
import Breadcrumb from "../../components/Breadcrumb";

export const getStaticPaths: GetStaticPaths = async () => {
  const { results }: { results: Record<string, any>[] } = await fetchPages({});

  const pathSet: Set<string> = new Set();
  for (const page of results) {
    for (const tag of getMultiSelect(page.properties.tags.multi_select)) {
      pathSet.add(tag);
    }
  }

  const paths = Array.from(pathSet).map((tag) => {
    return {
      params: {
        tag: tag,
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as Params;
  const { results } = await fetchPages({ tag: tag });
  return {
    props: {
      pages: results ? results : [],
      tag: tag,
    },
    revalidate: 10,
  };
};

const Tag: NextPage<TagProps> = ({ pages, tag }) => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <Link href="/">home</Link>
      <Breadcrumb />
      <div className="pt-12">
        <h1 className="text-4xl md:text-5xl text-center pb-10 mb-8">
          {`#${tag}`}
        </h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          {/* Card */}
          {pages.map((page, index: number) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tag;
