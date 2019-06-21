<template>
  <div id="menu" class="r-n-c-c">
    <div id="menu_content">
      <div class="menu_item c-n-c-c">
        <p>公司首页</p>
        <p>HOME</p>
      </div>
    </div>
  </div>
</template>


<script>
	export default {
		name: "HeaderMenu"
	}
</script>

<style scoped>
  #menu{
    width: 100%;
    height: 60px;
  }
  #menu_content{
    /*width: 1200px;*/
    height: 60px;
  }
  .menu_item{
    width: 80px;
    height: 60px;
    background: #007aff;
    font-weight: 700;
  }
  .menu_item p:first-child{
    font-size: 14px;
  }
  .menu_item p:last-child{
    font-size: 12px;
  }
</style>
