import React, { Component } from "react";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";
import { Header, Icon } from 'react-native-elements';

export default class Add extends React.Component {

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
        centerComponent={{ text: 'Añadir', style: { color: '#fff', fontSize: 20 } }} ></Header>
      <Text style={styles.queDeseasAnadir}>¿Qué deseas añadir?</Text>
      <Button
      type="outline"
      title="Serie"
      color="#fcad03"
      style={styles.materialButtonDanger4}
      />
      <Button
      type="outline"
      title="Película"
      color="#fcad03"
      />
      <Button
      type="outline"
      title="Videojuego"
      color="#fcad03"
      />
      <Button
      type="outline"
      title="Manga/Cómic"
      color="#fcad03"
      />
      <Button
      type="outline"
      title="Anime"
      color="#fcad03"
      />
      </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  image_imageStyle: {},
  materialHeader1: {
    width: 360,
    height: 56,
    backgroundColor: "rgba(255,165,0,1)"
  },
  container: {
    flex: 1
  },
  materialButtonDanger: {
    width: 100,
    height: 36,
    marginTop: 210,
    marginLeft: 130,
  },
  materialButtonDanger2: {
    width: 100,
    height: 36,
    marginTop: 35,
    marginLeft: 130
  },
  materialButtonDanger4: {
    width: 100,
    height: 36,
    marginTop: 33,
    marginLeft: 130
  },
  materialButtonDanger6: {
    width: 100,
    height: 36,
    marginTop: -200,
    marginLeft: 130
  },
  materialButtonDanger9: {
    width: 100,
    height: 36,
    marginTop: 36,
    marginLeft: 130
  },
  queDeseasAnadir: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "center"
  }
});