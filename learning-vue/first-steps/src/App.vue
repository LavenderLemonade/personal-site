<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import littleProfileVue from './components/little-profile.vue';
import headerVue from './components/header.vue';
import aboutMeVue from './components/about-me.vue';
import projectHolder from './components/project-holder.vue'

export default{
  name: 'App',
  components: {
    headerVue, aboutMeVue, projectHolder
  }
}
</script>

<template>
  <div id = 'container'>
    <div id = 'head'>
      <headerVue></headerVue>
    </div>
    <nav>
      <aboutMeVue></aboutMeVue>
    </nav>
    <div id = 'holder'>
      <projectHolder></projectHolder>
      <projectHolder></projectHolder>
      <projectHolder></projectHolder>
    </div>
  </div>
</template>

<style scoped>

html,body
{
  height: 100%;
}

#container
{
  display:flex;
  flex-direction: column;

  height: 100%;
}

#container > #holder
{
  margin-top: 200px;
  gap: 30px;
  justify-self: center;
  align-self: center;
}

#holder
{
  display: flex;
}

</style>
