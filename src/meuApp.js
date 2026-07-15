import { Text, View, TextInput, Image, StyleSheet} from "react-native";
import { useState } from "react";

export default function Index() {

    const [nome,  setNome] = useState('');
    const [senha, setSenha] = useState('');
    
    return (
        
        <View>

            <Text>
        
            </Text>

        </View>
    )
}

const estilo = StyleSheet.create ({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 20,
        textAlign: 'center',
    },

    subtitulo: {
        fontSize: 15,
        textAlign: 'center' 
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