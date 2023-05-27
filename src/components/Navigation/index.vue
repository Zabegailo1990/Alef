<template>
    <ul class="navigation">
        <li
            class="navigation__item"
            v-for="(item, index) in nav"
            :key="index"
        >
            <RouterLink
                :to="item.link"
                class="navigation__link"
            >
                {{ item.title }}
            </RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { RouterLink } from "vue-router";

const nav = [
    {
        title: "Форма",
        link: "/",
    },
    {
        title: "Превью",
        link: "/preview",
    },
];
</script>

<style lang="scss">
@import "./styles/navigation.scss";
</style>
