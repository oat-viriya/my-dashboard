import Link from "next/link";
import { Button } from "./ui/button";

export function SideNav() {
  return (
    <div className="flex h-full flex-col bg-slate-100 px-3 py-4 md:px-2 justify-between">
      <Link
        className="mb-2 flex h-20 bg-black items-start justify-center rounded-md p-4 md:h-40"
        href="/dashboard"
      >
        <div className="w-full  text-white md:w-40">My Dashboard</div>
      </Link>
      <Button>
        <div className=" md:block">Sign Out</div>
      </Button>
    </div>
  );
}
