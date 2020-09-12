import React , {useState} from 'react';
import Modal from './Modal';

const Button_Wrapper_Styles = {
    position: 'relative',
    zIndex:1,
    height: '50px',
    margin: '0px',
    backgroundColor: '#97d700',
    border: 'none',
    color: '#fff',
    textShadow : '0px 0px 5px rgba(0, 0, 0, 0.417)',
    width: '170px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    fontWeight:'900'
}

const Button_el = {
    height:'40px',
    width:'130px',
    border:'none',
    backgroundColor:'white',
    fontWeight:600,
    color: '#0075f6',
    marginLeft:'1em'

}

const Other_Content_Styles = {
    position: 'relative',
    zIndex: 2,
    backgroundColor:'red',
    padding:'10px'
}

function Portal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <div>
            <p  onClick = {() => setIsOpen(true)} >Login</p>
        </div>
        <Modal open = {isOpen} onClose = {()=> setIsOpen(false)}/>
    </>
    )
}

export default Portal
