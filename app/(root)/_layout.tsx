import { useGlobalContext } from '@/lib/global-provider';
import { Redirect, Slot } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout() {
  const { loading, isLogged } = useGlobalContext();
  if (loading) {
    return (
      <SafeAreaView className='bg-red-50 h-full flex items-center justify-center'>
        <ActivityIndicator className='text-primary-300' />
      </SafeAreaView>
    );
  }
  if (!isLogged) return <Redirect href='/sign-in' />;
  return <Slot />;
}
