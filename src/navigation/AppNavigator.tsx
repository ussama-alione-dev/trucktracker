import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ServiceStack from "./ServiceStack";
import StoppedStack from "./StoppedStack";
import MaintenanceStack from "./MaintenanceStack";

import { RootTabParamList } from "./types";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Service"
                component={ServiceStack}
                options={{
                    title: "En service",
                }}
            />

            <Tab.Screen
                name="Stopped"
                component={StoppedStack}
                options={{
                    title: "À l'arrêt",
                }}
            />

            <Tab.Screen
                name="Maintenance"
                component={MaintenanceStack}
                options={{
                    title: "Maintenance",
                }}
            />
        </Tab.Navigator>
    );
}
