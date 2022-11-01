import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'

const userContext = createContext()

export function UserProvider(props) {

    const [user, setUser] = useState(null)

    const clearUser = useCallback(() => setUser(null), []);

    const Api = useMemo(() =>
        ({user, setUser, clearUser}), []);

    return <userContext.Provider value={Api}>
        {props.children}
    </userContext.Provider>


}

export const useUserContext = () => useContext(userContext)