import {
  compose,
  enhance,
  EnhancerBuilder,
} from "@uniformdev/canvas";
import { GetStaticPropsContext } from "next";
import { CANVAS_CONTENTFUL_PARAMETER_TYPES } from "@uniformdev/canvas-contentful";

import getContentfulEnhancer from "./contentful";
import { contentfulModelConverter } from "./contentfulModelConverter";

export default async function runEnhancers(
  composition: any,
  context: GetStaticPropsContext
) {
  const { preview } = context || {};
  await enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
      CANVAS_CONTENTFUL_PARAMETER_TYPES,
      compose(getContentfulEnhancer(preview!), contentfulModelConverter)
    ),
    context,
  });
  return composition;
}
