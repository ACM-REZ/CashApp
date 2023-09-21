import { useCashFormater } from "@/hooks/useCashFormater"
import { Month } from "./month/Month"

interface InfoMonthProps {
    about: string,
    money: number
}

export const MonthResults = ({ about, money } : InfoMonthProps) => {

    const cashFormated = useCashFormater(money)

    return (
        <div className="mt-3 bg-block-bg w-full py-5 px-8 rounded-[20px]">
            <div>
                <p className="font-regular text-gray-400 text-[18px]">{about}</p>
                <p className={`text-white font-regular text-[28px]`}>{cashFormated} ₽</p>
            </div>
            <Month />
        </div>
    )
}