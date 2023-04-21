import { atom } from "recoil";

export const currentUserNameState = atom({
    key: "currentUserName",
    default: ""
});