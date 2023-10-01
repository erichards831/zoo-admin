import React, {useState, useEffect} from "react"

import {View, StyleSheet, TouchableOpacity, Text} from "react-native"
import globalColors from "../localizations/globalColors"
import { Ionicon } from "./Icon"


type Props={
    alert: boolean,
    setAlert: (alert: boolean) => void,
    interval: number,
    feedLog: string[] ,
    setFeedLog: (feedLog: []) => void,
    animal: string,
    lowFoodAlert: (arg0: string)=> void
}
const FeedBucket: React.FC<Props> = ({alert, setAlert, interval, feedLog, setFeedLog, animal, lowFoodAlert}) => {
    const [foodLevel, setFoodLevel] = useState(4)
    const [foodInterval, setFoodInterval] = useState(null)
    const [feeding, setFeeding] = useState(false)
    const [eating, setEating] = useState(true)
    const [disable, setDisable] = useState(false)
    const [seconds, setSeconds] = useState(interval)
    const [countFeed, setCountFeed] = useState(0)


    const feedTime = interval;



    useEffect(()=> {
        foodLevel > 3 ? setDisable(true) : setDisable(false)
        foodLevel < 2 ? lowFoodAlert(animal): null

        if(foodLevel < 2){
            return;
        }
        const interval = setInterval(decrement, feedTime)
        return ()=> clearInterval(interval)
    }, [foodLevel])

    const decrement = () => foodLevel > 1 ? setFoodLevel(foodLevel - 1) : null


    const incrementFood = () => {
        const now = new Date()
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hour = now.getHours();
        const minute = now.getMinutes();
        //
        let min = minute.toString();
        if(minute < 10){
            min = "0" + minute
        }

        // const second = now.getSeconds();
        let feedDay = month + "/" + day + "/" + year
        let feedTime = hour + ":" + min
        let feedLogItem = feedDay + "\t"  + feedTime

        // console.log(feedDay + "\t" + feedTime)
        let tempLog = feedLog.slice()
        !tempLog.includes(feedLogItem) ? tempLog.push(feedLogItem) : null
        setFeedLog(tempLog)

        let temp = foodLevel;
        if(temp < 4){
            temp += 1;
            setFoodLevel(temp)

            // clearTimeout(timeout)
        }
        setCountFeed(countFeed + 1)
    }

    return (
        <View>
            <View style={styles.container}>
                {foodLevel > 3 ? <View style={[styles.bucketLevel, {backgroundColor: globalColors.excellent, borderTopLeftRadius: 20, borderTopRightRadius: 20, position:'absolute', bottom: 200}]}/>
                    : <View style={[styles.lineBreak, {position: 'absolute', top: 50}]}/>}
                {foodLevel > 2 ? <View style={[styles.bucketLevel, {backgroundColor: globalColors.ok, position: 'absolute', bottom: 150}]}/> :
                    <View style={[styles.lineBreak, {position: 'absolute', top: 100}]}/>}
                {foodLevel > 1 ? <View style={[styles.bucketLevel, {backgroundColor: globalColors.bad, position: 'absolute', bottom: 100}]}/>
                :   <View style={[styles.lineBreak, {position: 'absolute', top: 150}]}/>}

                {foodLevel > 0 ? <View style={[styles.bucketLevel, {backgroundColor: globalColors.veryBad, position:'absolute', bottom: 50}]}/> :
                    <View style={[styles.lineBreak, {position: 'absolute', top: 200}]}/>}

                <TouchableOpacity onPress={incrementFood} disabled={disable}>
                    <View style={[styles.bucketLevel, {backgroundColor: !disable ? 'rgba(255, 255, 255, .5)' : 'rgba(0, 0, 0, .25)', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, position: 'absolute', top: 200}]}>
                        <Text style={[styles.subtitle, disable ? {color: 'rgba(255, 255, 255, .75)'}: null]}>{disable ? "At Full" : "Feed"}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 125,
        height: 250,
        backgroundColor: 'rgba(255, 255, 255, .5)',
        borderRadius: 20,
    },
    bucketLevel: {
        height: 50,
        width: '100%',
        alignItems:'center',
        justifyContent: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "600"
    },
    lineBreak:{
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, .25)',

    }

})

export default FeedBucket;
