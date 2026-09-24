import type { ComponentType } from "react";

export type ProspectDemoDefinition = {
  slug: string;
  title: string;
  description: string;
  component: ComponentType;
};

// Prospect demos are opt-in. Add only approved, prospect-specific pages here.
// Keeping the registry empty prevents placeholder companies or claims from going live.
export const prospectDemos: readonly ProspectDemoDefinition[] = [];

export function getProspectDemo(slug: string) {
  return prospectDemos.find((demo) => demo.slug === slug);
}
