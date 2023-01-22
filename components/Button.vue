<template>
    <div @click="change" class="button" :class="food.command ? 'pressed' : 'passive'">
        {{ food.id }}
    </div>
</template>

<script setup>
import { doc, updateDoc } from "firebase/firestore";
const { firestore } = useFirebase();
const { food } = defineProps(['food'])

const change = async () => {
    console.log(food.command)

    await updateDoc(doc(firestore, "foods", food.id), {
        command: !food.command,
    })
    console.log(food.command)
}


</script>

<style lang="scss" scoped>
.button {
    border-radius: 20px;
    height: 100px;
    width: 450px;
    font-size: 70px;
    display: flex;
    font-family: 'Koulen';
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-left: 10px;
}

.pressed {
    background: var(--pressed);
    color: var(--pressed-text);
}

.passive {
    background: var(--passive);
    color: var(--passive-text);
}
</style>




