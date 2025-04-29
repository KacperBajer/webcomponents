"use client";
import { sizeOptions } from "@/lib/constants";
import React, { ReactNode, useState } from "react";
import Header from "./reusable/Header";
import IframeRenderer from "./IFrameRenderer";

const sizeWidths: Record<"laptop" | "tablet" | "phone", string> = {
  laptop: "100%",
  tablet: "768px",
  phone: "375px",
};

const ComponentOverlay = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<"laptop" | "tablet" | "phone">("laptop");

  return (
    <div className="border border-[#1A1A1A] rounded-t-md">
      <div className="bg-[#0D0D0D] rounded-t-md">
        <div className="mx-auto w-fit text-white flex gap-2 px-4 py-1.5">
          {sizeOptions.map((item, index) => (
            <button
              onClick={() =>
                setSize(item.size as "laptop" | "tablet" | "phone")
              }
              key={index}
              className={`p-2 text-sm rounded-md transition-all duration-300 ${
                size === item.size ? "bg-blue-600" : "bg-[#000]"
              } hover:cursor-pointer`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
      <div
        className="mx-auto transition-all duration-300 relative"
        style={{ width: sizeWidths[size] }}
      >
        <IframeRenderer width="100%" height="300px">
          {children}
        </IframeRenderer>
      </div>
    </div>
  );
};

export default ComponentOverlay;
