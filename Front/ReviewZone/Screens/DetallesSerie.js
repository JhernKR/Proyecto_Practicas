import * as React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class DetallesSerie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      review: this.props.route.params.review,
      estado: ''
    };
  }

  componentDidMount() {
    this.setEstado();
  }
  //<Text>Detalles Serie {this.state.review.Titulo}</Text>
  
  setEstado = () => {
    if (this.state.review.Emision == true) {
      this.setState({estado : "En emisión"})
    }
    if (this.state.review.Emision == false) {
      this.setState({estado : "Finalizada"})
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../Imagenes/fondologin.jpg')}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Header containerStyle={{marginTop: -25}} backgroundColor="#fcad03" leftComponent={{ icon: 'chevron-left', type: 'AntDesign', color: '#fff', onPress: () => this.props.navigation.navigate('Reviews') }}
        centerComponent={{ text: 'Detalles de la serie', style: { color: '#fff' } }} ></Header>
        <ScrollView>
        <View style={styles.textStackRow}>
          <View style={styles.textStack}>
            <Text style={styles.text}></Text>
            <Text style={styles.titulo}>{this.state.review.Titulo}</Text>
          </View>
        <Text style={styles.usuario}>{this.state.review.Usuario.Nombreusuario}</Text>
        </View>
        <View style={styles.loremIpsumStack}>
          <Text style={styles.loremIpsum}>Número de episodios:</Text>
          <Text style={styles.loremIpsum3}>{this.state.review.Num_capitulos}</Text>
        </View>
        <View style={styles.duracionCapitulosRow}>
          <Text style={styles.duracionCapitulos}>Duración capítulos:</Text>
          <Text style={styles.loremIpsum4}>{this.state.review.Duracion_cap}</Text>
        </View>
        <Text style={styles.sinopsis}>Sinopsis:</Text>
          <Text style={styles.loremIpsum6}>{this.state.review.Sinopsis}</Text>
        <Text style={styles.opinionPersonal}>Opinión personal:</Text>
          <Text style={styles.opinionPersonal1}>{this.state.review.Op_personal}</Text>
        <View style={styles.valoracionPersonalRow}>
          <Text style={styles.valoracionPersonal}>Valoración personal:</Text>
          <Text style={styles.valoracionPersonal1}>{this.state.review.Val_personal}</Text>
        </View>
        <Text style={styles.reparto}>Reparto:</Text>
        <Text style={styles.reparto1}>{this.state.review.Reparto}</Text>
        <View style={styles.direccionRow}>
          <Text style={styles.direccion}>Dirección:</Text>
          <Text style={styles.direccion1}>{this.state.review.Direccion}</Text>
        </View>
        <View style={styles.guionRow}>
          <Text style={styles.guion}>Guión:</Text>
          <Text style={styles.guion1}>{this.state.review.Guion}</Text>
        </View>
        <View style={styles.generosRow}>
          <Text style={styles.generos}>Géneros:</Text>
          <Text style={styles.generos1}>{this.state.review.Generos}</Text>
        </View>
        <View style={styles.estadoRow}>
          <Text style={styles.estado}>Estado:</Text>
          <Text style={styles.estado1}>{this.state.estado}</Text>
        </View>
        <View style={styles.productoraRow}>
          <Text style={styles.productora}>Productora:</Text>
          <Text style={styles.productora1}>{this.state.review.Productora}</Text>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  text: {
    top: 0,
    left: 16,
    color: "#121212",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  titulo: {
    top: 0,
    left: 0,
    color: "#121212",
    position: "absolute",
    fontSize: 40,
    fontFamily: "helvetica-regular",
  },
  textStack: {
    width: 'auto',
    height: 'auto',
  },
  usuario: {
    color: "#121212",
    fontSize: 23, 
    fontFamily: "helvetica-regular",
    marginLeft: 310,
    marginTop: 8,
    paddingRight: 5
  },
  textStackRow: {
    //height: 40,
    height: 'auto',
    flexDirection: "row",
    //marginTop: 14,
    marginTop: 20,
    marginLeft: 8,
    marginRight: 11
  },
  loremIpsum: {
    top: 0,
    left: 0,
    //width: 220,
    //height: 20,
    width: 'auto',
    height: 'auto',
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    textAlign: "left"
  },
  loremIpsum3: {
    top: 0,
    left: 203,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  loremIpsumStack: {
    //width: 220,
    //height: 20,
    width: 'auto',
    height: 'auto',
    marginTop: 20,
    marginLeft: 10
  },
  duracionCapitulos: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginTop: 21,
  },
  loremIpsum4: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginLeft: 7,
    marginTop: 21,
  },
  duracionCapitulosRow: {
    //height: 20,
    height: 'auto',
    flexDirection: "row",
    //marginTop: 11,
    marginTop: 21,
    marginLeft: 10,
    marginRight: 111
  },
  sinopsis: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginTop: 10,
    marginLeft: 8
  },
  loremIpsum6: {
    //width: 339,
    //height: 144,
    width: 'auto',
    height: 'auto',
    color: "#121212",
    fontSize: 10,
    fontFamily: "helvetica-regular",
    textAlign: "justify",
    marginLeft: 8
  },
  opinionPersonal: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginTop: 5,
    marginLeft: 8,
    marginTop: 60,
  },
  opinionPersonal1: {
    //width: 339,
    //height: 108,
    width: 'auto',
    height: 'auto',
    color: "#121212",
    fontSize: 10,
    fontFamily: "helvetica-regular",
    textAlign: "justify",
    marginLeft: 11
  },
  valoracionPersonal: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  valoracionPersonal1: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginLeft: 13
  },
  valoracionPersonalRow: {
    //height: 20,
    height: 'auto',
    flexDirection: "row",
    //marginTop: 11,
    marginTop: 22,
    marginLeft: 8,
    marginRight: 147
  },
  reparto: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginTop: 12,
    marginLeft: 8
  },
  reparto1: {
    //width: 339,
    //height: 49,
    width: 'auto',
    height: 'auto',
    color: "#121212",
    fontSize: 10,
    fontFamily: "helvetica-regular",
    marginLeft: 8
  },
  direccion: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginTop: 60,
  },
  direccion1: {
    color: "#121212",
    fontSize: 10,
    fontFamily: "helvetica-regular",
    marginLeft: 4,
    marginTop: 65
  },
  direccionRow: {
    //height: 20,
    height: 'auto',
    flexDirection: "row",
    marginLeft: 8,
    marginRight: 202
  },
  guion: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  guion1: {
    color: "#121212",
    fontSize: 10,
    fontFamily: "helvetica-regular",
    marginLeft: 6,
    marginTop: 5
  },
  guionRow: {
    //height: 20,
    height: 'auto',
    flexDirection: "row",
    //marginTop: 10,
    marginTop: 23,
    marginLeft: 8,
    marginRight: 230
  },
  generos: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  generos1: {
    color: "#121212",
    fontSize: 10,
    fontFamily: "helvetica-regular",
    marginLeft: 5,
    marginTop: 5
  },
  generosRow: {
    //height: 20,
    height: 'auto',
    flexDirection: "row",
    //marginTop: 11,
    marginTop: 24,
    marginLeft: 8,
    marginRight: 224
  },
  estado: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  estado1: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginLeft: 7
  },
  estadoRow: {
    //height: 20,
    height: 'auto',
    flexDirection: "row",
    //marginTop: 12,
    marginTop: 20,
    marginLeft: 8,
    marginRight: 178
  },
  productora: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular"
  },
  productora1: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "helvetica-regular",
    marginLeft: 7
  },
  productoraRow: {
    //height: 20,
    height: 'auto',
    flexDirection: "row",
    //marginTop: 12,
    marginTop: 20,
    marginLeft: 8,
    marginRight: 178
  }
});


