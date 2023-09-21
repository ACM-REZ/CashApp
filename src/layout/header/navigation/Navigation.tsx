import Link from "next/link"

export const Navigation = () => {

    const LinkStyle = 'font-regular text-sm hover:font-bold ease-in-out duration-200';

    return (
        <ul className="flex justify-between max-w-[420px] w-full">
            <Link href="/" className={LinkStyle}>Аналитика</Link>
            <Link href="/add" className={LinkStyle}>Добавить</Link>
            <Link href="/history" className={LinkStyle}>История</Link>
            <Link href="/category" className={LinkStyle}>Категории</Link>
        </ul>
    )
}