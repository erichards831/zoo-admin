import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native"
import globalColors from "../localizations/globalColors"
import { Ionicon } from "./Icon";


type Props = {
    animal: string,
    vis: boolean,
    setVis: (vis:boolean) => void
}
const LowFoodAlert:React.FC<Props> = ({animal, vis, setVis}) =>{
    const close = () => {
        setVis(false)
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: '90%'}}>
                    <Text style={styles.alertText}>Alert! Low food for {animal}!</Text>
                </View>
                <View style={{alignSelf: 'flex-end', }}>
                    <TouchableOpacity onPress={close}>
                        <Ionicon size={'large'} color={globalColors.veryBad} name={'ios-close'} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 75,
        padding: 10,
        backgroundColor: 'rgba(255,136,136,.75)',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center'

    },
    alertText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: globalColors.veryBad

    }

})

export default LowFoodAlert
