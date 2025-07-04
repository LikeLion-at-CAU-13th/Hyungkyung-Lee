import React, { createContext, useContext, useState } from 'react'

export const ModalContext = createContext();

export function ModalProvider({children}) {
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <ModalContext.Provider value={{modalOpen, setModalOpen}}>
        {children}
        </ModalContext.Provider>
    )
}
