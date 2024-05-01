import { View, Image, Text, StatusBar, Pressable }  from 'react-native'

import * as Linking from 'expo-linking';

import styles from './Style'

import fotoPerfil from '../../../assets/perfil.png'

export default function SkillScreen(){
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
                    Minhas Habilidades
                </Text>

            </View>
            
            <View style={styles.containerSkill}>

                <Text style={styles.textSkill}>
                    CSS: ⭐⭐⭐⭐
                </Text>  

                <Text style={styles.textSkill}>
                    HTML: ⭐⭐⭐⭐⭐
                </Text>  

                <Text style={styles.textSkill}>
                    REACT: ⭐⭐
                </Text>  

                <Text style={styles.textSkill}>
                    ANGULAR: ⭐⭐⭐⭐
                </Text>  

            </View>

            <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={() => Linking.openURL('tel: +5585994175730')}>
                    <Text style={styles.text}>
                        Fala comigo
                    </Text>
                </Pressable>
            </View>

            <StatusBar style='auto'/>
        </View>
    )
}