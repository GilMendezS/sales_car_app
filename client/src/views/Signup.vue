<template>
    <v-flex xs12>
        <v-signup-form></v-signup-form>
    </v-flex>
</template>
<script>
import SignupForm from '../components/users/Signup.vue';
export default {
    components: {
        'v-signup-form': SignupForm
    }
}
</script>
