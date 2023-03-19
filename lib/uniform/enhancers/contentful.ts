import { createClient } from "contentful";
import {
  createContentfulEnhancer,
  ContentfulClientList,
} from "@uniformdev/canvas-contentful";

export default function getContentfulEnhancer(preview: boolean) {
  const contentfulClient = createClient({
    host: !preview ? "cdn.contentful.com" : "preview.contentful.com",
    space: process.env.CONTENTFUL_SPACE_ID!,
    environment: process.env.CONTENTFUL_ENVIRONMENT! || "master",
    accessToken: !preview
      ? process.env.CONTENTFUL_CDA_ACCESS_TOKEN!
      : process.env.CONTENTFUL_CPA_ACCESS_TOKEN!,
  });
  const clientList = new ContentfulClientList({ client: contentfulClient });
  return createContentfulEnhancer({ client: clientList });
}
