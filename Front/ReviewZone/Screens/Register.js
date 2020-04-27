import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
import Fondo from '../Components/Fondo';
import BotonEnviarRegister from '../Components/BotonEnviarRegister';
import SignUpSection from '../Components/SignUpSection';
import FormRegister from '../Components/FormRegister';


export default class LogIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nom_usu: '',
      password: '',
      name: '',
      mail: '',
      datos: []
    }
  }

  render() {
    return (
      <Fondo>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 20}}>
            <Logo />
          </View>
          <View style={{marginBottom: 20, marginTop: 20}}>
            <FormRegister textPass={this.textPass} textUsu={this.textUsu} textName={this.textName} textMail={this.textMail}/>
          </View>
          <View>
          <BotonEnviarRegister navigation={this.props.navigation} usu = {this.state.nom_usu} pass = {this.state.password} name = {this.state.name} mail = {this.state.mail}/>
            <SignUpSection />
          </View>
        </ScrollView>
      </Fondo>
    );
  }
}