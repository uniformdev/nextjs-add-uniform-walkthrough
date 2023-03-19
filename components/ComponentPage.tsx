import { RootComponentInstance } from "@uniformdev/canvas";
import {
  UniformComposition,
  createUniformApiEnhancer,
} from "@uniformdev/canvas-react";

// IMPORTANT: need to import all canvas components here
import "./canvasComponents";

export type PageProps = { data: RootComponentInstance };

export const ComponentPage = ({ data }: PageProps) => {
  const enhancer = createUniformApiEnhancer({
    apiUrl: "/api/preview",
  });
  return (
    <UniformComposition data={data} contextualEditingEnhancer={enhancer} />
  );
};
