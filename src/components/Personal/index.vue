<template>
    <div class="personal">
        <div class="personal__inner">
            <Input
                class="personal__input"
                label="Имя"
                id="Имя"
                v-model="name"
                @input="valueChangeHandler"
            />
            <Input
                class="personal__input"
                label="Возраст"
                id="Возраст"
                type="number"
                v-model="age"
                @input="valueChangeHandler"
            />
        </div>
    </div>
</template>

<script setup>
import Input from "../Input/index.vue";
import { ref } from "vue";

const props = defineProps({
    valueFromStore: Object,
})

const name = ref(props.valueFromStore.name || '');
const age = ref(props.valueFromStore.age || '');

const emits = defineEmits(["returnValue"]);

const valueChangeHandler = () => {
    emits("returnValue", { name: name.value, age: age.value });
};
</script>

<style lang="scss" scoped>
@import "./styles/personal.scss";
</style>
