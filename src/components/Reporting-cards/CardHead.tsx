import React from 'react'
import Image from "next/image";
export default function CardHead() {
  return (
    <div className="flex w-full items-center justify-between">
    <div className="flex flex-col items-start ">
      <span className="text-2xl font-inter font-medium">
        Visualisation des tickets
      </span>

      <span className="font-inter text-sm text-secondary">
        Retrouvez les interventions du jour
      </span>
    </div>
    <div className="reporting-icons inline">
      <Image
        src="images/reporting/card.svg"
        width={40}
        height={40}
        alt="card"
      />
    </div>
  </div>
  )
}
