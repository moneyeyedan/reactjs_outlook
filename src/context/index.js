import React, { createContext, useContext } from 'react';


export const AuthUser = createContext({
    user: {},
    setAuth: () => null
});

const AuthProvider = (props) => {
    const { user, setAuth } = useContext(AuthUser);

    return (
        <AuthUser.Provider value={{ user, setAuth }}>
            {props.children}
        </AuthUser.Provider>
    )


}
export default AuthProvider;