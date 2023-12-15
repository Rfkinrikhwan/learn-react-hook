import { memo } from 'react';
import { TextInput, View } from 'react-native';

interface SearchProps {
    onChange: (text: string) => void,
    searchValue: string,
    setSearchValue: (text: string) => void,
}

function Search({ onChange, searchValue, setSearchValue }: SearchProps) {
    console.log('Search rendered!');

    return (
        <>
            <TextInput
                placeholder='Search users...'
                value={searchValue}
                onChangeText={(e) => {
                    setSearchValue(e);
                    onChange(e);
                }}
            />
        </>
    );
}

export default memo(Search);
