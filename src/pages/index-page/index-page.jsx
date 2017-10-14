import './index-page.styl';

import React from 'react';
import ReactDom from 'react-dom';
import AppComponent from 'src/components/app-component/app-component';

(function () {
    ReactDom.render(
        React.createElement(AppComponent),
        document.getElementById('root')
    );
}());