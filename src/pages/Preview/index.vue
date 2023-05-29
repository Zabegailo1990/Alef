<template>
    <div class="preview">
        <div class="preview__inner">
            <div class="preview__block">
                <h2 class="preview__title">Персональные данные</h2>
                <div class="preview__item">
                    {{ correctInfo(personalStore.getPersonal) }}
                </div>
            </div>
            <div class="preview__block">
                <h2 class="preview__title">Дети</h2>
                <div
                    class="preview__fullname preview__fullname--theme--gray"
                    v-for="item in childrenStore.getChild"
                    :key="item.id"
                >
                    <div class="preview__item">{{ correctInfo(item) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePersonalStore } from "../../store/PersonalStore";
import { useChildrenStore } from "../../store/ChildrenStore";

const personalStore = usePersonalStore();
const childrenStore = useChildrenStore();

const correctInfo = (obj) => {
    if (obj.name && obj.age) {
        return `${obj.name}, ${obj.age} лет`;
    } else if (obj.name && !obj.age) {
        return obj.name;
    } else if (obj.age && !obj.name) {
        return `${obj.age} лет`;
    } else {
        return;
    }
};
</script>

<style lang="scss" scoped>
@import "./styles/preview.scss";
</style>
