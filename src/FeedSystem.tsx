import { useNavigation, useRoute} from "@react-navigation/native";
import React, {useState, useEffect} from "react"
import { View, StyleSheet, Text, ScrollView, Alert} from "react-native";
import FeedBucket from "./components/FeedBucket"

const FeedSystem:React.FC = ()=> {
    const [feedLog1, setFeedLog1] = useState<string[] >([])
    const [feedLog2, setFeedLog2] = useState<string[]>([])
    const [feedLog3, setFeedLog3] = useState<string[]>([])
    const nav = useNavigation()
    const route = useRoute()

    useEffect(()=> {
        // console.log(feedLog1)
    }, [feedLog1])



    const [alert, setAlert] = useState(false)

    // useEffect(()=> {
    //     alert ? lowFoodAlert() : null
    // }, [alert])


    const lowFoodAlert = (animal: string) => {
        Alert.alert(`Low Food for ${animal}!`)
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.subtitle}></Text>
                </View>
                <View style={styles.masterContainer}>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <View style={{width: '60%'}}>
                            <View>
                                <Text style={styles.text}>Pen 1: Feeding Log</Text>
                                <View style={{paddingTop: 10}}>
                                    <Text style={styles.smallText}>{"Date" +  "\t\t" + "Time"}</Text>
                                    <ScrollView>
                                        {feedLog1.length > 1 ?
                                            feedLog1.map((l)=>(
                                                <Text>{l}</Text>
                                            ))
                                            : null
                                        }
                                    </ScrollView>

                                </View>
                            </View>

                        </View>
                        <View style={{width: '40%', alignItems: 'flex-end'}}>
                            <FeedBucket alert={alert} setAlert={setAlert} interval={15000} feedLog={feedLog1} setFeedLog={setFeedLog1} animal={"Pen 1"} lowFoodAlert={lowFoodAlert}/>
                        </View>
                    </View>

                </View>
                <View style={{paddingTop: 15}}>
                    <View style={[styles.masterContainer,]}>
                        <View style={{flexDirection: 'row', width: '100%'}}>
                            <View style={{width: '60%'}}>
                                <View>
                                    <Text style={styles.text}>Pen 2: Feeding Log</Text>
                                    <View style={{paddingTop: 10}}>
                                        <Text style={styles.smallText}>{"Date" +  "\t\t" + "Time"}</Text>
                                        <ScrollView>
                                            {feedLog2.length > 1 ?
                                                feedLog2.map((l)=>(
                                                    <Text>{l}</Text>
                                                ))
                                                : null
                                            }
                                        </ScrollView>


                                    </View>
                                </View>

                            </View>
                            <View style={{width: '40%', alignItems: 'flex-end'}}>
                                <FeedBucket alert={alert} setAlert={setAlert} interval={20000} feedLog={feedLog2} setFeedLog={setFeedLog2} animal={"Pen 2"} lowFoodAlert={lowFoodAlert}/>
                            </View>
                        </View>


                        {/*<View>*/}
                        {/*    <FeedBucket level={5} interval={3000}/>*/}
                        {/*    <FeedBucket level={5} interval={3000}/>*/}
                        {/*</View>*/}
                    </View>
                </View>
                <View style={{paddingTop: 15}}>
                    <View style={[styles.masterContainer,]}>
                        <View style={{flexDirection: 'row', width: '100%'}}>
                            <View style={{width: '60%'}}>
                                <View>
                                    <Text style={styles.text}>Pen 3: Feeding Log</Text>
                                    <View style={{paddingTop: 10}}>
                                        <Text style={styles.smallText}>{"Date" +  "\t\t" + "Time"}</Text>
                                        <ScrollView>
                                            {feedLog3.length > 1 ?
                                                feedLog3.map((l)=>(
                                                    <Text>{l}</Text>
                                                ))
                                                : null
                                            }
                                        </ScrollView>


                                    </View>
                                </View>

                            </View>
                            <View style={{width: '40%', alignItems: 'flex-end'}}>
                                <FeedBucket alert={alert} setAlert={setAlert} interval={21000} feedLog={feedLog3} setFeedLog={setFeedLog3} animal={"Pen 3"} lowFoodAlert={lowFoodAlert}/>
                            </View>
                        </View>


                        {/*<View>*/}
                        {/*    <FeedBucket level={5} interval={3000}/>*/}
                        {/*    <FeedBucket level={5} interval={3000}/>*/}
                        {/*</View>*/}
                    </View>
                </View>




                {/*<View style={{width: '100%', flexDirection: 'row'}}>*/}

                {/*</View>*/}

            </View>
        </ScrollView>
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
    masterContainer: {
        width: '100%',
        // height: 100,
        padding: 15,
        backgroundColor: 'rgba(255, 255, 255, .5)',
        borderRadius: 20,
        alignItems:'center'
    },
    text:{
        fontSize: 17,
        fontWeight: '500'
    },
    smallText: {
        fontSize: 15,
        fontWeight: '500'

    },
    feedLogCont: {
        padding: 10

    }

})

export default FeedSystem;
