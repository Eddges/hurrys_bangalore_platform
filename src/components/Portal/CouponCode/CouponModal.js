import React from 'react';
import ReactDom from 'react-dom';
import styles from '../modal.module.css';
import CouponContent from './CouponContent';



function CouponModal({ open , onClose}) {
    if(!open) return null;

    return ReactDom.createPortal (
        <>
          <div className = {styles.Overlay_Styles}/>
          <div className = {styles.Modal_Styles}>
            
            <CouponContent onClose = {onClose} />
            </div>
            
        </>,
        document.getElementById('portal')
      
    )
}

export default CouponModal;
