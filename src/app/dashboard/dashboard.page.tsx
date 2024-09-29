"use client";
import { Suspense, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { UserData } from "@/data";
import { columns, DataTable } from "@/components";
import { DataTableSkeleton } from "@/components";
import { Oval } from "react-loader-spinner";

interface DashboardPageProps {
  userData: UserData[];
}

export default function DashboardPage(props: DashboardPageProps) {
  const { userData } = props;

  const [tableData, setTableData] = useState<UserData[]>(userData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTableData(
      userData.filter((entry) =>
        Object.values(entry).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [searchTerm, userData]);

  return (
    <div className="w-full h-full">
      <Input
        type="text"
        placeholder="Search entries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <section className="grid gap-6 h-full">
        <Suspense fallback={<DataTableSkeleton />}>
          <DataTable columns={columns} data={tableData} />
        </Suspense>
      </section>
    </div>
  );
}
