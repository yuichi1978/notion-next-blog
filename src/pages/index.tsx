import type { NextPage, GetStaticProps } from "next";

import Layout from "../components/Layout";
import { siteConfig } from "../../site.config";
import Card from "../components/Card";
import { fetchPages } from "../utils/notion";
import { IndexProps } from "../types/types";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className="pt-12">
        <h1 className="text-4xl md:text-5xl text-center pb-10 mb-8">
          {siteConfig.title}
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

export default Home;
