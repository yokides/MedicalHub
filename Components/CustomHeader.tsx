import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React, { useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link, useNavigation } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const SearchBar = () =>
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name='ios-search' size={20} color={Colors.medium}/>
                <TextInput style={styles.input} placeholder='Search for hospitals' placeholderTextColor={Colors.medium}/>
            </View>
        </View>
    </View>

const CustomHeader = () => { 
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const openModal = () => {
        bottomSheetRef.current?.present();
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>               
                <TouchableOpacity style={styles.mapButton} onPress={openModal}>
                    <Ionicons name='map-outline' size={24} color={'#fff'}/>
                </TouchableOpacity>
            </View>
            <SearchBar />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea:{
        backgroundColor:Colors.primary,
    },
    container:{
        height: 60,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-end',  
        gap:115,
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
    }
});

export default CustomHeader