import React from 'react';
import Key from './Key';

const ScientificOperators = props => {
    // for better readability of Key components - shorter lines
    const keyClick = props.keyClick;
    const x = <span>&#x1D4B3;</span>;
    const e = <span>e</span>;
    const Y = <span>Y</span>;
    const inv = <sup>-1</sup>;
    const pow2 = <sup>2</sup>;
    const nd = <sup>nd</sup>
    const powy = <sup>y</sup>
    const powx = <sup>x</sup>
    const log = <span>log</span>

    return (
        <div>
            {props.sideDrawerOpen ?
                <div>
                    <div className="keyboard-row">
                        <Key className="sci-operators" Tag="(" keyLog="(" math="prnths" keyClick={keyClick} />
                        <Key className="sci-operators" Tag=")" keyLog=")" math="prnths" keyClick={keyClick} />
                        <Key className="sci-operators" Tag="MC" math="log" keyClick={keyClick} />
                        <Key className="sci-operators" Tag="M+" math="log" keyClick={keyClick} />
                        <Key className="sci-operators" Tag="M-" math="log" keyClick={keyClick} />
                        <Key className="sci-operators" Tag="MR" math="log" keyClick={keyClick} />
                    </div>
                    <div className="keyboard-row">
                        <Key className="sci-operators" Tag={[2, nd]} math="power" keyClick={keyClick} />
                        <Key className="sci-operators" Tag={[2, powx]} math="power" keyClick={keyClick} />
                        <Key className="sci-operators" Tag={[x, powy]} math="power" keyClick={keyClick} />
                        <Key className="sci-operators" Tag={[x, pow2]} keyLog="^2" math="sqr" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="e" Tag="e" math="log" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog={[e, powx]} Tag={[e, powx]} math="log" keyClick={keyClick} />
                    </div>
                    <div className="keyboard-row">
                        <Key className="sci-operators" keyLog="1/" Tag="1/X" math="divide" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="" Tag="X!" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" Tag="&radic;" keyLog="&radic;(" math="sqrt" keyClick={keyClick} />
                        <Key className="sci-operators" Tag={[x, inv]} keyLog="^-1" math="inv" keyClick={keyClick} />
                        <Key className="sci-operators" Tag="&Pi;" keyLog="&Pi;" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" Tag="ln" keyLog="ln(" math="log" keyClick={keyClick} />
                    </div>
                    <div className="keyboard-row">
                        <Key className="sci-operators" keyLog="Rand(" Tag="Rand" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="tan(" Tag="tan" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="sin(" Tag="sin" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="cos(" Tag="cos" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="" Tag={[Y, powx]} math="log" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="" Tag={[10, powx]} math="log" keyClick={keyClick} />
                    </div>
                    <div className="keyboard-row">
                        <Key className="sci-operators blue-font" keyLog="" Tag="Deg" math="deg" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="tanh(" Tag="tanh" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="sinh(" Tag="sinh" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="cosh(" Tag="cosh" math="trig" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog={[log, powy]} Tag={[log, powy]} math="power" keyClick={keyClick} />
                        <Key className="sci-operators" keyLog="log" Tag="log" math="log" keyClick={keyClick} />
                    </div>
                </div> : null}
        </div>
    );
}

export default ScientificOperators;