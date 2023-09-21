import { BreadCrumbs } from "@/components/breadCrumbs/BreadCrumbs";
import { DateSwitcher } from "@/components/dateSwitcher/DateSwitcher";
import { InfoBlock } from "@/components/infoBlock/InfoBlock";
import { ModeSwitcher } from "@/components/modeSwitcher/ModeSwitcher";
import { MonthResults } from "@/components/monthResults/MonthResults";

export default function Home() {
  return (
    <main>
      <BreadCrumbs page="Аналитика"/>
      <div className="flex justify-between items-center w-full mt-5 relative">
        <InfoBlock about="Баланс" money={20000} color="default"/>
        <ModeSwitcher />
        <InfoBlock about="Прирост за месяц" money={200000} color="plus"/>
      </div>
      <DateSwitcher />
      <MonthResults about="Расход за октябрь 2023г." money={20000}/>
    </main>
  )
}
