import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/" className="w-[60px] h-[60px] bg-slate-200 rounded-full flex justify-center items-center">
            <p className="text-2xl text-black w-[40px] leading-7">
                ЛО
                ГО
            </p>
        </Link>
    )
}