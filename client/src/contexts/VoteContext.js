import { createContext, useState, useContext } from 'react';

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
    const [options, setOptions] = useState({ unix: 0, windows: 0, macos: 0 });

    const setVote = (vote) => {
        let clonedOptions = { ...options };
        clonedOptions[vote] += 1;
        setOptions(clonedOptions);
    }

    const values = {
        options,
        setOptions,
        setVote
    };

    return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);