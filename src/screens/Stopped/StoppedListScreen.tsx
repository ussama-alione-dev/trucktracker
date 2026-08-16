import { FlatList, StyleSheet, View } from "react-native";

import Header from "../../components/Header";
import TruckCard from "../../components/TruckCard";
import { useTrucks } from "../../context/TrucksContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StoppedStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<StoppedStackParamList, "StoppedList">;

export default function StoppedListScreen({ navigation }: Props) {
    const { trucks } = useTrucks();

    const stoppedTrucks = trucks.filter((truck) => truck.status === "stopped");

    return (
        <View style={styles.container}>
            <Header title="À l'arrêt" />

            <FlatList
                data={stoppedTrucks}
                keyExtractor={(truck) => truck.id}
                renderItem={({ item }) => (
                    <TruckCard
                        truck={item}
                        onPress={() =>
                            navigation.navigate("StoppedDetail", {
                                truckId: item.id,
                            })
                        }
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
