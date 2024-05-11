"use client";

import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse gap-y-8 justify-between font-semibold text-teal-600">
      <Link href={"/#introduction"} className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/profile.png" />
          <AvatarFallback>KS</AvatarFallback>
        </Avatar>
        <p className="text-xl hover:underline underline-offset-4">
          Kusuma Sandi
        </p>
      </Link>
      <div className="flex gap-5 mt-2 text-base justify-end">
        <Link className="hover:underline underline-offset-4" href={"/#project"}>
          Project
        </Link>
        <Link className="hover:underline underline-offset-4" href={"/#blog"}>
          Blog
        </Link>
        <Link className="hover:underline underline-offset-4" href={"/#contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
