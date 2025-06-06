import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const loggedIn = { firstName: "sapana ", lastName: "Dhami"}
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
