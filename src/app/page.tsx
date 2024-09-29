import { LoginForm } from "@/components";
import { ROUTES } from "@/constants";
import { auth } from "next-auth/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) redirect(ROUTES.DASHBOARD);

  return (
    <div className="grid bg-slate-200 grid-rows-[auto_1fr_auto] text-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1">
        <h1 className="text-4xl font-bold">Welcome to Dashboard App</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <section className="flex w-full mt-8 items-center text-left max-sm:text-center justify-center">
          <LoginForm />
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
