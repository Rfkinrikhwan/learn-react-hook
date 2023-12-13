import { View, Text, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

const useEffectComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // The code that we want to run
        console.log('The count is:', count);

        // Optional return function
        return () => {
            console.log('I am being cleaned up!');
        };
    }, [count]); // The dependency array

    return (
        <View className={count % 2 == 0 ? "bg-[#DC8686] flex-1 p-5 gap-5" : "bg-[#860A35] flex-1 p-5 gap-5"}>
            <View
                style={{ elevation: 3 }}
                className="items-center h-[120px] justify-center rounded-lg bg-[#7ED7C1]">
                <Text className="text-[22px] font-bold text-[#333]">
                    Count:{" "}
                    <Text
                        className={count % 2 == 0 ? "text-[#DC8686]" : "text-[#860A35]"}>
                        {count}
                    </Text>
                </Text>
                <View className="flex-row gap-5 mt-1 justify-between">
                    <Pressable
                        style={{ elevation: 3 }}
                        className="bg-[#DC8686] p-2 w-24 rounded-lg items-center justify-center"
                        onPress={() => setCount(count - 1)}>
                        <Text className="text-[#F0DBAF] font-bold">Decrement</Text>
                    </Pressable>
                    <Pressable
                        style={{ elevation: 3 }}
                        className="bg-[#DC8686] p-2 w-24 rounded-lg items-center justify-center"
                        onPress={() => setCount(count + 1)}>
                        <Text className="text-[#F0DBAF] font-bold">Increment</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default useEffectComponent