import DashboardPage from "./dashboard.page";
import { mockUserData } from "@/data";
import { auth } from "next-auth/server";
import { ROUTES } from "@/constants";
import { redirect } from "next/navigation";

export default async function DashboardSSRPage() {
  const session = await auth();

  if (!session) redirect(ROUTES.HOME);

  return (
    <div className="w-full h-full ">
      <h1 className="mb-4 font-bold text-2xl md:text-4xl">Dashboard</h1>
      <p className="mb-4">Welcome to user dashboard!</p>
      <DashboardPage userData={mockUserData} />
    </div>
  );
}
