import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {

    var currentUser = null
    try {
        currentUser = JSON.parse(localStorage.getItem("user"))
    } catch (e) {

    }
    const iniateUser = currentUser ? currentUser : null
    const [user, setUser] = useState(iniateUser);

    return (
        <UserContext.Provider
            value={
                { user: [user, setUser] }
            }>
            {props.children}
        </UserContext.Provider>
    );
};