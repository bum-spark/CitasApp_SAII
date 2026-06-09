import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Paciente = ({
    item,
    setModalVisible, //para la edicion
    setPaciente, //para la edicion
    setModalPaciente,
}) => {
    return (
        <Pressable onLongPress={() => {
            setPaciente(item)
            setModalPaciente(true)
        }}>
            <View style={styles.contenedor}>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.texto}>{item.paciente}</Text>
                <Text style={styles.fecha}>{item.fecha}</Text>

                <View style={styles.contenedorBotones}>
                    <Pressable style={[styles.btn, styles.btnEditar]} onPress={() => {
                        setPaciente(item)
                        setModalVisible(true)
                    }}>
                        <Text style={styles.btnText}>Editar</Text>
                    </Pressable>

                    <Pressable style={[styles.btn, styles.btnEliminar]}>
                        <Text style={styles.btnText}>Eliminar</Text>
                    </Pressable>
                </View>

            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#f6f6f6',
        padding: 20,
        borderBottomColor: '#94a3b8',
        borderBottomWidth: 1,
        borderRadius: 10
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10
    },
    texto: {
        color: '#6D28D9',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10
    },
    fecha: {
        color: '#374151'
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btnEditar: {
        backgroundColor: "#F59E0B",

    },
    btnEliminar: {
        backgroundColor: "#EF4444",
    },
    btnText: {
        fontWeight: "600",
        textTransform: "uppercase",
        fontSize: 12,
        color: "#FFF"
    }

});

export default Paciente