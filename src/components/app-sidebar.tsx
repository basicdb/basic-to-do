import { Calendar, Home, Inbox, Search, Settings, User2, ChevronUp, ExternalLink, BookOpenText } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarRail,
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const items = [
    {
        title: "I don't work",
        url: "#",
        icon: Home,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center space-x-2">
                    <img src="/images/logo_light.png" alt="Basic logo" className="w-5 h-5" />
                    <p className="text-sm font-semibold">Basic</p>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Create account
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <a href="https://basic.tech" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        <span>Learn about Basic</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="https://docs.basic.tech" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <BookOpenText className="mr-2 h-4 w-4" />
                                        <span>Documentation</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Login</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
