import '@/global.css';
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind";
const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Arti&apos;s World!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">
        Go To Onboarding
      </Link>
        <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary p-4 text-white">
            Go To Sign In
        </Link>
        <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary p-4 text-white">
            Go To Sign Up
        </Link>
        <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary p-4 text-white">
            Spotify Subscription
        </Link>
        <Link href={{
            pathname: "/subscriptions/[id]",
            params: {id: "claude"}
        }}>
            Claude Max Subscription
        </Link>
    </SafeAreaView>
  );
}
