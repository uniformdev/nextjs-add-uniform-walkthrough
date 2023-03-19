import { ComponentPage } from "../components/ComponentPage";
import runEnhancers from "lib/uniform/enhancers";
import {
  withUniformGetStaticProps,
  withUniformGetStaticPaths,
} from "@uniformdev/canvas-next/project-map";

export default ComponentPage;

export const getStaticProps = withUniformGetStaticProps({
  param: "slug",
  preview: process.env.NODE_ENV === "development",
  callback: async (context, composition) => {
    await runEnhancers(composition, context);
    const { preview = false } = context || {};
    return {
      props: {
        preview,
        composition,
      },
    };
  },
});

export const getStaticPaths = withUniformGetStaticPaths({
  preview: process.env.NODE_ENV === "development",
});
