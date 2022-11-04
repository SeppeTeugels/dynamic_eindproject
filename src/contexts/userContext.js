import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'

const userContext = createContext()

export function UserProvider(props) {

    const [user, setUser] = useState(null)

    const clearUser = useCallback(() => setUser(null), []);

    const api = useMemo(() =>
        ({user, setUser, clearUser}), [{user, setUser, clearUser}]);

    return <userContext.Provider value={api}>
        {props.children}
    </userContext.Provider>


}

export const useUserContext = () => useContext(userContext)