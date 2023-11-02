import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, router, useNavigation, useRouter } from 'expo-router'
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const hub = () => {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.hub}>Medical Hub</Text>
      <Text style={styles.subTitle}>Online Medication System</Text>
      <View style={styles.button}>
        <TouchableOpacity style={styles.loginButton} onPress={() => {router.replace('/login')}}>
          <Text style={styles.login}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => {router.replace('/signup')}}>
          <Text style={styles.login}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default hub

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary,
        flex:1,
        //justifyContent:'center',
        alignItems:'center',
    },
    title:{
      textAlign:'center',
      color:'#fff',
      fontWeight:'600',
      paddingTop:120,
      fontSize:16,
    },
    hub:{
      textAlign:'center',
      color:'#fff',
      fontSize:40,
      fontWeight:'800',
      paddingTop:120,
    },
    subTitle:{
      textAlign:'center',
      color:'#fff',
      paddingTop:10,
      fontSize:16,
      //fontWeight:'400',
    },
    button:{
      paddingTop:330,
      gap:20,
    },
    loginButton:{
      backgroundColor: '#FFF',
      alignItems:'center',
      //alignContent:'center',
      padding:10,
      width:300,
      borderRadius:20,
    },
    login:{
      fontWeight:'600',
    },
})