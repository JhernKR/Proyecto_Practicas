import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
import Fondo from '../Components/Fondo';
import BotonEnviar from '../Components/BotonEnviar';
import SignUpSection from '../Components/SignUpSection';


export default class LogIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nom_usu: '',
      password: '',
      datos: []
    }
  }

  textUsu = (usu) => {
    var regExp = /^[a-zA-ZÀ-ÿ0-9]{2,}$/;
    (regExp.test(usu)) ? this.setState({nom_usu : usu})
    : this.setState({nom_usu : ""})
  }

  textPass = (pass) => {
    var regExp = /^[a-zA-ZÀ-ÿ0-9]{2,}$/;
    (regExp.test(pass)) ? this.setState({password : pass})
    : this.setState({password : ""})
  }

  render() {
    return (
      <Fondo>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 20}}>
            <Logo />
          </View>
          <View style={{marginBottom: 20, marginTop: 20}}>
            <Form textPass={this.textPass} textUsu={this.textUsu}/>
          </View>
          <View>
            <BotonEnviar navigation={this.props.navigation} pass = {this.state.password} usu = {this.state.nom_usu}/>
            <SignUpSection />
          </View>
        </ScrollView>
      </Fondo>
    );
  }
}

