import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

import IniciarSesion from "./components/IniciarSesion";
import RegistroForm from "./components/RegistroForm";
import Formulario from "./components/Formulario";

const App = () => {
  const [mostrarIniciarSesion, setMostrarIniciarSesion] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>SaludContigo</Text>
      <Text style={styles.tituloBold}>Donde tu salud cuenta</Text>

      <View style={styles.botonesContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMostrarIniciarSesion(true);
            setMostrarRegistro(false);
          }}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMostrarIniciarSesion(false);
            setMostrarRegistro(true);
          }}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      {mostrarIniciarSesion && <IniciarSesion />}
      {mostrarRegistro && <RegistroForm />}

      {mostrarIniciarSesion && (
        <Button
          title="Nueva Cita"
          onPress={() => setModalVisible(!modalVisible)}
        />
      )}

      {/* <View>
        {pacientes.length === 0 ? (
          <Text style={styles.noPacientes}>No hay pacientes aún</Text>
        ) : (
          <Text>Hay pacientes</Text>
        )}
      </View> */}

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginBottom: 10,
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
    fontSize: 19,
    marginBottom: 30,
  },
  botonesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6D28D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize:24,
    fontWeight:'600'
  },
});

export default App;
