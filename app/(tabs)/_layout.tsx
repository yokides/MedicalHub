import Colors from "@/constants/Colors";
import { FontAwesome, FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router"
import { View, Text } from "react-native";

export default function TabLayout() {

    return (
      <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: 85,
          elevation: 0,
          backgroundColor: '#FFF'
        }
      }}>
        <Tabs.Screen
          name="Home"
          options={{
            title: "",
            tabBarIcon: ({ focused }: { focused: boolean }) => {
              return (
                <View style={{
                  alignItems: "center",
                  paddingTop: 17,
                }}>
                  <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={29}
                    color={focused ? Colors.primary : Colors.medium}
                  />
  
                  <Text style={{
                    fontSize: 8,
                    color: focused ? Colors.primary : Colors.medium
                  }}>Home</Text>
                </View>
              )
            }
          }}
        />
        <Tabs.Screen
          name="Calendar"
          options={{
            title: "",
            tabBarIcon: ({ focused }: { focused: boolean }) => {
              return (
                <View style={{
                  alignItems: "center",
                  paddingTop: 18,
                }}>
                  <FontAwesome5
                    name={focused ? 'calendar-alt' : 'calendar'}
                    size={30}
                    color={focused ? Colors.primary : Colors.medium}
                  />
  
                  <Text style={{
                    fontSize: 8,
                    color: focused ? Colors.primary : Colors.medium
                  }}>Calendar</Text>
                </View>
              )
            }
          }}
        />
        <Tabs.Screen
          name="Notification"
          options={{
            title: "",
            tabBarIcon: ({ focused }: { focused: boolean }) => {
              return (
                <View style={{
                  alignItems: "center",
                  paddingTop: 18,
                }}>
                  <FontAwesome
                    name={focused ? 'bell' : 'bell-o'}
                    size={30}
                    color={focused ? Colors.primary : Colors.medium}
                  />
  
                  <Text style={{
                    fontSize: 8,
                    color: focused ? Colors.primary : Colors.medium
                  }}>Notification</Text>
                </View>
              )
            }
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "",
            tabBarIcon: ({ focused }: { focused: boolean }) => {
              return (
                <View style={{
                  alignItems: "center",
                  paddingTop: 18,
                }}>
                  <Octicons
                    name={focused ? 'person-fill' : 'person'}
                    size={30}
                    color={focused ? Colors.primary : Colors.medium}
                  />
  
                  <Text style={{
                    fontSize: 8,
                    color: focused ? Colors.primary : Colors.medium
                  }}>Profile</Text>
                </View>
              )
            }
          }}
        />
  
      </Tabs>
    )
  }