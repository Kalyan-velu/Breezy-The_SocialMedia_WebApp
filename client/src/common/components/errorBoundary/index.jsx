import AutorenewIcon from "@mui/icons-material/Autorenew";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React, {useState} from "react";
import {ErrorBoundary as Error} from "react-error-boundary";
import Loader from "../loader";
import "./index.css";

const ErrorFallBack = ({error, info, resetErrorBoundary, inApp}) => {
  return (
    <div className={!inApp ? "error-boundary-wrapper" : "error-boundary-app"}>
      {inApp ? (
        <div className="error-app">
          <h3>Something went Wrong</h3>
          <p>Error: {error.message}</p>
          <details>
            <summary> More Info</summary>

            <p>{info?.componentStack}</p>
          </details>
          <Button
            size="small"
            className={"error-boundary-button"}
            onClick={resetErrorBoundary}
            aria-label={"Refresh"}
          >
            Refresh <AutorenewIcon/>
          </Button>
        </div>
      ) : (
        <div
          title={`${error.message} (Tap To Refresh)`}
          className="error-boundary"
        >
          <IconButton
            size="small"
            className={"error-boundary-button"}
            onClick={resetErrorBoundary}
            aria-label={"Refresh"}
            style={{color: "var(--post-error-boundary)"}}
          >
            <AutorenewIcon/>
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default function ErrorBoundary({children, inApp = false}) {
  const [hasError, setHasError] = useState(false);
  const [info, setErrorInfo] = useState(null);

  function handleError(error, errorInfo) {
    console.error("Error :", error);
    console.error("ErrorInfo :", errorInfo);
    setHasError(!hasError);
    setErrorInfo(errorInfo);
  }

  const handleReset = () => setHasError(false);

  return (
    <Error
      onError={handleError}
      onReset={handleReset}
      FallbackComponent={({error, resetErrorBoundary}) =>
        ErrorFallBack({
          error,
          info,
          resetErrorBoundary,
          inApp,
        })
      }
    >
      <React.Suspense fallback={<Loader/>}>{children}</React.Suspense>
    </Error>
  );
}