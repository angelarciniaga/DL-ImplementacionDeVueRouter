<template>
  <div>
      <!-- CONTENIDO PARA LA VISTA DE PORTADA -->
        <header class="masthead" >
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="site-heading">
                            <h1 v-text="titulo"></h1></div>
                    </div>
                </div>
            </div>
        </header>
  </div>
</template>

<script>
export default {
    name: 'Administrador',
    computed: {
        titulo(){
            if(this.$route.params.entrada == 'simple'){
                return '“Bienvenido a la página de Administración”.'
            }else if (this.$route.params.entrada == 'avanzado'){
                return '“Esta página de administración está en construcción. Intente como administrador simple”.'
            } else{
                return '“Esta página de administración está en construcción. Intente como administrador simple”.'
            }
        }
    },

}
</script>

<style scoped>
.masthead {
    background-image: url('../../public/assets/img/home-bg.jpg');
}
</style>>


