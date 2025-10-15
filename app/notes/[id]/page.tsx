// export default function NotePage() {
//   return null;
// }

import type { Metadata } from "next";

interface Props {
  params: { slug: string[] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const filter = params.slug?.join("/") || "all";
  return {
    title: `Notes filtered by ${filter} — NoteHub`,
    description: `View notes filtered by tag: ${filter}.`,
    openGraph: {
      title: `Notes filtered by ${filter} — NoteHub`,
      description: `View notes filtered by tag: ${filter}.`,
      url: `https://notehub.goit.study/notes/filter/${filter}`,
      images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    },
  };
}

export default function FilteredNotesPage() {
  return <div>Filtered notes page</div>;
}
