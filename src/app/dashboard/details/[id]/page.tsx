import { auth } from "next-auth/server";
import { ROUTES } from "@/constants";
import { notFound, redirect } from "next/navigation";
import UserDetailPage from "./details.page";
import { mockUserData } from "@/data";

export default async function UserDetailSSRPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const userData = mockUserData.find((entry) => entry.id === Number(id));

  const session = await auth();

  if (!userData) return notFound();

  if (!session) redirect(ROUTES.HOME);

  return (
    <div className="w-full h-full">
      <div className="max-w-5xl ">
        <h1 className="mb-2 font-bold text-3xl md:text-4xl text-gray-800">
          User Details
        </h1>
        <p className="mb-6 text-gray-600">Welcome to the user details page!</p>
        <UserDetailPage userData={userData} />
      </div>
    </div>
  );
}
