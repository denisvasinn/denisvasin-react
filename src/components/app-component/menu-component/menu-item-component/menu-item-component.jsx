import './menu-item-component.styl';

import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import bevis from 'src/utils/bevis-util';

const b = bevis('menu-item-component');

class MenuItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, path} = this.props;

        return (
            <li className={b()}>
                <NavLink exact to={path} activeClassName="active">{name}</NavLink>
            </li>
        );
    }
}

MenuItemComponent.PropTypes = {
    name: PropTypes.string,
    path: PropTypes.string
};

export default MenuItemComponent;