import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'

const userContext = createContext()

export function UserProvider(props) {

    const [user, setUser] = useState(null)

    console.log({user})

    const clearUser = useCallback(() => setUser(null), []);

    const getUser = useMemo(() =>
        ({user, setUser, clearUser}), [{user, setUser, clearUser}]);

    return <userContext.Provider value={getUser}>
        {props.children}
    </userContext.Provider>


}

export const useUserContext = () => useContext(userContext)