import Header from "@/components/layouts/header";

export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
        <Header />
        <div className="mt-24">
        {children}
        </div>
        </div>
  }