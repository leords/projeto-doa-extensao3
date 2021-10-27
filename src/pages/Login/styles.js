import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerLogo: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerForm: {
        flex: 2,
        width: '100%',
    },
    img: {
        marginTop: '20%',
        width: 130,
        height: 130
    },

    form: {
        marginLeft: '15%',
        marginTop: '15%',
        width: '70%',
        height: '40%'
    },

    input: {
        borderWidth: 1,
        borderColor: 'silver',
        width: '100%',
        height: 38,
        borderRadius: 5,
        padding: 5,
    },

    inputText: {
        fontSize: 14,
        padding: 2,
        marginTop: 10
    },

    button: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        width: '100%',
        height: 38,
        backgroundColor: 'steelblue',
        marginTop: '15%',
        borderRadius: 5, 
        padding: 8,
        
    },

    recoverPass: {
        fontSize: 13,
        textAlign: 'center',
        padding: 6,
    }
})

export default styles;