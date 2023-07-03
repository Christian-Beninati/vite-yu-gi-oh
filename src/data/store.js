// Funzione Reactive di Vue per creare un oggetto che si aggiorna 
import { reactive } from "vue";

// Esporto la variabile Store con funzione Reactive
export const store = reactive({
    // con oggettto  characters vuoto
    characters: [],

    // Loading
    isLoading: false,
});