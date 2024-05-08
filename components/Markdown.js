"use client";

import { useEffect, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import Md from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as allstyles from "react-syntax-highlighter/dist/esm/styles/prism";
import { useToast } from "./ui/use-toast";
import { LuCopy } from "react-icons/lu";
import dynamic from "next/dynamic";
const MdButtons = dynamic(() => import("./MdButtons"), { ssr: true });

export default function Markdown() {
  const [inputText, setInputText] = useState("");
  const { toast } = useToast();
  const [textareaHeight, setTextareaHeight] = useState(384);
  const [selectedStyle, setSelectedStyle] = useState("materialDark"); // Default style
  const handleChangeStyle = (e) => {
    setSelectedStyle(e.target.value);
  };

  const textareaRef = useRef(null);
  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
  };
  const handleCopyClick = () => {
    textareaRef.current.select();
    document.execCommand("copy");
    toast({
      title: "Copied to clipboard",
    });
    window.getSelection().removeAllRanges();
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === textareaRef.current) {
          setTextareaHeight(entry.contentRect.height);
        }
      }
    });
    resizeObserver.observe(textareaRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  const hasCode = inputText.includes("```");
  return (
    <div className="flex flex-col h-full py-5 ">
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-0">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col w-full lg:pr-5 pr-0 h-full relative">
            <Textarea
              placeholder="Type your Markdown here."
              className="w-full h-96 bg-[#0D1117] border-[#30363D]"
              onChange={handleInputChange}
              ref={textareaRef}
              value={inputText}
            />
            <button
              className="absolute top-3 right-14  text-white rounde focus:outline-none"
              onClick={handleCopyClick}
            >
              <LuCopy />
            </button>
            <MdButtons setInputText={setInputText} inputText={inputText} />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col w-full lg:pl-5 pl-0 h-full">
            <div
              className="lg:max-w-[calc(100vw-54vw)] bg-[#0D1117] h-96 overflow-auto rounded-md p-3 border border-[#30363D] markdown"
              style={{ height: textareaHeight + 17.43 }}
            >
              <Md
                remarkPlugins={[remarkGfm]}
                components={{
                  code(props) {
                    const { children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        {...rest}
                        PreTag="div"
                        language={match[1]}
                        style={allstyles[selectedStyle]}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {inputText}
              </Md>
            </div>
            {hasCode&&<div className="flex flex-col justify-between items-center mt-3 md:flex-row">
                <span className="text-white">Select Syntax Highlighter:</span>
                <select
                  value={selectedStyle}
                  onChange={handleChangeStyle}
                  className="bg-gray-800 text-white border-[#30363D] rounded-md px-2 py-1"
                >
                  {Object.keys(allstyles).map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
