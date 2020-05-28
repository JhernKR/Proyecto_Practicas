import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import UserInput from './UserInput';
import BotonEnviar from './BotonEnviar';
import SignUpSection from './SignUpSection';

import usernameImg from '../Imagenes/username.png';
import passwordImg from '../Imagenes/password.png';
import eyeImg from '../Imagenes/eye_black.png';
import PassInput from './PassInput';
import NameInput from './NameInput';
import MailInput from './MailInput';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarPass: true,
      pulsar: false,
    };
    this.mostrarPass = this.mostrarPass.bind(this);
  }

  mostrarPass() {
    this.state.pulsar === false
      ? this.setState({mostrarPass: false, pulsar: true})
      : this.setState({mostrarPass: true, pulsar: false});
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="Nombre de usuario"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          textUsu={this.props.textUsu}
        />
        <NameInput
          placeholder="Nombre"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          textName={this.props.textName}
        />
        <MailInput
          placeholder="Correo"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          textMail={this.props.textMail}
        />
        <PassInput
          source={passwordImg}
          secureTextEntry={this.state.mostrarPass}
          placeholder="Contraseña"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          textPass={this.props.textPass}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.mostrarPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 78,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
    marginTop: 120
  },
});