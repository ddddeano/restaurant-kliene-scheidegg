<template>
  <div class="app">
    <div v-for="product in products">
      <Button :product="product" />
    </div>
  </div>
</template>


<script setup>
import { collection, query, where, onSnapshot } from "firebase/firestore";
const products = ref([])

onMounted(() => {
  getProducts()
})

const getProducts = () => {
  const { firestore } = useFirebase();
  const fireQuery = query(collection(firestore, "products"), where("active", "==", true));

  const listen = onSnapshot(fireQuery, (productSnapshot) => {
    const productSnap = [];
    productSnapshot.forEach((product) => {
      const productData = {
        id: product.id,
        command: product.data().command
      };
      productSnap.push(productData);
    });
    products.value = productSnap;
  });
  console.log("product listener attached")
}

</script>

<style scoped>
.app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 200px;

}
</style>