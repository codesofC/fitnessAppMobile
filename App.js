
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { HomeTab, LikeTab } from './components/TabsNavigation';
import IconsComp from './components/IconsComp';
import { Provider } from 'react-redux';
import store from './redux/store';
import PlanTraining from './screens/PlanTraining';
import Account from './screens/Account';


const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator activeColor='black'>
          <Tab.Screen name="Inicio" component={HomeTab} options={{
            tabBarIcon: ({ color }) => <IconsComp name="home" size={25} color={color} />,
          }} />
          <Tab.Screen name="Favoritos" component={LikeTab} options={{
            tabBarIcon: ({ color }) => <IconsComp name="heart" size={25} color={color} />
          }} />
          <Tab.Screen name="Plano" component={PlanTraining} options={{
            tabBarIcon: ({ color }) => <IconsComp name="paper-plane" size={25} color={color} />
          }} />
          <Tab.Screen name="Conta" component={Account} options={{
            tabBarIcon: ({ color }) => <IconsComp name="person" size={25} color={color} />
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


