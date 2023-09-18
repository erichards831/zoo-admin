import * as React from "react"
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Touchable,
    ActivityIndicator, TextInput, Image, Alert
} from "react-native";
import {useEffect, useState} from "react";
import Input from "./components/Input";
import LinearGradient from "react-native-linear-gradient";
import globalColors from "./localizations/globalColors";
import riddles from "./backend/riddles";
import {Ionicon} from "./components/Icon";
import SettingsModal from "./components/SettingsModal";
import ResponseModal from "./components/ResponseModal";



const Home: React.FC = ()=>{
    const [data, setData] = useState(null)
    const [riddleNum, setRiddleNum] = useState(null)
    const [riddle, setRiddle] = useState(null)
    const [pressed, setPressed] = useState(false)
    const [visible, setVisible] = useState(true)
    const [modalVis, setModalVis] = useState(false)
    const [currentType, setCurrentType] = useState('picker')
    const [mainLoad, setMainLoad] = useState(true)
    const [loading, setLoading] = useState(true)

    const [identifier, setIdentifier]  = useState(null)

    const [settingsSubmit, setSettingsSubmit] = useState<boolean | null>(null)

    useEffect(()=> {
        // setData(riddles)
        let temp = Math.floor(Math.random() * riddles.length);
        setRiddleNum(temp)
        setRiddle(riddles[temp])
        setIdentifier(riddles[temp].identifier)
        setLoading(false)
        // scrapeAnswers()

    }, [])



    const renderInputs = () => (
            riddle.answer.split('').map(a => <Input answerLetter={a} submitPressed={pressed} verifyAnswer={verifyAnswer}/>)
        )


    const hideRiddle = () => setVisible(!visible)

    let res = []
    let resString;

    const verifyAnswer = (letter: string)=> {
        res.push(letter)
        resString = res.join('')
    }

    const [showResults, setShowResults] = useState(false)
    const [results, setResults] =useState<string | undefined>(undefined)
    const [showHints, setShowHints] = useState(false)


    useEffect(()=> {
        setResults(resString ? resString : null)
    }, [pressed])

    const hints = ()=> {
        setShowHints(true)

    }


    const reset = ()=> {
        setLoading(true)
        let temp = Math.floor(Math.random() * riddles.length)
        // setRiddleNum(temp !== riddleNum ? temp: riddleNum > 0 ? Math.floor(Math.random() * riddleNum - 1): 1)
        setRiddle(riddles[temp])
        setIdentifier(riddles[temp].identifier)
        // scrapeAnswers()
        // setRiddleStore(riddleStore.push(riddle))
        setText("")
        setVisible(true)
        setTimeout(()=> setLoading(false), 500)
    }


    const settings = ()=> {
        setModalVis(true)
    }


    const [type, setType] = useState('picker')
    const [responseVis, setResponseVis] =useState(false)
    const [correct, setCorrect] = useState(false)
    const changeInputType = () => {
        showResults ? setShowResults(false): null
        setLoading(true)
        setType(currentType)
        setVisible(true)
        setTimeout(()=> setLoading(false), 400)
    }

    useEffect(()=> {
        if(settingsSubmit !== null){
            changeInputType()
        }

    }, [settingsSubmit])

    const [text, setText] = useState("")

    const verifyTextInput =()=> {
        setResults(text.toUpperCase())
        setResponseVis(true)
        // setShowResults(true)
    }

    const regex = /^[a-zA-Z]+$/;
    useEffect(()=> {
        if(text !== ""){
           if(!regex.test(text)){
               Alert.alert('No Numbers or Special Characters Allowed!')
               setTimeout(()=> setText(""), 300)
           }
        }

    }, [text])


    const clearText = () => {
        setText("")
    }




    return (
        <View>
        <ScrollView>
            <LinearGradient colors={['black', globalColors.background]} style={{width: '100%', height: '100%', position: 'absolute', top: 0}} />
            <SafeAreaView>
            <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{position:'absolute', left: "-27%"}}>
                    <TouchableOpacity
                        onPress={hideRiddle}
                        style={styles.iconContainer}
                    >
                        <Ionicon size={'large'} name={visible ? 'ios-eye' : 'ios-eye-off'} color={'white' } />
                        <Text style={{fontSize: 10, color: 'white'}}>{visible ? "Hide": "Show"}</Text>

                    </TouchableOpacity>
                </View>

                <Text style={styles.titleText}>Solve The One Word Riddle</Text>
                <View style={{position:'absolute', right: "-20%"}}>
                    <TouchableOpacity
                        onPress={reset}
                        style={styles.iconContainer}
                    >
                        <Ionicon size={'large'} name={'ios-refresh'} color={'white' } />
                        <Text style={{fontSize: 10, color: 'white'}}>Reset</Text>
                    </TouchableOpacity>
                </View>
                {/*<View style={{position:'absolute', right: "-30%"}}>*/}
                {/*    <TouchableOpacity*/}
                {/*        onPress={hints}*/}
                {/*        style={styles.iconContainer}*/}
                {/*    >*/}
                {/*        <Ionicon size={'large'} name={'ios-bulb'} color={'white' } />*/}
                {/*        <Text style={{fontSize: 10, color: 'white'}}>Hint</Text>*/}

                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
                <View style={{position:'absolute', right: "-27%"}}>
                    <TouchableOpacity
                        onPress={settings}
                        style={styles.iconContainer}
                    >
                        <Ionicon size={'large'} name={'ios-settings'} color={'white' } />
                        <Text style={{fontSize: 10, color: 'white'}}>Settings</Text>
                    </TouchableOpacity>
                </View>

            </View>
            { loading ?
                <View style={{alignSelf:'center', justifyContent: 'center', top: '50%'}}>
                    <ActivityIndicator size={'large'} color={globalColors.primary}/>
                </View>
                :
            <View >
                <View style={{flexDirection: 'row',  alignItems:'center'}}>

                        {/*<View style={currentType === 'picker' ? {width: visible ? '30%' : '0%', marginLeft: 95,}:*/}
                        {/*    {left: 0, width:  visible ? '35%': 0, paddingRight: visible ? 50: 0}*/}
                        {/*}>*/}
                    {currentType === 'picker' ?
                            <View style={{width: visible ? '25%': 0, alignItems:'center', paddingTop: 15}}>
                                {visible ?
                                    <Text style={styles.riddleText}>{riddle.riddle}</Text>
                                    : null }
                            </View>



                        :
                        <View style={{alignItems:'center', paddingTop: 15, width: visible ? '35%': 0,paddingRight: visible ? 40: 0}}>
                            {visible ?
                                <Text style={styles.riddleText}>{riddle.riddle}</Text>
                                : null }
                        </View>
                    }


                            {/*</View>*/}

                    <View>
                        {type === 'picker' ?
                            <View>

                                {/*<View style={{alignItems:'flex-end', paddingTop: 10}}>*/}
                                {/*    <Text style={styles.riddleText}>{riddle.answer.length}</Text>*/}

                                {/*</View>*/}
                                <View style={{flexDirection: 'row', width: visible ? 500: '100%', alignItems:'center', }}>
                                    {identifier ?
                                    <View style={{paddingLeft: 50, paddingRight: 10}}>
                                        <Text style={[styles.titleText, {color: globalColors.accentColor}]}>{identifier.toUpperCase() }</Text>
                                    </View>: null}
                                    <ScrollView horizontal={true} directionalLockEnabled={true} >
                                        {renderInputs()}
                                    </ScrollView>
                                </View>

                            </View>

                            :
                            <View style={{paddingTop: 40}}>
                                <View style={[styles.textBox, {flexDirection: 'row', alignItems: 'center'}]}>
                                    <View style={{paddingRight: 10}}>
                                        <Text style={[styles.titleText,{color: globalColors.accentColor}]}>{identifier ? identifier.toUpperCase() : null}</Text>
                                    </View>
                                    <TextInput
                                        value={text}
                                        style={styles.input}
                                        placeholder={'Enter your guess...'}
                                        placeholderTextColor={'#6e6e8f'}
                                        onChangeText={val => setText(val)}
                                        onEndEditing={verifyTextInput}
                                        // editable={editable}
                                    />
                                    <View style={{position: 'absolute', right: 10}}>
                                        <TouchableOpacity onPress={clearText}>
                                            <Ionicon size={'large'} name={'ios-close'} color={globalColors.accentColor} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                            }
                    </View>


                </View>


            </View>}
            {loading ? null :
            <View style={{paddingTop: 20}}>
                <TouchableOpacity onPress={()=>
                {
                    if(currentType === 'picker'){
                        setPressed(!pressed)
                        setResponseVis(true)
                        // setShowResults(true)
                    }else{
                        verifyTextInput()
                    }
                    // result()
                }}>
                    <Text style={[styles.titleText, {color: globalColors.secondary}]}>Submit</Text>
                </TouchableOpacity>
            </View>}
            <View>
                {/*{showResults ? result(): null}*/}
                {/*{showResults ? result() : null}*/}
            </View>
            <SettingsModal
                visible={modalVis}
                setVisible={setModalVis}
                currentType={currentType}
                setCurrentType={setCurrentType}
                submitPressed={settingsSubmit}
                setSubmitPressed={setSettingsSubmit}
            />
            <ResponseModal
                visible={responseVis}
                setVisible={setResponseVis}
                result={riddle ? results === riddle.answer.toUpperCase() : false}
                playAgain={reset}
                />
                {/*<HintModal*/}
                {/*    answerLength={riddle.answer.length}*/}
                {/*    visible={showHints}*/}
                {/*    setVisible={setShowHints}*/}
                {/*    mode={currentType}*/}
                {/*    />*/}


        </View>
            </SafeAreaView>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        justifyContent:'center',
        marginBottom: 40
    },
    titleText: {
        fontFamily: 'Futura',
        fontSize: 25,
        color: 'white'
    },
    riddleText:{
        color: 'white',
        fontSize: 18,
        fontFamily:'Futura-Book'
    },
    iconContainer: {
        width: 45,
        aspectRatio: 1,
        backgroundColor: 'rgba(191, 191, 199, .25)',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center'
    },
    riddleContainer: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
        // height: '100%'
        // width: 300
    },
    textBox: {
        backgroundColor: 'rgba(160,155,245,0.1)',
        width: 350,
        height: 200,
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        borderRadius: 25
    },
    input: {
        fontFamily: 'Futura',
        fontSize: 25,
        color: 'white',

    }

})

export default Home;
