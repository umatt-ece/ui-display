import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { CalendarClock, ClipboardList, Home, Search } from "lucide-react";
import { AppSidebarCard } from "./app-sidebar-card";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Diagnostics",
    url: "/diagnostics",
    icon: Search,
  },
  {
    title: "Service",
    url: "/service",
    icon: CalendarClock,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: ClipboardList,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="flex-grow space-y-2 overflow-y-auto">
        {items.map(({ title, icon: Icon, url }) => (
          <Link key={title} href={url}>
            <AppSidebarCard icon={Icon} text={title} />
          </Link>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
