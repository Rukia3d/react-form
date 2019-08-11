import React from 'react';
import PropTypes from 'prop-types';

/*
Higher-Order Component that parses input prop as a JSON string and passes the
result down to the original component.
*/

function withJSONInput(Component) {
  const JSONComponent = class extends React.Component {
    constructor(props) {
      super(props);
      this.input = JSON.parse(props.input);
    }

    render() {
      const { input, ...other } = this.props;
      return <Component {...other} input={this.input} />;
    }
  };

  JSONComponent.propTypes = {
    input: PropTypes.string.isRequired,
  };
  return JSONComponent;
}

export default withJSONInput;
