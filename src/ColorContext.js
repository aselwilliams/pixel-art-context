import {createContext, useState} from 'react';

export const ColorContext = createContext();

export const ContextProvider = ({children}) => {
    const [color, setColor] = useState('lightGrey');

    return (
        <ColorContext.Provider value={{color, setColor}}>
            {children}
        </ColorContext.Provider>
    )
}