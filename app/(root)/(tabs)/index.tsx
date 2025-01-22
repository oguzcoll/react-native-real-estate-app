import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className='font-bold text-3xl mr-10 font-rubik  '>
        Welcome to real estate
      </Text>
    </View>
  );
}
