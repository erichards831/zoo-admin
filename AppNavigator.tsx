import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import Home from "./src/Home";


export type RootStackParamList = {
    'Home': undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const DarkThemeApp = {
    ...DarkTheme,
    colors:{
        background: '#1f1f31',
        text: '#f3f3f8'
    }
}

const AppNavigator: React.FC= ()=>{
    return(
        <NavigationContainer theme={DarkThemeApp}>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        headerShown: false,


                }
                    }

                />
            </Stack.Navigator>

        </NavigationContainer>


    )
}

export default AppNavigator;
