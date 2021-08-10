import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {

    const currentUser = JSON.parse(localStorage.getItem("user"))
    const iniateUser = currentUser ? currentUser : null
    const [user, setUser] = useState(iniateUser);

    const [searchInput, setSearchInput] = useState("")

    return (
        <UserContext.Provider
            value={
                {
                    user: [user, setUser],
                    searchInput: [searchInput, setSearchInput]
                }
            }>
            {props.children}
        </UserContext.Provider>
    );
};