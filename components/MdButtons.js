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
  const buttons = [
    {
      text: "Clear",
      action: () => setInputText(""),
      icon: <LuTrash />,
    },
    {
      text: "Heading",
      action: () => setInputText(inputText + "\n# Heading"),
      icon: <LuHeading />,
    },
    {
      text: "Bold",
      action: () => setInputText(inputText + " **Bold**"),
      icon: <LuBold />,
    },
    {
      text: "Italic",
      action: () => setInputText(inputText + " _Italic_"),
      icon: <LuItalic />,
    },
    {
      text: "Strikethrough",
      action: () => setInputText(inputText + " ~~Strikethrough~~"),
      icon: <LuStrikethrough />,
    },
    {
      text: "List item",
      action: () => setInputText(inputText + "\n- List item"),
      icon: <LuList />,
    },
    {
      text: "Numbered list item",
      action: () => setInputText(inputText + "\n1. Numbered list item"),
      icon: <LuListOrdered />,
    },
    {
      text: "Todo list item",
      action: () => setInputText(inputText + "\n- [ ] Todo list item"),
      icon: <LuListTodo />,
    },
    {
      text: "Quote",
      action: () => setInputText(inputText + "\n> Quote"),
      icon: <LuQuote />,
    },
    {
      text: "Code block",
      action: () => setInputText(inputText + "\n```js\n// Code block\n```"),
      icon: <LuCode />,
    },
    {
      text: "Link",
      action: () => setInputText(inputText + "\n[Link](https://example.com)"),
      icon: <LuLink />,
    },
    {
      text: "Image",
      action: () =>
        setInputText(
          inputText +
            "\n![Image](https://upload.wikimedia.org/wikipedia/en/c/c6/Pluto_discovery_plates.png)"
        ),
      icon: <LuImage />,
    },
    {
      text: "Table",
      action: () =>
        setInputText(
          inputText +
            "\n| Header 1 | Header 2 |\n| - | - |\n| Cell 1   | Cell 2   |"
        ),
      icon: <LuTable />,
    },
    {
      text: "Horizontal rule",
      action: () => setInputText(inputText + "\n---"),
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
