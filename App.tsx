import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Modal: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => navigation.navigate('Modal')} />
    </View>
  );
}

function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.modalText}>This is a native stack modal.</Text>
    </View>
  );
}

function ModalHeaderCloseButton() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return <Button title="Close" onPress={() => navigation.goBack()} />;
}

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            presentation: 'modal',
            title: 'Modal',
            headerLeft: ModalHeaderCloseButton,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  modalText: {
    fontSize: 18,
  },
});

export default App;
