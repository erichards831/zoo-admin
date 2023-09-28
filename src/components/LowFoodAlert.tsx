import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native"
import globalColors from "../localizations/globalColors"
import { Ionicon } from "./Icon";


type Props ={
    animal: string,
    vis: boolean,
    setVis: (vis:boolean) => void
}
const LowFoodAlert:React.FC<Props> = ({animal}) =>{
    
    const close = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', right: 10, top: 10}}>
                <TouchableOpacity>
                    <Ionicon size={'large'} color={globalColors.veryBad} name={'ios-close'} />
                </TouchableOpacity>
            </View>
            <Text>Alert! Low food for {animal}!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '95%',
        height: 100,
        padding: 10,
        backgroundColor: 'rgba(255,136,136,.85)',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 20
    },
    alertText: {
        fontWeight: 'bold', 
        fontSize: 22,
        color: globalColors.veryBad
        
    }

})

export default LowFoodAlert
