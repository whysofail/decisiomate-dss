import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Decisio Mate",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <div className="align-middle justify-items-center min-h-screen pt-28 p-4 md:p-40 sm:p-60 sm:pt-12 bg-white">
            <main className="block">{children}</main>
          </div>
        </main>
      </body>
    </html>
  );
}
