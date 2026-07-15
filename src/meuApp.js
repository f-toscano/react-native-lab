import { Text, View, TextInput, Image, StyleSheet} from "react-native";
import { useState } from "react";

export default function Index() {
return (

<View style={estilo.container}> 

    <View style={{ 
        backgroundColor: '#0A8F11',
        flex: 1,
    }}>
        <Cabeca />
        
    </View>

    <View style={{
      flex: 4,
      backgroundColor: "white"
    }}>

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
        
        <View>

            <Text>
        
            </Text>

        </View>
    )
}

export function Final() {

}

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

    subtitulo: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        marginTop: 10
    },

    input: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        backgroundColor: 'gray',
        color: 'white',
        width: "80%"
    
    }

})