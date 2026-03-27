'use client';

import React from 'react';

interface HydrationErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class HydrationErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  HydrationErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): HydrationErrorBoundaryState {
    // Check if it's a hydration or insertion effect error
    if (
      error.message.includes('Hydration') || 
      error.message.includes('hydration') ||
      error.message.includes('useInsertionEffect') ||
      error.message.includes('insertionEffect')
    ) {
      return { hasError: true, error };
    }
    return { hasError: false, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('Hydration/InsertionEffect error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // For hydration errors, just render children without the problematic parts
      return this.props.children;
    }

    return this.props.children;
  }
}
