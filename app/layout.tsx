import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabTrack – Track Which Tabs Kill Your Productivity Most",
  description: "Browser extension that tracks time per domain, identifies productivity drains, and delivers actionable reports for remote workers and freelancers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ae4736aa-242f-40b5-b746-cc927c5379f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
