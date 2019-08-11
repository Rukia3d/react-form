import React from 'react';
import PropTypes from 'prop-types';
import ReactForm from './ReactForm';


/*
Error Boundary to handle errors and exeptions happening in the form.
*/

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <h1 data-testid="errorMessage">ReactForm errored</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const WrappedForm = props => (
  <ErrorBoundary>
    <ReactForm {...props} />
  </ErrorBoundary>
);

export default WrappedForm;
