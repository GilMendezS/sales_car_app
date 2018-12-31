<template>
    <v-flex xs12 offset-m2 m8>
        <v-car v-for="car in cars" :car="car" :key="car._id"></v-car>
    </v-flex>
</template>
<script>
import Car from './Car.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        'v-car': Car
    },
    mounted(){
        this.getCars();
    },
    methods: {
        getCars(){
            this.$store.dispatch('cars/loadCars')
        }
    },
    computed: {
        ...mapGetters({
            cars: 'cars/getCars'
        })
    }

}
</script>
