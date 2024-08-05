"use client";

import { useBreadcrumbs } from "@/providers/breadCrumbsProvider";
import { useEffect } from "react";

export default function PropertiesTable() {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([{crumb: "Home", crumbLink: "/admin"}, {crumb: "Properties", crumbLink: "/properties"}]);
  }, [setBreadcrumbs]);
  return <h1>table</h1>;
}
