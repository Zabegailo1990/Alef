<template>
    <div class="child">
        <div class="child__row">
            <Input
                class="child__input"
                label="Имя"
                v-model="name"
                @Input="valueChangeHandler"
                :id="`name_${id}`"
            />
            <Input
                class="child__input"
                label="Возраст"
                type="number"
                v-model="age"
                @Input="valueChangeHandler"
                :id="`age_${id}`"
            />
        </div>
        <Button
            @click="deleteData(props.id)"
            theme="simple"
            title="Удалить"
        />
    </div>
</template>

<script setup>
import Input from "../Input/index.vue";
import Button from "../Button/index.vue";
import { ref } from "vue";
import { useChildrenStore } from "../../store/ChildrenStore";

const childrenStore = useChildrenStore();

const props = defineProps({
    id: String,
});

const name = ref("");
const age = ref("");

// Наименования эмитиков
const emits = defineEmits(["returnChild", "returnId"]);

// Передача события в родителя
const valueChangeHandler = () => {
    emits("returnChild", { id: props.id, name: name.value, age: age.value });
};

// Передача id в стор и в родителя для удаления данных и поля
const deleteData = (id) => {
    childrenStore.deleteChild(id);
    emits("returnId", props.id);
};
</script>

<style lang="scss" scoped>
@import "./styles/child.scss";
</style>
