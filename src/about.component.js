// about.component.js
import React from 'react';

import HelloComponent from './hello.component';

const AboutComponent = ( props ) => {
    return (
        <h1>About Component! <HelloComponent /></h1>
    );
}

export default AboutComponent;