"use client";

import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between font-medium">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/profile.png" />
          <AvatarFallback>KS</AvatarFallback>
        </Avatar>
        <p className="text-xl">Kusuma Sandi</p>
      </div>
      <div className="flex gap-5 mt-2">
        <Link href={"#project"}>Project</Link>
        <Link href={"#blog"}>Blog</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
