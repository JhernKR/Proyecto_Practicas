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

  newUser = () => {
    let url = 'http://10.0.2.2:44321/api/Usuario';
    let usuario = {
      Nombreusuario : this.state.nom_usu,
      Nombre : this.state.name,
      Correo : this.state.mail,
      Password : this.state.password
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Error")
        }
      })
      .catch(error => console.log("Error, no se pudo crear el usuario"));
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
            <BotonEnviar />
            <SignUpSection />
          </View>
        </ScrollView>
      </Fondo>
    );
  }
}