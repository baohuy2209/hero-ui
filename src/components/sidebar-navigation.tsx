import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const navigationItems = [
  { name: "Dashboard", icon: "lucide:layout-dashboard", href: "/" },
  { name: "Analytics", icon: "lucide:bar-chart", href: "/analytics" },
  { name: "Customers", icon: "lucide:users", href: "/customers" },
  { name: "Orders", icon: "lucide:shopping-cart", href: "/orders" },
  { name: "Settings", icon: "lucide:settings", href: "/settings" },
];

export function SidebarNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="flex items-center gap-2 px-2 py-4">
        <Icon icon="lucide:boxes" className="text-2xl" />
        <span className="font-bold text-xl">Nguyen Bao Huy's Dashboard</span>
      </div>
      <div className="flex flex-col gap-1">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-default-100 ${
              currentPath === item.href ? "bg-default-100 text-primary" : ""
            }`}
          >
            <Icon icon={item.icon} className="text-xl" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
