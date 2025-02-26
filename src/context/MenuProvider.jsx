import React, { createContext, useState } from 'react'
export const MenuCotext = createContext();
export const MenuProvider = ({ children}) => {
    const [Open, setOpen] = useState(false);
  return (
      <MenuCotext.Provider value={{Open,setOpen}}>
        {children}
    </MenuCotext.Provider>
  )
}

