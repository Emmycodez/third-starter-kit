import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="flex min-h-screen max-w-[300px]">
        <Sidebar />
      </div>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
