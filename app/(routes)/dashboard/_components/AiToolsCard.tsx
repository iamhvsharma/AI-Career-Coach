import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export interface ITool {
  name: string;
  desc: string;
  icon: string;
  button: string;
  path: string;
}

export type AIToolsProps = {
  tool: ITool;
};

const AiToolsCard = ({ tool }: AIToolsProps) => {
  return (
    <div className="p-3 border rounded-lg">
      {/* <Image src={tool.icon} width={40} height={40} alt={tool.name} />  */}
      <h2 className="font-medium mt-2">{tool.name}</h2>
      <p className="text-gray-400">{tool.desc}</p>
      <Link href={tool.path}>
        <Button className="w-full mt-3">{tool.button}</Button>
      </Link>
    </div>
  );
};

export default AiToolsCard;
