import { View, Text, Modal, SafeAreaView, ScrollView, Pressable, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker, { useDefaultStyles } from 'react-native-ui-datepicker'
import dayjs from 'dayjs'


const Formulario = ({ modalVisible, cerrarModal, pacientes, setPacientes }) => {

    const defaultStyles = useDefaultStyles('light')
    const calendarStyles = {
        ...defaultStyles,
        button_prev_image: { tintColor: '#6D28D9' },
        button_next_image: { tintColor: '#6D28D9' },
        month_selector_label: { color: '#374151', fontWeight: '700', fontSize: 16 },
        year_selector_label: { color: '#374151', fontWeight: '700', fontSize: 16 },
        weekday_label: { color: '#6D28D9', fontWeight: '600', fontSize: 12, textTransform: 'uppercase' },
        day_label: { color: '#374151' },
        selected: { backgroundColor: '#6D28D9', borderRadius: 8 },
        selected_label: { color: '#FFF', fontWeight: '700' },
        today: { backgroundColor: '#EDE9FE', borderRadius: 8 },
        today_label: { color: '#6D28D9', fontWeight: '700' },
        outside_label: { color: '#D1D5DB' },
    }

    const [id, setId] = useState('')
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState('')
    const [selectedDate, setSelectedDate] = useState(undefined)
    const [sintomas, setSintomas] = useState('')

    const limpiarFormulario = () => {
        setId('')
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha('')
        setSelectedDate(undefined)
        setSintomas('')
        cerrarModal()
    }

    const handlerCita = () => {
        if ([paciente, propietario, email, telefono, fecha, sintomas].includes('')) {
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return
        }

        const nuevoId = Date.now().toString()
        setId(nuevoId)

        const nuevoPaciente = {
            id: nuevoId,
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }

        setPacientes([...pacientes, nuevoPaciente])

        limpiarFormulario()
    }

    return (
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView style={styles.formulario}>
                <ScrollView>
                    <Text style={styles.titulo}>
                        Nueva Cita
                    </Text>

                    <Pressable style={styles.btnCancelar} onPress={limpiarFormulario}>
                        <Text style={styles.btnCancelarTexto}>
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
                        <View style={styles.datePickerContainer}>
                            <DateTimePicker
                                mode="single"
                                date={selectedDate}
                                minDate={dayjs()}
                                onChange={({ date }) => {
                                    setSelectedDate(date)
                                    setFecha(dayjs(date).format('DD/MM/YYYY'))
                                }}
                                styles={calendarStyles}
                                disabledDates={(date) => [0, 6].includes(dayjs(date).day())}
                            />
                        </View>
                        {fecha !== '' && (
                            <Text style={styles.fechaSeleccionada}>Fecha seleccionada: {fecha}</Text>
                        )}
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

                    <Pressable style={styles.btnNuevaCita} onPressOut={handlerCita}>
                        <Text style={styles.btnNuevaCitaTexto}>
                            Guardar
                        </Text>
                    </Pressable>



                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}


const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        color: "#FFF",
    },
    tituloBold: {
        fontWeight: "900",
    },

    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: "#FFF",
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "600",
    },
    input: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
    },
    formulario: {
        backgroundColor: "#6D28D9",
        flex: 1,
    },
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: "#5827A4",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCancelarTexto: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: "uppercase",
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: "#F59E0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto: {
        color: "#5827A4",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: "uppercase",
    },
    datePickerContainer: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
    },
    fechaSeleccionada: {
        color: "#FFF",
        marginTop: 10,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
});


export default Formulario