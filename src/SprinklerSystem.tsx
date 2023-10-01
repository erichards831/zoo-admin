import React, {useState, useEffect} from "react"
import {StyleSheet, View, Text, TouchableOpacity, Switch, LogBox} from "react-native"
import { Ionicon } from "./components/Icon"
import globalColors from "./localizations/globalColors"
import SetScheduleModal from "./components/SetScheduleModal";


const SprinklerSystem: React.FC = ()=> {
    const [masterAct, setMasterAct] = useState<boolean | null>(false)
    const [system1, setSystem1] = useState(false)
    const [system2, setSystem2] = useState(false)
    const [system3, setSystem3] = useState(false)

    const [sched1, setSched1] = useState(null)
    const [sched1Vis, setSched1Vis] =useState(false)

    const [sched2, setSched2] = useState(null)
    const [sched2Vis, setSched2Vis] =useState(false)

    const [sched3, setSched3] = useState(null)
    const [sched3Vis, setSched3Vis] =useState(false)


    const [temp, setTemp] = useState(false)

    useEffect(()=> {
        LogBox.ignoreAllLogs()
    })


    const toggleMasterActivation = () => {
        setMasterAct(!masterAct)
        setSystem1(!masterAct)
        setSystem2(!masterAct)
        setSystem3(!masterAct)

    }

    useEffect(()=> {
        if((system1 && system2 && system3)){
            let temp = (system1 && system2 && system3)
            setTemp(temp)
        }else if((!system1 && !system2 && !system3)){
            setTemp(false)
        }else{
            setTemp(null)
        }
    }, [system1, system2, system3])


    useEffect(()=> {
        setMasterAct(temp)
    }, [temp])



    // const showModal = () =>

    ///add pngs of each zone design && set schedule
    return(
        <View style={styles.container}>
            <View style={styles.masterContainer}>
                <View style={{width: '100%', flexDirection: 'row', alignItems:'center'}}>
                    <View style={{width: '60%'}}>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <View style={{alignSelf: 'flex-start'}}>
                                {/*<Ionicon name={masterLock ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={masterLock !== null ? masterLock ?  globalColors.primaryDark: globalColors.veryBad: globalColors.ok}/>*/}

                            </View>
                            <View>
                                <Text style={styles.subtitle}>Master Activation</Text>
                                <Text>Activate/Deactivate All Sprinkler Systems</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{width: '40%',}}>
                        <View style={{alignItems:'flex-end'}}>
                            <TouchableOpacity
                                style={[styles.masterButton, {backgroundColor: masterAct !== null ? masterAct ?  globalColors.excellent: globalColors.veryBad: globalColors.ok}]}
                                onPress={toggleMasterActivation}
                            >
                                <Text style={[styles.subtitle, {fontSize: 14}]}>{masterAct ? "Activated" : "Unactivated"}</Text>

                            </TouchableOpacity>
                            {/*<Switch*/}
                            {/*    trackColor={{true: '#48ff00',}}*/}
                            {/*    ios_backgroundColor={'#850808'}*/}
                            {/*    value={masterLock}*/}
                            {/*    onValueChange={toggleMasterLock}/>*/}
                        </View>
                    </View>


            </View>

            </View>
            <View style={{paddingTop: 25}}>
                <View style={styles.masterContainer}>
                    <View style={{width: '100%',}}>
                        <Text style={styles.subtitle}>Individual Sprinkler Systems</Text>
                        <Text>Activate/Deactivate individual zone sprinker systems</Text>
                        <View style={{paddingTop: 10, }}>
                            <View>
                                <View style={{paddingBottom: 10}}>
                                <View style={[styles.masterContainer, {flexDirection: 'row', alignItems: 'center', width: '100%'}]}>
                                    <View style={{width: '60%'}}>
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            {/*<Ionicon name={lock1 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock1 ? globalColors.primaryDark: '#850808'}/>*/}
                                            <Text style={styles.text}>Rainforest Zone</Text>
                                        </View>
                                        <View style={{paddingTop: 10, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                                            <TouchableOpacity
                                                style={[styles.schedule, sched1 ? {backgroundColor: globalColors.darkBlue, borderLeftColor: globalColors.blue}: null]}
                                                onPress={()=> setSched1Vis(true)}
                                            >
                                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                    <View style={{paddingRight: 5}}>
                                                        <Ionicon size={'medium'} name={'ios-calendar'} color={sched1 ? 'white' : 'rgba(0, 0, 0, .75)'} />
                                                    </View>
                                                    <Text style={styles.schedText}>{sched1 ? sched1: "Set Schedule"}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <View style={{alignItems: 'flex-end'}}>
                                            <Switch
                                                trackColor={{true: '#48ff00',}}
                                                ios_backgroundColor={'#850808'}
                                                value={system1}
                                                onValueChange={()=> setSystem1(!system1)}/>
                                        </View>

                                    </View>
                                </View>
                                </View>
                                <SetScheduleModal vis={sched1Vis} setVis={setSched1Vis} sched={sched1} setSched={setSched1} zone={"Rainforest Zone"}/>
                                <View style={{paddingBottom: 10}}>
                                <View style={[styles.masterContainer, {flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 10}]}>
                                    <View style={{width: '60%'}}>
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            {/*<Ionicon name={system2 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock2 ? globalColors.primaryDark: '#850808'}/>*/}
                                            <Text style={styles.text}>Arctic Zone</Text>
                                        </View>
                                        <View style={{paddingTop: 10, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                                            <TouchableOpacity
                                                style={[styles.schedule, sched2 ? {backgroundColor: globalColors.darkBlue, borderLeftColor: globalColors.blue}: null]}
                                                onPress={()=> setSched2Vis(true)}
                                            >
                                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                    <View style={{paddingRight: 5}}>
                                                        <Ionicon size={'medium'} name={'ios-calendar'} color={sched2 ? 'white' : 'rgba(0, 0, 0, .75)'} />
                                                    </View>
                                                    <Text style={styles.schedText}>{sched2 ? sched2: "Set Schedule"}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <View style={{alignItems: 'flex-end'}}>
                                            <Switch
                                                trackColor={{true: '#48ff00'}}
                                                ios_backgroundColor={'#850808'}
                                                value={system2}
                                                onValueChange={()=> setSystem2(!system2)}/>
                                        </View>


                                    </View>
                                </View>
                                </View>
                                <SetScheduleModal vis={sched2Vis} setVis={setSched2Vis} sched={sched2} setSched={setSched2} zone={"Arctic Zone"}/>

                                <View style={{paddingBottom: 10}}>
                                <View style={[styles.masterContainer, {flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 10}]}>
                                    <View style={{width: '60%'}}>
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            {/*<Ionicon name={lock3 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock3 ? globalColors.primaryDark: '#850808'}/>*/}
                                            <Text style={styles.text}>Grassland Zone</Text>
                                        </View>
                                        <View style={{paddingTop: 10, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                                            <TouchableOpacity
                                                style={[styles.schedule, sched3 ? {backgroundColor: globalColors.darkBlue, borderLeftColor: globalColors.blue}: null]}
                                                onPress={()=> setSched3Vis(true)}
                                            >

                                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                    <View style={{paddingRight: 5}}>
                                                        <Ionicon size={'medium'} name={'ios-calendar'} color={sched3 ? 'white' : 'rgba(0, 0, 0, .75)'} />
                                                    </View>
                                                    <Text style={styles.schedText}>{sched3 ? sched3: "Set Schedule"}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <View style={{alignItems: 'flex-end'}}>
                                            <Switch
                                                trackColor={{true: '#48ff00'}}
                                                ios_backgroundColor={'#850808'}
                                                value={system3}
                                                onValueChange={()=> setSystem3(!system3)}/>
                                        </View>
                                    </View>
                                </View>
                                </View>
                                <SetScheduleModal vis={sched3Vis} setVis={setSched3Vis} sched={sched3} setSched={setSched3} zone={"Grassland Zone"}/>

                            </View>
                            {/*<View style={{width: '40%'}}>*/}
                            {/*    <View style={{alignItems:'flex-end'}}>*/}
                            {/*        <View>*/}
                            {/*            <Switch*/}
                            {/*                trackColor={{true: '#48ff00'}}*/}
                            {/*                value={masterLock}*/}
                            {/*                onValueChange={toggleMasterLock}/>*/}

                            {/*        </View>*/}
                            {/*        <View style={{paddingTop: 10}}>*/}
                            {/*            <Switch*/}
                            {/*                trackColor={{true: '#48ff00'}}*/}
                            {/*                value={masterLock}*/}
                            {/*                onValueChange={toggleMasterLock}/>*/}

                            {/*        </View>*/}
                            {/*        <View style={{paddingTop: 10}}>*/}
                            {/*            <Switch*/}
                            {/*                trackColor={{true: '#48ff00'}}*/}
                            {/*                value={masterLock}*/}
                            {/*                onValueChange={toggleMasterLock}/>*/}

                            {/*        </View>*/}

                            {/*    </View>*/}

                            {/*</View>*/}
                        </View>



                    </View>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "600"
    },
    text: {
        fontSize: 17,
        fontWeight: '500'
    },
    masterContainer: {
        width: '100%',
        // height: 100,
        padding: 15,
        backgroundColor: 'rgba(255, 255, 255, .5)',
        borderRadius: 20,
        alignItems:'center'
    },
    masterButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 110,
        borderWidth: 2,
        borderColor: 'grey'
    },
    mediumText:{
        fontSize: 16,
        fontWeight: '400'
    },
    schedule:{
        width: '110%',
        height: '100%',
        backgroundColor: 'grey',
        alignItems: 'flex-start',
        padding: 5,
        borderRadius: 5,
        borderLeftColor: 'black',
        borderLeftWidth: 5
    },
    schedText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 15
    }


})

export default SprinklerSystem;
