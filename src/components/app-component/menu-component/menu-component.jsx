import './menu-component.styl';

import React from 'react';
import bevis from 'src/utils/bevis-util';
import MenuLogoComponent from 'src/components/app-component/menu-component/menu-logo-component/menu-logo-component';
import MenuItemComponent from 'src/components/app-component/menu-component/menu-item-component/menu-item-component';

const b = bevis('menu-component');
const menuItems = [
    {
        name: 'About',
        path: '/'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Mail to',
        path: '/mailto'
    },
    {
        name: 'Diary',
        path: '/diary'
    }
];

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={b()}>
                <MenuLogoComponent />
                <ul className={b('menu')}>
                    {menuItems.map((menuItem, i) => 
                        <MenuItemComponent key={i} name={menuItem.name} path={menuItem.path} />
                    )}
                </ul>
            </nav>
        );
    }
}

export default MenuComponent;