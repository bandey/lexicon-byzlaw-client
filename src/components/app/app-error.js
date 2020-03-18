import React from 'react';
import Alert from 'react-bootstrap/Alert';

import AppData from './app-data.js';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(err) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <Alert variant="danger">Error loading page!</Alert>;
    }

    return <AppData {...this.props} />;
  }
}

export default AppErrorBoundary;
