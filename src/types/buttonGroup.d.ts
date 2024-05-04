import { ReactElement } from "react";

export declare type buttonGroupDefinition = {
  [key: string]: {
    label: string;
    contentControl: ReactElement;
    contentClassname?: string;
  };
};
