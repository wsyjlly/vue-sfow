<template>
  <div id="main" class="c-n-fs-c">
    <Banner/>
    <OneModule1/>
    <OneModule2/>
    <OneModule3/>
    <OneModule4/>
    <OneModule5/>
  </div>
</template>

<script>
  import Banner from "./One/Banner";
  import OneModule1 from "./One/OneModule1";
  import OneModule2 from "./One/OneModule2";
  import OneModule3 from "./One/OneModule3";
  import OneModule4 from "./One/OneModule4";
  import OneModule5 from "./One/OneModule5";
  import Bottom from "./Bottom";
  export default {
    name: "One",
    components: {Bottom, OneModule5, OneModule4, OneModule3, OneModule2, OneModule1, Banner}
  }
</script>

<style scoped>
  #main {
    font-size: 14px;
    font-family: Arial, "宋体";
    text-align: center;
  }


</style>
