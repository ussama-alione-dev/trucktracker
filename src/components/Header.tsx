import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>TruckTracker</Text>

            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },

    appName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#6B7280",
        marginBottom: 4,
    },

    title: {
        fontSize: 26,
        fontWeight: "700",
    },
});
