import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useChildrenStore = defineStore("childrenStore", () => {

    let child = ref([]);
    
    const getChild = computed(() => child.value);

    const setChild = (data) => {
        child.value = [...data];
    };

    const deleteChild = (id) => {
        const filteredChildren = child.value.filter((item) => item.id !== id);
        child.value = [...filteredChildren];
    };

    return { getChild, setChild, deleteChild };
});
