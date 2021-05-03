import React from 'react';

import NumberPad from './NumberPad';
import ScientificOperators from './ScientificOperators';

const Keyboard = props => {
    return (
        <div>
            <NumberPad
                keyClick={props.keyClick}
                toggleSideDrawer={props.toggleSideDrawer}
                sideDrawerOpen={props.sideDrawerOpen}
            />
            <ScientificOperators
                keyClick={props.keyClick}
                sideDrawerOpen={props.sideDrawerOpen}
            />
        </div>
    );
}

export default Keyboard;