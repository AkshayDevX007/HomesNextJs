"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadCrumbProps, useBreadcrumbs } from "@/providers/breadCrumbsProvider";

export default function AdminHeader() {
    const { breadcrumbs } = useBreadcrumbs();
    console.log(breadcrumbs, "bread")
  return (
    <>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
        {breadcrumbs && breadcrumbs.map((bread: BreadCrumbProps, index) => (
            <>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
             {index < breadcrumbs.length-1 ? <Link href={bread.crumbLink}>{bread.crumb}</Link> : <BreadcrumbPage>{bread.crumb}</BreadcrumbPage>} 
            </BreadcrumbLink>
          </BreadcrumbItem>
          {index < breadcrumbs.length-1 ? <BreadcrumbSeparator /> : null}
          </>
        ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <Image
              src="/placeholder-user.jpg"
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
