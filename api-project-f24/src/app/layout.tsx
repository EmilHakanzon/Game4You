// app/layout.tsx
import "./globals.css";
import NavBar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";

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
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
