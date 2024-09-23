import React, { createContext, useState } from 'react';
import { generateGibberishName } from './constant';

// Create the PlayerContext
const PlayerContext = createContext();

// Export the context for use in components
export const usePlayerContext = () => {
    return React.useContext(PlayerContext);
};




export const PlayerProvider = ({ children }) => {
    const [playerInfo, setPlayerInfo] = useState({
        name: generateGibberishName(),
        difficulty: "easy",
        isPlay:true
    });

    return (
        <PlayerContext.Provider value={{ playerInfo, setPlayerInfo }}>
            {children}
        </PlayerContext.Provider>
    );
};
