import React from "react";
import NavLink from "@/components/server/NavLink";
import Image from "next/image";
import Icon from "@assets/icon/logo.jpg"
import Link from "next/link";

export default function Header() {
    return (
        <header id="main-header">
            <div id='logo'>
                <Link href="/">
                    <Image src={Icon} alt="Logo" width={100} height={100} />
                    <h1 className="flex justify-center ">Blog</h1>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/news" name="News" />
                    </li>
                    <li>
                        <NavLink href="/archive" name="Archive" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}