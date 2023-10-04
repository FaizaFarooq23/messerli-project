import React, {useState} from "react";
import { ReportingCardsProps } from "../../../data/ReportingCardsProps";
import CardHead from "./CardHead";
import Image from "next/image";
interface Props {
  cards: {
    Time: string;
    date: string;
    title: string;
    subtitle: string;
    status: string;
  }[];
}

export default function ReportingCards({ props, active }: { props: Props, active: string }) {






  return (
    <div className=" flex flex-col items-start p-4 justify-between w-full">
      <CardHead />
      <div className="flex items-center justify-between w-full">
        <div className="flex w-[30%] flex-col items-start justify-start mt-6">
          {props.cards.map((card, index) => (
            <div key={index} className="flex w-full items-start justify-center ">
              <div className="flex flex-col items-start mt-2 mr-2.5">
                {" "}
                <span className=" font-inter text-xs text-[#A0AFC4]">
                  {card.Time}
                </span>
                <span className=" font-inter text-xs text-[#A0AFC4]">
                  {card.date}
                </span>
              </div>
              <div
                className={`flex flex-col items-start w-full justify-between rounded-[10px] p-4 mb-3`}
                style={
                  card.status === "unclean"
                    ? { backgroundColor: "#FF3B30" }
                    : card.status === "clean"
                    ? { backgroundColor: "#34C759" }
                    : { backgroundColor: "#FF9500" }
                }
              >
                <span className="text-sm font-medium font-inter text-[#FDFDFD]">
                  {card.title}
                </span>
                <span className="font-inter text-sm text-[#FDFDFD]">
                  Douches - homme - {card.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
                
          <Image
            className="mr-8 mt-8"
            src={active==='male'? '/images/reporting/male-map.svg': active==='female'? '/images/reporting/female-map.svg':'/images/reporting/global-map.svg'}
            alt="map"
            height={800}
            width={700}
          />
        </div>
       
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  return {
    props: ReportingCardsProps,
  };
}
