import React from 'react';

const Key = props => {
    return (
        <button
            className={props.className}
            onClick={props.keyClick.bind(this, props.keyLog, props.math)}
        >{props.Tag}</button>
    );
}

export default Key;

