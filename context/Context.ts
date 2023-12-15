import { createContext, useContext } from "react";

export interface users {
    name: string,
    isFollowers: Boolean
}  

export const globalData = createContext<users | undefined>(undefined);

export function contextCustom(){
    const context = useContext(globalData);

    if(context === undefined){
        throw new Error ('Ada yang salah ni dengan data user');
        
    }

    return context;
}