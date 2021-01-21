import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ loggedIn, component: Component, mainThis, ...props}){
    return(
        <Route>
        {
            loggedIn ? <Component {...props}/> : <Redirect to="/" />
        }
        </Route>
    );
}

export default  ProtectedRoute;