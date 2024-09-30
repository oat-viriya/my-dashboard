"use client";
import { Suspense, useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/Input";
import { UserData } from "@/data";
import { columns, DataTable } from "@/components";
import { DataTableSkeleton } from "@/components";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";

interface DashboardPageProps {
  userData: UserData[];
}

export default function DashboardPage(props: DashboardPageProps) {
  const { userData } = props;
  const router = useRouter();

  const [tableData, setTableData] = useState<UserData[]>(userData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClickRow = useCallback(
    (id: string) => {
      router.push(ROUTES.USER_DETAILS.replace(":id", String(id)));
    },
    [router]
  );

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
      <div className="mb-6 flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search entries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 w-full max-w-md border border-gray-300 rounded-lg shadow-sm"
        />
      </div>
      <section className="grid gap-6 h-full">
        <Suspense fallback={<DataTableSkeleton />}>
          <DataTable
            columns={columns}
            data={tableData}
            onRowClick={handleClickRow}
          />
        </Suspense>
      </section>
    </div>
  );
}
