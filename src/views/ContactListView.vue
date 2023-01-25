<template>
    <div>
        <div>
            <h2>Add Contact here</h2>
            <router-link to="/addcontact"><font-awesome-icon icon="fa-solid fa-plus" /></router-link>
        </div>
        <h2>Here is your contact list</h2>
        <div>
            <div v-for="contact in contacts" :key="contact.name" class="contact">
                <h3>{{ contact.name }}</h3>
                <p>{{ contact.phonenumber }}</p>
                <button @click="addToCallLogAndNavigate(contact.name, contact.phonenumber)">Call</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        contacts() {
            return this.$store.state.contact
        }
    },
    methods: {
        addToCallLogAndNavigate(name, phonenumber) {
            let callDate = new Date();
            let callObject = {
                number: phonenumber,
                name: name,
                date: callDate
            }
            this.$store.dispatch('addToCallLog', callObject)
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
    .contact {
        border: 2px solid black;
        margin: 20px 800px 20px 800px;
        border-radius: 20px;
        padding: 20px;
    }

</style>