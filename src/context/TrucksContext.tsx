import { createContext, ReactNode, useContext, useState } from "react";

import { initialTrucks } from "../data/data";
import { Truck, TruckStatus } from "../types/truck";

interface TrucksContextType {
    trucks: Truck[];
    addTruck: (truck: Truck) => void;
    updateTruck: (id: string, updatedData: Partial<Truck>) => void;
    deleteTruck: (id: string) => void;
    changeStatus: (id: string, newStatus: TruckStatus) => void;
}

interface TrucksProviderProps {
    children: ReactNode;
}

const TrucksContext = createContext<TrucksContextType | undefined>(undefined);

export function TrucksProvider({ children }: TrucksProviderProps) {
    const [trucks, setTrucks] = useState<Truck[]>(initialTrucks);

    const addTruck = (truck: Truck): void => {
        setTrucks((currentTrucks) => [...currentTrucks, truck]);
    };

    const updateTruck = (id: string, updatedData: Partial<Truck>): void => {
        setTrucks((currentTrucks) =>
            currentTrucks.map((truck) =>
                truck.id === id ? { ...truck, ...updatedData } : truck,
            ),
        );
    };

    const deleteTruck = (id: string): void => {
        setTrucks((currentTrucks) =>
            currentTrucks.filter((truck) => truck.id !== id),
        );
    };

    const changeStatus = (id: string, newStatus: TruckStatus): void => {
        setTrucks((currentTrucks) =>
            currentTrucks.map((truck) =>
                truck.id === id ? { ...truck, status: newStatus } : truck,
            ),
        );
    };

    return (
        <TrucksContext.Provider
            value={{
                trucks,
                addTruck,
                updateTruck,
                deleteTruck,
                changeStatus,
            }}
        >
            {children}
        </TrucksContext.Provider>
    );
}

export function useTrucks(): TrucksContextType {
    const context = useContext(TrucksContext);

    if (!context) {
        throw new Error("useTrucks must be used inside TrucksProvider");
    }

    return context;
}
