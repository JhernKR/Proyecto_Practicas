import * as React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Picker, TextInput, TouchableWithoutFeedback, Image, Alert } from 'react-native';

export default class Reviews extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews : [],
      usuario : this.props.route.params.usuario,
      categoria : 'Pelicula'
    }
  }

  componentDidMount() {
    this.update = this.props.navigation.addListener('focus', () => {
      this.cargarReviews(this.state.categoria);
    })
  }

  cargarReviews = async (categoria) => {
    try {
      let response = await fetch(`http://10.0.2.2:50921/api/${categoria}`);

      let responseJson = response.ok ? await response.json() : Alert.alert("Error");

      if (responseJson != null) { this.setState({ reviews: responseJson }) }
      else { console.log("Error al cargar reviews")}

    } catch (error) {
      Alert.alert("Error");
    }
  }

  cambiarCategoria = (value) => {
    this.setState({ categoria: value })

    this.cargarReviews(value);
  }

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={styles.text}> {this.state.usuario.Nombreusuario}</Text>
        <Picker selectedValue={this.state.categoria} onValueChange={this.cambiarCategoria}>
            <Picker.Item label="Pelicula" value="Pelicula" />
            <Picker.Item label="Anime" value="Anime" />
            <Picker.Item label="Videojuego" value="Videojuego" />
            <Picker.Item label="Serie" value="Serie" />
            <Picker.Item label="Manga/Comic" value="Manga_Comic" />
          </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 10,
    fontFamily: "AveriaSerifLibre-Light",
  },
  lista: {
    padding: 4,
    height: "50%"
  },
  buttons: {
    borderRadius: 50, marginHorizontal: 25
  }
});


