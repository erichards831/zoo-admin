import React, {useState, useEffect} from "react"
import {StyleSheet, View, Text, TouchableOpacity, Switch} from "react-native"
import { Ionicon } from "./components/Icon"
import globalColors from "./localizations/globalColors"


const SprinklerSystem: React.FC = ()=> {
    const [masterAct, setMasterAct] = useState<boolean | null>(false)
    const [system1, setSystem1] = useState(false)
    const [system2, setSystem2] = useState(false)
    const [system3, setSystem3] = useState(false)
    const [temp, setTemp] = useState(false)


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

    ///add pngs of each zone design
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
                            <View >
                                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                                    <View style={{width: '60%'}}>
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            {/*<Ionicon name={lock1 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock1 ? globalColors.primaryDark: '#850808'}/>*/}
                                            <Text style={styles.text}>Animal Pen 1</Text>
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
                                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 10}}>
                                    <View style={{width: '60%'}}>
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            {/*<Ionicon name={system2 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock2 ? globalColors.primaryDark: '#850808'}/>*/}
                                            <Text style={styles.text}>Animal Pen 2</Text>

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
                                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 10}}>
                                    <View style={{width: '60%'}}>
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            {/*<Ionicon name={lock3 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock3 ? globalColors.primaryDark: '#850808'}/>*/}
                                            <Text style={styles.text}>Animal Pen 3</Text>

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
    }


})

export default SprinklerSystem;
