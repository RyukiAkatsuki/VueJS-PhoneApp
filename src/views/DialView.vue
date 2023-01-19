<template>
  <div>
    <h2>Dial your number</h2>
    <div>
        <div class="firstLine">
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
        <div class="secondLine">
            <button>4</button>
            <button>5</button>
            <button>6</button>
        </div>
        <div class="thirdLine">
            <button>7</button>
            <button>8</button>
            <button>9</button>
        </div>
        <div class="fourthLine">
            <button>*</button>
            <button>0</button>
            <button>#</button>
        </div>
        <div class="fifthLine">
          <button>Appeler</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
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
    background: #e3e3e3;
    padding: 20px;
    border-radius: 100px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
  button:hover {
    background: #ffd1d1;
  }
</style>