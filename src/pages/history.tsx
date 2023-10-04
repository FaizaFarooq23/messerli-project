import React, { useState } from 'react'
import BaseLayout from '@/components/BaseLayout/BaseLayout'
import { HistoryProps } from '../../data/HistoryProps';
import HistoryComponent from '@/components/History';


interface Props {
  title: string;
  subtitle: string;
}

export default function Home(props: Props) {
  const [active, setActive] = useState<string>("male");
  return (
    <BaseLayout title={"History"}>
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
        <div className=''>
          <HistoryComponent />

        </div>
      </div>
    </BaseLayout>
  )
}

export const getStaticProps = async () => {
  return {
    props: HistoryProps,
  };
}