import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchView from './views/search';
import HistoryView from './views/history';
import FavoriteView from './views/favorite';
import DetailView from './views/detail';
import TabBar from './components/tab-bar';
import {More,Left} from './components/icons';
import theme from './utils/theme';
import Button from "./components/button";
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
function SearchStack() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
          name="Search"
          component={SearchView}
          options={{
            headerShown: false
          }}
        />
        <HomeStack.Screen
          name="Detail"
          component={DetailView}
          options={({route, navigation}) =>{
            return{
              title: route.params?.title,
              headerStyle:{
                backgroundColor: theme.colors.softRed,
                shadowColor: 'transparent'
              },
              headerLeft: () =>(
                <Button px={20} height='100%' onPress={() => navigation.navigate('Search')}>
                  <Left color={theme.colors.textDark}/>
                </Button>
              ),
              headerRight: () =>(
                <Button px={20} height='100%'  onPress={() => navigation.navigate('Search')}>
                  <More color={theme.colors.textDark}/>
                </Button>
              )

            }
          }}
        />
    </HomeStack.Navigator>

  );
}
function TabNavigator() {
  return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search"  component={SearchStack} options={{  headerShown: false}} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
  );
}
export default TabNavigator;
