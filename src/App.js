import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Calculator from './components/Calculator';
import "./App.css";

const App = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Calculator />
            </Router>
        </ErrorBoundary>
    );
}

export default App;