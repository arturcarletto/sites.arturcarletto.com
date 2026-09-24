import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/config/metadata";
import { getProspectDemo, prospectDemos } from "@/data/prospect-demos";

type ProspectDemoPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return prospectDemos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProspectDemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getProspectDemo(slug);

  if (!demo) {
    return {
      title: "Demonstração não encontrada",
      robots: { index: false, follow: false },
    };
  }

  return {
    ...createPageMetadata({
      title: demo.title,
      description: demo.description,
      path: `/demo/${demo.slug}`,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function ProspectDemoPage({ params }: ProspectDemoPageProps) {
  const { slug } = await params;
  const demo = getProspectDemo(slug);

  if (!demo) {
    notFound();
  }

  const Demo = demo.component;
  return <Demo />;
}
