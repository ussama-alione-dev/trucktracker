import { Truck } from "../types/truck";

export const initialTrucks: Truck[] = [
    {
        id: "1",
        plateNumber: "12345-A-6",
        color: "Blanc",
        fuelType: "diesel",
        mileage: 45200,
        status: "service",
        nextOilChangeMileage: 50000,
    },
    {
        id: "2",
        plateNumber: "67890-B-7",
        color: "Bleu",
        fuelType: "diesel",
        mileage: 78500,
        status: "service",
        nextOilChangeMileage: 78000,
    },
    {
        id: "3",
        plateNumber: "11223-C-8",
        color: "Rouge",
        fuelType: "gasoline",
        mileage: 32100,
        status: "stopped",
        nextOilChangeMileage: 35000,
    },
    {
        id: "4",
        plateNumber: "44556-D-9",
        color: "Noir",
        fuelType: "diesel",
        mileage: 91200,
        status: "maintenance",
        nextOilChangeMileage: 95000,
    },
];
