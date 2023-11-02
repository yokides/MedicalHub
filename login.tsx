import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { useNavigation, useRouter } from 'expo-router'

const login = () => {
  const [isVisible, setisVisible] = useState(true);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleLogin = async () => {
    setEmailError(''); // Reset email error
    setPasswordError(''); // Reset password error

    if (email && password) {
      try {
        const response = await fetch('http://192.168.1.38:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        if (response.ok) {
          if (keepSignedIn) {
            // Save a user token or information for keeping the user signed in
          }
          router.replace('/(tabs)/Home')
        } else if (response.status === 401) {
          setPasswordError('Invalid email or password.');
        } else {
          console.log('Login failed.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      if (!email) {
        setEmailError('Email is required'); // Set email error
      }
      if (!password) {
        setPasswordError('Password is required'); // Set password error
      }
    }
  }
  return (
    <View>
      <Text style={styles.hub}>Medical Hub</Text>
      <Text style={styles.subTitle}>Online Medication System</Text>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.email}>Email</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput
          keyboardType='ascii-capable' 
          placeholder='Please Enter Your Email' 
          placeholderTextColor={Colors.medium}
          value={email}
          onChangeText={(text) => setEmail(text)}/>
        </View>
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text style={styles.email}>Password</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput 
          secureTextEntry={isVisible}
          maxLength={8} 
          keyboardType='ascii-capable' style={styles.textInput}
          placeholder='Please Enter Your Password' placeholderTextColor={Colors.medium}
          value={password}
          onChangeText={(text) => setPassword(text)}/>
          <Ionicons onPress={() =>{
            setisVisible(!isVisible);
          }} 
          name={isVisible == true ? 'eye-off-outline' : 'eye-outline'} size={20} color={'#000'}/>
        </View>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}


      <View style={styles.forgetField}>
        <AntDesign 
          onPress={() => setKeepSignedIn(!keepSignedIn)}
          name={keepSignedIn ? 'checksquare' : 'checksquareo'} 
          size={26} color={keepSignedIn ? Colors.primary : '#000'}/>
        <Text style={{paddingLeft:10}}>Keep me signed in</Text>
        <TouchableOpacity>
          <Text style={styles.forget}>Forget Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'column'}}>
          <View style={styles.lineLeft}/>
          <Text style={{color:Colors.medium}}>Or With</Text>
          <View style={styles.lineRight}/>
        </View>
        <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
          <Text style={styles.google}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {router.replace('/signup')}}>
          <Text style={styles.account}>Create an account</Text>
        </TouchableOpacity>
      </View>   
    </View> 
  )
}
export default login

const styles = StyleSheet.create({
  hub:{
    textAlign:'center',
    color:Colors.primary,
    fontSize:40,
    fontWeight:'800',
    paddingTop:100,
  },
  subTitle:{
    textAlign:'center',
    color:Colors.primary,
    paddingTop:10,
    fontSize:16,
    //fontWeight:'400',
  },
  header:{
    paddingLeft:30,
    paddingTop:40,
    paddingBottom:40,
    fontSize:24,
    fontWeight:'500',
  },
  email:{
    marginTop:15,
    paddingLeft:30,
    fontWeight:'500',
  },
  fieldSection:{
    paddingLeft:30,
    paddingRight:30,
    paddingTop:5,
  },
  inputField:{
    borderColor:Colors.medium,
    borderRadius:5,
    borderWidth:1,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between', 
  },
  textInput:{
    flex:0.9,
  },
  forgetField:{
    flexDirection:'row',
    paddingLeft:30,
    paddingTop:20,
    //alignContent:'center',
    alignItems:'center',
  },
  forget:{
    fontWeight:'500',
    paddingLeft:48,
  },
  button:{
    paddingTop:600,
    alignItems:'center',
    paddingLeft:45,
    gap:30,
    position:'absolute',
  },
  loginButton:{
    backgroundColor: Colors.primary,
    alignItems:'center',
    //alignContent:'center',
    padding:15,
    width:320,
    borderRadius:30,
  },
  login:{
    fontWeight:'600',
    color:'#fff',
  },
  googleButton:{
    //backgroundColor: '#E4E7EB',
    backgroundColor: '#ccc',
    alignItems:'center',
    //alignContent:'center',
    padding:15,
    width:320,
    borderRadius:30,
  },
  google:{

  },
  lineLeft:{
    borderWidth:0.5,
    borderBottomWidth:0,
    width:120,
    borderColor:'#ccc',
    position:'absolute',
    right:70,
    top:10,
  },
  lineRight:{
    borderWidth:0.5,
    borderBottomWidth:0,
    width:120,
    borderColor:'#ccc',
    position:'absolute',
    left:70,
    top:10,
  },
  account:{
    fontWeight:'600',
  },
  errorText:{
    color:'red',
    paddingLeft:30,
    fontSize:12,
    
  },
  
})