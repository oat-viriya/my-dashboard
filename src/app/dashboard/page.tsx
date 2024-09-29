import DashboardPage from "./dashboard.page";
import { SideNav } from "@/components";
import { mockUserData } from "@/data";
import { auth } from "next-auth/server";
import { ROUTES } from "@/constants";
import { redirect } from "next/navigation";

export default async function DashboardSSRPage() {
  const session = await auth();

  if (!session) redirect(ROUTES.HOME);

  return (
    <>
      <div className="w-full flex-none border border-gray-200 md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto  md:p-12">
        <div className="w-full h-ful ">
          <h1 className="mb-4 font-bold text-2xl md:text-4xl">Dashboard</h1>
          <p className="mb-4">Welcome to user dashboard!</p>
          <DashboardPage userData={mockUserData} />
        </div>
      </div>
    </>
  );
}
