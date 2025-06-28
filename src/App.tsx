import React from "react";
import { SidebarNavigation } from "./components/sidebar-navigation";
import { Header } from "./components/header";
import { StatsCard } from "./components/stats-card";
import { SalesChart } from "./components/sales-chart";

export default function App() {
  return (
    <div className="flex h-screen bg-default-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background">
        <SidebarNavigation />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard
              title="Total Revenue"
              value="$45,231"
              change="+20.1% from last month"
              isPositive={true}
              icon="lucide:dollar-sign"
            />
            <StatsCard
              title="Active Users"
              value="1,234"
              change="+12.5% from last month"
              isPositive={true}
              icon="lucide:users"
            />
            <StatsCard
              title="New Orders"
              value="450"
              change="-3.4% from last month"
              isPositive={false}
              icon="lucide:shopping-cart"
            />
            <StatsCard
              title="Conversion Rate"
              value="2.4%"
              change="+4.1% from last month"
              isPositive={true}
              icon="lucide:percent"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SalesChart />
            <SalesChart />
          </div>
        </div>
      </main>
    </div>
  );
}