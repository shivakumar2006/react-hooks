import { createContext } from 'react'; 

export const BioContext = createContext();

export const BioProvider = ({ children }) => {

    const myName = "Shiva";
    const myAge = 19;
    console.log("children : ", children);

    return (
        <BioContext.Provider value={{ myName, myAge }}>
            {children}
        </BioContext.Provider>
    )
};

