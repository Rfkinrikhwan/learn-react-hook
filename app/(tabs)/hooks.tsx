import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

type navigation = {
  text: string;
  route: string;
};

export default function TabTwoScreen() {
  const hooks: navigation[] = [
    { text: "useState", route: "screen/useState" },
    { text: "useEffect", route: "screen/useEffect" },
    { text: "useContext", route: "screen/useContext" },
    { text: "useCallback", route: "screen/useCallback" },
    { text: "useReducer", route: "screen/useReducer" },
    { text: "useMemo", route: "screen/useMemo" },
    { text: "useRef", route: "screen/useRef" },
  ];

  return (
    <View className="flex-1">
      <FlatList
        data={hooks}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item): string => item.text}
        renderItem={({ item }: any) => (
          <Pressable className="flex-row items-center justify-between p-4 border-b border-[#dcdfe6]"
            onPress={() => router.push(item.route)}>
            <Text className="text-lg font-bold text-[#333]">{item.text}</Text>
            <FontAwesome name="chevron-right" size={18} color={"#333"} />
          </Pressable>
        )}
      />
    </View>
  );
}
