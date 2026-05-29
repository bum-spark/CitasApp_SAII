import { View, Text, Modal, SafeAreaView, ScrollView, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web'

const formulario = () => {

    const [id, setId] = useState('')
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    return (
        <Modal>
            <SafeAreaView>
                <ScrollView>
                    <Text>
                        Nueva Cita
                    </Text>

                    <Pressable>
                        <Text>
                            X Cancelar
                        </Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre del paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre del propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Telefono'
                            placeholderTextColor={'#666'}
                            value={telefono}
                            onChangeText={setTelefono}
                            keyboardType='phone-pad'
                            maxLength={10}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Fecha'
                            placeholderTextColor={'#666'}
                            value={fecha}
                            onChangeText={setFecha}


                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Sintomas'
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>

                    <Pressable style={styles.btnNuevaCita}>
                        <Text style={styles.btnTextoNuevaCita}>
                            Guardar
                        </Text>

                    </Pressable>



                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
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

});


export default formulario