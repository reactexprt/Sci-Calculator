import React from 'react';
import Key from './Key';

const NumberPad = (props) => {
    const keyClick = props.keyClick;
    return (
        <div>
            <div className="keyboard-row">
                <Key className="blue-light" Tag="C" math="clear" keyClick={keyClick} />
                <Key className="blue-light" Tag="⌫" math="delete" keyClick={keyClick} />
                <Key className="blue-light" Tag="%" keyLog="%" math="modulus" keyClick={keyClick} />
                <button className="blue-dark" style={{ fontSize: '18px' }} onClick={props.toggleSideDrawer}>{props.sideDrawerOpen ? 'Show Less' : 'Show More'}</button>
            </div>
            <div className="keyboard-row">
                <Key Tag="7" keyLog="7" math="number" keyClick={keyClick} />
                <Key Tag="8" keyLog="8" math="number" keyClick={keyClick} />
                <Key Tag="9" keyLog="9" math="number" keyClick={keyClick} />
                <Key className="blue-dark" Tag="&divide;" keyLog="&divide;" math="divide" keyClick={keyClick} />
            </div>
            <div className="keyboard-row">
                <Key Tag="4" keyLog="4" math="number" keyClick={keyClick} />
                <Key Tag="5" keyLog="5" math="number" keyClick={keyClick} />
                <Key Tag="6" keyLog="6" math="number" keyClick={keyClick} />
                <Key className="blue-dark" Tag="&times;" keyLog="&times;" math="multiply" keyClick={keyClick} />
            </div>
            <div className="keyboard-row">
                <Key Tag="1" keyLog="1" math="number" keyClick={keyClick} />
                <Key Tag="2" keyLog="2" math="number" keyClick={keyClick} />
                <Key Tag="3" keyLog="3" math="number" keyClick={keyClick} />
                <Key className="blue-dark" Tag="&minus;" keyLog="-" math="subtract" keyClick={keyClick} />
            </div>
            <div className="keyboard-row">
                <Key Tag="." keyLog="." math="comma" keyClick={keyClick} />
                <Key Tag="0" keyLog="0" math="log" keyClick={keyClick} />
                <Key Tag="=" math="equals" keyClick={keyClick} />
                <Key className="blue-dark" Tag="+" keyLog="+" math="sum" keyClick={keyClick} />
            </div>
        </div>
    );
}

export default NumberPad;