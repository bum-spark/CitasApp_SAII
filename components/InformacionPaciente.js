import { View, Text, Modal, Pressable, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

const InformacionPaciente = ({ paciente, setPaciente, setModalPaciente }) => {

    const cerrarModal = () => {
        setModalPaciente(false)
        setPaciente({})
    }

    return (
        <Modal
            animationType='slide'
            visible={true}
        >
            <SafeAreaView style={styles.contenedor}>
                <ScrollView>
                    <Text style={styles.titulo}>
                        Informacion de paciente
                    </Text>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Paciente:</Text>
                        <Text style={styles.valor}>{paciente.paciente}</Text>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Propietario:</Text>
                        <Text style={styles.valor}>{paciente.propietario}</Text>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.valor}>{paciente.email}</Text>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono:</Text>
                        <Text style={styles.valor}>{paciente.telefono}</Text>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha:</Text>
                        <Text style={styles.valor}>{paciente.fecha}</Text>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas:</Text>
                        <Text style={styles.valor}>{paciente.sintomas}</Text>
                    </View>

                    <Pressable
                        style={styles.btnCerrar}
                        onPress={cerrarModal}
                    >
                        <Text style={styles.btnCerrarTexto}>Cerrar</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: "#F59E0B",
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        color: "#FFF",
    },
    tituloBold: {
        fontWeight: "900",
        color: "#FFF",
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
    },
    label: {
        color: "#374151",
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: 12,
        marginBottom: 5,
    },
    valor: {
        color: "#000000ff",
        fontSize: 20,
        fontWeight: "700",
    },
    btnCerrar: {
        marginVertical: 30,
        backgroundColor: "#e00000ff",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCerrarTexto: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: "uppercase",
    },
});


export default InformacionPaciente