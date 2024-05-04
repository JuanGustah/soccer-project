import { buttonGroupDefinition } from "../types/buttonGroup";

interface IButtonGroupsProps {
  buttonGroupDefinition: buttonGroupDefinition;
  activeLabel: keyof buttonGroupDefinition;
  stateDispatch: React.Dispatch<
    React.SetStateAction<keyof buttonGroupDefinition>
  >;
}

export default function ButtonGroup({
  buttonGroupDefinition,
  activeLabel,
  stateDispatch,
}: IButtonGroupsProps) {
  function changeActiveButton(buttonLabel: string) {
    if (activeLabel !== buttonLabel) {
      stateDispatch(buttonLabel);
    }
  }

  return (
    <div className="btn-group flex justify-center item-center gap-3 mt-14">
      {Object.keys(buttonGroupDefinition).map((buttonTag) => {
        return (
          <button
            className={`${activeLabel === buttonTag ? "btn-active" : ""}`}
            onClick={() => {
              changeActiveButton(buttonTag);
            }}
            key={buttonTag}
          >
            {buttonGroupDefinition[buttonTag].label}
          </button>
        );
      })}
    </div>
  );
}
