<template>
    <div>
        <h2>Here is your contact list</h2>
        <div>
            <div v-for="contact in contacts" :key="contact.name" class="contact">
                <h3>{{ contact.name }}</h3>
                <p>{{ contact.phonenumber }}</p>
                <button>Call</button>
            </div>
        </div>
        <div>
            <form>
                <h2>Add Contact here</h2>
                <input type="text" placeholder="Contact Name" v-model="newContact.name"> <br>
                <input type="text" placeholder="Phone Number" v-model="newContact.phonenumber"> <br>
                <button @click="addContact(newContact)">Add contact</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    computed: {
        contacts() {
            return this.$store.state.contact
        }
    },
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
    .contact {
        border: 2px solid black;
        margin: 20px 800px 20px 800px;
        border-radius: 20px;
        padding: 20px;
    }
</style>