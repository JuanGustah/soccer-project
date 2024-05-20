import { buttonGroupKeys } from "@/pages/Details/Details";
import { buttonDefinition } from "./types";

interface IButtonGroupsProps {
  buttons: buttonDefinition[];
  activeButtonKey: buttonGroupKeys;
  stateDispatch: React.Dispatch<React.SetStateAction<buttonGroupKeys>>;
}

export default function ButtonGroup({
  buttons,
  activeButtonKey,
  stateDispatch,
}: IButtonGroupsProps) {
  function changeActiveButton(buttonKey: buttonGroupKeys) {
    if (activeButtonKey !== buttonKey) {
      stateDispatch(buttonKey);
    }
  }

  return (
    <div className="btn-group flex justify-center item-center gap-3 mt-14">
      {buttons.map((buttonDefinition) => {
        const { key, label } = buttonDefinition;
        return (
          <button
            className={`${key === activeButtonKey ? "btn-active" : ""}`}
            onClick={() => {
              changeActiveButton(key);
            }}
            key={key}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
