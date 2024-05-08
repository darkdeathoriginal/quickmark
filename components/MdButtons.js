import {
  LuHeading,
  LuBold,
  LuItalic,
  LuStrikethrough,
  LuTrash,
  LuList,
  LuListOrdered,
  LuListTodo,
  LuQuote,
  LuCode,
  LuLink,
  LuImage,
  LuTable,
  LuCopy,
} from "react-icons/lu";
import { GoHorizontalRule } from "react-icons/go";
export default function MdButtons({ setInputText,inputText }) {
  const insertTextAtCursor = (text,prefix,postfix) => {
    const textarea = document.querySelector("textarea");
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const scrollTop = textarea.scrollTop;
    if(startPos === endPos || !(prefix || postfix)){
    textarea.value =
      textarea.value.substring(0, startPos) +
      text +
      textarea.value.substring(endPos, textarea.value.length);
      textarea.selectionStart = startPos;
      textarea.selectionEnd = startPos + text.length;
    }
    else{
      textarea.value =
      textarea.value.substring(0, startPos) +
      prefix + textarea.value.substring(startPos, endPos) + postfix +
      textarea.value.substring(endPos, textarea.value.length);
      textarea.selectionStart = startPos;
      textarea.selectionEnd = startPos + prefix.length + endPos - startPos + postfix.length;
    }
    textarea.focus();
    setInputText(textarea.value);
    textarea.scrollTop = scrollTop;
  };



  const buttons = [
    {
      text: "Clear",
      action: () => setInputText(""),
      icon: <LuTrash />,
    },
    {
      text: "Heading",
      action: () => insertTextAtCursor( "# Heading\n", "# ", ""),
      icon: <LuHeading />,
    },
    {
      text: "Bold",
      action: () => insertTextAtCursor( " **Bold**","**", "**"),
      icon: <LuBold />,
    },
    {
      text: "Italic",
      action: () => insertTextAtCursor( " _Italic_", "_", "_"),
      icon: <LuItalic />,
    },
    {
      text: "Strikethrough",
      action: () => insertTextAtCursor( " ~~Strikethrough~~", "~~", "~~"),
      icon: <LuStrikethrough />,
    },
    {
      text: "List item",
      action: () => insertTextAtCursor( "\n- List item", "- " , ""),
      icon: <LuList />,
    },
    {
      text: "Numbered list item",
      action: () => insertTextAtCursor( "\n1. Numbered list item", "1. ", ""),
      icon: <LuListOrdered />,
    },
    {
      text: "Todo list item",
      action: () => insertTextAtCursor( "\n- [ ] Todo list item", "- [ ] " , ""),
      icon: <LuListTodo />,
    },
    {
      text: "Quote",
      action: () => insertTextAtCursor( "\n> Quote", "> " , ""),
      icon: <LuQuote />,
    },
    {
      text: "Code block",
      action: () => insertTextAtCursor( "\n```js\n// Code block\n```", "```js\n", "\n```"),
      icon: <LuCode />,
    },
    {
      text: "Link",
      action: () => insertTextAtCursor( "\n[Link](https://example.com)", "[", "](https://example.com)"),
      icon: <LuLink />,
    },
    {
      text: "Image",
      action: () =>
        insertTextAtCursor(
          
            "\n![Image](https://upload.wikimedia.org/wikipedia/en/c/c6/Pluto_discovery_plates.png)"
        ),
      icon: <LuImage />,
    },
    {
      text: "Table",
      action: () =>
        insertTextAtCursor(
          
            "\n| Header 1 | Header 2 |\n| - | - |\n| Cell 1   | Cell 2   |"
        ),
      icon: <LuTable />,
    },
    {
      text: "Horizontal rule",
      action: () => insertTextAtCursor( "\n---"),
      icon: <GoHorizontalRule />,
    },
  ];
  return (
    <div className="flex gap-1 flex-wrap ">
      {buttons.map((button) => (
        <button
          className="hover:bg-[#30363D] text-white px-4 py-2 rounded-md mt-2 tooltip-container"
          onClick={button.action}
          key={button.text}
        >
          {button.icon}
          <span className="tooltip text-nowrap font-light text-sm">{button.text}</span>
        </button>
      ))}
    </div>
  );
}
