import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import Button from "../components/Button";
import OilChangeBadge from "../components/OilChangeBadge";
import StatusBadge from "../components/StatusBadge";
import { useTrucks } from "../context/TrucksContext";
import {
    MaintenanceStackParamList,
    ServiceStackParamList,
    StoppedStackParamList,
} from "../navigation/types";

type DetailRoute =
    | RouteProp<ServiceStackParamList, "ServiceDetail">
    | RouteProp<StoppedStackParamList, "StoppedDetail">
    | RouteProp<MaintenanceStackParamList, "MaintenanceDetail">;

export default function TruckDetailScreen() {
    const route = useRoute<DetailRoute>();
    const navigation = useNavigation();

    const { trucks, deleteTruck } = useTrucks();

    const truckId = route.params.truckId;

    const truck = trucks.find((item) => item.id === truckId);

    if (!truck) {
        return (
            <View style={styles.center}>
                <Text>Camion introuvable.</Text>
            </View>
        );
    }

    const handleDelete = (): void => {
        Alert.alert(
            "Supprimer le camion",
            `Voulez-vous supprimer ${truck.plateNumber} ?`,
            [
                {
                    text: "Annuler",
                    style: "cancel",
                },
                {
                    text: "Supprimer",
                    style: "destructive",
                    onPress: () => {
                        deleteTruck(truck.id);
                        navigation.goBack();
                    },
                },
            ],
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.plate}>{truck.plateNumber}</Text>

            <StatusBadge status={truck.status} />

            <View style={styles.section}>
                <Text style={styles.label}>Couleur</Text>
                <Text style={styles.value}>{truck.color}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Type de carburant</Text>
                <Text style={styles.value}>{truck.fuelType}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Kilométrage</Text>
                <Text style={styles.value}>
                    {truck.mileage.toLocaleString()} km
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Prochaine vidange</Text>

                <Text style={styles.value}>
                    {truck.nextOilChangeMileage.toLocaleString()} km
                </Text>

                <OilChangeBadge
                    mileage={truck.mileage}
                    nextOilChangeMileage={truck.nextOilChangeMileage}
                />
            </View>

            <Button
                title="Modifier"
                onPress={() => {
                    navigation.navigate(
                        "ServiceEdit" as never,
                        {
                            truckId: truck.id,
                        } as never,
                    );
                }}
            />

            <Button title="Supprimer" variant="danger" onPress={handleDelete} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    plate: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 12,
    },

    section: {
        marginTop: 20,
    },

    label: {
        fontSize: 14,
        color: "#6B7280",
        marginBottom: 4,
    },

    value: {
        fontSize: 17,
        fontWeight: "600",
    },
});
