<template>
    <button :class="classesMods">{{ props.title }}</button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    theme: {
        type: String,
        default: "default",
    },
    title: String,
});

const classesMods = computed(() => {
    return {
        "button": props.theme,
        "button--theme--blue": props.theme === "blue",
        "button--theme--simple": props.theme === "simple",
        "button--theme--default": props.theme === "default",
    };
});
</script>

<style lang="scss" scoped>
@import "./styles/button.scss";
</style>
