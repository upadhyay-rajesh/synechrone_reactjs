import React from "react";

// Higher-Order Component to wrap with React.memo
const withMemoization = (WrappedComponent) => {
  return React.memo(WrappedComponent);
};

export default withMemoization;
