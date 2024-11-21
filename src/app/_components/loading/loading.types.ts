import { ComponentBase } from "../types/component-base.type";

export type LoadingProps = Omit<ComponentBase, "isDiabled"> & {
  type?: "spinner" | "ring";
};
