import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Modal, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const [NombrePaciente, setNombrePaciente] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas
        <Text style={styles.tituloBold}> Veterinaria</Text>
      </Text>

      <Modal
        visible={modalVisible}
        animationType='slide'

      >

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre del paciente</Text>
          <TextInput
            style={styles.input}
            placeholder='Nombre del paciente'
            placeholderTextColor={'#666'}
            value={NombrePaciente}
            onChangeText={setNombrePaciente}
          //maxLength={20}
          //multiline={true}
          //numberOfLines={4}

          //tipo
          //keyboardType='email-addres'
          />
        </View>


        <View>
          {/* <Text>Desde el Modal</Text> */}
          <Pressable onPress={() => setModalVisible(false)} style={styles.btnNuevaCita}>
            <Text style={styles.btnTextoNuevaCita}>Cerrar Modal</Text>
          </Pressable>
        </View>
      </Modal>



      <Pressable style={styles.btnNuevaCita} onPress={() => { setModalVisible(true); }}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    fontWeight: '600',
    color: '#280072ff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#94a3b8',
    paddingRight: 15,

  },
  formulario: {
    backgroundColor: "#6D28D9",
    flex: 1
  },
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
});
