import { View, Text } from 'react-native'
import React from 'react'
import { contextCustom } from '../../context/Context'

const useContext = () => {
    const context = contextCustom()

    return (
        <View>
            <Text>Name : {context.name}</Text>
            <Text>Followers : {context.isFollowers === true ? `Yes` : `no`}</Text>
        </View>
    )
}

export default useContext