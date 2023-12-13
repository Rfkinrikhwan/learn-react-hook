import React, { useEffect, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';


// webBrowser.maybeCompleteAuthSession();


function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    // const [userIfo, setUserInfo] = useState();
    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     androidClientId: '862506654808-ojog0f4q8sm1blr1gkbnqjgnbnio23vr.apps.googleusercontent.com'
    // });

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     if (response?.type == "success") {
    //         const { id_token } = response.params;
    //         const credetial = GoogleAuthProvider.credential(id_token);
    //         signInWithCredential(auth, credetial)
    //     }
    // }, [response])

    // // if (!isLoggedIn) {
    // return (<LoginPage promptAsync={promptAsync} />)
    // // }



    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitleAlign: "center",
                    title: 'Home',
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="hooks"
                options={{
                    headerTitleAlign: "center",
                    title: 'Hooks',
                    tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
                }}
            />
        </Tabs>
    );
}