import * as React from "react";
import { Project } from "monobase";
import Template from "../components/Template";

const render = (project: Project) => {
  return <Template project={project} />;
};
