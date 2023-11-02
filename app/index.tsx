import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import { Redirect } from 'expo-router';
import RootLayoutNav from './_layout';


const Page = () => {
  //return <mainNavigation/>
  //return ( <Redirect href='/(tabs)/Home/'/> )
  return ( <Redirect href='/hub'/> )
};

export default Page