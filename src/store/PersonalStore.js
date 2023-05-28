import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePersonalStore = defineStore("personalStore", () => {
    const personal = ref({});
    const getPersonal = computed(() => personal.value);
    const setPersonal = (data) => {
        personal.value = data;
    };

    return { getPersonal, setPersonal };
});
