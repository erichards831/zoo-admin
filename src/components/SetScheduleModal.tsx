import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback} from "react-native";
import {ReactNativeModal} from "react-native-modal";
import {Ionicon} from "./Icon";
import globalColors from "../localizations/globalColors";
import TimeInput from "./TimeInput";


type Props={
    vis: boolean,
    setVis: (vis: boolean) => void,
    sched: any,
    setSched: (arg0: any) => void,
    zone: string

}
//start time, end time, occurs every [blank]
const SetScheduleModal: React.FC<Props> = ({vis, setVis, sched, setSched, zone}) => {

    // const times = ["12:00am", "1:00am",  "2:00am",  "3:00am",  "4:00am", "5:00am", "6:00am","7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm" ]

    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [occurrence, setOccurrence] = useState(null)
    const [startFocus, setStartFocus] = useState(false)
    const [endFocus, setEndFocus] = useState(false)

    const [showSave, setShowSave] = useState(true)

    const [startValid, setStartValid] = useState(true)

    const [endValid, setEndValid] = useState(true)
    const [saveDisabled, setSaveDisabled] = useState(false)

    const close = () => {
        setVis(false)
    }

    const onSave = ()=> {
        if(start === "" && end === ""){
            setStart("9:00am")
            setEnd("5:00pm")
        }
        setVis(false)
    }

    const closeFocus = () => {
        setStartFocus(false)
        setEndFocus(false)
    }

    useEffect(()=>{
        setShowSave(!endFocus)
        // endFocus ? setShowSave(false) : setShowSave(true)
    }, [endFocus])



    useEffect(()=> {
        let startNum = start.slice(0, 2).includes(':') ? parseInt(start.slice(0, 1)) : parseInt(start.slice(0, 2))
        let endNum = end.slice(0, 2).includes(':') ? parseInt(end.slice(0, 1)) : parseInt(end.slice(0, 2))

        if(start === "" && end === ""){
            setStartValid(true)
            setEndValid(true)
        }else if(start.includes('pm') && end.includes('am')){
            setStartValid(false)
        }else if((start.includes('pm') && end.includes('pm'))){
            setStartValid(startNum === 12 || startNum < endNum)
            setEndValid(startNum === 12  || endNum > startNum)
        }else if((start.includes('am') && end.includes('am'))){
            setStartValid(startNum === 12 || startNum < endNum)
            setEndValid( (startNum === 12 && startNum !== endNum) || (endNum !== 12 && endNum > startNum))
        }
        else{
            setStartValid(start.includes('am'))
            setEndValid(end.includes('pm'))
        }

        if((start !== "" && end !== "") && (startValid && endValid)){
            setSched(start + "-" + end)
        }
        // if((start.includes('pm') && end.includes('am'))){
        //     setStartValid(false)
        // }else if(start.includes('pm') && end.includes('pm')){
        //     setStartValid(parseInt(startNum) === 12 || parseInt(startNum) < parseInt(endNum))
        //     setEndValid(parseInt(startNum) === 12 || parseInt(endNum) > parseInt(startNum))
        // }
        // else if(start.includes('am') && end.includes('am')) {
        //     setStartValid(parseInt(startNum) === 12 || parseInt(startNum) < parseInt(endNum))
        //     setEndValid(parseInt(startNum) === 12 || parseInt(endNum) > parseInt(startNum))
        //     // setStartValid((parseInt(startNum) === 12))
        // }
        // }else{
        //     setStartValid(true)
        //     setEndValid(true)
        // }


        // startValid && endValid ? console.log("hello") : null

    }, [start, end])





    return (
        <ReactNativeModal
            backdropOpacity={.75}
            isVisible={vis}
            style={{alignItems: 'center'}}
        >
            <TouchableWithoutFeedback onPress={closeFocus} >
                <View style={styles.modalView}>
                    <View style={{alignSelf: 'flex-end'}}>
                        <TouchableOpacity onPress={close}>
                            <Ionicon size={'large'} name={'ios-close'} color={'grey'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{alignSelf: 'flex-start'}}>
                        <Text style={styles.modalText}>{zone+"\n"}Sprinkler Schedule</Text>
                    </View>
                    <View style={{paddingTop: 10, alignSelf: 'flex-start', width: '100%'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>

                            <View style={{width: '40%'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{paddingRight: 10}}>
                                        <Ionicon size={'medium'} name={'ios-time-outline'} color={'grey'} />
                                    </View>
                                    <View>
                                        <Text style={styles.subText}>Set Time: </Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{width: '60%', }}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <TimeInput timeType={"start"} focused={startFocus} setFocused={setStartFocus} otherFocused={endFocus}  time={start} setTime={setStart} valid={startValid} defaultTime={"9:00am"}/>
                                    </View>
                                    <View style={{padding: 10}}>
                                        <Text>{"-"}</Text>

                                    </View>
                                    <View>
                                        <TimeInput timeType={"end"} focused={endFocus} setFocused={setEndFocus} otherFocused={startFocus} time={end} setTime={setEnd} valid={endValid} defaultTime={"5:00pm"}/>
                                    </View>
                                </View>
                            </View>

                            {/*<Text style={styles.accentText}>When system starts</Text>*/}
                        </View>

                        {/*<View style={{paddingTop: 5}}>*/}
                        {/*    <Text style={styles.subText}>Activate Every: </Text>*/}
                        {/*</View>*/}
                    </View>
                    {showSave ?
                        <View style={{alignSelf: 'flex-end', paddingTop: 20}}>
                            <TouchableOpacity style={[styles.save, !startValid || !endValid ? {backgroundColor: 'grey'} : null]} onPress={onSave} disabled={!startValid || !endValid} >
                                <Text style={styles.saveText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                        : null}
                </View>

            </TouchableWithoutFeedback>

        </ReactNativeModal>

    )
}

const styles = StyleSheet.create({
    modalView: {
        padding: 15,
        paddingTop: 10,
        borderRadius: 20,
        alignItems: 'center',
        width: '95%',
        backgroundColor: 'white',
        height: 225
    },
    modalText: {
        fontWeight: '400',
        fontSize: 20
    },
    subText: {
        fontSize: 16
    },
    accentText: {
        fontSize: 14,
        color: 'grey'
    },
    save: {
        backgroundColor: globalColors.blue,
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
        width: '100%'
    },
    saveText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 18
    },
    timeBox: {
        backgroundColor: 'rgba(0, 0, 0, .25)'
    }

})

export default SetScheduleModal;
