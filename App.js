import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Modal, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import Formulario from './components/Formulario.js';
import Paciente from './components/Paciente.js';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const [paciente, setPaciente] = useState({});

  const [pacientes, setPacientes] = useState([]);

  const [modalPaciente, setModalPaciente] = useState(false);

  const cerrarModal = () => {
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>


      <Text style={styles.titulo}>Administrador de Citas
        <Text style={styles.tituloBold}> Veterinaria</Text>
      </Text>

      <Formulario
        modalVisible={modalVisible}
        cerrarModal={cerrarModal}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />

      <Pressable style={styles.btnNuevaCita} onPress={() => { setModalVisible(true); }}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ?
        <Text style={styles.noPacientes}>No hay pacientes aun</Text> :
        <FlatList
          data={pacientes}
          style={styles.listado}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                setPaciente={setPaciente}
                setModalPaciente={setModalPaciente} //creamos el state
              />
            );
          }}
        />
      }


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
  },
});
