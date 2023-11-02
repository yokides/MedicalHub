import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { useRouter } from 'expo-router'

const signup = () => {
  const [isVisible, setisVisible] = useState(true);
  const [gender, setGender] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [citizenIdError, setCitizenIdError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [userCredentials, setuserCredentials] = useState({
    email:"", 
    password:"", 
    confirmPassword:"", 
    firstname: "", 
    lastname: "", 
    citizenId: "",
    address: "", 
    phoneNumber: "", 
    gender:""
  });
  const router = useRouter();
  const handleRegistration = async () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setFirstnameError('');
    setLastnameError('');
    setCitizenIdError('');
    setAddressError('');
    setPhoneNumberError('');
    setGenderError('');

    let isValid = true;

  if (!userCredentials.email) {
    setEmailError('Email is required');
    isValid = false;
  }
  if (!userCredentials.password) {
    setPasswordError('Password is required');
    isValid = false;
  }
  if (userCredentials.password !== userCredentials.confirmPassword) {
    setConfirmPasswordError('Passwords do not match');
    isValid = false;
  }
  if (!userCredentials.firstname) {
    setFirstnameError('First Name is required');
    isValid = false;
  }
  if (!userCredentials.lastname) {
    setLastnameError('Last Name is required');
    isValid = false;
  }
  if (!userCredentials.citizenId) {
    setCitizenIdError('Citizen ID is required');
    isValid = false;
  }
  if (!userCredentials.address) {
    setAddressError('Adress is required');
    isValid = false;
  }
  if (!userCredentials.phoneNumber) {
    setPhoneNumberError('Phone Number is required');
    isValid = false;
  }

  if (isValid) {
    userCredentials.gender = gender;
    try {
      const response = await fetch('http://192.168.1.38:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        router.replace('/(tabs)/Home');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
}

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
      <ScrollView contentContainerStyle={styles.container} >
      <TouchableOpacity style={styles.mapButton} onPress={() =>{router.replace('/hub');}}>
          <AntDesign name='left' size={24} color={Colors.primary}/>
      </TouchableOpacity>
      
        <View style={styles.inner}>
      <Text style={styles.hub}>Medical Hub</Text>
      <Text style={styles.subTitle}>Online Medication System</Text>
      <Text style={styles.header}>Sign up</Text>
      
      <Text style={styles.email}>Email</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput
          style={styles.textInput}
          keyboardType='email-address' 
          placeholder='Please Enter Your Email' 
          placeholderTextColor={Colors.medium}
          onChangeText={(text) => {
            setuserCredentials({...userCredentials, email: text}); 
            setEmailError('');
          }}/>
        </View>
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text style={styles.email}>Password</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput 
          secureTextEntry={isVisible}
          maxLength={6} 
          keyboardType='ascii-capable' 
          style={styles.textInput}
          placeholder='Please Enter Your Password' 
          placeholderTextColor={Colors.medium}
          onChangeText={(text) => {
            setuserCredentials({...userCredentials, password: text})
          }}/>
          <Ionicons onPress={() =>{
            setisVisible(!isVisible);
          }} 
          name={isVisible == true ? 'eye-off-outline' : 'eye-outline'} size={20} color={'#000'}/>
        </View>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <Text style={styles.email}>Confirm Password</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput 
          secureTextEntry={isVisible}
          maxLength={6} 
          keyboardType='ascii-capable' 
          style={styles.textInput}
          placeholder='Please Enter Your Password' 
          placeholderTextColor={Colors.medium}
          onChangeText={(text) =>
            setuserCredentials({ ...userCredentials, confirmPassword: text })
          }/>
          <Ionicons onPress={() =>{
            setisVisible(!isVisible);
          }} 
          name={isVisible == true ? 'eye-off-outline' : 'eye-outline'} size={20} color={'#000'}/>
        </View>
      </View>
      {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

      <Text style={styles.email}>First Name</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput
            style={styles.textInput}
            keyboardType='ascii-capable'
            placeholder='First Name'
            placeholderTextColor={Colors.medium}
            onChangeText={(text) => {
              setuserCredentials({ ...userCredentials, firstname: text });
            }}
          />
        </View>
      </View>
      {firstnameError ? <Text style={styles.errorText}>{firstnameError}</Text> : null}

      <Text style={styles.email}>Last Name</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput
            style={styles.textInput}
            keyboardType='ascii-capable'
            placeholder='Last Name'
            placeholderTextColor={Colors.medium}
            onChangeText={(text) => {
              setuserCredentials({ ...userCredentials, lastname: text });
            }}
          />
        </View>
      </View>
      {lastnameError ? <Text style={styles.errorText}>{lastnameError}</Text> : null}

      <Text style={styles.email}>Citizen ID</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput
            style={styles.textInput}
            keyboardType='ascii-capable'
            maxLength={13}
            placeholder='11004012345'
            placeholderTextColor={Colors.medium}
            onChangeText={(text) => {
              setuserCredentials({ ...userCredentials, citizenId: text });
            }}
          />
        </View>
      </View>
      {citizenIdError ? <Text style={styles.errorText}>{citizenIdError}</Text> : null}

      <Text style={styles.email}>Address</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput
            style={styles.textInput}
            keyboardType='ascii-capable'
            placeholder='Address'
            placeholderTextColor={Colors.medium}
            onChangeText={(text) => {
              setuserCredentials({ ...userCredentials, address: text });
            }}
          />
        </View>
      </View>
      {addressError ? <Text style={styles.errorText}>{addressError}</Text> : null}

      <Text style={styles.email}>Phone Number</Text>
      <View style={styles.fieldSection}>
        <View style={styles.inputField}>
          <TextInput
            style={styles.textInput}
            keyboardType='ascii-capable'
            placeholder='08X-XXX-XXXX'
            placeholderTextColor={Colors.medium}
            onChangeText={(text) => {
              setuserCredentials({ ...userCredentials, phoneNumber: text });
            }}
          />
        </View>
      </View>
      {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}

      <Text style={styles.email}>Sex</Text>
      <View style={{ flexDirection: 'row', paddingLeft: 60, paddingTop: 10, paddingRight: 60, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setGender('male')}>
            <MaterialIcons
              name={gender == 'male' ? 'radio-button-checked' : 'radio-button-unchecked'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 10 }}>Male</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setGender('female')}>
            <MaterialIcons
              name={gender == 'female' ? 'radio-button-checked' : 'radio-button-unchecked'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 10 }}>Female</Text>
        </View>
      </View>

      <View style={styles.button}>
        <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleRegistration}>
          <Text style={styles.login}>Next</Text>
        </TouchableOpacity>
      </View> 
      
      </View>
      </ScrollView>    
      </KeyboardAvoidingView>   
  )
}
export default signup

const styles = StyleSheet.create({
  container:{
    //paddingBottom:30,
  },
  hub:{
    textAlign:'center',
    color:Colors.primary,
    fontSize:40,
    fontWeight:'800',
    paddingTop:50,
    
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
    paddingTop:50,
    paddingBottom:80,
    alignItems:'center',
    gap:30,
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
  mapButton:{
    padding:10,
    borderRadius:50,
    paddingTop:60,
    paddingLeft:30,
},
inner:{
  flex: 1,
  justifyContent: 'space-around',
},
errorText:{
  color:'red',
  paddingLeft:30,
  fontSize:12,
}
  
})