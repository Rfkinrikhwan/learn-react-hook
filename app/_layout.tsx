import { Stack } from "expo-router";

function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="screen/useCallback"
        options={{ headerTitleAlign: "center", title: "useCallback" }}
      />
      <Stack.Screen name="screen/loginPage" options={{ title: "Login", headerTitleAlign: "center", headerBackButtonMenuEnabled: false }} />
      <Stack.Screen
        name="screen/useContext"
        options={{ headerTitleAlign: "center", title: "useContext" }}
      />
      <Stack.Screen
        name="screen/useEffect"
        options={{ headerTitleAlign: "center", title: "useEffect" }}
      />
      <Stack.Screen
        name="screen/useMemo"
        options={{ headerTitleAlign: "center", title: "useMemo" }}
      />
      <Stack.Screen
        name="screen/useReducer"
        options={{ headerTitleAlign: "center", title: "useReducer" }}
      />
      <Stack.Screen
        name="screen/useRef"
        options={{ headerTitleAlign: "center", title: "useRef" }}
      />
      <Stack.Screen
        name="screen/useState"
        options={{ headerTitleAlign: "center", title: "useState" }}
      />
    </Stack>
  );
}

export default RootLayoutNav;
