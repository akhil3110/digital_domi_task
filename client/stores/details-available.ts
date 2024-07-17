import { create } from "zustand";

interface Details{
    isLoading?: boolean;
    isDeatailsAvailable?: boolean;
    userId?: string |  null;
}

interface AvailableDetailStore{
    AvailabeDetails: Details | null;
    updateDetails: (details: Details) => void;
}

export const useAvilableDetailsStore = create<AvailableDetailStore>((set) => ({
    AvailabeDetails: null,
    updateDetails: (AvailabeDetails) => set(() =>({ AvailabeDetails })),
}));