import { RootComponentInstance } from "@uniformdev/canvas";
import {
  UniformComposition,
  createUniformApiEnhancer,
  UniformSlot,
} from "@uniformdev/canvas-react";
import { createElement } from "react";
import { Page } from "../lib/models";
import componentMapping from "./componentMapping";

export type PageProps = { page: Page; composition: RootComponentInstance };

export const ComponentPage = ({ page, composition }: PageProps) => {
  const enhancer = createUniformApiEnhancer({
    apiUrl: "/api/preview",
  });
  return (
    <>
      <UniformComposition
        data={composition}
        contextualEditingEnhancer={enhancer}
      />
      {page?.components &&
        page.components.map((component, index) =>
          createElement(componentMapping[component.type] ?? (() => null), {
            key: index,
            ...component,
          })
        )}
    </>
  );
};
