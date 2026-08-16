import { StyleSheet, Text, View } from "react-native";

interface OilChangeBadgeProps {
    mileage: number;
    nextOilChangeMileage: number;
}

export default function OilChangeBadge({
    mileage,
    nextOilChangeMileage,
}: OilChangeBadgeProps) {
    const oilChangeDue = mileage >= nextOilChangeMileage;

    if (!oilChangeDue) {
        return null;
    }

    return (
        <View style={styles.badge}>
            <Text style={styles.text}>Vidange due</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        alignSelf: "flex-start",
        marginTop: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: "#FEE2E2",
    },

    text: {
        fontSize: 12,
        fontWeight: "700",
    },
});
