import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Stats from "@/components/Workplace/Stats";
import React, { useState } from "react";
import { ReportingProps } from "../../data/ReportingProps";
import ReportingCards from "@/components/Reporting-cards/ReportingCards";
import { ReportingCardsProps } from "../../data/ReportingCardsProps";
import dynamic from "next/dynamic";
import { BarChartProps } from "../../data/BarChartProps";
import Image from "next/image";

const DynamicBarChart = dynamic(() => import('../components/Charts/BarChart'), {
  ssr: false
});



interface Props {
  title: string;
  subtitle: string;
  stats: {
    figure: string;
    icon: string;
    description: string;
    index: string;
    profit: number;
    flex?: string;
    border: boolean;
    unit: string;
  }[];
}

export default function WorkPlace(props: Props) {
  const [val, setVal] = useState<string>("7 days");
  const [active, setActive] = useState<string>("male");

  return (
    <BaseLayout title={"Work Place"}>
      <div className="w-full">
        <div className="flex flex-col">
          <span className="text-2xl font-inter font-medium">{props.title}</span>

          <div className="flex items-center justify-between mt-1">
            <div>
              <span className="font-inter text-sm text-secondary">
                {props.subtitle}
              </span>
            </div>
            <div className="flex items-center justify-center ">
              <select
                defaultValue={"HOLMES PLACE - Genève"}
                className={`customSelect mr-5  font-poppins`}
              >
                <option>HOLMES PLACE - Genève</option>
              </select>

              <select
                defaultValue={"Vestiaires - homme"}
                className={`customSelect mr-5 font-poppins`}
                onChange={(e) => setActive(e.target.value)}
              >
                <option value={'male'}>Vestiaires - homme</option>
                <option value='female'>Vestiaires - female</option>
                <option value='all'>Vestiaires - global</option>
              </select>

              <select
                defaultValue={"7 derniers jours"}
                className={`customSelect mr-28 font-poppins`}
              >
                <option>Aujourd&apos;hui</option>
                <option>Hier</option>
                <option>7 derniers jours</option>
                <option>15 derniers jours</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-11/12 text-primary justify-evenly rounded-xl border border-[#E6EDFF] py-3 px-5">
          {props.stats.map((stat, index) => (
            <Stats key={index + stat.description} props={stat} />
          ))}
        </div>
        <div className="mt-20 reporting-card mr-[5%]">
          <ReportingCards props={ReportingCardsProps} active={active} />
        </div>
      </div>

      <div className="mt-20 bg-white rounded-[20px] chart py-5 w-2/3 pr-8">

        <div className="flex items-center justify-between ml-16 mb-6">
          <span className="text-xl font-medium text-black font-poppins">
            Affluence heure par heure
          </span>
          <div className="reporting-icons h-11 w-11">
            <Image src={'images/reporting/collaborators.svg'} width={50} height={50} alt="collaborator-image" />
          </div>
        </div>
        <span className="text-[#A0AFC4] text-xs ml-14">
          Douches
        </span>
        <DynamicBarChart props={BarChartProps} val={'24 hours'} />
      </div>
    </BaseLayout>
  );
}

// Serverside props
export async function getServerSideProps() {
  return {
    props: ReportingProps,
  };
}
