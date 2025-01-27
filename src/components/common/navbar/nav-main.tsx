"use client";

import {
  Settings,
  ChevronRight,
  LayoutDashboard,
  ListTodo,
  Cable,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { FC } from "react";

const NavbarData = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
    isActive: true,
    items: [],
  },
  {
    title: "Tasks",
    url: "#",
    icon: ListTodo,
    items: [],
  },
  {
    title: "Integrations",
    url: "#",
    icon: Cable,
    items: [],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "Project Informations",
        url: "#",
      },
      {
        title: "Member Management",
        url: "#",
      },
    ],
  },
];

interface NavMainItem {}

export const NavMain: FC<NavMainItem> = () => {
  const items = NavbarData;
  const renderCollapsibleNabItem = (item: (typeof items)[0]) => {
    return (
      <Collapsible
        key={item.title}
        asChild
        defaultOpen={item.isActive}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span>{subItem.title}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  };

  const renderSidebarMenuItem = (item: (typeof items)[0]) => {
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton tooltip={item.title}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Current Project Name</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          if (item?.items?.length) {
            return renderCollapsibleNabItem(item);
          }
          return renderSidebarMenuItem(item);
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};
