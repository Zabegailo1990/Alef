import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useChildrenStore = defineStore("childrenStore", () => {
    // State
    let child = ref([]);
    // Getter не используется, но на всякий случай
    const getChild = computed(() => child.value);
    // Сохранение элементов
    const setChild = (data) => {
        child.value = [...data];
    };
    // Удаление элементов
    const deleteChild = (id) => {
        const filteredChildren = child.value.filter((item) => item.id !== id);
        child.value = [...filteredChildren];
    };

    return { getChild, setChild, deleteChild };
});
