<template>
    <v-flex xs12 offset-sm2 sm8 offset-md-4 md-4>
        <v-card class="pt4 pl-4 pr-4 pb-4">
            <v-card-title>
                Signup
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="user.name"        
                        label="Name"
                        placeholder="Your name here...."
                        prepend-icon="person"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.lastname"        
                        label="LastName"
                        placeholder="Your Lastname here...."
                        prepend-icon="person"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.email"        
                        label="Email"
                        type="email"
                        placeholder="example@mail.com"
                        prepend-icon="email"
                        required
                    ></v-text-field>
                     <v-text-field
                        v-model="user.phone"        
                        label="Phone"
                        prepend-icon="phone"
                        placeholder="Your phone here...."
                        
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="user.password"
                        type="password"        
                        label="Password"
                        placeholder="******"
                        prepend-icon="vpn_key"
                        required
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="red white--text" @click="onSubmit">
                    Send
                    <v-icon>done</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>
import User from '../../models/user.js';
export default {
    data: () => {
        return {
            user: new User('','','','','','','')
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('users/signup', this.user)
        }
    }
}
</script>

