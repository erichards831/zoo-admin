import React, {useState, useEffect} from "react"
import { View, StyleSheet, Text, ScrollView} from "react-native";
import FeedBucket from "./components/FeedBucket"

const FeedSystem:React.FC = ()=> {
    const [feedLog1, setFeedLog1] = useState<string[] >([])


    useEffect(()=> {
        // console.log(feedLog1)

    }, [feedLog1])



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
                                <Text style={styles.text}>Animal 1: Feeding Log</Text>

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
                            <FeedBucket level={5} interval={3000} feedLog={feedLog1} setFeedLog={setFeedLog1}/>
                        </View>
                    </View>

                    {/*<View>*/}
                    {/*    <FeedBucket level={5} interval={3000}/>*/}
                    {/*    <FeedBucket level={5} interval={3000}/>*/}
                    {/*</View>*/}
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
