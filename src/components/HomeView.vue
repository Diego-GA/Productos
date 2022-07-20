<template>
  <div class="home">

    <h1>Bienvenido a mi App de Vue</h1>
    <h2>Mis Productos</h2>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <div class="info">
    <p>
      La aplicacion usa el vue router, vuex y algunas de las directivas principales. Dado que era una aplicacion pequeña solo hay un state global
      y solo dos rutas
    </p>

    <h3>Componentes</h3>
    <ul>
      <li>
        HomeView
      </li>

      <li>
        MyFooter
      </li>

      <li>
        ProductComponent (requiere properties)
      </li>

      <li>
        ProductsLayout
      </li>
    </ul>
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

.info{
  width: 90%;
  text-align: justify;
  margin: 50px auto 0;
  font-size: 20px;
  height: 400px;
}


</style>
