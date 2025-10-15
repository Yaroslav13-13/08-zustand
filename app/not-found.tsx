// import css from "./not-found.module.css";

// export default function NotFoundPage() {
//   return (
//     <div>
//       <h1 className={css.title}>404 - Page not found</h1>
//       <p className={css.description}>
//         Sorry, the page you are looking for does not exist.
//       </p>
//     </div>
//   );
// }

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — NoteHub",
  description: "The page you are looking for doesn’t exist on NoteHub.",
  openGraph: {
    title: "Page not found — NoteHub",
    description: "The page you are looking for doesn’t exist on NoteHub.",
    url: "https://notehub.goit.study/not-found",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function NotFoundPage() {
  return (
    <section style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 — Page not found</h1>
      <p>Sorry, we couldn’t find that page.</p>
    </section>
  );
}
