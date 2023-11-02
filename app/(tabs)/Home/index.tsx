import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import Appointment from '@/Components/Appointment';
import Hospital from '@/Components/Hospital';

const Page = () => {
  return ( 
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Appointment />
        <Hospital/>
        
      </ScrollView>
    </SafeAreaView>   
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  },
})

export default Page