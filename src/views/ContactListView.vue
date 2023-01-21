<template>
    <div>
        <h2>Here is your contact list</h2>
        <div>
            <div>
                <h3>{{ contacts.name }}</h3>
                <p>{{ contacts.phonenumber }}</p>
                <button>Appeler</button>
            </div>
        </div>
        <div>
            <form>
                <h2>Add a Contact</h2>
                <input type="text" placeholder="Numéro"> <br>
                <input type="text" placeholder="Nom du Contact"> <br>
                <button>Ajouter le contact</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    computed: {
        contacts() {
            return this.$store.state.contacts
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