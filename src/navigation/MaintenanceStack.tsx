import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaintenanceStackParamList } from "./types";
import MaintenanceListScreen from "../screens/Maintenance/MaintenanceListScreen";
import TruckDetailScreen from "../screens/TruckDetailScreen";
import AddTruckScreen from "../screens/AddTruckScreen";
import EditTruckScreen from "../screens/EditTruckScreen";

const Stack = createNativeStackNavigator<MaintenanceStackParamList>();

export default function MaintenanceStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MaintenanceList"
                component={MaintenanceListScreen}
                options={{
                    title: "En maintenance",
                }}
            />

            <Stack.Screen
                name="MaintenanceDetail"
                component={TruckDetailScreen}
                options={{
                    title: "Détail du camion",
                }}
            />

            <Stack.Screen
                name="MaintenanceAdd"
                component={AddTruckScreen}
                options={{
                    title: "Ajouter un camion",
                }}
            />

            <Stack.Screen
                name="MaintenanceEdit"
                component={EditTruckScreen}
                options={{
                    title: "Modifier le camion",
                }}
            />
        </Stack.Navigator>
    );
}
