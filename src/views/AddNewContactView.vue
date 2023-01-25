<template>
    <div>
        <h2>Go back to your contact list</h2>
        <router-link to="/contactlist"><font-awesome-icon icon="fa-solid fa-xmark" /></router-link>
    </div>
    <div>
        <h2>Create your new contact</h2>
        <input type="text" placeholder="Contact Name" v-model="newContact.name"> <br>
        <input type="text" placeholder="Phone Number" v-model="newContact.phonenumber"> <br>
        <button @click="addContact(newContact)">Add contact</button>
    </div>
</template>
<script>
export default {
    name: 'App',
    methods: {
        addContact(contact) {
        this.$store.commit('addContact', contact)
    }
    },
    data() {
        
        return {
            newContact: {
                name: "",
                phonenumber: ""

            }
        }
    }
}
</script>
<style scoped>
    input {
        padding: 20px;
        margin: 10px;
    }
</style>