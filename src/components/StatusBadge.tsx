import { StyleSheet, Text, View } from "react-native";

import { TruckStatus } from "../types/truck";

interface StatusBadgeProps {
    status: TruckStatus;
}

const statusLabels: Record<TruckStatus, string> = {
    service: "En service",
    stopped: "À l'arrêt",
    maintenance: "En maintenance",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <View
            style={[
                styles.badge,
                status === "service" && styles.service,
                status === "stopped" && styles.stopped,
                status === "maintenance" && styles.maintenance,
            ]}
        >
            <Text style={styles.text}>{statusLabels[status]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },

    service: {
        backgroundColor: "#DCFCE7",
    },

    stopped: {
        backgroundColor: "#FEF3C7",
    },

    maintenance: {
        backgroundColor: "#FEE2E2",
    },

    text: {
        fontSize: 12,
        fontWeight: "600",
    },
});
