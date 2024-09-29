import { Suspense } from "react";
import DashboardPage from "./dashboard.page";
import { TableRowSkeleton } from "@/components";
import { mockEntries } from "@/data";

export default function DashboardSSRPage() {
  return (
    <div className="w-full h-ful ">
      <h1 className="mb-4 font-bold text-2xl md:text-4xl">Dashboard</h1>
      <p className="mb-4">Welcome to your dashboard!</p>
      <Suspense fallback={<TableRowSkeleton />}>
        <DashboardPage userData={mockEntries} />
      </Suspense>
    </div>
  );
}
