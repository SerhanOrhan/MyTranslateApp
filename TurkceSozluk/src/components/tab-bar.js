import React from 'react'
import Button from './button'
import {Search, Bookmark, Package} from './icons'
import Box from './box'
import theme from "../utils/theme"
function TabBar({state, descriptors, navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Box
      pb={20}
      bg='white'
      flexDirection='row'
         style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
    }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return label === 'Search' ? (
          //Search-button
          <Box key={label} p={15} mt={-15} bg='white' borderRadius="full">
            <Button

              size={56}
              bg="red"
              borderRadius="full"
              onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          //Tab-Button
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={56}
            flex={1}
            onPress={onPress}>
            {label === 'History' &&
            <Package
              color={isFocused ? theme.colors.red : theme.colors.textLight}
            />}
            {label === 'Favorite' &&
            <Bookmark
              color={isFocused ? theme.colors.red : theme.colors.textLight}
            />}
            <Box
              size={4}
              bg={isFocused ? 'red' : 'white'}
              mt={6}
              borderRadius='full'
            />
          </Button>
        );
      })}
    </Box>
  );
}
export default TabBar;
