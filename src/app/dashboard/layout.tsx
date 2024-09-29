import { SideNav } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen flex-col overflow-auto md:flex-row md:overflow-hidden">
      <div className="w-full flex-none border border-gray-200 md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto  md:p-12">
        {children}
      </div>
    </main>
  );
}
