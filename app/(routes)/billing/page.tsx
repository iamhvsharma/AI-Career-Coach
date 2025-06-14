import { PricingTable } from "@clerk/nextjs";
import React from "react";

const Billing = () => {
  return (
    <div className="p-5">
      <div className="mb-5">
        <h2 className="font-bold text-3xl text-center">Choose Your Plan</h2>
        <p className="text-center text-gray-600">
          Select a subscription bundle to get all AI Tools access
        </p>
      </div>
      <div className="">
        <PricingTable />
      </div>
    </div>
  );
};

export default Billing;
