import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getPage, pages } from "@cms";
import { ComponentPage, PageProps } from "../components/ComponentPage";
import {
  CanvasClient,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from "@uniformdev/canvas";

const Home: NextPage<PageProps> = (props: PageProps) => {
  return <ComponentPage {...props} />;
};

const getState = (preview: boolean | undefined) =>
  process.env.NODE_ENV === "development" || preview
    ? CANVAS_DRAFT_STATE
    : CANVAS_PUBLISHED_STATE;

export const getStaticProps: GetStaticProps<any> = async (context) => {
  const { params } = context;
  const { slug } = params || {};

  let pageComposition;
  if (!slug) {
    const canvasClient = new CanvasClient({
      apiKey: process.env.UNIFORM_API_KEY,
      projectId: process.env.UNIFORM_PROJECT_ID,
    });
    const { composition } = await canvasClient.getCompositionBySlug({
      slug: "/",
      state: getState(context.preview),
    });
    pageComposition = composition;
  }

  return {
    props: {
      page: await getPage(slug),
      composition: pageComposition ?? {},
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: Object.keys(pages), fallback: false };
};

export default Home;
