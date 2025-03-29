import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/main/Home';
import HomeTabs from './TabsNavigator';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator >
     
      <Stack.Screen
        name="home-tabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      
    
     
    </Stack.Navigator>
  );
};

export default Navigation;
