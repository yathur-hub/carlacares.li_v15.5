import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// --- DIAGNOSTICS ---
console.log("BOOT: index.tsx loaded");
console.log("BOOT: React version:", React.version);

// Check for dispatcher context (common cause for the useContext error)
try {
  // @ts-ignore - internal check
  const dispatcher = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentDispatcher?.current;
  console.log("BOOT: React Dispatcher initialized:", !!dispatcher);
} catch (e) {
  console.warn("BOOT: Could not check React internals");
}

interface ErrorBoundaryProps {
  // Fixed: Made children optional to prevent "missing property" error when used as a JSX wrapper
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

// Added constructor to properly initialize props and satisfy TypeScript's property checks
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Fixed: Explicitly declare state and props to resolve "Property does not exist on type" errors in some TS environments
  public state: ErrorBoundaryState;
  public props: ErrorBoundaryProps;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("REACT CRASH:", error, errorInfo);
  }

  render() {
    // Fixed: state property is now explicitly declared and accessible
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#fff', border: '2px solid red', margin: '20px', borderRadius: '12px' }}>
          <h1 style={{ color: 'red' }}>Kritischer Anwendungsfehler</h1>
          <p>Es gab ein Problem beim Laden der Komponenten. Dies liegt oft an inkompatiblen Browser-Erweiterungen oder Netzwerkfehlern.</p>
          <pre style={{ background: '#f8f8f8', padding: '15px', borderRadius: '8px', overflow: 'auto', marginTop: '10px', fontSize: '12px' }}>
            {this.state.error?.toString()}
          </pre>
          <button onClick={() => window.location.reload()} style={{ marginTop: '20px', padding: '12px 24px', background: '#333f07', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Seite neu laden
          </button>
        </div>
      );
    }
    // Fixed: props property is now explicitly declared and accessible
    return this.props.children;
  }
}

const container = document.getElementById('root');
if (!container) {
  console.error("BOOT FAIL: No #root element found");
} else {
  console.log("BOOT: Starting createRoot");
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}