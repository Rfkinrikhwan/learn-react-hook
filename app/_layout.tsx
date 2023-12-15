import { Stack } from "expo-router";
import { globalData } from "../context/Context";
import { useState } from "react";

interface users {
  name: string,
  isFollowers: Boolean
}

function RootLayoutNav() {

  const [user, setUser] = useState<users>({
    name: "Rifki",
    isFollowers: true,
  })


  return (
    <globalData.Provider value={user}>
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
    </globalData.Provider>
  );
}

export default RootLayoutNav;
