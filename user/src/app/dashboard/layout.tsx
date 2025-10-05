"use client";

// Update the import path below if Sidebar exists elsewhere, e.g.:
import Sidebar from "../../../components/ui/Sidebar";
// Or create the Sidebar component at src/components/ui/Sidebar.tsx if it does not exist.

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}
