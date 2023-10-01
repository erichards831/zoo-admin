import {createStackNavigator} from "@react-navigation/stack";
import React, {useState, useEffect} from "react";
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import Home from "./src/Home";
import LockSystem from "./src/LockSystem"
import FeedSystem from "./src/FeedSystem"
import SprinklerSystem from "./src/SprinklerSystem"
import globalColors from "./src/localizations/globalColors"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicon } from "./src/components/Icon";
import {Text, View} from "react-native"
import LowFoodAlert from "./src/components/LowFoodAlert"


export type RootStackParamList = {
    'Home': undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const Tab = createBottomTabNavigator();

const DarkThemeApp = {
    ...DarkTheme,
    colors:{
        background: globalColors.primary,
        text: '#f3f3f8'
    }
}

const AppNavigator: React.FC= ()=>{
    const [alert, setAlert] = useState(true)


    return(
        <NavigationContainer theme={DarkThemeApp} >

            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: globalColors.primaryDark
                    },
                    headerStyle:{
                        backgroundColor: globalColors.primaryDark
                    },
                    tabBarInactiveTintColor: globalColors.primary,
                    tabBarActiveTintColor: globalColors.secondary,
                    tabBarLabelStyle: {
                        fontSize: 10
                    }
                }}

            >

                <Tab.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Ionicon size={'large'}  color={focused ? globalColors.secondary: globalColors.primary} name={focused ? 'ios-paw': 'ios-paw-outline'}/>
                        )
                }
                    }
                />
                <Tab.Screen
                    name={'Lock System'}
                    component={LockSystem}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Ionicon size={'large'}  color={focused ? globalColors.secondary: globalColors.primary} name={focused ? 'ios-lock-closed': 'ios-lock-closed-outline'}/>
                        ),

                    }
                    }

                />
                <Tab.Screen
                    name={'Feed System'}
                    component={FeedSystem}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Ionicon size={'large'}  color={focused ? globalColors.secondary: globalColors.primary} name={focused ? 'ios-nutrition': 'ios-nutrition-outline'}/>
                        )
                    }
                    }
                />
                <Tab.Screen
                    name={'Sprinkler System'}
                    component={SprinklerSystem}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Ionicon size={'large'}  color={focused ? globalColors.secondary: globalColors.primary} name={focused ? 'ios-water': 'ios-water-outline'}/>
                        )
                    }
                    }

                />


                {/*<Tab.Screen name={''}/>*/}

            </Tab.Navigator>

        </NavigationContainer>

        // <NavigationContainer theme={DarkThemeApp}>
        //     <Stack.Navigator initialRouteName={'Home'}>
        //         <Stack.Screen
        //             name={'Home'}
        //             component={Home}
        //             options={{
        //                 headerShown: false,
        //
        //
        //         }
        //             }
        //
        //         />
        //     </Stack.Navigator>
        //
        // </NavigationContainer>


    )
}

export default AppNavigator;
