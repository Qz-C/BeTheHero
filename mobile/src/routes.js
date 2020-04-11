import React from "react"; 
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Incidents from "./pages/Incidents";
import Details from "./pages/Details";



const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="Details" component={Details}/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

export default Routes;