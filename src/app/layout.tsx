import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Kumar | Full-Stack & AI Developer | Software Engineer Portfolio",
  description:
    "Portfolio of Aman Kumar - BCA Candidate (74.13% Aggregate), AWS Student Builder Campus Leader, Google Student Ambassador, SIH 2026 Lead, and Seed-Funded Founder @ BrahmaCode.",
  keywords: [
    "Aman Kumar",
    "Software Engineer",
    "Full-Stack Developer",
    "TCS Ignite",
    "TCS Smart Hiring",
    "BCA Developer",
    "AWS Campus Leader",
    "Google Student Ambassador",
    "Skill Saarthi",
    "BrahmaCode",
    "Muzaffarpur Bihar",
  ],
  authors: [{ name: "Aman Kumar", url: "https://github.com/aman25-2006" }],
  openGraph: {
    title: "Aman Kumar | Full-Stack & AI Developer Portfolio",
    description:
      "BCA Candidate (74.13% Aggregate) | AWS & Google Student Ambassador | Founder @ BrahmaCode | SIH 2026 Lead",
    url: "https://aman25-2006.github.io",
    siteName: "Aman Kumar Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-obsidian-900 text-slate-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200 antialiased">
        {/* Background Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
          <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-purple-electric/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

