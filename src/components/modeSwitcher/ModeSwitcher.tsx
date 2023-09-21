'use client'
import { useState } from "react";

export const ModeSwitcher = () => {

    const StyledButton = "text-xl font-bold z-20 w-full text-center";
    const [isIncome, setIsIncome] = useState(true);

    return (
        <div className="max-w-[360px] w-full relative bg-grey flex justify-between items-center h-[50px] rounded-[20px]">
            <div className={`w-[50%] h-[50px] absolute bg-light-grey rounded-[20px] z-10 top-0 duration-200 ${isIncome ? 'left-0' : 'left-[50%]'}`}></div>
            <button 
                className={StyledButton}
                onClick={() => setIsIncome(true)}
            >Доход</button>
            <button 
                className={StyledButton}
                onClick={() => setIsIncome(false)}
            >Расход</button>
        </div>
    )
}