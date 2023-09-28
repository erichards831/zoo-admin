import React, {useState, useEffect} from "react"
import { View, SafeAreaView, StyleSheet, Text, Switch} from "react-native"
import { Ionicon } from "./components/Icon"
import globalColors from "./localizations/globalColors"

const LockSystem: React.FC = ()=> {
    const [masterLock, setMasterLock] = useState(true)

    const [lock1, setLock1] = useState(true)
    const [lock2, setLock2] = useState(true)
    const [lock3, setLock3] = useState(true)


    const [temp, setTemp] = useState(true)


    // let val = true

    const toggleMasterLock = () => {
        setMasterLock(!masterLock)
        setLock1(!masterLock)
        setLock2(!masterLock)
        setLock3(!masterLock)
    }


    useEffect(()=> {
        if((lock1 && lock2 && lock3) || !(lock1 && lock2 && lock3)){
            let temp = lock1 && lock2 && lock3
            setTemp(temp)
        }
    }, [lock1, lock2, lock3])


    useEffect(()=> {
        setMasterLock(temp)
    }, [temp])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.masterContainer}>
                <View style={{width: '100%', flexDirection: 'row', alignItems:'center'}}>
                    <View style={{width: '60%'}}>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <View style={{alignSelf: 'flex-start'}}>
                                <Ionicon name={masterLock ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={masterLock ? globalColors.primaryDark: '#850808'}/>

                            </View>
                            <View>
                                <Text style={styles.subtitle}>Master Lock</Text>
                                <Text>Lock/Unlock all animal cages</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{width: '40%',}}>
                        <View style={{alignItems:'flex-end'}}>
                            <Switch
                                trackColor={{true: '#48ff00',}}
                                ios_backgroundColor={'#850808'}
                                value={masterLock}
                                onValueChange={toggleMasterLock}/>
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
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            <Ionicon name={lock1 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock1 ? globalColors.primaryDark: '#850808'}/>
                                            <Text style={styles.text}>Animal Pen 1</Text>
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
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            <Ionicon name={lock2 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock2 ? globalColors.primaryDark: '#850808'}/>
                                            <Text style={styles.text}>Animal Pen 2</Text>

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
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            <Ionicon name={lock3 ? 'ios-lock-closed': 'ios-lock-open'} size={'medium'} color={lock3 ? globalColors.primaryDark: '#850808'}/>
                                            <Text style={styles.text}>Animal Pen 3</Text>

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
    }


})


export default LockSystem;
