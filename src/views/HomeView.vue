<template>
  <div class="home">

    <h1>Bienvenido a mi App de Vue</h1>
    <h2>Mis Productos</h2>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

</template>

<style lang="scss" scoped>

h1,h2{
  margin: 10px;
  text-align: center;
}

.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border: 3px solid green;
  background-color: greenyellow;
  margin: 0 auto;
  border-radius: 5px;
}

img{
  width: 30px;
}


</style>
