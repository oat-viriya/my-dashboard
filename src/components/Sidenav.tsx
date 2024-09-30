"use client";
import Link from "next/link";
import { Button } from "./ui/Button";
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
import { useRouter, usePathname } from "next/navigation";

export function SideNav() {
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();

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

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  return (
    <div className="flex h-full flex-col bg-slate-100 px-3 py-4 md:px-2 justify-between">
      <div>
        <Link
          className="mb-2 flex h-auto bg-black items-center justify-center rounded-md p-4 hover:bg-gray-700"
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
          {/* Email Link */}
          <Link
            key="link-email"
            href="/dashboard"
            className={cn(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium",
              isActive("/dashboard/email")
                ? "bg-slate-500 text-white"
                : "bg-gray-300 hover:bg-slate-500 hover:text-white",
              "md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <Mail />
            <p className="hidden md:block">Email</p>
          </Link>
          {/* Chat Link */}
          <Link
            key="link-chat"
            href="/dashboard"
            className={cn(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium",
              isActive("/dashboard/chat")
                ? "bg-slate-500 text-white"
                : "bg-gray-300 hover:bg-slate-500 hover:text-white",
              "md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <MessageCircle />
            <p className="hidden md:block">Chat</p>
          </Link>
          {/* Contacts Link */}
          <Link
            key="link-contact"
            href="/dashboard"
            className={cn(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium",
              isActive("/dashboard/contacts")
                ? "bg-slate-500 text-white"
                : "bg-gray-300 hover:bg-slate-500 hover:text-white",
              "md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <CircleUser />
            <p className="hidden md:block">Contacts</p>
          </Link>
          {/* Calendar Link */}
          <Link
            key="link-calendar"
            href="/dashboard"
            className={cn(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium",
              isActive("/dashboard/calendar")
                ? "bg-slate-500 text-white"
                : "bg-gray-300 hover:bg-slate-500 hover:text-white",
              "md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <CalendarDays />
            <p className="hidden md:block">Calendar</p>
          </Link>
          {/* Notes Link */}
          <Link
            key="link-notes"
            href="/dashboard"
            className={cn(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium",
              isActive("/dashboard/notes")
                ? "bg-slate-500 text-white"
                : "bg-gray-300 hover:bg-slate-500 hover:text-white",
              "md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <NotebookPen />
            <p className="hidden md:block">Notes</p>
          </Link>
          {/* Settings Link */}
          <Link
            key="link-settings"
            href="/dashboard"
            className={cn(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium",
              isActive("/dashboard/settings")
                ? "bg-slate-500 text-white"
                : "bg-gray-300 hover:bg-slate-500 hover:text-white",
              "md:flex-none md:justify-start md:p-2 md:px-3"
            )}
          >
            <Settings />
            <p className="hidden md:block">Settings</p>
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
