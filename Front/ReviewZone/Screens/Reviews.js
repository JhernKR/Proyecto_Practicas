import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Picker, Alert, ImageBackground } from 'react-native';
import { Header, Icon } from 'react-native-elements';
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
    if (this.state.categoria == "Pelicula") {
      this.props.navigation.navigate('DetallesPelicula', {review : obj});
    }
    if (this.state.categoria == "Anime") {
      this.props.navigation.navigate('DetallesAnime', {review : obj});
    }
    if (this.state.categoria == "Videojuego") {
      this.props.navigation.navigate('DetallesVideojuego', {review : obj});
    }
    if (this.state.categoria == "Manga_Comic") {
      this.props.navigation.navigate('DetallesManga', {review : obj});
    }
  }

  render() {

    return (
      <View style={{ flex: 1}}>
        <ImageBackground
        source={require('../Imagenes/fondologin.jpg')}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
        >
        <Header containerStyle={{marginTop: -25}} backgroundColor="#fcad03" rightComponent={{ icon: 'add', color: '#fff', onPress: () => this.props.navigation.navigate('Add') }}
        centerComponent={{ text: this.state.usuario.Nombreusuario, style: { color: '#fff', fontSize: 20 } }} ></Header>
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
          </ImageBackground>
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
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  materialHeader1: {
    width: 360,
    height: 56,
    backgroundColor: "rgba(255,165,0,1)"
  },
});


