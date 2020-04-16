import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Components/Logo';
import Form from './Components/Form';
import Fondo from './Components/Fondo';
import BotonEnviar from './Components/BotonEnviar';
import SignUpSection from './Components/SignUpSection';

export default class LoginScreen extends Component {
  render() {
    return (
      <Fondo>
        <Logo />
        <Form />
        <SignUpSection />
        <BotonEnviar />
      </Fondo>
    );
  }
}