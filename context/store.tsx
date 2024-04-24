'use client';

import { Dispatch, SetStateAction, createContext, useState } from "react";

type ContextProps = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

const AppContext = createContext<ContextProps>({page: 1, setPage: (): number => 1});

export default AppContext;

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const [page, setPage] = useState<number>(1)

    return (
    <AppContext.Provider value={{page, setPage}}>
        {children}
    </AppContext.Provider>
    )
}
