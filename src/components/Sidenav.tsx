"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { actionLogout, cn } from "@/lib";
import {
  CalendarDays,
  CircleUser,
  Globe,
  Mail,
  MessageCircle,
  NotebookPen,
  Settings,
} from "lucide-react";
import { useCallback, useTransition } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export function SideNav() {
  const { toast } = useToast();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const handleLogout = useCallback(async () => {
    try {
      const res = await actionLogout();
      if (res?.success) {
        toast({ title: "Success", description: res.message });
        startTransition(() => router.push("/"));
      } else if (!res?.success) {
        throw new Error(res?.message);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error)
        toast({
          title: "Error",
          description: error.message as unknown as string,
          variant: "destructive",
        });
    }
  }, [router, toast]);

  return (
    <div className="flex h-full flex-col bg-slate-100 px-3 py-4 md:px-2 justify-between">
      <div>
        <Link
          className="mb-2 flex h-auto bg-black items-center justify-center rounded-md p-4"
          href="/dashboard"
        >
          <Globe color="white" />
          <div className="w-full ml-2 text-white md:w-40">My Dashboard</div>
        </Link>
        <Button onClick={handleLogout} className="block md:hidden w-full">
          <div>Sign Out</div>
        </Button>
      </div>

      <div className="hidden md:flex grow flex-row justify-between space-x-2 mt-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="grid grid-flow-row gap-2">
          <Link
            key="link-email"
            href="/dashboard"
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-medium hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <Mail />
            <p className="hidden md:block">{"Email"}</p>
          </Link>
          <Link
            key="link-chat"
            href="/dashboard"
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-medium hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <MessageCircle />
            <p className="hidden md:block">{"Chat"}</p>
          </Link>
          <Link
            key="link-contact"
            href="/dashboard"
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-medium hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <CircleUser />
            <p className="hidden md:block">{"Contacts"}</p>
          </Link>
          <Link
            key="link-calendar"
            href="/dashboard"
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-medium hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <CalendarDays />
            <p className="hidden md:block">{"Calendar"}</p>
          </Link>
          <Link
            key="link-notes"
            href="/dashboard"
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-medium hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <NotebookPen />
            <p className="hidden md:block">{"Notes"}</p>
          </Link>
          <Link
            key="link-settings"
            href="/dashboard"
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-medium hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <Settings />
            <p className="hidden md:block">{"Settings"}</p>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center h-auto">
          <Button onClick={handleLogout} className="w-full hidden md:block">
            <div>Sign Out</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
