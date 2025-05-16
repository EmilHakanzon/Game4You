// app/layout.tsx
import "./globals.css";
import NavBar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { GameModal } from "@/components/modal/gamemodal";
import SearchOverlay from "@/components/search/SearchOverlay";

export const metadata = {
  title: "Game4You",
  description: "Game4You lib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <Toaster />

          <main className="flex-grow">
            <SearchOverlay />
            <GameModal />
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
