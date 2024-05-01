import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import SkillScreen from '../screens/Skill/SkillScreen';

const {Screen, Navigator} = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
        <Screen 
            name="home" 
            component={HomeScreen}
            options={{
                headerShown: false
            }} 
        />

        <Screen 
            name="skill" 
            component={SkillScreen}
            options={{
                headerShown: false
            }} 
        />
    </Navigator>
  );
}