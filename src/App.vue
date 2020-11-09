<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <!-- MENU DE NAVEGACION -->
                <ul class="nav navbar-nav ml-auto" id="menu-v8">
                    <li class="nav-item" role="presentation">
                      <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                      <router-link :to="{name: 'Inicio'}">Inicio</router-link> |
                    </li>
                    <li class="nav-item" role="presentation">
                      <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                      <router-link :to="{name: 'SobreMi'}">Sobre Mí</router-link> |
                    </li>
                    <li class="nav-item" role="presentation">
                      <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
                      <router-link to="/Contacto">Contacto</router-link> |
                    </li>
                    <li class="nav-item" role="presentation">
                      <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
                      <router-link to="/UltimoPost/1">Último Post</router-link> |
                    </li>
                </ul>
        </div>
        </div>
    </nav>
    <!-- TRANSICION -->
    <transition name="slide-fade">
      <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<script>

export default {

}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translate(10px);
  opacity: 0;
}
</style>
