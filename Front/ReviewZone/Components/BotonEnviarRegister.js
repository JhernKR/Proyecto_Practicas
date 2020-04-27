import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
  Dimensions,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import spinner from '../Imagenes/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width; //411
const DEVICE_HEIGHT = 731;//Dimensions.get('window').height;
const MARGIN = 40;

export default class BotonEnviar extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      isLoading: false,

      usuario: {
          Nombre: "",
          Nombreusuario: "",
          Correo: "",
          Password: ""
      }
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    //this._onPress = this._onPress.bind(this);
  }

  handlePressLogin = () => {
    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    if (this.props.usu.length == 0 || this.props.pass.length == 0 || this.props.name == 0 || this.props.mail == 0) {
      alert("Campos incompletos.")
    }
    else {
      try {
        fetch(`http://10.0.2.2:50921/api/Usuario?nom_usu=${this.props.usu}&pass=${this.props.pass}`).then(this.handleEndFetch)

      } catch (error) {
        alert(error);
      }
    }
  }

  handleEndFetch = async(response) => {
    let responseJson = response.ok ? await response.json() : alert('Error');

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start(() => {
      if(responseJson != null) {
        this.props.navigation.navigate('LogIn') }
      else {alert("Información incorrecta")}
    });

    setTimeout(() => {
      //Actions.secondScreen();
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  }
  
  ////

  crearUsuario = () => {
    let url = 'http://10.0.2.2:50921/api/Usuario';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state.usuario),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("No se pudo añadir el usuario")
        }
      })
      .catch(error => console.log("Error al crear el usuario"));
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePressLogin}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>LOGIN</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});