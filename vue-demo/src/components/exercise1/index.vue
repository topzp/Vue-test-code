<template>
  <div>
    <LearnTitle title="JS的基本语法点"/>

    <div class="content">
      <!--       内容写在这里-->
      <div>1:
        <div class="list">
          <div>姓名：{{ listData.name }}</div>
          <div>年龄：{{ listData.age }}</div>
          <div>学校：{{ listData.school }}</div>
        </div>
      </div>
      <div>2:
        <div>
          <div>姓名：{{ newList.name }}</div>
          <div>年龄：{{ newList.age }}</div>
          <div>学校：{{ newList.school }}</div>
        </div>
      </div>
      <div>3:
        <div class="newObj" v-for="(item,index) in newObj" :key="index">
          <div>第三中学的有：{{ item.name }}</div>
        </div>
      </div>
      <div>4:
        <div v-for="(item,index) in newObj1" :key="index">
          <div>姓名：{{ item.name }}</div>
          <div>年龄：{{ item.age }}</div>
          <div>学校：{{ item.school }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 在数组中找出叫jhon的，把他的三个字段显示在页面上

// 2. 创建一个对象，这个对象有三个字段，name，age和school，从数组中找出叫jhon的，赋给name，找出叫nick的，把他的age赋给新建的age，找出叫xiaoming的，把它的school赋给新建的school，然后在
//    页面上显示出来这个新对象的三个字段

// 3. 在数组中找出所有第三中学的人，然后把他们的名字组成一个新数组，显示到页面上去

// 4. 在数组中找出叫xiaohong的人，然后把他的school改成第三中学，把他的三个字段显示到页面上去，但这里需要对年龄做一个判断，如果年龄大于23就显示“保密”字样

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

  data() {
    return {
      newData: arrayData,
      listData: [],
      newList: {name: '', age: '', school: ''},
      newObj: [],
      newObj1: []
    }
  },
  created() {
    this.listData = this.newData.find(this.newObjs)
    // console.log(this.listData)
    // debugger

    let a = this.newData.filter(item => item.name === 'jhon')
    this.newList.name = a[0].name

    let b = this.newData.filter(item => item.age === 20 && item.name === 'nick')
    this.newList.age = b[0].age

    let c = this.newData.filter(item => item.school === '第三中学' && item.name === 'xiaoming')
    this.newList.school = c[0].school
    // console.log('xxx', this.newList)
    let d = '第三中学'
    this.newObj = this.newData.filter(item => item.school === d)
    let e = 'xiaohong'
    this.newObj1 = this.newData.filter(item => item.name === e)
    this.newObj1[0].school = '第三中学'
    if (this.newObj1[0].age > 23) {
      this.newObj1[0].age = '保密'
    }
    // console.log('ccc', this.newObj1)


  },
  methods: {
    newObjs(i) {
      return i.name === 'jhon'
    },


  }


};
</script>

<style>
.content {
  width: 700px;
  height: 500px;
}
</style>
