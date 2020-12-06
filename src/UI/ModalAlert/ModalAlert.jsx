import React from 'react'
import classes from './ModalAlert.module.css'
import { Alert, Modal, ModalHeader, ModalBody } from "shards-react"


const ModalAlert = ({open, toggle, theme, text}) => {
    return (
        <Modal open={open} 
               toggle={toggle}>
            <ModalHeader>
            </ModalHeader>
            <ModalBody>
                <Alert theme={theme}>
                    {text}
                </Alert>
            </ModalBody>
        </Modal>
    )
}

export default ModalAlert;
