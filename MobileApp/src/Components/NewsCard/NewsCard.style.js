import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";


export default StyleSheet.create({
    image:{
        margin:10,
        height: Dimensions.get('window').height/4,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    title:{
        fontWeight:'bold',
        fontSize: 18,
    },

    description:{
        marginTop:3,
    },
    textview: {
        padding:5,
    },
    author:{
        textAlign: 'right',
        fontStyle:'italic',

    },
})