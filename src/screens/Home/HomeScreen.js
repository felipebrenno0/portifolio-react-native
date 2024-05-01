import React from 'react';
import { View, Text, StatusBar, Image, Pressable }  from 'react-native'

import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

import styles from './Style'

import fotoPerfil from '../../../assets/perfil.png'

export default function HomeScreen({navigation}) {


    function navToSkill(){
        navigation.navigate('skill')
    }

    return(
        <View style={styles.container}>       
            <View style={styles.containerProfile}>
                <Image
                    source={fotoPerfil}
                    style={{
                        resizeMode: 'stretch', 
                        height: 150,
                        width: 150,
                        borderRadius: 100,
                        margin: 40
                    }}
                />
            
                <Text 
                style={{
                    fontSize: 30,
                    color: '#333333',
                    fontWeight: "bold",
                    
                }}>
                    Felipe Assis
                </Text>

            </View>
            
            
            

            <View style={styles.containerButton}>

                <Pressable style={styles.button} onPress={navToSkill}> 
                    <Text style={styles.text}>
                        Habilidades 
                    </Text>  
                </Pressable>

                <Pressable style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/in/felipe-breno-exe/')}> 
                    <Text style={styles.text}>
                        Linkendin 
                    </Text>  
                </Pressable>

                <Pressable style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://github.com/felipebrenno0')}> 
                    <Text style={styles.text}>
                        GitHub 
                    </Text>  
                </Pressable>

                <Pressable style={styles.button} onPress={() => Linking.openURL('mailto: felipebrenno213@gmail.com')}> 
                    <Text style={styles.text}>
                        E-mail
                    </Text>  
                </Pressable>


            </View>

            <StatusBar style='auto'/>
        </View>
    )
}

