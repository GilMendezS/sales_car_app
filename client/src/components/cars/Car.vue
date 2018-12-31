<template>
    <v-flex class="v-flex" xs6>
        <v-card color="red" class="white--text">
            <v-layout row>
            <v-flex xs7>
                <v-card-title primary-title>
                <div>
                    <div class="headline">{{car.title}}</div>
                    <div>$ {{car.price}} </div>
                    <div>Price {{car.year}} </div>
                </div>
                </v-card-title>
            </v-flex>
            <v-flex xs5>
                <v-img
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                height="125px"
                contain
                class="mt-3"
                ></v-img>
            </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
                <v-chip color="orange" text-color="white">
                    {{car.status.title}}
                    <v-icon right>star</v-icon>
                </v-chip>
                <v-spacer></v-spacer>
                <v-btn class="orange white--text">
                    See Details
                </v-btn>
                
            </v-card-actions>
        </v-card>
    </v-flex>
    

</template>
<script>
export default {
    props: ['car']
}
</script>
