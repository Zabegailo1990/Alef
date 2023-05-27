<template>
    <div class="field">
        <label
            class="field__label"
            :for="id"
        >
            {{ props.label }}
        </label>
        <input
            class="field__input"
            :id="id"
            :type="type"
            :value="modelValue"
            :disabled="disabled"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        default: "text",
    },
    id: String,
    label: String,
    disabled: Boolean,
});
</script>

<style lang="scss" scoped>
@import "./styles/input.scss";
</style>
