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
            <BotonEnviar validate = {() => {return !this.state.nom_usu.length == 0 && !this.state.password.length == 0}}
            request = {() => fetch(`https://reviewzone.azurewebsites.net/api/Usuario?nom_usu=${this.state.nom_usu}&pass=${this.state.password}`)}
            handleRequest = {(responseJson) => {
              if(responseJson != null) {
              this.props.navigation.navigate('Reviews', {usuario: responseJson}) }
              else {alert("Información incorrecta")}
            }}/>
            <SignUpSection navigation = {this.props.navigation}/>
          </View>
        </ScrollView>
      </Fondo>
    );
  }
}

