<template>
    <div class="form">
        <div class="form__col">
            <h2 class="form__title form__title--indent">Персональные данные</h2>
            <Personal
                class="form__personal"
                :valueFromStore="personalData"
                @return-value="(value) => (personalData = value)"
            />
            <div class="form__row">
                <h2 class="form__title">Дети (макс. 5)</h2>
                <Transition name="form__fade">
                    <Button
                        v-if="childrenData.length < 5"
                        title="Добавить ребенка"
                        theme="default"
                        @click="addChild"
                    />
                </Transition>
            </div>
        </div>
        <div class="form__col">
            <Child
                class="form__child"
                v-for="(item, index) in childrenData"
                :key="childrenData[index].id"
                :id="childrenData[index].id"
                :valueFromStore="item"
                @return-child="(value) => (childrenData[index] = { ...value })"
                @return-id="(id) => deleteChild(id)"
            />
        </div>
        <Button
            @click="saveDataStore"
            title="Сохранить"
            theme="blue"
        />
    </div>
</template>

<script setup>
import Personal from "../../components/Personal/index.vue";
import Child from "../../components/Child/index.vue";
import Button from "../../components/Button/index.vue";
import { v4 } from "uuid";
import { ref } from "vue";
import { usePersonalStore } from "../../store/PersonalStore";
import { useChildrenStore } from "../../store/ChildrenStore";

const personalStore = usePersonalStore();
const childrenStore = useChildrenStore();

const personalData = ref(JSON.parse(JSON.stringify(personalStore.getPersonal)));
const childrenData = ref(JSON.parse(JSON.stringify(childrenStore.getChild)));

// Условно добавляю поля (не больше 5-ти), и id
const addChild = () => {
    if (childrenData.value.length < 5) {
        childrenData.value.push({ id: v4() });
    }
};

// Удаление полей
const deleteChild = (id) => {
    const filteredChildren = childrenData.value.filter(
        (item) => item.id !== id
    );
    childrenData.value = filteredChildren;
};

// Сохраняю в стор, проверяю заполнено ли имя или года, чтоб понять забыл человек заполнить или ошибочно вызвал новое поле
const saveDataStore = () => {
    const data = [];
    for (const item of childrenData.value) {
        if (item.name || item.age) {
            data.push(item);
        }
    }
    childrenStore.setChild(data);
    personalStore.setPersonal(personalData.value);
};
</script>

<style lang="scss" scoped>
@import "./styles/form.scss";
</style>
