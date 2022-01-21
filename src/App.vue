<template>
  <div id="memo-search">
    <img id="mms-icon" src="../images/logo4.png"/>  
    <div id="mms-content">
      <div id="mms-bar"></div> 
      <div id="mms-word-detail">
        <span id="mms-spelling">Oops</span>
        <div id="mms-phonetic-uk" class="mms-phonetic">
          <span>英 [ʊps]</span>
        </div>
        <div id="mms-phonetic-us" class="mms-phonetic">
          <span>美 [ʊpsˌuːps]</span>
        </div>
        <div id="mms-interpretation">
          <span>int. 哎哟，啊呀（某人摔倒或出了点小差错时的用语）</span>
        </div>
        <div class="mms-dotted-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memo-search'
}
</script>

<style>
#memo-search {
  position: absolute;
  align-items: flex-start;
  display: none;
  z-index: 100;
}

#mms-icon {
  width: 40px;
  height: 40px;
}

#mms-content {
  margin-left: 10px;
  border-radius: 5px;
  font-size: 16px;
  background: #469F87;
  width: 200px;
}

#mms-bar {
  height: 25px;
  background: #469F87;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

#mms-word-detail {
  padding: 5px;
  font-size: 12px;
  background: #FFFFFF;
  margin: 2px;
  border-radius: 5px;
}

#mms-spelling {
  color: #D56635;
  font-size: 16px;
  font-weight: bold;
  display: block;
}

.mms-phonetic {
  margin-top: 2px;
}

#mms-interpretation {
  margin-top: 5px;
}

.mms-dotted-line {
  margin-top: 10px;
  height: 1px;
  background-image: linear-gradient(to left, #469F87 50%, #ffffff 50%);
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;  
}
</style>