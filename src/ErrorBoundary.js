import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ''
        }
    }

    // componentDidCatch(error, info) {
    //     this.setState({ hasError: true });
    //     // You can also log the error to an error reporting service
    // }

    getDerivedStateFromProps(error) {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {

        if(this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        }

        return this.props.children
    }
}