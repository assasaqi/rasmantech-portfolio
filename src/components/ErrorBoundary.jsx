import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary menangkap eror:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center p-6 text-center transition-colors duration-300">
                    <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Terjadi Kesalahan Aplikasi</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 max-w-md">
                        {this.state.error?.toString()}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer"
                    >
                        Muat Ulang Halaman
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
