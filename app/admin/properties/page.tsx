import PropertiesTable from "@/components/admin/properties/propertiesData";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Properties() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2 p-2 bg-gray-400 rounded-md">
          <Link
            href={""}
            className="py-1 px-3 bg-white rounded-md shadow-md text-sm"
          >
            All
          </Link>
          <Link
            href={""}
            className="py-1 px-3 bg-gray-400 text-sm rounded-md"
          >
            Active
          </Link>
        </div>
        <div>
          <Button size={"sm"}>
            <PlusIcon /> <span className="ml-2">Add</span>
          </Button>
        </div>
      </div>
      <PropertiesTable />
    </>
  );
}
