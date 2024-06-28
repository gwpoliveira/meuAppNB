import {HStack, Switch, Text, useColorMode} from "native-base";
import React from "react";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={3} alignItems="center">
      <Text>Escuro</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Claro</Text>
    </HStack>
  );
}
export default ToggleDarkMode;