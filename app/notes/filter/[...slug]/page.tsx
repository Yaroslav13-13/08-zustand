// import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
// import getQueryClient from "@/lib/getQueryClient";
// import { fetchNotes } from "@/lib/api";
// import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
// import type { NoteTag } from "@/types/note";

// interface FilteredNotesPageProps {
//   params: Promise<{ slug?: string[] }>;
// }

// export default async function FilteredNotesPage({
//   params,
// }: FilteredNotesPageProps) {
//   const resolvedParams = await params;
//   const tag = (resolvedParams.slug?.[0] ?? "All") as NoteTag | "All";

//   const queryClient = getQueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["notes", 1, tag !== "All" ? tag : undefined],
//     queryFn: () =>
//       fetchNotes({
//         page: 1,
//         perPage: 12,
//         tag: tag !== "All" ? tag : undefined,
//       }),
//   });

//   const dehydratedState = dehydrate(queryClient);

//   return (
//     <HydrationBoundary state={dehydratedState}>
//       <NotesClient tag={tag} />
//     </HydrationBoundary>
//   );
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
