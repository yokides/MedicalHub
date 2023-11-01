import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () =>
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name='ios-search' size={20} color={Colors.medium}/>
                <TextInput style={styles.input} placeholder='Search for appointment' placeholderTextColor={Colors.medium}/>
            </View>
        </View>
    </View>

const Calendar = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>              
        
        <Text style={styles.title}>Calendar</Text>
        
      </View>
      <SearchBar />

      <View style={styles.cardContain}>
        <TouchableOpacity >
          <Text>Calendar</Text>
        </TouchableOpacity>
      </View>
      
      
    </SafeAreaView>
  )
}

export default Calendar

const styles = StyleSheet.create({
  safeArea:{
      backgroundColor:Colors.primary,
  },
  container:{
      height: 60,
      backgroundColor: Colors.primary,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',  
      paddingHorizontal:20,    
  },
  title:{
      color:'#FFF',
      fontSize:16,
      fontWeight:'bold',
  },
  mapButton:{
      padding:10,
      borderRadius:50,
  },
  searchContainer:{
      height:80,
      backgroundColor:'#fff',
      borderTopLeftRadius:16,
      borderTopRightRadius:16,
  },
  searchSection:{
      flexDirection:'row',
      gap:10,
      flex:1,
      paddingHorizontal:20,
      alignItems:'center',
  },
  searchField:{
      flex:1,
      backgroundColor:Colors.grey,
      borderRadius:8,
      flexDirection:'row',
      alignItems:'center',
      
  },
  input:{
      padding:10,
      color:Colors.mediumDark,
  },
  searchIcon:{
      paddingLeft:10,
  },
  cardContain:{
    backgroundColor:'#fff',
    height:750,
    padding:20,
  },
});