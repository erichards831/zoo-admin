import * as React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";
import globalColors from "../localizations/globalColors";
import {useEffect, useState} from "react";
import {Picker} from "@react-native-picker/picker";


type Props = {
    answerLetter: string,
    verifyAnswer: (arg0: string)=> void,

    submitPressed: boolean,

}
const Input: React.FC<Props> = ({answerLetter, verifyAnswer, submitPressed,}) => {

    // const [days, setDays] = useState<number[] | number>(Array.from(new Array(31), (x, i) => i))
    //
    // const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // const years = Array.from(new Array(117), (x, i) => i + 1907);

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const submitClicked = ()=> {
        // let mm = (months.indexOf(month) + 1).toString()
        // mm.length < 2 ? mm = '0' + mm : null;
        // let dd = day.toString()
        // dd.length < 2 ? dd = '0' + dd: null;
        // let yyyy = year.toString()
        // let bd = mm + '-' + dd + '-' + yyyy
    }
    //
    // useEffect(()=> {
    //     if(month === "Feb"){
    //         setDays(Array.from(new Array(29), (x, i) => i + 1))
    //     }else if(month === 'Sep' || month === 'June' || month === 'Nov' || month === 'April'){
    //         setDays(Array.from(new Array(30), (x, i) => i + 1))
    //     }else(
    //         setDays(Array.from(new Array(31), (x, i) => i + 1))
    //     )
    // }, [month])

    const [letter, setLetter] = useState(alphabet[0])


    useEffect(()=> {
        verifyAnswer(letter)
        // setIsCorrect(letter === answerLetter.toUpperCase())
        // console.log(verifyAnswer(letter))

    }, [submitPressed])



    return(
        <View style={styles.container} >
            {/*<View style={{paddingTop: 25}}>*/}
            {/*    <Text style={styles.titleText}>Solve the Riddle</Text>*/}
            {/*</View>*/}
            <View style={{alignSelf:'center', alignItems:'center', paddingTop: 20, }}>

                <Picker
                        enabled={false}
                        style={{width: 75}}
                        itemStyle={{fontFamily: 'Futura',
                            fontSize: 18,
                            // backgroundColor: '#4e4e59',
                            color: 'white',
                            borderRadius: 8
                        }}
                        selectedValue={letter}
                        // selectionColor={isRight !== null ? isRight  ? 'rgba(117,215,107,0.5)' : 'rgba(231,41,41,0.25)': null}
                        onValueChange={(val) => {
                            setLetter(val)
                            // setDayVis(true)
                            // setMonthEnabled(false)
                        }}
                    >
                        {alphabet.map(a => (
                            <Picker.Item
                                label={a}
                                value={a}
                            />
                        ))}

                    </Picker>

                {/*<Picker*/}
                {/*    style={{width: 90}}*/}
                {/*    itemStyle={{fontFamily: 'Futura', color: 'white'}}*/}
                {/*    selectedValue={day}*/}
                {/*    onValueChange={(val) => {*/}
                {/*        setDay(val)*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {days.map(d => (*/}
                {/*        <Picker.Item label={d.toString()} value={d} />*/}
                {/*    ))}*/}

                {/*</Picker>*/}
                {/*<Picker*/}
                {/*    style={{width: 120}}*/}
                {/*    itemStyle={{fontFamily: 'Futura', color: 'white'}}*/}
                {/*    selectedValue={year}*/}
                {/*    onValueChange={(val) => setYear(val)}*/}
                {/*>*/}
                {/*    {years.map(y => (*/}
                {/*        <Picker.Item label={y.toString()} value={y} />*/}
                {/*    ))}*/}
                {/*</Picker>*/}

            </View>
            {/*<Submit birthday={months.indexOf(month) + '-' + day.toString() + '-' + year.toString()} submitClicked={submitClicked} />*/}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: 'center',
        // backgroundColor: globalColors.background,

        // height: 200
    },
    titleText: {
        fontFamily: 'Futura',
        fontSize: 25,
        color: 'white',
    },
    inputContainer: {
        padding: 10,
        width: 55,
        backgroundColor: 'rgba(255,255,255,.25)',
        borderRadius: 8,
        height: 65,

    },
    text: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Futura'
    },
    submitButton: {
        padding: 10,
        borderRadius: 100,
        width: 150,
        height: 65,
        backgroundColor: globalColors.button,
        alignItems:'center',
        justifyContent:'center'

    }
})

export default Input;
