<template>
    <div class="main-div">
      <h3> 100 % FREE. Welcome to your friendly neighborhood library. </h3>
      <img src="../assets/library.jpg" alt="library photo">
    </div>
</template>
  
<script>
export default {
    name: 'About'
  }
</script>

<style>
.main-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

h3 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>