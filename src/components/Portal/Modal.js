import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';
import LoginModal from './LoginModal';



const Button_el = {
    border:'none',
    backgroundColor:'gray',
    fontWeight:600,
    color:'white',
    marginLeft:'1em',
    left:'1em',

}



function Modal({ open , children, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal (
        <>
          <div className = {styles.Overlay_Styles}/>
          <div className = {styles.Modal_Styles}>
            
            <LoginModal onClose = {onClose} />
            </div>
            
        </>,
        document.getElementById('portal')
      
    )
}

export default Modal
