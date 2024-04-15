import 'react-native-gesture-handler';
import React from "react";
import { ImageBackground, SafeAreaView, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Notas from './components/Notas';
import Faltas from './components/Faltas';
import Cursos from './components/Cursos';
import Documentacao from './components/Documentacao';
import Ajuda from './components/Ajuda';

import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default props =>{
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={props => <CustomDrawer {...props}/>}
                    initialRouteName='Notas'
                    screenOptions={{
                        drawerActiveBackgroundColor: '#1B4242',
                        drawerActiveTintColor: '#9EC8B9',
                        drawerPosition: 'left',                                                           
                    }}
                >
                    <Drawer.Screen name='Notas' component={Notas}/>
                    <Drawer.Screen name='Faltas' component={Faltas}/>
                    <Drawer.Screen name='Cursos' component={Cursos}/>
                    <Drawer.Screen name='Documentação' component={Documentacao}/>
                    <Drawer.Screen name='Ajuda' component={Ajuda}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}