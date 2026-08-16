import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ServiceStackParamList } from "./types";
import ServiceListScreen from "../screens/Service/ServiceListScreen";
import TruckDetailScreen from "../screens/TruckDetailScreen";
import AddTruckScreen from "../screens/AddTruckScreen";
import EditTruckScreen from "../screens/EditTruckScreen";

const Stack = createNativeStackNavigator<ServiceStackParamList>();

export default function ServiceStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ServiceList"
                component={ServiceListScreen}
                options={{
                    title: "En service",
                }}
            />

            <Stack.Screen
                name="ServiceDetail"
                component={TruckDetailScreen}
                options={{
                    title: "Détail du camion",
                }}
            />

            <Stack.Screen
                name="ServiceAdd"
                component={AddTruckScreen}
                options={{
                    title: "Ajouter un camion",
                }}
            />

            <Stack.Screen
                name="ServiceEdit"
                component={EditTruckScreen}
                options={{
                    title: "Modifier le camion",
                }}
            />
        </Stack.Navigator>
    );
}
