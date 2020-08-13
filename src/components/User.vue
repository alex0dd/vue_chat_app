<template>
    <div>
        <slot name="user" v-bind:user="user"></slot>
    </div>
</template>

<script>
import { auth } from '@/firebase'
import { ref } from 'vue'
// ref is like a reactive reference

export default {
    setup() {
        // null -> user not signed in
        const user = ref(null);
        // state changed will return a function that can be used to unsubscribe from AuthStateChanged realtime stream
        const unsubscribe = auth.onAuthStateChanged(firebaseUser => user.value = firebaseUser);
        return {
            user,
            unsubscribe
        }
    },
    destroyed() {
        // dispose AuthStateChanged stream when User components gets deleted 
        this.unsubscribe();
    }
}
</script>