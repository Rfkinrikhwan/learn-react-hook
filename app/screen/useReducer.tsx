import { useReducer } from 'react';
import { Pressable } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
    const { type } = action;

    switch (type) {
        case 'increment': {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Maximum reached' : null,
            };
        }
        case 'decrement': {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Minimum reached' : null,
            };
        }
        default:
            return state;
    }
}

export default function Demo() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
    });

    return (
        <>
            <View className="flex-1 p-5 gap-5">
                <View
                    style={{ elevation: 3 }}
                    className="items-center h-[120px] justify-center rounded-lg bg-[#7ED7C1]">
                    <Text className="text-[22px] font-bold text-[#333]">
                        Count:{" "}
                        <Text
                            className={state.count % 2 == 0 ? "text-[#DC8686]" : "text-[#860A35]"}>
                            {state.count}
                        </Text>
                    </Text>
                    {state.error && <Text className='mb-2 text-red-500'>{state.error}</Text>}
                    <View className="flex-row gap-5 mt-1 justify-between">
                        <Pressable
                            style={{ elevation: 3 }}
                            className="bg-[#DC8686] p-2 w-24 rounded-lg items-center justify-center"
                            onPress={() => dispatch({ type: 'decrement' })}>
                            <Text className="text-[#F0DBAF] font-bold">Decrement</Text>
                        </Pressable>
                        <Pressable
                            style={{ elevation: 3 }}
                            className="bg-[#DC8686] p-2 w-24 rounded-lg items-center justify-center"
                            onPress={() => dispatch({ type: 'increment' })}>
                            <Text className="text-[#F0DBAF] font-bold">Increment</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    );
}