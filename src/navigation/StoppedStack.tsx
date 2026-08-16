import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StoppedStackParamList } from "./types";
import StoppedListScreen from "../screens/Stopped/StoppedListScreen";
import TruckDetailScreen from "../screens/TruckDetailScreen";
import AddTruckScreen from "../screens/AddTruckScreen";
import EditTruckScreen from "../screens/EditTruckScreen";

const Stack = createNativeStackNavigator<StoppedStackParamList>();

export default function StoppedStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="StoppedList"
                component={StoppedListScreen}
                options={{
                    title: "À l'arrêt",
                }}
            />

            <Stack.Screen
                name="StoppedDetail"
                component={TruckDetailScreen}
                options={{
                    title: "Détail du camion",
                }}
            />

            <Stack.Screen
                name="StoppedAdd"
                component={AddTruckScreen}
                options={{
                    title: "Ajouter un camion",
                }}
            />

            <Stack.Screen
                name="StoppedEdit"
                component={EditTruckScreen}
                options={{
                    title: "Modifier le camion",
                }}
            />
        </Stack.Navigator>
    );
}
