import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <ErrorBoundary>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </ErrorBoundary>
        </ThemeProvider>
    </React.StrictMode>,
)
