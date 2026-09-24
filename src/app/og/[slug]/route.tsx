import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OpenGraphArtwork, openGraphCards } from "@/lib/open-graph";

export const size = { width: 1200, height: 630 };

function readPublicImage(fileName: string) {
  return readFile(join(process.cwd(), "public", "images", fileName), "base64")
    .then((data) => `data:image/png;base64,${data}`);
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const card = openGraphCards[slug];

  if (!card) {
    return new Response("Open Graph image not found", { status: 404 });
  }

  const imageSources = await Promise.all(
    card.images.map((image) => readPublicImage(image.src)),
  );

  return new ImageResponse(
    <OpenGraphArtwork card={card} imageSources={imageSources} />,
    {
      ...size,
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
