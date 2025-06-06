import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const loggedIn = await getLoggedInUser();
  return (
    <main className="flex h-screen w-full">
        <Sidebar  user = {loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
            <h1 className="text-2xl font-bold">Velora</h1>
        <div>
          <MobileNav user = {loggedIn}/>
        </div>
          </div>
        {children}

        </div>

    </main>
  );
}
