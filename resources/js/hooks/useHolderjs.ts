import { useEffect } from "react";
import { run as runHolder } from "holderjs";

export const useHolderjs = () => {
    useEffect(() => {
        runHolder();
    });

    return;
};
