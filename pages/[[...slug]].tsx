import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getPage, pages } from "@cms";
import { ComponentPage, PageProps } from "../components/ComponentPage";
import { getCompositionBySlug } from "lib/uniform/canvasClient";

const Home: NextPage<PageProps> = (props: PageProps) => {
  return <ComponentPage {...props} />;
};

export const getStaticProps: GetStaticProps<any> = async (context) => {
  const { params } = context;
  const { slug } = params || {};
  const properSlug = slug ?? "/";

  const composition = await getCompositionBySlug(properSlug as string, context);

  return {
    props: {
      page: await getPage(slug),
      composition: composition ?? {},
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: Object.keys(pages), fallback: false };
};

export default Home;
