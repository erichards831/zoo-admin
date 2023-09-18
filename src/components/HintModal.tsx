import * as React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicon} from "./Icon";
import {ReactNativeModal} from "react-native-modal";


type Props = {
    answerLength: number,
    visible: boolean,
    setVisible: (visible: boolean) => void,
    inputType: string

}

const HintModal: React.FC<Props>= ({answerLength, visible, setVisible, inputType})=> {
    return (
        <ReactNativeModal
            isVisible={visible}
            backdropOpacity={.7}
            // backdropColor={result ? '#1f5e34' : '#770505'}
            style={{alignItems:'center'}}
        >
            <View style={styles.centeredView}>
                <View style={{position: 'absolute', right: 10, top: 10}}>
                    <TouchableOpacity onPress={()=> setVisible(false)}>
                        <Ionicon size={'large'} name={'ios-close'} color={'black'} />

                    </TouchableOpacity>


                </View>
                <View>
                    <Text style={styles.title}>Hints</Text>
                </View>
                <View style={{paddingTop: 20}}>
                    {inputType === 'text input'?
                        <View>
                            <Text style={styles.text}>Answer is {answerLength} letters long</Text>
                        </View>
                        : null
                    }

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
    title: {
        fontFamily: 'Futura-Medium',
        fontSize: 25,

    },
    subtitle: {
        fontFamily: 'Futura-Medium',
        fontSize: 18,

    },
    text: {
        fontSize: 18,
        fontFamily: 'Futura-Book'
    },

})


export default HintModal;
