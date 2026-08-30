import '@/global.css';
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind";
const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold text-primary">
       Home
      </Text>
      <Link href="/onboarding" className="mt-4 rounded font-sans-bold bg-primary p-4 text-white">
        Go To Onboarding
      </Link>
        <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary p-4 text-white">
            Go To Sign In
        </Link>
        <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold rounded bg-primary p-4 text-white">
            Go To Sign Up
        </Link>
    </SafeAreaView>
  );
}
