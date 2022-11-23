'use client'

import Link from "next/link";
export default function Btn({link, text}){
    return(
        <Link href={`/${link}`} className="rounded-lg border-2 text-white p-2 font-bold py-2.5 px-4">{text}</Link>
    )
}