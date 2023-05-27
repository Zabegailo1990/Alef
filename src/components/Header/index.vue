<template>
    <header class="header">
        <Logo class="header__logo" />
        <Navigation  class="header__navigation"/>
    </header>
</template>

<script setup>
import Logo from "../Logo/index.vue";
import Navigation from "../Navigation/index.vue";
</script>

<style lang="scss" scoped>
@import "./styles/header.scss";
</style>
