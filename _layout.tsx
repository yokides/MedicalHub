import { Stack } from 'expo-router';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/*export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'hub'
};*/

export default function mainNavigation() {
  return ( 
      <Stack initialRouteName='hub'>
        <Stack.Screen name='hub' options={{headerShown:false}}/>
        <Stack.Screen name='signup' options={{headerShown:false}} />
        <Stack.Screen name='login' options={{headerShown:false}} />
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>     
      </Stack>
  );
}
