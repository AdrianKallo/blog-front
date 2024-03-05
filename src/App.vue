<script setup>
import { ref, computed } from 'vue';
import ItemList from './components/ItemList.vue';

let i = 0;
let message = ref('Hello Vue');
let items = ref([
 {id: i++, name:'Sai',isDone: false},
 {id: i++, name:'Munad', isDone: false},
 {id: i++, name:'Piim', isDone: false},
 {id: i++, name:'Viin', isDone: false},
 {id: i++, name:'Kohuke',isDone: false},
]);
function add(){
  if(message.value.trim() !== ''){
    items.value.push({id: i++, name: message.value.trim(), isDone: false});
  }
  message.value = '';
}
let doneItems = computed(() => {
  return items.value.filter(item => item.isDone);
});
let toDoItems = computed(() => {
  return items.value.filter(item => !item.isDone);
});
</script>

<template>
<button @click="add">Click me</button>
<input type="text" v-model="message" @keydown.enter="add"> 
<ul>
  <li v-for="item in items">
    {{ item.name }}
    <input type="checkbox" v-model="item.isDone">
  </li>
</ul>

<h1>All Items</h1>
<ul>
  <li v-for="item in items">
    {{ item.name }}
    <input type="checkbox" v-model="item.isDone">
  </li>
</ul>

<h1>Done Items</h1>
<ul>
  <li v-for="item in items">
    {{ item.name }}
    <input type="checkbox" v-model="item.isDone">
  </li>
</ul>
<h1>ToDo Items</h1>

<h1>Done items</h1>
<ul>
  <li v-for="item in items">
    {{ item.name }}
    <input type="checkbox" v-model="item.isDone">
  </li>
</ul>
</template>

