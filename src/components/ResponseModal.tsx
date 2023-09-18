import * as React from "react";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {ReactNativeModal} from "react-native-modal";
import {Ionicon} from "./Icon";
import {useEffect, useState} from "react";
import globalColors from "../localizations/globalColors";


type Props = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    result: boolean,
    playAgain: () => void
}
const ResponseModal: React.FC<Props> = ({visible, setVisible, result, playAgain}) => {


    const reset = () => {
        setVisible(false)
        setTimeout(()=> playAgain(), 300)
    }

    // useEffect(()=> close(), )
    return(
        <ReactNativeModal
            isVisible={visible}
            backdropOpacity={.95}
            backdropColor={result ? '#1f5e34' : '#770505'}
            style={{alignItems:'center'}}
        >
            <View >
                <View style={{alignItems:'center'}}>
                    <Ionicon size={'big'} name={result ? 'ios-checkmark-circle-outline' : 'ios-close-circle-outline'} color={'white'} />
                        <Text style={[styles.text, {color: result ? '#132515' : '#1e0007'}]}>{result ? "Correct!" : "Wrong!"}</Text>
                    <View style={{paddingTop: 10}}>
                        <TouchableOpacity onPress={reset} style={[styles.button, ]}>
                            <Text style={styles.playAgain}>{result ? "Play Again?" : "Try Again?"}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <TouchableOpacity style={[styles.button, ]} onPress={()=> setVisible(false)}>
                            <Text style={styles.closeButton}>{"Close"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </ReactNativeModal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        width: '50%',
        borderRadius: 20
    },
    text: {
        fontFamily: 'Futura-Bold',
        fontSize: 30,
        color: 'white'
    },
    closeButton: {
        fontSize: 22,
        color: '#807676',
        fontFamily: 'Futura'
    },
    playAgain: {
        fontFamily: 'Futura-MediumItalic',
        fontSize: 25,
        color: 'white'
    },
    button: {
        width: 175,
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: globalColors.accentColor
    }


})

export default ResponseModal;
