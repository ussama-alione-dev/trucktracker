import { Pressable, StyleSheet, Text, View } from "react-native";

import { Truck } from "../types/truck";
import StatusBadge from "./StatusBadge";
import OilChangeBadge from "./OilChangeBadge";

interface TruckCardProps {
    truck: Truck;
    onPress: () => void;
}

export default function TruckCard({ truck, onPress }: TruckCardProps) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
        >
            <View style={styles.header}>
                <Text style={styles.plate}>{truck.plateNumber}</Text>

                <StatusBadge status={truck.status} />
            </View>

            <View style={styles.info}>
                <Text style={styles.label}>Couleur</Text>

                <Text style={styles.value}>{truck.color}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.label}>Carburant</Text>

                <Text style={styles.value}>{truck.fuelType}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.label}>Kilométrage</Text>

                <Text style={styles.value}>
                    {truck.mileage.toLocaleString()} km
                </Text>
            </View>

            <OilChangeBadge
                mileage={truck.mileage}
                nextOilChangeMileage={truck.nextOilChangeMileage}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginBottom: 12,
        borderRadius: 14,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    pressed: {
        opacity: 0.7,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },

    plate: {
        fontSize: 18,
        fontWeight: "700",
    },

    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
    },

    label: {
        color: "#6B7280",
    },

    value: {
        fontWeight: "500",
    },
});
