import React, { useRef, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const loginPage = ({ promptAsync }: any) => {

    const animation = useRef(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
    }, []);

    return (
        <View className='p-5 items-center justify-center flex-1'>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    height: 250,
                }}
                source={require('../../assets/animation.json')}
            />

            <Pressable className='w-full rounded-xl bg-[#2f78f2] p-2 items-center justify-center' onPress={() => promptAsync()}>
                <Text className='font-bold text-[#ffff] text-lg'><FontAwesome name='google' size={18} /> Sign in With Google</Text>
            </Pressable>
        </View>
    );
}

export default loginPage
