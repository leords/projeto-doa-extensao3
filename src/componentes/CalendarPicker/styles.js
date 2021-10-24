import { StyleSheet } from "react-native";


// Style aplicado apenas na VIEW onde está o calendário. 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,

        // código para criar sombra no componente.
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
            },
    });

  export default styles;