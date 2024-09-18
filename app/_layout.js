import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Disable header if needed
      }}
    >
      <Stack.Screen
        name="index"  // This 'index' will point to the default screen in your route
        options={{ headerShown: false }} // You can control header visibility here
      />
    </Stack>
  );
};

export default StackLayout;
