import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../paginas/Home";
import Login from "../paginas/Login";
import ListaPets from "../paginas/ListaPets";
import Mensagem from "../paginas/Mensagem";
import Sobre from "../paginas/Sobre";
import Perfil from "../paginas/Perfil";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Lista de Pets"
        component={ListaPets}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/pets-green.png')}
              style={{width: 24, height: 24}}
            />
          )
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={Mensagem}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/mensagens.png')}
              style={{width: 24, height: 24}}  
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

function DrawerRoutes() {
  <Drawer.Navigator>
    <Drawer.Screen
      name="Lista de Pets"
      component={TabRoutes}
    />
    <Drawer.Screen
      name="Perfil"
      component={Perfil}
    />
    <Drawer.Screen
      name="Sair"
      component={Home}
    />
  </Drawer.Navigator>
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
        <Stack.Screen
          name="Drawe"
          component={DrawerRoutes}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}