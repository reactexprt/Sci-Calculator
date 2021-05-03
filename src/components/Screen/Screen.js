import React, { Component } from 'react';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.handleLogChange = this.handleLogChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', () => this.ref.focus());
    }

    componentDidUpdate() {
        this.ref.focus();
    }

    handleLogChange() {
        this.props.handleLogChange(this.ref.value);
    }

    render() {
        return (
            <div className="screen">
                <input
                    type="text"
                    className="log"
                    ref={(a) => { this.ref = a; }}
                    value={this.props.log}
                    onChange={this.handleLogChange}
                    autoFocus
                />
                <div>{this.props.result}</div>
            </div>
        );
    }
}

export default Screen;

