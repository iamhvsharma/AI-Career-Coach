"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const History = () => {
  const [userHistory, setUserHistory] = useState([]);
  return (
    <div className="mt-5 border p-5 rounded-xl">
      <h2 className="font-bold text-lg">Previous History</h2>
      <p className="text-gray-400">You can find your history here.</p>

      {userHistory?.length == 0 && 
        <div className="flex items-center justify-center mt-8 flex-col">
          <Image src={"/file.svg"} alt="bulb" width={50} height={50} />  { /* Change the icon */}
          <h2 className="text-gray-500 text-sm mt-3 ">You don't have any history</h2>
          <Button className="mt-3">Explore AI Tools</Button>
        </div>
      }
    </div>
  );
};

export default History;
