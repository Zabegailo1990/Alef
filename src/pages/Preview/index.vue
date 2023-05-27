<template>
    <div class="preview">
        <div class="preview__inner">
            <div class="preview__block">
                <h2 class="preview__title">Персональные данные</h2>
                <div class="preview__fullname">
                    <div class="preview__item" v-if="personalStore.getPersonal.name">{{ personalStore.getPersonal.name }}, </div>
                    <div class="preview__item" v-if="personalStore.getPersonal.age">{{ personalStore.getPersonal.age }} лет</div>
                </div>
            </div>
            <div class="preview__block">
                <h2 class="preview__title">Дети</h2>
                <div
                    class="preview__fullname preview__fullname--theme--gray"
                    v-for="item in childrenStore.getChild"
                    :key="item.id"
                >
                    <div class="preview__item">{{ item.name }},</div>
                    <div class="preview__item">{{ item.age }} лет</div>
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
</script>

<style lang="scss" scoped>
@import "./styles/preview.scss";
</style>
