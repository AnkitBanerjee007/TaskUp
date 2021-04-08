import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react'

const Header = (props) => {

    const onClick = () => {
        console.log('Clicked')
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button text={props.showAdd ? 'Done' : 'Add'} color={props.showAdd ? 'red' : 'green'}  onClick = {props.onAdd}/>
        </header>
    )
}

//Creating Objects

//Object to set default values to the components
Header.defaultProps = {
    title: 'TaskTracker',
}

//Object to set the type of values of a Component
Header.propTypes = {
    title: PropTypes.string,
}

export default Header
