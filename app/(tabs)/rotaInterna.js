import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import Tela1 from './tela1';
import Tela2 from './tela2';
import Tela3 from './tela3';
import React, { useState } from 'react';

const Tab = createBottomTabNavigator();
const [info1, setInfo1] = useState('');
const [info2, setInfo2] = useState('');

export default function RotaInterna() { 

    
    return (
        
        <Tab.Navigator>
            <Tab.Screen
            
                name="tela1" 
                component={Tela1}
                options={{
                    tabBarBadge: 1,
                    tabBarShowLabel: false,
                    headerShown: false,
                    
                    tabBarIcon: ({ focused }) => { 
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home-outline" />)

                        
                        
                    }
                }}
            >
                
            </Tab.Screen>

            <Tab.Screen
                name="tela2"
                component={Tela2}
                options={{
                    
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => { 
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="lock-closed" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="lock-closed-outline" />)

                        
                    }
                    
                }}
                
            >
            </Tab.Screen>
            
            <Tab.Screen
                name="tela3"
                component={Tela3}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="watch" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="watch-outline" />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}

<Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: "#cd0",
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    bottom: 30,
                    right: 30,
                    left: 30,
                    borderRadius: 5,
                    backgroundColor: "#cfa",
                },
                

            }}></Tab.Navigator>

            {() => <Tela1 textoPronto={setInfo1} textoPronto2={setInfo2} />}
            Tab.Screen> {/* apenas para localizar */}
             /* component={Tela1} */

             {() => <Tela3 texto={info1} texto2={info2} />}
Tab.Screen> {/* apenas para localizar */}
 /* component={Tela3} */