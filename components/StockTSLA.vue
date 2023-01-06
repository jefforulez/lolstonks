
<script setup>

import { onMounted } from 'vue'

onMounted( () => {
/*
  if (typeof(stockdio_events) == "undefined") {
    stockdio_events = true;
    var stockdio_eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var stockdio_eventer = window[stockdio_eventMethod];
    var stockdio_messageEvent = stockdio_eventMethod == "attachEvent" ? "onmessage" : "message";
    stockdio_eventer(stockdio_messageEvent, function (e) {
       if (typeof(e.data) != "undefined" && typeof(e.data.method) != "undefined") {
          eval(e.data.method);
       }
    },false);
  }
*/
})

</script>

<template>
<div>
  <iframe
    id="st_d720369a1ab84d129b7b5e39fba6fc5c"
    frameborder="0"
    scrolling="no"
    height="400"
    width="100%"
    src="https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=D2E326DBF1AA4B379BE1401AA1E52CC3&amp;equities=TSLA;&amp;includeIndices=false&amp;includeCommodities=false&amp;includeCurrencies=false&amp;palette=Eggplant&amp;title=Market%20Overview&amp;onload=st_d720369a1ab84d129b7b5e39fba6fc5c"
    >
  </iframe>

</div>
</template>

<style scoped>

div {
  width: 100%;
}

</style>
