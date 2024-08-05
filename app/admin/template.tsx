import MobileNav from "@/components/admin/layouts/mobileNav";
import SideBar from "@/components/admin/layouts/sidebar";
import { BreadcrumbProvider } from "@/providers/breadCrumbsProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <BreadcrumbProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SideBar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <MobileNav />
        </div>
        <div className="m-5 sm:ml-20">{children}</div>
      </div>
    </BreadcrumbProvider>
  );
}
