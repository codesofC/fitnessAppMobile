import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account';
import Home from '../screens/Home';
import Liked from '../screens/Liked';
import User from '../screens/User';

const Stack = createNativeStackNavigator()

export const HomeTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{
                headerShown: false
            }}/>
            <Stack.Screen name='Treinador' component={User} />
        </Stack.Navigator>
    )
}

export const LikeTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Fav" component={Liked} />
            <Stack.Screen name='Treinador' component={User} />
        </Stack.Navigator>
    )
}
