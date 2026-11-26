import {
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  Settings,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Siswa",
    url: "/siswa",
    icon: Users,
  },
  {
    title: "Kelas",
    url: "/kelas",
    icon: BookOpen,
  },
  {
    title: "Guru",
    url: "/guru",
    icon: GraduationCap,
  },
  {
    title: "Jadwal",
    url: "/jadwal",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}