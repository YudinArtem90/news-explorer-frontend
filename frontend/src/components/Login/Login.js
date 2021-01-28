import React from 'react';
import ContainerEmail from '../ContainerEmail/ContainerEmail';
import ContainerPassword from '../ContainerPassword/ContainerPassword';

function Login(props){

    const {setDisabled, valueEmail, valuePassword} = props;
    const [ errorEmail, setErrorEmail ] = React.useState(false);
    const [ errorPassword, setErrorPassword ] = React.useState(false);

    React.useEffect(() => {
        validationAll();
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        errorEmail, 
        errorPassword,
        valueEmail,
        valuePassword
    ]);

    const validationAll = () => {
        if(valuePassword !== '' && valueEmail !== ''){
            if(!errorEmail && !errorPassword){
                setDisabled(false);
            }else{
                setDisabled(true);
            }
        }else{
            setDisabled(true);
        }
    }

    return(
        <>
            <ContainerEmail 
                setErrorEmail={setErrorEmail} 
                errorEmail={errorEmail} 
                {...props}
            />
            <ContainerPassword 
                setErrorPassword={setErrorPassword} 
                errorPassword={errorPassword} 
                {...props}
            />
           
        </>
    );
}

export default Login;