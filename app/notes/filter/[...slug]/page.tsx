import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { fetchNotes } from "@/lib/api";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
import type { NoteTag } from "@/types/note";

interface FilteredNotesPageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function FilteredNotesPage({
  params,
}: FilteredNotesPageProps) {
  const resolvedParams = await params;
  const tag = (resolvedParams.slug?.[0] ?? "All") as NoteTag | "All";

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, tag !== "All" ? tag : undefined],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        tag: tag !== "All" ? tag : undefined,
      }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
