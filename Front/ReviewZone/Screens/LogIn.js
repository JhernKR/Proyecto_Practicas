import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
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
          <View style={{marginTop: 20}}>
            <Logo />
          </View>
          <View style={{marginBottom: 20, marginTop: 20}}>
            <Form />
          </View>
          <View>
            <BotonEnviar />
            <SignUpSection />
          </View>
        </ScrollView>
      </Fondo>
    );
  }
}

