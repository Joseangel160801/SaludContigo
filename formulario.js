import React, {useState} from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Formulario = ({
  modalVisible,
  setModalVisible,
  pacientes,
  setPacientes,
}) => {
  const [Paciente, setPaciente] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Centro, setCentro] = useState('');
  const [Email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState(null);

  const data = [
    {label: 'Plaza de la Salud', value: 'apple'},
    {label: 'Centro Medico Punta Cana', value: 'banana'},
    {label: 'Centro Medico Moderno ', value: 'orange'},
    {label: 'Centro medico Doctor rodriguez santos', value: 'banana'},
    {label: 'Centro medico vista del jardin', value: 'orange'},
    {label: 'Cedimat', value: 'orange'},
  ];

  const procesos = [
    {label: 'Cardiologia', value: 'Cardio'},
    {label: 'Ortopedas', value: 'Orto'},
    {label: 'Urologia', value: 'Uro'},
    {label: 'Neurologia', value: 'Neuro'},
    {label: 'Dermatologia', value: 'Derma'},
    {label: 'Pediatria', value: 'pedia'},
  ];

  const handleCita = () => {
    // validar formulario
    if ([Paciente, Apellido, Centro, Email, telefono].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    const nuevoPaciente = {
      Paciente,
      Apellido,
      Centro,
      Email,
      telefono,
      fecha,
    };

    setPacientes([...pacientes, nuevoPaciente]);
    setModalVisible(!modalVisible);

    setPaciente('');
    setApellido('');
    setCentro('');
    setEmail('');
    setTelefono('');
    setFecha('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={style.contenido}>
        <ScrollView>
          <Text style={style.titulo}>
            Nueva {''}
            <Text style={style.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={style.btnCancelar}
            onLongPress={() => setModalVisible(!modalVisible)}>
            <Text style={style.btnCancelarTexto}>Cancelar</Text>
          </Pressable>

          <View style={style.campo}>
            <Text style={style.label}>Nombre Paciente</Text>
            <TextInput
              style={style.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={Paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={style.campo}>
            <Text style={style.label}>Apellido Paciente</Text>
            <TextInput
              style={style.input}
              placeholder="Apellido Paciente"
              placeholderTextColor={'#666'}
              value={Apellido}
              onChangeText={setApellido}
            />
          </View>

          <View style={style.campo}>
            <Text style={style.label}>Centro de salud </Text>
            <RNPickerSelect
              // Se ejecuta cuando cambia el valor seleccionado
              onValueChange={value => setSelectedValue(value)}
              // Elementos para mostrar en el picker
              items={data}
              // Texto de marcador de posición
              placeholder={{label: 'Seleccione el centro de salud', value: null}}
              // Define si el picker está deshabilitado
              disabled={false}
              // Valor seleccionado actual
              value={selectedValue}
              // Clave del item para identificación
            //   itemKey="value"
              // Estilos del componente
              style={{  backgroundColor: '#FFF',
              padding: 15,
              borderRadius: 10,}}
              // Propiedades del picker
              pickerProps={{
                mode: 'dropdown', // Modo del picker (dropdown o modal)
                style: { backgroundColor: '#FFF',
                padding: 15,
                borderRadius: 10,
                 }, // Estilos del picker
              }}
              // Componente de ícono personalizado
            //   Icon={() => {
            //     return <Text style={style.icon}>▼</Text>;
            //   }}
              // Propiedades del TextInput interno
              textInputProps={{underlineColorAndroid: 'transparent'}}
              // Propiedades del wrapper táctil
              touchableWrapperProps={{activeOpacity: 0.5}}
              // Se ejecuta cuando se abre el picker
              onOpen={() => console.log('Picker o pened')}
              // Propiedades específicas de Android
            //   useNativeAndroidPickerStyle={true}
              fixAndroidTouchableBug={false}
              // Propiedades específicas de iOS
              InputAccessoryView={null}
              doneText="Done"
              onUpArrow={null}
              onDownArrow={null}
              onDonePress={null}
              onClose={null}
              modalProps={{animationType: 'slide', transparent: true}}
              touchableDoneProps={{
                accessible: true,
                accessibilityLabel: 'Done button',
              }}
            />

            {/* <TextInput
                            style={[style.input, style.centroSalud]}
                            placeholder='Centro de salud'
                            placeholderTextColor={'#666'}
                            value={Centro}
                            onChangeText={setCentro}
                            multiline={true}
                            numberOfLines={4}

                        /> */}
          </View>



          {/* que proceso realizara el paciente */}

          <View style={style.campo}>
            <Text style={style.label}>Proceso a realizar</Text>
            <RNPickerSelect
              // Se ejecuta cuando cambia el valor seleccionado
              onValueChange={value => setSelectedValue(value)}
              // Elementos para mostrar en el picker
              items={procesos}
              // Texto de marcador de posición
              placeholder={{label: 'Seleccione el proceso a realizar', value: null}}
              // Define si el picker está deshabilitado
              disabled={false}
              // Valor seleccionado actual
              value={selectedValue}
              // Clave del item para identificación
            //   itemKey="value"
              // Estilos del componente
              style={{  backgroundColor: '#FFF',
              padding: 15,
              borderRadius: 10,}}
              // Propiedades del picker
              pickerProps={{
                mode: 'dropdown', // Modo del picker (dropdown o modal)
                style: { backgroundColor: '#FFF',
                padding: 15,
                borderRadius: 10,
                 }, // Estilos del picker
              }}
              // Componente de ícono personalizado
            //   Icon={() => {
            //     return <Text style={style.icon}>▼</Text>;
            //   }}
              // Propiedades del TextInput interno
              textInputProps={{underlineColorAndroid: 'transparent'}}
              // Propiedades del wrapper táctil
              touchableWrapperProps={{activeOpacity: 0.5}}
              // Se ejecuta cuando se abre el picker
              onOpen={() => console.log('Picker o pened')}
              // Propiedades específicas de Android
            //   useNativeAndroidPickerStyle={true}
              fixAndroidTouchableBug={false}
              // Propiedades específicas de iOS
              InputAccessoryView={null}
              doneText="Done"
              onUpArrow={null}
              onDownArrow={null}
              onDonePress={null}
              onClose={null}
              modalProps={{animationType: 'slide', transparent: true}}
              touchableDoneProps={{
                accessible: true,
                accessibilityLabel: 'Done button',
              }}
            />

            {/* <TextInput
                            style={[style.input, style.centroSalud]}
                            placeholder='Centro de salud'
                            placeholderTextColor={'#666'}
                            value={Centro}
                            onChangeText={setCentro}
                            multiline={true}
                            numberOfLines={4}

                        /> */}
          </View>


          



          <View style={style.campo}>
            <Text style={style.label}>Email</Text>
            <TextInput
              style={style.input}
              placeholder="Email"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={Email}
              onChangeText={setEmail}
            />
          </View>

          <View style={style.campo}>
            <Text style={style.label}>Numero de telefono</Text>
            <TextInput
              style={style.input}
              placeholder="Numero de telefono"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>

          <Pressable style={style.btnNuevaCita} onPress={handleCita}>
            <Text style={style.btnNuevaCitaTexto}>Agregar Cita</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const style = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },

  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '900',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  centroSalud: {
    marginTop: 20,
  },

  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
    textAlign: 'center'
  },

  // btnNuevaCitaTexto: {
  //   textAlign: 'center',
  //   color: '#5827A4',
  //   textTransform: 'uppercase',
  //   fontWeight: '900',
  //   fontSize: 16,
  // },


});

export default Formulario;
