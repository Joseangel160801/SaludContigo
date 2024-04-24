import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import * as FileSystem from 'expo-file-system';

const IniciarSesion = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const iniciarSesion = async () => {
    try {
      const path = `${FileSystem.documentDirectory}data-usuario.json`;
      const data = await FileSystem.readAsStringAsync(path);
      const usuarios = data ? JSON.parse(data) : [];

      const usuario = usuarios.find(
        (u) => u.correo === correo && u.contrasena === contrasena
      );

      if (usuario) {
        alert('Inicio de sesión exitoso');
      } else {
        alert('Correo electrónico o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
      />
      <Button title="Iniciar Sesión" onPress={iniciarSesion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100,
    padding: 10, // Aumenta el padding para hacerlo más grande
    marginBottom: 20, // Aumenta el margen inferior para separar los TextInput
    width: '80%',
    marginTop: 10
  },
});

export default IniciarSesion;
