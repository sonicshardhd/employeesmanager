import React from 'react'
import classes from './PagesSection.module.css'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Button } from "shards-react"


const PagesSection = React.memo(props => {

    return (
        <div className={ classes.changePageSection }>
            <div>
                {   
                    props.pagesList.fill(0).map((elem, index) => {
                        return (
                            <RouterNavLink to={ `/employees/${index + 1}` }>
                                <Button theme={'info'} 
                                        className={classes.button} 
                                        onClick={ () => props.setPage(index + 1) }>{index + 1}
                                </Button>
                            </RouterNavLink>
                        )
                    })
                }
            </div>
        </div>
    )
})

export default PagesSection;