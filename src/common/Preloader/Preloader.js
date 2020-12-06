import React from 'react'
import classes from './Preloader.module.css'
import preloader from '../../assets/images/preloader.gif'

const Preloader = props => <img className={classes.positionPreloader} src={ preloader } />

export default Preloader;
