import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Picker, Alert } from 'react-native';

import FlatlistItem from '../Components/FlatlistItem';

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

  verDetalles = (obj) => {
    if (this.state.categoria == "Serie") {
      this.props.navigation.navigate('DetallesSerie', {review : obj});
    }
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
          <FlatList
            style={styles.flatlist}
            data={this.state.reviews}
            renderItem={({ item }) => (
              <FlatlistItem
                review={item}
                detalles={this.verDetalles}
              />
            )}
          />
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
  },
  flatlist: {
    margin: 10,
  }
});


