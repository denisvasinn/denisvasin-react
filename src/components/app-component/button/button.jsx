import './button.styl';

import React from 'react';
import PropTypes from 'prop-types';
import bevis from 'src/utils/bevis-util';

const b = bevis('button-component');

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderButton() {
        const props = this.props;
        
        return (
            <input
                type={props.type || 'button'}
                value={props.value}
                name={props.name}
                className={b()}
                onClick={props.onClick}
            />
        );
    }

    _renderLink() {
        const props = this.props;
        
        return (
            <a
                href={props.href}
                name={props.name}
                className={b()}
                onClick={props.onClick}
            >
                {props.children || props.value}
            </a>
        );
    }

    render() {
        return this.props.href ? this._renderLink() : this._renderButton();
    }
}

Button.PropTypes = {
    type: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    value: PropTypes.any,
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Button;