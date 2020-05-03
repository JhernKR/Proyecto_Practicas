import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
import Fondo from '../Components/Fondo';
import BotonEnviar from '../Components/BotonEnviar';
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

  validateData = () => {
    return true;
  }

  requestData = () => {
    let url = 'http://10.0.2.2:50921/api/Usuario';

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        Nombre: this.state.name,
        Nombreusuario: this.state.nom_usu,
        Correo: this.state.mail,
        Password: this.state.password,
      }),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
    .catch(error => console.log(error));
  }

  handleData = (response) => {
    if (response == "El usuario se ha creado correctamente.") {
      this.props.navigation.navigate('LogIn')
    }
    else {
      alert(response);
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
            <FormRegister textPass={(input) => {this.setState({password : input})}} textUsu={(input) => {this.setState({nom_usu : input})}} textName={(input) => {this.setState({name : input})}} textMail={(input) => {this.setState({mail : input})}}/>
          </View>
          <View>
          <BotonEnviar 
            validate = {this.validateData}
            request = {this.requestData}
            handleRequest = {this.handleData}
          />
          </View>
        </ScrollView>
      </Fondo>
    );
  }
}