import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Decisio Mate",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <main>
          <div className="min-h-screen pt-10 p-4 md:px-20 sm:px-40 sm:pt-8 bg-white">
            <main className="block">{children}</main>
          </div>
        </main>
      </body>
    </html>
  );
}
