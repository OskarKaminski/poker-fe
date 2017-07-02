import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = (props) => (
    <button className="pr-button"
            onClick={props.onClick}>
        {props.label}
    </button>
)
Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
}