import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";



export default app => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={
                    {backgroundColor: '#1679AB'}
                }>
                <ImageBackground source={require('../assets/plane.jpg')}>
                    
                </ImageBackground>
                <DrawerItemList {...props}/>
                
            </DrawerContentScrollView>
        </View>
    )
}