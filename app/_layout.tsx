import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '@/Components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './(tabs)/Home';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>    
      <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      </Stack>
    </BottomSheetModalProvider>
  );
}
