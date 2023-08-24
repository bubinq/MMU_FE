import { createContext, useState } from 'react';

export const AgreementsContext = createContext();

export const AgreementsProvider = ({ children }) => {
    const [isAgreed, setIsAgreed] = useState(false);
    
    return (
        <AgreementsContext.Provider value={{ isAgreed, setIsAgreed}}>
            { children }
        </AgreementsContext.Provider>
    )
};
