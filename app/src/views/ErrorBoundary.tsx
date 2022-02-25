import { Component, ErrorInfo, ReactNode } from "react";
import Main from "components/common/Main";
import WarningMsg from "components/common/WarningMsg";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Main>
          <WarningMsg />
        </Main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
