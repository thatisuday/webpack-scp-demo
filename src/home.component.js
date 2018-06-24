// home.component.js
import React from 'react';

import HelloComponent from './hello.component';

const HomeComponent = ( props ) => {
    return (
        <h1>Home Component! <HelloComponent /></h1>
    );
}

export default HomeComponent;