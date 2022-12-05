<template>
  <div id = 'box' v-on:mouseenter ="colorChange($event)">
    <img id = 'pp' src="../assets/comm2.png"/>
    <h2> {{message}}</h2>
  </div>
</template>

<script>
export default {
    name: 'little-profile',
    data(){
        return{
            message: "It's me! Or is it!"
        }

    },
    methods:{
        colorChange(event) {
            event.target.classList.toggle('changed');
        }
    }


}
</script>

<style scoped>

#box
{
    display: flex;

    align-items: center;
    justify-content: left;

    padding-left: 10%;
    padding-right: 5%;

    gap: 5%;

    width: 150px;
    height: 93px;

    border: 2px solid blue;
    border-radius: 5%;
}

#pp
{
    height: 50%;

    border-radius: 50%
}

.changed
{
    background-color: green;
}

</style>