import React from 'react'
import classes from './PagesSection.module.css'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Button, ButtonGroup } from "shards-react"


const PagesSection = React.memo(props => {

    return (
        <div className={classes.changePageSection}>
            <ButtonGroup>
                {
                    props.pagesList.fill(0).map((elem, index) => {
                        return (
                            <RouterNavLink key={index + 1} to={`/employees/${index + 1}`}>
                                {
                                    props.currentPage === index + 1 ? <Button active disabled theme={'info'}
                                        className={classes.button}
                                        onClick={() => props.setPage(index + 1)}>{index + 1}
                                    </Button>
                                        : <Button outline theme={'info'}
                                            className={classes.button}
                                            onClick={() => props.setPage(index + 1)}>{index + 1}
                                          </Button>
                                }
                            </RouterNavLink>
                        )
                    })
                }
            </ButtonGroup>
        </div>
    )
})

export default PagesSection;
