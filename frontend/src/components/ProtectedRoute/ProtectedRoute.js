import { Route, Redirect } from 'react-router-dom';
import React from 'react';

function ProtectedRoute({ loggedIn, component: Component, mainThis, ...props}){

    React.useEffect(() => {
        if(!loggedIn){
            props.setShowModal(true);
        }
    });

    return(
        <Route>
        {
            loggedIn ? <Component {...props}/> : <Redirect to="/" />
        }
        </Route>
    );
}

export default  ProtectedRoute;