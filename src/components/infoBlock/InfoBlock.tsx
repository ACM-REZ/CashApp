import { useCashFormater } from "@/hooks/useCashFormater";

interface InfoBlockProps {
    about: string,
    money: number,
    color: 'default' | 'plus' | 'minus'
}

export const InfoBlock = ( { about, money, color }: InfoBlockProps ) => {
    let styledColor = '';
    
    const cashFormated = useCashFormater(money);

    switch (color) {  //Цвет суммы
        case 'default':
        styledColor = 'text-white';
        break;
        case 'plus':
        styledColor = 'text-light-green';
        break;
        case 'minus':
        styledColor = 'light-red';
        break;
        default:
        break;
    }

    return (
        <div className=" bg-block-bg pl-19 max-w-[220px] w-full pt-[10px] pl-[19px] rounded-[20px]">
            <p className="font-regular text-gray-400 text-[18px]">{about}</p>
            <p className={`${styledColor} font-regular text-[28px]`}>{cashFormated} ₽</p>
        </div>
    )
}