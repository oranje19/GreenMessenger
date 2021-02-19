import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import "./login.css";
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';
import { GitHub, Language, LinkedIn } from '@material-ui/icons';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
                <div className="login__footer">
                    <IconButton>
                        <a target="_blank" href="https://www.linkedin.com/in/jasonwintery/">
                            <LinkedIn className="login__footer__linkedin" src="https://www.linkedin.com/in/jasonwintery/" />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a target="_blank" href="https://github.com/oranje19">
                            <GitHub className="login__footer__github" src="https://www.linkedin.com/in/jasonwintery/" />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a target="_blank" href="http://www.jasonwintery.com/">
                            <Language className="login__footer__portfolio" src="https://www.linkedin.com/in/jasonwintery/" />
                        </a>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Login;
