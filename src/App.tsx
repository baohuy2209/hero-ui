import React from "react";
import { SidebarNavigation } from "./components/sidebar-navigation";
import { Header } from "./components/header";
import {
  useNavigate,
  useHref,
  NavigateOptions,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./page/dashboard-page/dashboard";
import Analytics from "./page/analytics-page/analytics";
import Customers from "./page/customers-page/customers";
import Orders from "./page/orders-page/orders";
import Settings from "./page/settings-page/settings";
declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}
export default function App() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-default-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background">
        <SidebarNavigation />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}
