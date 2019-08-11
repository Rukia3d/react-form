import React from 'react';
import PropTypes from 'prop-types';

/*
Higher-Order Component that parses input prop as a JSON string and passes the
result down to the original component.

Motivation for HOC: the test task doesn't have enough information on how the
component will be used and where JSON input string comes from, but as its
parsing/handling is not directly related to the task of rendering the form
itself - I extracted it into this HOC.

It separates these two concerns, and it will allow to implement things like
dealing with JSON errors here easily, without complicating form rendering code.
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
