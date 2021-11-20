import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const ExpandedState = atom({
  key: "ExpandedState",
  default: false,
});
