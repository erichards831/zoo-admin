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
        <ScrollView>
            <View style={styles.container}>
                <View style={{paddingTop: 25}}>
                    <Image source={require('../assets/Blank_Park_Zoo_Entrance.jpg')} style={{width: 350, height: 300, borderRadius: 25 }} />
                    <View style={{paddingTop: 5,}}>
                        <Text style={{fontStyle: 'italic', textAlign: 'center'}}>Blank Park Zoo is an actual zoo that exist and is located in Des Moines, Iowa</Text>
                    </View>
                    <View style={{paddingTop: 10}}>
                        <View style={[styles.masterContainer, ]}>
                            <View style={{alignSelf: 'flex-start'}}>
                                <Text style={styles.subtitle}>Hello, Admin!</Text>
                            </View>
                            <View style={{paddingTop: 10, alignSelf: 'flex-start'}}>
                                <Text style={styles.text}>Tasks to Be Done:</Text>
                                <View style={{paddingLeft: 10}}>
                                    <View style={{paddingTop: 5}}>
                                        <Text style={styles.medText}>Activate/Deactivate Lock Systems</Text>
                                    </View>
                                    <View style={{paddingTop: 5}}>
                                        <Text style={styles.medText}>Feed Animal Pens when Low</Text>
                                    </View>
                                    <View style={{paddingTop: 5}}>
                                        <Text style={styles.medText}>Activate/Deactivate Sprinklers</Text>
                                    </View>
                                    <View style={{paddingTop: 5}}>
                                        <Text style={styles.medText}>Schedule Sprinkler Times</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                    </View>

                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20,
        alignItems: 'center'

    },
    subtitle: {
        fontSize: 20,
        fontWeight: "600"
    },
    text: {
        fontSize: 17,
        fontWeight: '500'
    },
    medText: {
        fontSize: 16

    },
    masterContainer: {
        width: '100%',
        // height: 100,
        padding: 15,
        backgroundColor: 'rgba(255, 255, 255, .5)',
        borderRadius: 20,
        alignItems:'center'
    },


})

export default Home;
