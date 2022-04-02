import React from 'react';
import { MainScreen } from './src/components/MainScreen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Бизнес"
					component={MainScreen}
					initialParams={{ selectedCategory: 'business' }}
					options={() => ({
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="business" size={size} color={color} />
						),
					})}
				/>
				<Tab.Screen
					name="Технологии"
					component={MainScreen}
					initialParams={{ selectedCategory: 'technology' }}
					options={() => ({
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="computer" color={color} size={size} />
						),
					})}
				/>
				<Tab.Screen
					name="Спорт"
					component={MainScreen}
					initialParams={{ selectedCategory: 'sports' }}
					options={() => ({
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="sports" color={color} size={size} />
						),
					})}
				/>
				<Tab.Screen
					name="Развлечение"
					component={MainScreen}
					initialParams={{ selectedCategory: 'entertainment' }}
					options={() => ({
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="category" color={color} size={size} />
						),
					})}
				/>
				<Tab.Screen
					name="Наука"
					component={MainScreen}
					initialParams={{ selectedCategory: 'science' }}
					options={() => ({
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="science" color={color} size={size} />
						),
					})}
				/>
				<Tab.Screen
					name="Здоровье"
					component={MainScreen}
					initialParams={{ selectedCategory: 'health' }}
					options={() => ({
						tabBarIcon: ({ color, size }) => (
							<MaterialIcons name="healing" color={color} size={size} />
						),
					})}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
