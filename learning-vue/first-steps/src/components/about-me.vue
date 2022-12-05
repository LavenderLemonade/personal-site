<template>
  <div id = 'message'> {{message}} </div>
</template>

<script>
export default {
    name: 'about-me-section',
    data(){
        return{
            message: "My name is Sam Elliott, software developer and JavaScript fiend. Here you'll find my projects and links."
        }
    }

}
</script>

<style scoped>
#message
{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>