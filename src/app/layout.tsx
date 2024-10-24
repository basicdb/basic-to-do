import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata: Metadata = {
  title: "Basic To-do App",
  description: "Created by @basictech",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex flex-row w-full">
            <AppSidebar />
            <div className="flex flex-col w-full">
              <SidebarTrigger className="text-[#9ba3af] sticky top-0 z-50" />
              {children}
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
} 