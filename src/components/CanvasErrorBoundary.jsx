import React from 'react';

class CanvasErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        // console.error('Canvas error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: '#93c5fd'
                }}>
                    <p style={{ fontWeight: 700 }}>3D scene failed to load.</p>
                    <p style={{ opacity: 0.8, fontSize: 14 }}>Please check your internet connection or try again later.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default CanvasErrorBoundary;
