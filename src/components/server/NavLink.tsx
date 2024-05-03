

import Link from "next/link"



interface NavLinkProps {
    href: string;
    name: string
}
export default function NavLink({ href, name }: NavLinkProps) {


    return (
        <Link href={href}>{name}</Link>
    )
}