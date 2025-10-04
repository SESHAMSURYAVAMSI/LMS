"use client";
// Make sure the Sidebar component exists at the specified path.
// If it does not, update the path below to the correct location.
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
