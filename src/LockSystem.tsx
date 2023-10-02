import React, {useState, useEffect} from "react"
import {View, SafeAreaView, StyleSheet, Text, Switch, TouchableOpacity, Image} from "react-native"
import { Ionicon } from "./components/Icon"
import globalColors from "./localizations/globalColors"
import LowFoodAlert from "../src/components/LowFoodAlert"
import {useRoute} from "@react-navigation/native"

const LockSystem: React.FC = ()=> {
    const [masterLock, setMasterLock] = useState<boolean | null>(true)
    const [lock1, setLock1] = useState(true)
    const [lock2, setLock2] = useState(true)
    const [lock3, setLock3] = useState(true)
    const [temp, setTemp] = useState(null)

    const route = useRoute()

    const toggleMasterLock = () => {
        setMasterLock(!masterLock)
        setLock1(!masterLock)
        setLock2(!masterLock)
        setLock3(!masterLock)
    }


    useEffect(()=> {
        if((lock1 && lock2 && lock3)){
            let temp = (lock1 && lock2 && lock3)
            setTemp(temp)
        }else if((!lock1 && !lock2 && !lock3)){
            setTemp(false)
        }else{
            setTemp(null)
        }
    }, [lock1, lock2, lock3])


    useEffect(()=> {
        setMasterLock(temp)
    }, [temp])


    const [foodAlert, setFoodAlert] = useState(false)

    useEffect(()=> {
        console.log(foodAlert)
    }, [foodAlert])

    const alert = route.params





    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.masterContainer}>
                <View style={{width: '100%', flexDirection: 'row', alignItems:'center'}}>
                    <View style={{width: '60%'}}>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <View style={{alignSelf: 'flex-start'}}>
                                <Ionicon name={masterLock ? 'ios-lock-closed': 'ios-lock-open'} size={'large'} color={masterLock !== null ? masterLock ?  globalColors.primaryDark: globalColors.veryBad: globalColors.ok}/>
                            </View>
                            <View>
                                <Text style={styles.subtitle}>Master Lock</Text>
                                <Text>Lock/Unlock all animal cages</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{width: '40%',}}>
                        <View style={{alignItems:'flex-end'}}>
                            <TouchableOpacity
                                style={[styles.masterButton, {backgroundColor: masterLock !== null ? masterLock ?  globalColors.excellent: globalColors.veryBad: globalColors.ok}]}
                                onPress={()=> toggleMasterLock()}
                            >
                                <Text style={[styles.subtitle, {fontSize: 14}]}>{masterLock ? "Locked" : "Unlocked"}</Text>

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
                        <Text style={styles.subtitle}>Individual Locks</Text>
                        <Text>Lock/Unlock individual animal cages</Text>
                        <View style={{paddingTop: 10, }}>
                            <View >
                                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                                    <View style={{width: '60%'}}>
                                        <Text style={[styles.text, {paddingBottom: 5}]}>Jaguar Pen</Text>

                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            <View style={{paddingRight: 5}}>
                                                <Ionicon name={lock1 ? 'ios-lock-closed': 'ios-lock-open'} size={'large'} color={lock1 ? globalColors.primaryDark: '#850808'}/>

                                            </View>
                                            <Image source={require('../assets/Jaguar-main.png')} style={{width: 100, height: 100, borderRadius: 3}} />
                                        </View>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <View style={{alignItems: 'flex-end'}}>
                                            <Switch
                                                trackColor={{true: '#48ff00',}}
                                                ios_backgroundColor={'#850808'}
                                                value={lock1}
                                                onValueChange={()=> setLock1(!lock1)}/>
                                        </View>


                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 10}}>
                                    <View style={{width: '60%'}}>
                                        <Text style={[styles.text, {paddingBottom: 5, paddingTop: 5}]}>Polar Bear Pen</Text>

                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            <View style={{paddingRight: 5}}>
                                                <Ionicon name={lock2 ? 'ios-lock-closed': 'ios-lock-open'} size={'large'} color={lock2 ? globalColors.primaryDark: '#850808'}/>
                                            </View>
                                            <Image source={require('../assets/Polar_Bear_-_Alaska_(cropped).jpg')} style={{width: 100, height: 100, borderRadius: 3}} />

                                            {/*<Text style={styles.text}>Animal Pen 2</Text>*/}

                                        </View>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <View style={{alignItems: 'flex-end'}}>
                                            <Switch
                                                trackColor={{true: '#48ff00'}}
                                                ios_backgroundColor={'#850808'}
                                                value={lock2}
                                                onValueChange={()=> setLock2(!lock2)}/>
                                        </View>


                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 10}}>
                                    <View style={{width: '60%'}}>
                                        <Text style={[styles.text, {paddingBottom: 5, paddingTop: 5}]}>Zebra Pen</Text>

                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            <View style={{paddingRight: 5}}>
                                                <Ionicon name={lock3 ? 'ios-lock-closed': 'ios-lock-open'} size={'large'} color={lock3 ? globalColors.primaryDark: '#850808'}/>
                                            </View>
                                            {/*<Ionicon name={lock3 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock3 ? globalColors.primaryDark: '#850808'}/>*/}
                                            <Image source={require('../assets/c1030882-3db2-4174-80e4-dbd50ac3842b-Zebra_AA_08-2022-0015761_E.webp')} style={{width: 100, height: 100, borderRadius: 3}} />

                                            {/*<Text style={styles.text}>Zebra</Text>*/}

                                        </View>
                                    </View>
                                    <View style={{width: '40%'}}>
                                        <View style={{alignItems: 'flex-end'}}>
                                            <Switch
                                                trackColor={{true: '#48ff00'}}
                                                ios_backgroundColor={'#850808'}
                                                value={lock3}
                                                onValueChange={()=> setLock3(!lock3)}/>
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



        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    subtitle: {
        fontSize: 22,
        fontWeight: "600"
    },
    text: {
        fontSize: 20,
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
        width: 100,
        borderWidth: 2,
        borderColor: 'grey'
    }


})


export default LockSystem;
