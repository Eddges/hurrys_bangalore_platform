import React , {useState} from 'react';
import CouponModal from './CouponModal';


function CouponPortal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <div>
            <p  onClick = {() => setIsOpen(true)} > Offer Zone </p>
        </div>
        <CouponModal open = {isOpen} onClose = {()=> setIsOpen(false)}/>
    </>
    )
}

export default CouponPortal;
