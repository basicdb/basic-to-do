import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Basic To-do App",
  description: "Created by @basictech",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
