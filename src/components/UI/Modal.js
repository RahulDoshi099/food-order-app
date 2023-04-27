import React from 'react';
import { Fragment } from 'react';
import classes from "./Modal.module.css"
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    
    return <div className={classes.backdrop} onClick={props.onClose } />
}

const Modalovarlay = (props) => {
    return (
        <div className={classes.modal}>
        <div className={classes.content} > {props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('ovarlays');

const Modal= (props) => {
    return (
    <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
    {ReactDOM.createPortal(<Modalovarlay>{props.children}</Modalovarlay>,portalElement)}
    </Fragment>
    );

};

export default Modal;

