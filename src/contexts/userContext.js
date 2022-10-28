import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'

const userContext = createContext()

export function UserProvider(props) {

    const [user, setUser] = useState({})

    console.log({user})

    const clearUser = useCallback(() => setUser({}), []);

    const getUser = useMemo(() =>
        ({user, setUser, clearUser}), []);

    return <>
        {
            user ?
                <UserProvider value={"text"}>
                    {props.children}
                </UserProvider> : props.children

        }  </>

}

export const useUserContext = () => useContext(userContext)