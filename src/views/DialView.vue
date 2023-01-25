<template>
  <div>
    <h2>Dial your number</h2>
    <div class="numberLine">
      <p>{{ formattedNumber }}</p>
      <p>{{matchingContact ? matchingContact.name : 'No matching contact found in your contact list'}}</p>
    </div>
    <div>
        <div class="firstLine">
            <button @click="appendNumber(1)">1</button>
            <button @click="appendNumber(2)">2</button>
            <button @click="appendNumber(3)">3</button>
        </div>
        <div class="secondLine">
            <button @click="appendNumber(4)">4</button>
            <button @click="appendNumber(5)">5</button>
            <button @click="appendNumber(6)">6</button>
        </div>
        <div class="thirdLine">
            <button @click="appendNumber(7)">7</button>
            <button @click="appendNumber(8)">8</button>
            <button @click="appendNumber(9)">9</button>
        </div>
        <div class="fourthLine">
            <button @click="appendNumber('*')">*</button>
            <button @click="appendNumber(0)">0</button>
            <button @click="appendNumber('#')">#</button>
        </div>
        <div class="fifthLine">
          <button @click="addToCallLogAndNavigate()">Call</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      number: '',
    }
  },
  computed: {
    formattedNumber() {
      let formatted = '';
      for (let i = 0; i < this.number.length; i++) {
        if (i % 2 === 0 && i !== 0) {
          formatted += ' ';
        }
        formatted += this.number[i];
      }
      return formatted;
    },
    matchingContact() {
      return this.$store.state.contact.find(contact => contact.phonenumber === this.formattedNumber)
    },
    callLog() {
      return this.$store.state.callLog
    }
  },
  methods: {
    appendNumber(n) {
      this.number += n;
    },
    addToCallLogAndNavigate() {
      let contactName = this.matchingContact ? this.matchingContact.name : 'No matching contact found in your contact list';
      let callDate = new Date();
      let callObject = {
        number: this.formattedNumber,
        name: contactName,
        date: callDate
      }
      this.$store.dispatch('addToCallLog', callObject)
      this.$router.push('/')
    }
  }
}

</script>
<style scoped>
  .numberLine {
    border: 2px solid black;
    padding: 10px;
    margin: 20px 800px 20px 800px;
    
  }
  .firstLine {
    padding-bottom: 10px;
  }
  .secondLine {
    padding-bottom: 10px;
  }
  .thirdLine {
    padding-bottom: 10px;
  }
  .fourthLine {
    padding-bottom: 10px;
  }
  button {
    background: #878787;
    padding: 20px;
    border-radius: 50%;
    margin-right: 20px;
    margin-bottom: 5px;
    color: white;
    border: none;
  }
  button:active {
    background: #b8b8b8;
  }
</style>