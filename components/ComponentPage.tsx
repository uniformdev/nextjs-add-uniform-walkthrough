import { createElement } from "react";
import { Page } from "../lib/models";
import componentMapping from "./componentMapping";
import {
  UniformComposition,
  UniformSlot,
  createUniformApiEnhancer,
} from "@uniformdev/canvas-react";
import { RootComponentInstance } from "@uniformdev/canvas/.";

export type PageProps = { page: Page; composition: RootComponentInstance };

export const ComponentPage = ({ page, composition }: PageProps) => {
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: "/api/preview",
  });
  return (
    <>
      <UniformComposition
        data={composition}
        contextualEditingEnhancer={contextualEditingEnhancer}
      >
        <UniformSlot name="content" />
      </UniformComposition>
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
