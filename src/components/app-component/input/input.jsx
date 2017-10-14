import './input.styl';

import React from 'react';
import PropTypes from 'prop-types';
import bevis from 'src/utils/bevis-util';

const b = bevis('input-component');

class Input extends React.Component {
    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBLur = this._onBLur.bind(this);
    }

    _onChange(ev) {
        this.props.onChange(ev.target.value); 
    }

    _onFocus() {
        this.inputView.classList.add('input-focused');
    }

    _onBLur(ev) {
        if (ev.target.value.length === 0) {
            this.inputView.classList.remove('input-focused');
        }
    }

    render() {
        const {type, value, placeholder, hint, name, id = Math.random()} = this.props;

        return (
            <div className={b('', {'input-focused': Boolean(value)})} ref={(ref) => this.inputView = ref}>
                <label className={b('label')} htmlFor={id}>{placeholder}</label>
                <input
                    className={b('input')}
                    id={id}
                    type={type || 'text'}
                    value={value}
                    name={name}
                    onChange={this._onChange}
                    onFocus={this._onFocus}
                    onBlur={this._onBLur}
                />
                {hint ?
                    <p className={b('hint')}>{hint}</p> :
                    null
                }
            </div>
        );
    }
}

Input.PropTypes = {
    type: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.placeholder,
    hint: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Input;