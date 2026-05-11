import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Meeting Invoice Generator",
  description: "Generate professional invoices from Discord voice call logs. Track billable hours automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dff4572a-e57f-4314-9e80-9d329760e568"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
