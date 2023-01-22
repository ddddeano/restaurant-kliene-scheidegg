<template>
  <div class="app">
    <div v-for="food in foods">
      <Button :food="food" />
    </div>
  </div>
</template>

<script setup>

import { collection, onSnapshot } from "firebase/firestore";

const foods = ref([])

onMounted(async () => {
  const { firestore } = useFirebase();
  const fireRef = collection(firestore, "foods")

  const listen = onSnapshot(fireRef, (foodSnapshot) => {
    const foodSnap = [];
    foodSnapshot.forEach((food) => {
      const foodData = {
        id: food.id,
        command: food.data().command,
      };
      foodSnap.push(foodData);
    });
    foods.value = foodSnap;
  });
  console.log("product listener attached")
})






</script>

<style lang="scss" scoped>

</style>
