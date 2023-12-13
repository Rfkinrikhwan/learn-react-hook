import { useMemo, useState } from 'react';

import { initialItems } from '../../utils/utils';
import { Pressable, Text, View } from 'react-native';

interface DemoProps { }

function Demo({ }: DemoProps) {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = useMemo(() => items.find((item) => item.id === count), [count, items])

    return (
        <View className=" flex-1 p-5 gap-5">
            <View
                style={{ elevation: 3 }}
                className="items-center h-[120px] justify-center rounded-lg bg-[#7ED7C1]">
                <Text className="text-[18px] font-bold text-[#333]">Count: {count}</Text>
                <Text className="text-[18px] font-bold text-[#333]">Selected Item: {selectedItem?.id}</Text>
                <View className="flex-row gap-5 mt-1 justify-between">
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

export default Demo;