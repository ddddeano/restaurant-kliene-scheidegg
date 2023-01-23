<template>
    <div @click="updateProduct" class="button" :class="onCommand.value ? 'passive' : 'pressed'">
        {{ fetchedProduct.name }}
    </div>
</template>

<script setup>
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
const { product } = defineProps(['product'])

const onCommand = reactive({
    value: false
})

// Server Side
const { data: fetchedProduct } = await useFetch(`/api/product?name=${product.id}`);

// Client Side
onMounted(async () => {
    const { firestore } = useFirebase();
    const docRef = doc(firestore, `products`, product.id);
    onSnapshot(docRef, (snap) => {
        fetchedProduct.value = snap.data();
        onCommand.value = snap.data().command;
    });
    console.log(fetchedProduct)
});

const updateProduct = async () => {

    console.log("Updating product")
    const { firestore } = useFirebase();
    const docRef = doc(firestore, `products`, product.id);

    await updateDoc(docRef, {
        command: !onCommand.value,
    });
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




