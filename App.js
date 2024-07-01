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
          <VStack space={5} alignItems="center">
            <NativeBaseIcon />
            <Heading size="lg">Tela de Login</Heading>

            <Box>
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
            <Box>
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
            <Box>
              <Button onPress={() => console.log("Login pressed")} style={styles.button}>Login</Button>
            </Box>
            <HStack space={4}>
              <FontAwesome5 name="facebook" size={55} color="white" />
              <Entypo name="instagram-with-circle" size={55} color="white" />
              <FontAwesome5 name="whatsapp" size={55} color="white" />
            </HStack>

            <Box>
              <Camera/>
            </Box>

            <Box>
              <ImagePickerExample/>
            </Box>

            <ToggleDarkMode/>
          </VStack>
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: 200,
  },
  text: {
    fontSize: 16,
  },
  button: {
    height: 40,
    backgroundColor:'#ccc',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius:9,
    width: 200,
    justifyContent: 'center',
  },
});

export default TextInputLogin;
