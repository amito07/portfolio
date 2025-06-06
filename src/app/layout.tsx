import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Mandal - Software Engineer | Full Stack Developer",
  description:
    "Professional portfolio of Amit Mandal, a passionate software engineer specializing in React, Next.js, and modern web technologies. View my projects and get in touch for collaboration opportunities.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Amit Mandal" }],
  creator: "Amit Mandal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mandalamit.dev",
    title: "Amit Mandal - Software Engineer",
    description:
      "Professional portfolio showcasing full-stack development projects and technical expertise",
    siteName: "Amit Mandal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Mandal - Software Engineer",
    description:
      "Professional portfolio showcasing full-stack development projects and technical expertise",
    creator: "@mandalamitdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
