import BaseLayout from "@/components/BaseLayout/BaseLayout";
import React from "react";

export default function parameters() {
  return (
    <BaseLayout title={"Parameters"}>
      <div className="flex flex-col items-start ">
        <span className="text-2xl font-inter font-medium">Paramètres</span>

        <span className="font-inter text-sm text-secondary">
          Configurez votre installation
        </span>
      </div>
      <div className="flex items-start gap-44 w-full">
        <div className="flex flex-col items-start mt-10">
          <span className="text-xl font-inter font-medium text-[#1D51AB]">
            Seuil d’intervention
          </span>
          <span className="font-inter text-sm text-secondary">
            Sélectionnez le seuil à partir duquel une intervention est requise
          </span>
          <div className="flex items-start mt-8">
            <span className="text-sm font-inter font-medium">
              Douches homme :
            </span>
            <select className="w-16 font-medium -mt-1.5 mx-3 h-8 customSelect">
              <option>12</option>
              <option>20</option>
              <option>30</option>
            </select>
            <span className="text-sm font-inter font-medium">passages</span>
          </div>
          <div className="flex items-start mt-5">
            <span className="text-sm font-inter font-medium">
              Douches femme :
            </span>
            <select className="w-16 font-medium -mt-1.5 mx-3 h-8 customSelect">
              <option>12</option>
              <option>20</option>
              <option>30</option>
            </select>
            <span className="text-sm font-inter font-medium">passages</span>
          </div>
          <div className="flex items-start font-poppins parameter-button text-white mt-12">
            <button className="px-10 py-1">Enregistrer les changements</button>
          </div>
        </div>
        <div className="flex flex-col w-[50%] items-start mt-10">
          <span className="text-xl font-inter font-medium text-[#1D51AB]">
            Alerte
          </span>
          <span className="font-inter text-sm text-secondary">
            Sélectionnez le canal d’alerte que vous souhaitez
          </span>
          <div className="flex w-full items-start mt-8">
            <span className="text-sm w-[10%] font-inter font-medium">
              SMS :
            </span>
            <input
              type="text"
              className="w-[60%] parameter-input inline-flex -mt-2 px-2 py-1"
              placeholder=" Entrez un numéro de téléphone portable"
            />
          </div>
          <div className="flex w-full items-start mt-5">
            <span className="text-sm w-[10%] font-inter font-medium">
              Email :
            </span>
            <input
              type="text"
              className="w-[60%] parameter-input inline-flex -mt-2 px-2 py-1"
              placeholder=" Entrez un email valide"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
