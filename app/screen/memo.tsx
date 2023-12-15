import { View, Text } from 'react-native'
import React, { memo } from 'react'

const memoCom = ({ }) => {
    return (
        <View>
            <Text>Implementasi memo pada react</Text>
        </View>
    )
}

export default memo(memoCom)