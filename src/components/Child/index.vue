<template>
    <div class="child">
        <div class="child__row">
            <Input
                class="child__input"
                label="Имя"
                :id="`name_${id}`"
                v-model="name"
                @Input="valueChangeHandler"
            />
            <Input
                class="child__input"
                label="Возраст"
                :id="`age_${id}`"
                type="number"
                v-model="age"
                @Input="valueChangeHandler"
            />
        </div>
        <Button
            @click="deleteItem(props.id)"
            theme="simple"
            title="Удалить"
        />
    </div>
</template>

<script setup>
import Input from "../Input/index.vue";
import Button from "../Button/index.vue";
import { ref, defineProps } from "vue";
import { useChildrenStore } from "../../store/ChildrenStore";

const childrenStore = useChildrenStore();

const props = defineProps({
    id: String,
    item: Object,
});

const name = ref(props.item?.name || '');
const age = ref(props.item?.age || '');

// Наименования эмитиков
const emits = defineEmits(["returnChild", "returnId"]);

// Передача события в родителя
const valueChangeHandler = () => {
    emits("returnChild", { id: props.id, name: name.value, age: age.value });
};

// Передача id в стор и в родителя для удаления данных и поля
const deleteItem = (id) => {
    childrenStore.deleteChild(id);
    emits("returnId", props.id);
};
</script>

<style lang="scss" scoped>
@import "./styles/child.scss";
</style>
