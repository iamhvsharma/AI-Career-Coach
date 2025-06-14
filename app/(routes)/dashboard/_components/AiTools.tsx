import { Brain, FileUser, LetterText, MapPinned } from "lucide-react";
import React from "react";
import AiToolsCard from "./AiToolsCard";

const aiToolsList = [
  {
    name: "AI Resume Analyzer",
    desc: "Get insights about your resume",
    icon: "/resume.svg",
    button: "Analyze Now",
    path: "/ai-resume-analyzer",
  },
  {
    name: "Career Roadmap Generator",
    desc: "Build tailored roadmaps.",
    icon: "/career.svg",
    button: "Generate Now",
    path: "/career-roadmap-generator",
  },
  {
    name: "AI Career Q&A Chat",
    desc: "Ask your Career related queries.",
    icon: "/qa.svg",
    button: "Let's Chat",
    path: "/ai-tools/ai-chat",
  },
  {
    name: "Cover Letter Generator",
    desc: "Write a cover letter",
    icon: "cover-letter.svg",
    button: "Create Now",
    path: "/cover-letter-generator",
  },
];

const AiTools = () => {
  return (
    <div className="mt-7 p-5 bg-white border rounded-xl">
      <h2 className="font-bold text-lg">Available AI Tools</h2>
      <p>Start building & Shaping your career with AI Tools</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {aiToolsList.map((tool, index) => (
          <AiToolsCard tool={tool} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AiTools;
