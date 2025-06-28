import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

const navigationItems = [
  { name: "Dashboard", icon: "lucide:layout-dashboard", href: "#" },
  { name: "Analytics", icon: "lucide:bar-chart", href: "#" },
  { name: "Customers", icon: "lucide:users", href: "#" },
  { name: "Orders", icon: "lucide:shopping-cart", href: "#" },
  { name: "Settings", icon: "lucide:settings", href: "#" },
];

export function SidebarNavigation() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="flex items-center gap-2 px-2 py-4">
        <Icon icon="lucide:boxes" className="text-2xl" />
        <span className="font-bold text-xl">Dashboard</span>
      </div>
      <div className="flex flex-col gap-1">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-default-100"
          >
            <Icon icon={item.icon} className="text-xl" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}