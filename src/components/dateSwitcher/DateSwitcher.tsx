'use client'
import { useState } from 'react';
import Image from "next/image";
import arrow from '../../../public/monthArrow.svg';

export const DateSwitcher = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Функция для переключения на предыдущий месяц
    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    // Функция для переключения на следующий месяц
    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    // Форматируем текущий месяц в строку (можно использовать библиотеку date-fns для более сложного форматирования)
    const formattedMonth = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });


    return (
        <div className="flex justify-between items-center mt-5 max-w-[320px] mx-auto ">
            <button onClick={goToPreviousMonth}>
                <Image className="w-[30px] h-[30px]" src={arrow} alt="left"/>
            </button>
            <p className="text-2xl text-light-blue font-bold">{formattedMonth}</p>
            <button onClick={goToNextMonth}>
                <Image className="w-[30px] h-[30px] rotate-180" src={arrow} alt="rigth"/>
            </button>
        </div>
    )
}