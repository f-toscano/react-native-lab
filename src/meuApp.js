import { Text, View, TextInput, Image, StyleSheet} from "react-native";
import { useState } from "react";

export default function Index() {
return (

<View style={estilo.container}> 

    <View style={{ backgroundColor: '#0A8F11', flex: 1, }}>

        <Cabeca />  

    </View>

    <View style={{ flex: 4, backgroundColor: "white"}}>

        <Meio />

    </View>

    <View style={{ flex: 1, backgroundColor: "blue"}}>

        <Fim />

    </View>

</View>

)}

export function Cabeca() {
return (

<View style={estilo.orgCorpo}>

    <Text style={estilo.titulo}>
    BEM VINDOS
    </Text>

    <Text style={estilo.subtitulo}>
    Siga abaixo as instruções:
    </Text>

</View>

)}

export function Meio() {

    const [nome,  setNome] = useState('');
    const [senha, setSenha] = useState('');
    
    return (
        
        <View style={estilo.orgCorpo}>

            <Text style={estilo.titulo2}>
            INSIRA SEUS DADOS
            </Text>


            <TextInput
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
            style={estilo.input}
            />

            <TextInput
            placeholder="Crie uma senha"
            keyboardType="numeric"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            style={estilo.input}
            />

            

        </View>
    )
}

export function Fim() {
    return (

    <View style={estilo.orgCorpo}>

        <Image source={require('../arquivos/ceu-e-nuvens.jpg')}
        style={estilo.imagem} />

    </View>

)}

const estilo = StyleSheet.create ({

    container: {
        flex: 1
    },

    orgCorpo: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },

    titulo2: {
        fontSize: 24,
        textAlign: 'center',
        color: 'black',
        padding: 10,
    },

    subtitulo: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        marginTop: 10
    },

    input: {
        borderWidth: 1,
        margin: 14,
        padding: 11,
        backgroundColor: 'gray',
        placeholderTextColor: "white",
        color: 'white',
        width: "80%"
    
    },

    imagem: {
        width: 400,
        height:100,
    }
})