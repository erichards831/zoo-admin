import React, {useEffect, useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View, Text, ScrollView, TouchableWithoutFeedback} from "react-native";
import globalColors from "../localizations/globalColors";

type Props = {

    timeType: string,

    time: string | null,
    setTime: (t: string) => void,
    focused: boolean,
    setFocused: (focused: boolean) => void,
    otherFocused: boolean,
    valid: boolean,

    defaultTime: string
}
const TimeInput: React.FC<Props> = ({timeType, focused, setFocused, otherFocused, valid, defaultTime, time, setTime}) => {
    const times = ["12:00am", "1:00am",  "2:00am",  "3:00am",  "4:00am", "5:00am", "6:00am","7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm" ]

    // const [time, setTime] = useState(times[times.indexOf(defaultTime)])

    const [dataSourceCords, setDataSourceCords] = useState([])
    const [scrollToIndex, setScrollToIndex] =useState("")
    const [ref, setRef] = useState(null)
    // const [focused, setFocused] = useState(false)

    // useEffect(()=> {
    //     setTime(times[times.indexOf(defaultTime)])
    // }, [])
    const pressTime = (t: string)=> {
        // setSched(t)
        setTime(t)
    }




    useEffect(()=> {
        // setFocused(!otherFocused)
        otherFocused ? setFocused(false) : null
    }, [otherFocused])




    const showTimes = () => {
        return(
            <View style={{ paddingTop: 5, position: 'absolute'}}>
                <View>
                    <View style={styles.timesContainer}>
                        <ScrollView>
                            <View style={{padding: 15}}/>
                            {times.map((t)=>(
                                <View
                                    key={t}
                                >
                                    <TouchableOpacity
                                        onPress={()=> pressTime(t)}
                                        style={[styles.timeContainer, t === time ? {backgroundColor: 'rgba(0,0, 0, .10)'}: null]}>
                                        <Text style={styles.text}>{t}</Text>
                                    </TouchableOpacity>
                                </View>

                            ) )}
                        </ScrollView>

                    </View>
                </View>

            </View>
        )
    }
    return (
        <View>
            <TouchableWithoutFeedback onPress={()=> setFocused(false)}>
                <View>
                    <TouchableOpacity
                        style={[styles.timeBox,  !valid ? {backgroundColor: 'rgba(255, 0, 0, .1)',borderBottomWidth: 2, borderBottomColor: globalColors.veryBad } : null, focused ? {backgroundColor: !valid ? 'rgba(255, 0, 0, .1)' :'rgba(0, 0, 0, .10)', borderBottomWidth: 2, borderBottomColor: !valid ? globalColors.veryBad : globalColors.blue}: null]}
                        // value={time}
                        onPress={()=> setFocused(true)}
                        // onChangeText={(t) => setTime(t)}
                        onFocus={()=> setFocused(true)}
                        onBlur={()=> setFocused(false)}
                        // caretHidden={true}
                    >
                        <Text style={styles.text}>{time !== "" ? time : defaultTime}</Text>
                    </TouchableOpacity>
                    <View>
                        {focused ? showTimes() : null}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )

}

const styles = StyleSheet.create({
    timeBox: {
        padding: 5,
        // backgroundColor: 'rgba(0, 0, 0, .10)',
        alignItems: 'center',
        borderRadius: 5,
        width: 75,
        height: 35,

    },
    text:{
        fontSize: 16
    },
    timesContainer: {
        width: 100,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        // borderWidth: 1,
        // borderColor: 'grey',
        borderRadius: 5,
        // padding: 10,
        height: 200,
        shadowOpacity: .15,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 8,
        // borderRadius: 8
        // shadowOffset:

    },
    timeContainer:{
        padding: 10,
        // zIndex: 999
    }

})

export default TimeInput;
