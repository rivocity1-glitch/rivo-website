import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from './Button';
import { AlertCircle, RotateCw, Home } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the unexpected runtime error details for debug purposes
    console.error("Application error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.assign("/");
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          role="alert"
          className="bg-white min-h-screen w-screen flex items-center justify-center p-6 font-sans selection:bg-brand-primary selection:text-brand-black"
        >
          <div className="max-w-md w-full text-center flex flex-col items-center space-y-8 animate-fade-in">
            
            {/* Visual Indicator Wrapper with Rivo Brand Colors */}
            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shadow-2xs">
              <AlertCircle className="w-8 h-8 stroke-[1.5]" />
            </div>

            {/* Typography Stack */}
            <div className="space-y-4">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight">
                  Something went wrong.
                </h1>
                <p className="text-sm md:text-base text-brand-gray-muted leading-relaxed font-light">
                  An unexpected error occurred while loading this page. <br />
                  Please try again or return to the homepage.
                </p>
              </div>
              <p className="text-xs text-brand-gray-muted/80 font-light">
                If the problem continues, please contact our support team.
              </p>
            </div>

            {/* Action Grid */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2 justify-center">
              <Button 
                variant="outline" 
                onClick={this.handleReload}
                className="px-6 py-3 text-sm font-semibold bg-white inline-flex items-center justify-center gap-2"
              >
                <RotateCw className="w-4 h-4 text-neutral-400" />
                Reload Page
              </Button>
              <Button 
                variant="primary" 
                onClick={this.handleGoHome}
                className="px-6 py-3 text-sm font-semibold shadow-xs inline-flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4 text-brand-black" />
                Go Home
              </Button>
            </div>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;