<template>
  <div id="app">
      {{hellomessage}}
      <headervue></headervue>
      <footervue></footervue>
  </div>
</template>

<script>
import headervue from './components/header.vue'
import footervue from './components/footer.vue'

export default {
components:{
    headervue,
    footervue
},
data(){
    return{
        hellomessage:'Bienvenue dans notre platforme'
    }
}

}
</script>

<style>

</style>