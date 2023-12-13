import { useCallback, useState } from 'react';
import Search from '../../components/Search';
import { Pressable, Text, View } from 'react-native';
import { shuffle } from '@pacote/shuffle'

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
];

interface DemoProps { }

export default function Demo({ }: DemoProps) {
    const [users, setUsers] = useState(allUsers);
    const [serachValue, setSearchValue] = useState("");

    const handleSearch = useCallback(
        (text: string) => {
            // console.log(text);
            console.log(users[0]);

            const filteredUsers = allUsers.filter((user) =>
                user.includes(text.toLowerCase()),
            );
            setUsers(filteredUsers);
        },
        []
    );

    return (
        <View className='p-5 flex-1'>
            <View className='align-center flex-row items-center'>
                <Pressable onPress={() => setUsers(shuffle(allUsers))} className='p-3 px-5 bg-blue-500 mr-3 rounded-md'>
                    <Text className='text-white font-bold'>
                        Shuffle
                    </Text>
                </Pressable>

                <View className='flex-1 p-2 border border-[#666] rounded-md'>
                    <Search onChange={handleSearch} searchValue={serachValue} setSearchValue={setSearchValue} />
                </View>
            </View>

            <View className='flex-1 gap-1 mt-5'>
                {users.map((user) => (
                    <View className='flex-row items-center gap-2' key={user}>
                        <View className='w-2 h-2 rounded-lg bg-blue-500'></View>
                        <Text className='text-lg font-bold'>{user}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
