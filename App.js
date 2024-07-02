import React, { useState } from "react";
import {
  Text,
  HStack,
  Center,
  Heading,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import ToggleDarkMode from "./components/ToggleDarkMode";
import { StyleSheet, TextInput, ScrollView } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import Camera from "./components/Camera";
import ImagePickerExample from "./components/ImagePickerExample";
import ExpoContacts from "./components/Contacts";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const TextInputLogin = () => {
  const [text, setText] = useState('');
  const { colorMode } = useColorMode();

  return (
    <NativeBaseProvider theme={theme}>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <VStack space={5} alignItems="center" style={styles.vstack}>
            <NativeBaseIcon />
            <Heading size="lg" style={styles.heading}>Tela de Login</Heading>

            <Box style={styles.box}>
              <Text>Nome:</Text>
              <TextInput
                style={[
                  styles.input,
                  { color: colorMode === "dark" ? "white" : "black" },
                ]}
                placeholder="Digite seu nome"
                placeholderTextColor={colorMode === "dark" ? "gray" : "darkgray"}
                value={text}
                onChangeText={setText}
              />
            </Box>
            <Box style={styles.box}>
              <Text>Senha:</Text>
              <TextInput
                style={[
                  styles.input,
                  { color: colorMode === "dark" ? "white" : "black" },
                ]}
                placeholder="Digite sua senha"
                placeholderTextColor={colorMode === "dark" ? "gray" : "darkgray"}
                secureTextEntry={true}
              />
            </Box>
            <Box style={styles.box}>
              <Button onPress={() => console.log("Login pressed")} style={styles.button}>Login</Button>
            </Box>
            <HStack space={4} style={styles.hstack}>
              <FontAwesome5 name="facebook" size={55} color="white" />
              <Entypo name="instagram-with-circle" size={55} color="white" />
              <FontAwesome5 name="whatsapp" size={55} color="white" />
            </HStack>

            <Box style={styles.box}>
              <Camera />
            </Box>

            <Box style={styles.box}>
              <ImagePickerExample />
            </Box>

            <Box>
              <ExpoContacts/>
            </Box>

            <ToggleDarkMode />
          </VStack>
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  vstack: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  heading: {
    marginBottom: 30,
  },
  box: {
    marginBottom: 30,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    paddingHorizontal: 8,
    width: '100%',
  },
  text: {
    fontSize: 16,
  },
  button: {
    height: 40,
    backgroundColor: '#ccc',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
    borderRadius: 9,
    width: '100%',
    justifyContent: 'center',
  },
  hstack: {
    marginBottom: 30,
  },
});

export default TextInputLogin;
