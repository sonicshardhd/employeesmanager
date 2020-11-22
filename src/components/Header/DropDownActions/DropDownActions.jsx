import React, { useState } from 'react'
import classes from './DropDownActions.module.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "shards-react"


const DropDownActions = props => {

    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(prevdropdown => !prevdropdown)
    }

    return (
        <Dropdown
            open={dropdown}
            toggle={toggleDropdown}
        >
            <DropdownToggle nav caret>
                Actions
              </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={props.newEmployeeToggler}>1. Add new employee</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropDownActions;