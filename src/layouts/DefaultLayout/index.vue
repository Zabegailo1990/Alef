<template>
    <div class="default-layout">
        <Header class="default-layout__header" />
        <main class="default-layout__main">
            <router-view></router-view>
        </main>
        <Footer class="default-layout__footer" />
    </div>
</template>

<script setup>
import Header from "../../components/Header/index.vue";
import Footer from "../../components/Footer/index.vue";
</script>

<style lang="scss">
@import "./styles/default-layout.scss";
</style>
