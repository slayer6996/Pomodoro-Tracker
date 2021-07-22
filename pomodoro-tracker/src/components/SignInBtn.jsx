import React, { useState,useEffect,useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import firebase from '../firebase';
import { LoginContext } from '../Contexts/LoginContext';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#2E2E2E",
        border: 'none',
        borderRadius:'5px',
        boxShadow: theme.shadows[5],
        padding:'1rem',
    },
}));

function SignInBtn() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {auth, setAuth, user, setUser}=useContext(LoginContext)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(userCredentials => {
          if (userCredentials) {
            setUser({
              name: userCredentials.displayName,
              email: userCredentials.email,
              imageUrl: userCredentials.photoURL
            })
            setAuth(true)
            window.localStorage.setItem('auth', 'true')
          }
        })
    }, [])

    function googleLogin(){
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
            userCred => {
                if(userCred){
                    setAuth(true)
                    window.localStorage.setItem('auth','true')
                }
            }
        )
    }

    return (
        <>
            <div>
                <Button style={{backgroundColor:"#1CB0F6", color:"white"}} onClick={handleOpen}>
                    Sign In
                </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <p style={{color:'white'}}>Sign in to track your progress</p>
                            <Button onClick={googleLogin} style={{backgroundColor:"#EA4335",color:"white", margin:"0.5rem"}}>Continue with Google</Button>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}

export default SignInBtn