import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../paginas/Home";
import Login from "../paginas/Login";
import ListaPets from "../paginas/ListaPets"
import Mensagem from "../paginas/Mensagem"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListaPets" component={ListaPets}/>
      <Tab.Screen name="Mensagem" component={Mensagem}/>
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    // Colocando o headerShown no Stack.Navigator, fica sem título em todas as screens
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
        // Colocando o headerShown no Stack.Screen, eu removo o título apenas desta screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}