import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: "primary" | "danger" | "secondary";
}

export default function Button({
    title,
    onPress,
    variant = "primary",
}: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.button,
                variant === "primary" && styles.primary,
                variant === "danger" && styles.danger,
                variant === "secondary" && styles.secondary,
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 13,
        paddingHorizontal: 18,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },

    primary: {
        backgroundColor: "#2563EB",
    },

    danger: {
        backgroundColor: "#DC2626",
    },

    secondary: {
        backgroundColor: "#E5E7EB",
    },

    text: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
    },
});
