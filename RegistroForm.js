import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// import * as FileSystem from 'expo-file-system';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const registrarUsuario = async () => {
    try {
      const path = `${FileSystem.documentDirectory}data-usuario.json`;
      const data = await FileSystem.readAsStringAsync(path);
      const usuarios = data ? JSON.parse(data) : [];

      const nuevoUsuario = {
        nombre,
        correo,
        contrasena,
      };

      usuarios.push(nuevoUsuario);

      await FileSystem.writeAsStringAsync(path, JSON.stringify(usuarios));
      alert('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Ocurrió un error al registrar usuario');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
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
      <Button title="Registrarse" onPress={registrarUsuario} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});

export default RegistroForm;
