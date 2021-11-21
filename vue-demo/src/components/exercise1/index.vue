<template>
  <div>
    <LearnTitle title="JS的基本语法点" />

    <div class="content">
      <!-- 内容写在这里 -->
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
  }
};
</script>

<style></style>
