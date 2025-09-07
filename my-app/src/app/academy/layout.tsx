import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export default function AcademyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center justify-center gap-4">
        <h1 className="text-2xl font-bold sr-only">Academy</h1>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="SLM Creatives"
            width={200}
            height={200}
            className="w-16 h-16 object-contain -my-4"
          />
        </Link>
      </header> */}
      <main
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} SLM Creatives Academy
      </footer>
    </div>
  );
}
