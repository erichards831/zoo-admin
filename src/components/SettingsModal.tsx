import * as React from "react"
import {StyleSheet, TouchableWithoutFeedback, View, Text, TextInput, TouchableOpacity} from "react-native";
import {ReactNativeModal} from "react-native-modal";
import {Ionicon} from "./Icon";


type Props = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    currentType: string,
    setCurrentType: (currentType: string) => void,

    submitPressed : boolean,
    setSubmitPressed: (submitPressed: boolean) => void
}
const SettingsModal: React.FC<Props> = ({visible, setVisible, currentType, setCurrentType, setSubmitPressed, submitPressed})=> {

    const setInputType = (type)=> {
        if(type !== 'picker' && currentType === 'picker'){
            setCurrentType('text input')
        }else if(type !== 'text input'){
            setCurrentType('picker')
        }

    }

    const onSubmit = () => {
        setSubmitPressed(!submitPressed)
        setTimeout(()=> setVisible(false), 200)

    }

    return (
            <ReactNativeModal
                isVisible={visible}
                transparent={true}
                backdropOpacity={.7}
                style={{alignItems:'center'}}
            >
                <View>
                    <View style={styles.centeredView}>
                        <View style={{position: 'absolute', top: 10, right: 10}}>
                            <TouchableOpacity onPress={()=> setVisible(false)}>
                                <Ionicon size={'large'} name={'ios-close'} color={'black'} />

                            </TouchableOpacity>

                        </View>
                        <View style={{paddingBottom: 20}}>
                            <Text style={styles.title}>Settings</Text>
                        </View>
                        <View style={{alignSelf:'flex-start', flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.subtitle}>Input Type</Text>
                            <View style={{flexDirection:'row', alignItems: 'center', paddingLeft:40}}>
                                <TouchableOpacity
                                    onPress={()=> setInputType('picker')}
                                    style={{flexDirection:'row', alignItems:'center'}}>
                                    <Ionicon size={'medium'} name={currentType === 'picker' ? 'ios-radio-button-on': 'ios-radio-button-off'} color={'black'} />
                                </TouchableOpacity>
                                <Text style={styles.text}>Picker</Text>

                                <TouchableOpacity
                                    onPress={()=> setInputType('text input')}
                                    style={{flexDirection:'row', alignItems:'center' ,paddingLeft: 20}}>
                                    <Ionicon size={'medium'} name={currentType === 'text input' ? 'ios-radio-button-on': 'ios-radio-button-off'} color={'black'} />
                                </TouchableOpacity>
                                <Text style={styles.text}>Text Input</Text>
                            </View>

                        </View>

                        <View style={{paddingTop: 30}}>
                            <TouchableOpacity onPress={onSubmit}>
                                <Text style={[styles.title, {fontSize: 20}]}>Submit</Text>

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
    exampleBox: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#afafbd',
        width: 100,
        aspectRatio: 1 /.75
    }

})

export default SettingsModal;
