import * as React from "react"
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Touchable,
    ActivityIndicator, TextInput, Image, Alert
} from "react-native";




const Home: React.FC = ()=>{
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        justifyContent:'center',
        marginBottom: 40
    },
    titleText: {
        fontFamily: 'Futura',
        fontSize: 25,
        color: 'white'
    },
    riddleText:{
        color: 'white',
        fontSize: 18,
        fontFamily:'Futura-Book'
    },
    iconContainer: {
        width: 45,
        aspectRatio: 1,
        backgroundColor: 'rgba(191, 191, 199, .25)',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center'
    },
    riddleContainer: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
        // height: '100%'
        // width: 300
    },
    textBox: {
        backgroundColor: 'rgba(160,155,245,0.1)',
        width: 350,
        height: 200,
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        borderRadius: 25
    },
    input: {
        fontFamily: 'Futura',
        fontSize: 25,
        color: 'white',

    }

})

export default Home;
