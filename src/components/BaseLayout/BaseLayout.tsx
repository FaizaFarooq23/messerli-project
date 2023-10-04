import React, { ReactNode } from "react";
import Topbar from "../Topbar/Topbar";
import { TopbarProps } from "../../../data/TopbarProps";
import { SidebarProps } from "../../../data/SidebarProps";
import Sidebar from "../Sidebar/Sidebar";

export default function BaseLayout(props: {
  title: String;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="Topbar">
        <Topbar props={TopbarProps} />
      </div>

      <div className="w-full h-full">
        <div className="flex">
          <div className="w-1/6 ">
            <div className="Sidebar fixed h-full border-r-2 border-[#E6EDFF] ">
              <Sidebar componentProps={SidebarProps} />
            </div>
          </div>
          <div className="w-5/6 text-dark">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
