import DashboardPage from "./dashboard.page";
import { mockUserData } from "@/data";
import { auth } from "next-auth/server";
import { ROUTES } from "@/constants";
import { redirect } from "next/navigation";

export default async function DashboardSSRPage() {
  const session = await auth();

  if (!session) redirect(ROUTES.HOME);

  return (
    <div className="w-full h-full">
      <div>
        <h1 className="mb-2 font-bold text-3xl md:text-4xl text-gray-800">
          Dashboard
        </h1>
        <p className="mb-6 text-gray-600">Welcome to your user dashboard!</p>
        <DashboardPage userData={mockUserData} />
      </div>
    </div>
  );
}
