export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen flex-col overflow-scroll md:flex-row md:overflow-hidden">
      {children}
    </main>
  );
}
