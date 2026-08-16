import { NavigationContainer } from "@react-navigation/native";

import { TrucksProvider } from "./src/context/TrucksContext";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <TrucksProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </TrucksProvider>
    );
}
