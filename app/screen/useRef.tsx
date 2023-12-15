import { useRef, useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { contextCustom } from '../../context/Context';

interface DemoProps { }

export default function useRefCom({ }: DemoProps) {
    // implementation context
    const context = contextCustom();
    const refEl = useRef<TextInput>(null);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        console.log(context)
        refEl.current?.focus()
    }, [])

    return (
        <View className='p-5 flex-1'>
            <View className='align-center flex-row items-center'>
                <View className='flex-1 p-2 border border-[#666] rounded-md'>
                    <TextInput
                        ref={refEl}
                        placeholder='Search users...'
                        value={searchValue}
                        onChangeText={(e) => {
                            setSearchValue(e);
                        }}
                    />
                </View>
            </View>
        </View>
    );
}