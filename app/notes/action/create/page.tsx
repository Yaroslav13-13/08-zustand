import type { Metadata } from "next";
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./page.module.css";

export const metadata: Metadata = {
  title: "Create new note — NoteHub",
  description: "Create a new note in NoteHub quickly and easily.",
  openGraph: {
    title: "Create new note — NoteHub",
    description: "Create a new note in NoteHub quickly and easily.",
    url: "https://notehub.goit.study/notes/action/create",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
