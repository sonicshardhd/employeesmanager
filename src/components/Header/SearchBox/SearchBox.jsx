import React from 'react'
import classes from './SearchBox.module.css'
import { Nav, InputGroup, InputGroupAddon, InputGroupText, FormInput } from "shards-react"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchBox = props => {
    return (
        <Nav navbar className="ml-auto">
            <InputGroup size="sm" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-0" placeholder="Search..." />
            </InputGroup>
          </Nav>      
    )
}

export default SearchBox;