import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '@/Components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


/*export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};*/

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    //<BottomSheetModalProvider>    
      <Stack>
        <Stack.Screen name="index" options={{
          header: () => <CustomHeader />,
          
        }} />
      
        <Stack.Screen name='(modal)/location-search' options={{
          presentation:'modal',
          headerTitle:'Select location',
          headerShadowVisible:false,
          headerStyle:{
            backgroundColor:Colors.lightGrey,
          },
          headerLeft:() => (
            <TouchableOpacity onPress={() =>{
              navigation.goBack();
            }}>
              <Ionicons name='close-outline' size={28} color={Colors.primary}/>
            </TouchableOpacity>
          )
        }}/>
        <Stack.Screen name='allAppointment' options={{headerShown:false}}/>
        <Stack.Screen name='allHospital' options={{headerShown:false}}/>
        <Stack.Screen name='department' options={{headerShown:false}}/>
        <Stack.Screen name='doctor' options={{headerShown:false}}/>
        <Stack.Screen name='doctor_detail' options={{headerShown:false}}/>
    
      </Stack>
      
    //</BottomSheetModalProvider>
  );
}
