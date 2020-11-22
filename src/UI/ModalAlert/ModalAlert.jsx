import React from 'react'
import classes from './ModalAlert.module.css'
import { Alert, Modal, ModalHeader, ModalBody } from "shards-react"


const ModalAlert = props => {
    return (
        <Modal open={props.open} toggle={props.toggle}>
            <ModalHeader>
            </ModalHeader>
            <ModalBody>
                <Alert theme="success" className={classes.alertwidth}>
                    {props.text}
                </Alert>
            </ModalBody>
        </Modal>
    )
}

export default ModalAlert;