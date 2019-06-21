<template>
	<div id="main" class="c-n-fs-fs" :main_height="main_height" :main_width="main_width" :style="{width:main_width+'px',height:main_height-62+'px'}">
    <!--跨域请求-->
    <div id="cros-restfull-ajax" class="r-n-fs-fs"  :style="{width:main_width+'px',height:60+'px'}">
      <div id="add_item" class="item" @click="addItem">添加</div>
      <div id="delete_item" class="item" @click="deleteItem">删除</div>
      <div id="update_1_item" class="item" @click="update1Item">修改1</div>
      <div id="update_2_item" class="item" @click="update2Item">修改2</div>
      <div id="get_item" class="item" @click="getItem">查询</div>
    </div>
    <!--文件上传-->
    <form id="upload" class="r-n-fs-fs" enctype="multipart/form-data" :style="{width:main_width+'px',height:60+'px'}">
      <input class="item" id="upload-file" type="file" @change="inputChange" ref="fileObject">
      <div class="item2" @click="uploadFile">jQuery.ajax单文件上传</div>
      <input class="item" id="upload-file2" type="file" multiple="multiple" @change="inputChange2" ref="fileObject2">
      <div class="item2" @click="uploadFiles">jQuery.ajax多文件上传</div>
      <div class="item2" @click="xhrUploadFiles">XHR多文件上传</div>
    </form>
    <!--上传进度显示-->
    <div id="progress-length" class="r-n-fs-fs" :style="{width:main_width+'px',height:10+'px'}" v-show="uploadProgressIsShow">
      <div id="progress" :style="{width:progressPercent*main_width+'px',height:10+'px'}"></div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
	export default {
		name: "Cors",
    data(){
		  return{
		    uploadProgressIsShow:false,
		    isUploading:false,
        progressPercent:0,
		    inputFile:undefined,
        inputFiles:undefined
      }
    },
    computed:mapState(["main_width","main_height","host"]),
    methods:{
		  addItem(){

        /*
        * 发送请求方式一
        * */
        this.axios({
          method: 'post',
          responseType: "text",//设置无效'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'默认json
          url: this.host+"/cors/add",
          timeout: 1000,
          auth: {
            username: 'wsyjlly',
            password: 'ysw000000'
          },
          data: {
            name: 'axios'
          }
        }).then(function (response) {
          console.log("axios...");
          console.log(response);
        }).catch(function (response) {
          console.log(response);
        });

        /*this.axios.post(this.host+"/cors/",{
          name:'晏沈威'
        }).then(function (response) {
          console.log(response);
        }).catch(function (response) {
          console.log(response);
        });*/

        /*
        * 发送请求方式二
        * */
        this.$.ajax({
          url:this.host+"/cors/add",
          type:"post",
          contentType:"application/json",
          data:JSON.stringify({
            name:"ajax"
          }),
          dataType:"json",//html、json、jsonp、script、text ，默认json
          success:function (e) {
            console.log("ajax...");
            console.log(e);
          }
        });



        /*
        * 发送请求方式三
        * */
        fetch(this.host+"/cors/add", {
          method: "post",
          body: JSON.stringify({
            name:'fetch'
          }),
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "same-origin"
        }).then(function(response) {
          if(response.status === 200){
            //json是返回的response提供的一个方法,会把返回的json字符串反序列化成对象,也被包装成一个Promise了
            return response.json();
          }else{
            return {}
          }
          // console.log(response.json());
          // response.status     //=> number 100–599
          // response.statusText //=> String
          // response.headers    //=> Headers
          // response.url        //=> String
        }, function(error) {
          console.log(error);
          // error.message //=> String
        }).then(function (data) {
          console.log("fetch...");
          console.log(data);
        });
      },

      deleteItem(){
        this.axios.delete(this.host+"/cors/1601141019").then(function (response) {
          console.log("axios...");
          console.log(response);
        }).catch(function (response) {
          console.log(response);
        });

        this.$.ajax({
          url:this.host+"/cors/1601141019",
          type:"delete",
          contentType:"application/json",
          dataType:"json",//html、json、jsonp、script、text ，默认json
          success:function (e) {
            console.log("ajax...");
            console.log(e);
          }
        });

        fetch(this.host+"/cors/1601141019", {
          method: "delete",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "same-origin"
        }).then(function(response) {
          if(response.status === 200){
            return response.json();
          }else{
            return {}
          }
        }, function(error) {
          console.log(error);
        }).then(function (data) {
          console.log("fetch...");
          console.log(data);
        });

      },

      update1Item(){
        this.axios.put(this.host+"/cors/1601141019").then(function (response) {
          console.log("axios...update1");
          console.log(response);
        }).catch(function (response) {
          console.log(response);
        });
      },

      update2Item(){
        this.axios.patch(this.host+"/cors/patch",{
          name: '1601141019'
        }).then(function (response) {
          console.log("axios...update2");
          console.log(response);
        }).catch(function (response) {
          console.log(response);
        });
      },

      getItem(){
        this.axios.get(this.host+"/cors/1601141019").then(function (response) {
          console.log("axios...get");
          console.log(response);
        }).catch(function (response) {
          console.log(response);
        });
      },

      inputChange(){
        this.inputFile = this.$refs.fileObject.files[0];
      },

      inputChange2(){
        this.inputFiles = this.$refs.fileObject2.files;
      },

      uploadFile(){
        let that = this;
        if(this.isUploading){
          alert("文件正在上传中，请稍候...");
          return false;
        }
        let formData = new FormData();
        formData.append("uploadFile", this.inputFile);
        console.log(formData.getAll("uploadFile"));
        this.$.ajax({
          url: this.host+"/upload",
          type: 'post',
          cache: false,
          data: formData,
          processData: false,
          contentType: false,
          dataType:"json",
          beforeSend: function(){
            that.isUploading = true;
          },
          success: function(data) {
            console.log(data);
            console.log(data.status);
            console.log(data.filePath);
            if (data.status === 1) {
              alert("上传成功！");
              console.log(data.filePath);
            } else {
              console.log(data.status);
            }
            that.isUploading = false;
          }
        });
      },

      uploadFiles(){
        let that = this;
        if(this.isUploading){
          alert("文件正在上传中，请稍候...");
          return false;
        }
        let formData = new FormData();
        for (let item of this.inputFiles) {
          formData.append("uploadFiles", item);
        }
        // console.log(formData.getAll("uploadFiles"));
        this.$.ajax({
          url: this.host+"/uploads",
          type: 'post',
          cache: false,
          data: formData,
          processData: false,
          contentType: false,
          dataType:"json",
          beforeSend: function(){
            that.isUploading = true;
          },
          success: function(data) {
            console.log(data);
            that.isUploading = false;
          },
          error:function(e){
            console.log(e);
            that.isUploading = false;
          },
          complete: function (xhr, ts) {
            /*console.log(xhr);
            console.log(ts);*/
          }
        });
      },

      xhrUploadFiles(){
		    let that = this;
		    /*
		    * 防止在上传中继续点击上传按钮
		    * */
        if(this.isUploading){
          alert("文件正在上传中，请稍候...");
          return false;
        }
        /*
        * 将文件添加到FormData对象
        * */
        let formData = new FormData();
        for (let item of this.inputFiles) {
          formData.append("uploadFiles", item);
        }
        /*
        * 创建XMLHttpRequest对象
        * */
        let request = new XMLHttpRequest();
        request.open('POST',this.host+"/uploads",true);
        request.onreadystatechange = function(){
          if (request.readyState===4 && request.status===200){
            let data = JSON.parse(request.responseText);
            console.log(data);
          }
        };
        request.upload.onprogress = function(ev){
          that.progressPercent = (ev.loaded/ev.total).toFixed(2);
          console.log(that.progressPercent);
        };
        request.upload.onloadstart = function(ev){
          that.uploadProgressIsShow = true;
          console.log(ev);
        };
        request.upload.onloadend = function(ev){
          that.uploadProgressIsShow = false;
          console.log(ev);
        };
        request.send(formData);
      }
    }
	}
</script>

<style scoped>
  .item{
    width: 50px;
    height: 37px;
    line-height: 37px;
    background: #42b983;
    border-radius: 10px;
    padding: 0 5px;
    margin: 10px;
    text-align: center;
    cursor: crosshair;
  }
  .item2{
    width: 200px;
    height: 37px;
    line-height: 37px;
    background: #42b983;
    border-radius: 5px;
    padding: 0 5px;
    margin: 10px;
    text-align: center;
    cursor: crosshair;
  }
  .item:first-child{
    margin: 10px 0 10px 20px;
  }
  #upload-file,#upload-file2,#upload-file3{
    border-radius: 0;
    width: 66px;;
    height: 37px;
    outline: none;
    border: none;
    padding: 0;
    background: #42b983;
  }
  #progress-length{
    background: #bbdff4;
  }
  #progress{
    background: #42b983;
  }
</style>
