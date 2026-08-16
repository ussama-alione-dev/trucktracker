import { FlatList, StyleSheet, View } from "react-native";

import Header from "../../components/Header";
import TruckCard from "../../components/TruckCard";
import { useTrucks } from "../../context/TrucksContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServiceStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<ServiceStackParamList, "ServiceList">;

export default function ServiceListScreen({ navigation }: Props) {
    const { trucks } = useTrucks();

    const serviceTrucks = trucks.filter((truck) => truck.status === "service");

    return (
        <View style={styles.container}>
            <Header title="En service" />

            <FlatList
                data={serviceTrucks}
                keyExtractor={(truck) => truck.id}
                renderItem={({ item }) => (
                    <TruckCard
                        truck={item}
                        onPress={() =>
                            navigation.navigate("ServiceDetail", {
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
