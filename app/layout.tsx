// import "./globals.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

// export const metadata = {
//   title: "NoteHub",
//   description: "Manage your notes easily",
// };

// export default function RootLayout({
//   children,
//   modal,
// }: {
//   children: React.ReactNode;
//   modal: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <TanStackProvider>
//           <Header />
//           <main>{children}</main>
//           {modal}
//           <Footer />
//         </TanStackProvider>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NoteHub — Smart Notes App",
  description: "Create, edit and organize your notes with NoteHub.",
  openGraph: {
    title: "NoteHub — Smart Notes App",
    description: "Create, edit and organize your notes with NoteHub.",
    url: "https://notehub.goit.study",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
