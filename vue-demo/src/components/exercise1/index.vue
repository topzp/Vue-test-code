<template xmlns="http://www.w3.org/1999/html">
  <div>
    <LearnTitle title="JS的基本语法点" />

    <div class="content">
      <!-- 1. 在数组中找出叫jhon的，把他的三个字段显示在页面 -->
      <div class="target1">
        <div>{{outputData.name}}<br>{{outputData.age}}<br>{{outputData.school}}</div>
        <label><input type="text" v-model="inputData" placeholder="输入目标名字"></label>
        <button @click="displayData">kill</button>
      </div>

      <!-- 2. 创建一个对象，这个对象有三个字段，name，age和school，从数组中找出叫jhon的，赋给name，
              找出叫nick的，把他的age赋给新建的age，找出叫xiaoming的，把它的school赋给新建的school，
              然后在页面上显示出来这个新对象的三个字段  -->
      <div class="target2">
          <div>{{newStudent.name}}<br>{{newStudent.age}}<br>{{newStudent.school}}</div>
          <button @click="makeStudent">创造新学员</button>
      </div>

      <!-- 3. 在数组中找出所有第三中学的人，然后把他们的名字组成一个新数组，显示到页面上去 -->
      <div class="target3">
        <div>
          <!-- 这里如何只给第一个span设置上边距？ -->
          <span v-for="item in studentName">{{item + '\n'}}<br></span>
        </div>
        <select @change="changeSchool" v-model="school">
          <!-- 第一个option用于默认 -->
          <option disabled="disabled" selected="selected" style="display: none">选择学校</option>
          <option v-for="(item,index) in newArrayData" :value="item.school" :key="index" >
            {{ item.school }}
          </option>
        </select>
      </div>

      <!-- 4. 在数组中找出叫xiaohong的人，然后把他的school改成第三中学，把他的三个字段显示到页面上去，
              但这里需要对年龄做一个判断，如果年龄大于23就显示“保密”字样  -->
      <div class="target4">
          <div>{{outputData2.name}}<br>{{outputData2.age}}<br>{{outputData2.school}}</div>
          <label><input type="text" v-model="inputData2" placeholder="xiaohong"></label>
          <button @click="killXiaohong">kill</button>
      </div>
    </div>
  </div>
</template>

<script>

import LearnTitle from "@/components/LearnTitle";
const arrayData = [
  {
    name: "jhon",
    age: 30,
    school: "第一中学"
  },
  {
    name: "nick",
    age: 20,
    school: "第二中学"
  },
  {
    name: "jack",
    age: 25,
    school: "第三中学"
  },
  {
    name: "xiaoming",
    age: 25,
    school: "第三中学"
  },
  {
    name: "xiaohong",
    age: 25,
    school: "第一中学"
  }
];

export default {
  name: "exercise1",
  components: {
    LearnTitle
  },

  data(){
    return{
      arrayData,
      inputData: '',  //用来保存input框中的内容
      outputData: '', //根据input内容输出的数据

      newStudent:'',  //保存新创造学员数据

      newArrayData: [], //用来接收arrayData去重后的数据，用于下拉列表
      school: '',
      studentName: '',  //用来接收被选择的学校的所有人名

      inputData2: '',  //接收第四条的input框
      outputData2: '', //用来搞定小红
    }
  },

  methods:{
    /* 查找 */
    displayData:function(){
      /*this.outputData = arrayData.find( item => item.name === this.inputData );*/

     /* that.outputData = arrayData.find( function (item) {
        return item.name === that.inputData;
      });*/

      let arrayData4 = JSON.parse(JSON.stringify(arrayData));
      let that = this ;
      that.outputData = arrayData4.find( function (item) {
        if (item.name !== that.inputData){
          item.name = "查无此人" ;
          item.age = '';
          item.school = '';
          return true;
        }
        return item.name === that.inputData;
      });
    },

    /* 创造新学员 */
    makeStudent:function () {
      this.newStudent = {name:'',age:'',school:''};
      for (let i = 0; i < arrayData.length; i++){
        if (arrayData[i].name === 'jhon'){
          this.newStudent.name = arrayData[i].name;
        }else if (arrayData[i].name === 'nick'){
          this.newStudent.age = arrayData[i].age;
        }else if (arrayData[i].name === 'xiaoming'){
          this.newStudent.school = arrayData[i].school;
        }
      }
    },

    /* 切换下拉框触发事件 */
    changeSchool:function (){
       /*this.studentName = arrayData.filter( item => item.school === this.school);*/
      // 此方法是截取名字组成新数组
      this.studentName = [];
      for (let i = 0; i < arrayData.length; i++){
        if (arrayData[i].school === this.school){
          this.studentName.push(arrayData[i].name);
        }
      }
    },

    /* 找小红 */
    killXiaohong:function () {
      /* 为了不改变元数组，必须用深拷贝复制数组，浅拷贝依然是原来的地址值；
         JSON.stringify将一个js对象转为Json字符串，JSON.parse解析字符串，构造成JS对象*/
      let arrayData2 = JSON.parse(JSON.stringify(arrayData));
      let that = this ;
      that.outputData2 = arrayData2.find( function (item) {
        if (item.name === "xiaohong"){
          item.school = "第三中学";
          if (item.age > 23){
            item.age = "保密";
          }
        }
        // debugger
        return item.name === that.inputData2;
      });
    },
  },


  mounted() {
    //对象数组去重
    //1、创建一个空对象
    let obj = {};
    //2、遍历数组
    for(let i = 0; i < arrayData.length; i++){
      //3、因为obj[arrayData[i].school]
      if (!obj[arrayData[i].school]){
        //4、使这个对象为真
        obj[arrayData[i].school] = true;
        //5、将数据放入新数组
        this.newArrayData.push(arrayData[i]);
      }
    }
  }
};
</script>

<style>
.target1{
  width: 400px;
  height: 180px;
  background: aqua;
  margin: 0 auto;
  text-align: center;
  padding: 1px;
}
.target1 div{
  width: 300px;
  height: 125px;
  background: #42b983;
  margin: 8px auto;
  padding-top: 5px;
  line-height: 20px;
}
.target1 input{
  height: 22px;
}
.target1 button{
  width: 30px;
  height: 22px;
}

.target2{
  width: 400px;
  height: 180px;
  background: aqua;
  margin: 3px auto;
  text-align: center;
  padding: 1px;
}
.target2 div{
  width: 300px;
  height: 125px;
  background: #42b983;
  margin: 8px auto;
  padding-top: 5px;
  line-height: 20px;
}
.target2 button{
  width: 100px;
  height: 22px;
}

.target3{
  width: 400px;
  height: 180px;
  background: aqua;
  margin: 3px auto;
  text-align: center;
  padding: 1px;
}
.target3 div{
  width: 300px;
  height: 125px;
  background: #42b983;
  margin: 8px auto;
  padding-top: 5px;
  line-height: 20px;
}
.target3 input{
  height: 22px;
}
.target3 button{
  width: 30px;
  height: 22px;
}

.target4{
  width: 400px;
  height: 180px;
  background: aqua;
  margin: 0 auto;
  text-align: center;
  padding: 1px;
}
.target4 div{
  width: 300px;
  height: 125px;
  background: #42b983;
  margin: 8px auto;
  line-height: 20px;
  padding-top: 5px;
}
.target4 input{
  height: 22px;
}
.target4 button{
  width: 30px;
  height: 22px;
}

</style>
