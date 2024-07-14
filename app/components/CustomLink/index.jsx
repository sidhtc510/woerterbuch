import Link from 'next/link';
import React from 'react'

export default function CustomLink({ children, className, href, ...props }) {
    const buttonStyle = "w-fit flex items-center gap-1 pointer-events-auto text-md text-indigo-600 leading-5 cursor-pointer select-none m-3 underline";

    props["className"] = [buttonStyle, className].join(" ");

    return <Link href={href} {...props}>{children}</Link>
}
