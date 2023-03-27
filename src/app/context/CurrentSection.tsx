'use client';
import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
type CurrentSectionT = {
    section: string | undefined,
    setSection: Dispatch<SetStateAction<string | undefined>>
}
export const CurrentSection = createContext<CurrentSectionT>({} as CurrentSectionT);
type props = {
    children: ReactNode
}

function CurrentSectionContext({children}: props) {
    const [section, setSection] = useState<string>();

    return (
        <CurrentSection.Provider value={{section, setSection}}>
            {children}
        </CurrentSection.Provider>
    );
}

export default CurrentSectionContext;