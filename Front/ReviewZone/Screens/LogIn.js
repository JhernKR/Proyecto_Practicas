import React, {Component,} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
import Fondo from '../Components/Fondo';
import BotonEnviar from '../Components/BotonEnviar';
import SignUpSection from '../Components/SignUpSection';


export default class LogIn extends Component {
  render() {
    return (
      <Fondo>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Logo />
          <Form />
          <SignUpSection />
          <BotonEnviar />
        </ScrollView>
      </Fondo>
    );
  }
}

