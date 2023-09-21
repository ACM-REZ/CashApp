export const Month= () => {
    const monthObj = [
        {
            name: 'Январь',
            money: 10000
        },
        {
            name: 'Февраль',
            money: 8000
        },
        {
            name: 'Март',
            money: 5000
        },
        {
            name: 'Апрель',
            money: 11000
        },
        {
            name: 'Май',
            money: 20000
        },
        {
            name: 'Июнь',
            money: 9000
        },
        {
            name: 'Июль',
            money: 15000
        },
        {
            name: 'Август',
            money: 18000
        },
        {
            name: 'Сентябрь',
            money: 13000
        },
        {
            name: 'Октябрь',
            money: 20000
        },
        {
            name: 'Ноябрь',
            money: 10000
        },
        {
            name: 'Декабрь',
            money: 18000
        }
    ]

    let maxH = 200,
        maxTotal = 0,
        maxIndex = ''

    for (let month of monthObj) {
        if (maxTotal < month.money) {
            maxTotal = month.money;
            maxIndex = month.name;
        }
    }

    return (
        <div className="mt-8 flex justify-between items-end gap-[25px]">
            {
                monthObj.map((month) => {
                    return (
                        <div key={month.name} className="flex flex-col items-center gap-[5px]">
                            <div 
                                className={`${month.name === maxIndex ? 'bg-light-blue' : 'bg-grey'} w-[40px] min-h-[20px] max-h-[200px] rounded-[15px]`} 
                                style={{height: 
                                    `${
                                        month.name === maxIndex 
                                        ? '200px' 
                                        : `${Math.round((month.money / maxTotal) * 200)}px`
                                    }`
                                }}
                            />
                            <p className="font-bold text-gray-400 text-2xl">{month.name[0]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}