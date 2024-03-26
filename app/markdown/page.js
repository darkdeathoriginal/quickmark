import Markdown from "@/components/Markdown";

export const metadata = {
    title: "QuickMark-Markdown Editor",
    description: "Markdown editor for creating and editing markdown files, with syntax highlighting and live preview.",
  };

export default function Page(){
    return <div className="h-screen">
        <Markdown/>
    </div>
}