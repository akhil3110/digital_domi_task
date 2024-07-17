import { create } from "zustand";

interface ImageDetail{
    imageUrl: string;
    text: string;
}

interface ImageDetailStore{
    imageDetail: ImageDetail | null;
    update: (imageDetail: ImageDetail) => void;
}

export const useImageDetailsStore = create<ImageDetailStore>((set) => ({
    imageDetail: null,
    update: (imageDetail) => set(() =>({ imageDetail })),
}));