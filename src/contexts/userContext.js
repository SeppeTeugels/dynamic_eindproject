import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'

const userContext = createContext()

export function UserProvider(props) {

    const [user, setUser] = useState({})

    console.log({user})

    const clearUser = useCallback(() => setUser({}), []);

    const getUser = useMemo(() =>
        ({user, setUser, clearUser}), []);

    return <userContext.Provider value={"text"}>
        {props.children}
    </userContext.Provider>


}

export const useUserContext = () => useContext(userContext)