import './menu-logo-component.styl';

import React from 'react';
import bevis from 'src/utils/bevis-util';

const b = bevis('menu-logo-component');

class MenuLogoComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <a className={b()} href="/">Denis Vasin</a>;
    }
}

export default MenuLogoComponent;