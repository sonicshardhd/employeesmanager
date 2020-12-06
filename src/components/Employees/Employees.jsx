import React, { useState } from 'react'
import classes from './Employees.module.css'
import EmployeesRedirectContainer from './EmployeesRedirectContainer/EmployeesRedirectContainer'
import PagesSection from './PagesSection/PagesSection'
import EmployeeCard from './EmployeeCard/EmployeeCard'
import ModalAlert from '../../UI/ModalAlert/ModalAlert'
import { Button, Modal, ModalBody, ModalHeader, Alert, Row } from 'shards-react'



const Employees = props => {

    const [deleteModal, setDeleteModal] = useState(false);
    const [deletedEmployeeId, setDeletedEmployeeId] = useState(null);
    const [deletedSuccess, setDeletedSuccess] = useState(false);


    const toggleAcceptDeleting = () => {
        setDeleteModal(!deleteModal);
    }

    const toggleDeletedSuccess = () => {
        setDeletedSuccess(!deletedSuccess);
    }


    const getDeletedEmployeeId = (id) => {
        setDeletedEmployeeId(id);
        setDeleteModal(true);
    }

    const deleteEmployee = (id) => {
        props.deleteEmployee(id);
        setDeleteModal(false);
        setDeletedSuccess(!deletedSuccess);
    }

    return (
        <div className={classes.contentContainer}>
            <Modal open={deleteModal} toggle={toggleAcceptDeleting}>
                <ModalHeader></ModalHeader>
                <ModalBody><Alert theme="dark">Are you sure?</Alert>
                    <div className={classes.buttonAlertContainer}>
                        <Button theme='success' onClick={() => deleteEmployee(deletedEmployeeId)}>Confirm</Button>
                        <Button theme='danger' onClick={toggleAcceptDeleting}>Decline</Button>
                    </div>
                </ModalBody>
            </Modal>
            <ModalAlert open={deletedSuccess} toggle={toggleDeletedSuccess} text='Succesfully deleted!' theme='success' />
            <PagesSection pagesList={new Array(props.employeesParts.length)}
                setPage={props.setPage}
                addEmployee={props.addEmployee}
                currentPage={props.currentPage} />
            <div className={classes.employeesSection}>
                {
                    props.employeesParts[props.currentPage - 1]
                        ? props.employeesParts[props.currentPage - 1].map(employee => (
                            <div key={employee.id} className={classes.employeeCard}>
                                <EmployeeCard name={employee.employee_name}
                                    id={employee.id}
                                    getDeletedEmployeeId={getDeletedEmployeeId}
                                />
                            </div>
                        ))
                        : <EmployeesRedirectContainer currentPage={props.currentPage} setPage={props.setPage} />
                }
            </div>
        </div>
    )
}

export default Employees;
