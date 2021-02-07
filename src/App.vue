<template> 
  <div class ="min-h-screen flex flex-col justify-center Items-center">


    <header class ="flex flex-col w-full containter">
    <h1 class="text-6xl font-light text-red-800 text-center"> Jorge's Todo App !</h1>
    <input class="text-2xl py-2 px-4 rounded-xl w-full mt-8
     text-gray-900 hover:bg-green-300 cursor-pointer " type="text"
      placeholder="New Todo"
      v-model="newTodo" 
      @change="addTodo"/>
    </header>
    
    <main class="container w-full mt-8 space-y-8 ">

      <section class="space-y-4" v-if="pending.length>0">
          <h2 class="text-2xl font-thin text-green-800">Pending Items: {{pending.length}}</h2>
          <ul class="space-y-3">
          <li v-for="todo in pending" :key="todo.id" class="bg-white rounded-xl text-xl py-2 px-4 font-light
           text-green-800 text-center hover:text-white
            hover:bg-green-800 cursor-pointer transition-colors "
            @click ="changestatus(todo.id)"
            >{{todo.text}}</li>
          </ul>
      </section>

      <section class=" space-y-4" v-if="completed.length>0">
        <h2 class="text-2xl font-thin text-red-700">Completed Items: {{completed.length}}</h2>
          <ul class="space-y-3">
            <li v-for="todo in completed" :key="todo.id" class="bg-white rounded-xl text-xl py-2 px-4 font-light
             text-red-800 text-center hover:text-white
              hover:bg-red-900 cursor-pointer transition-colors"
              @click ="changestatus(todo.id)">{{todo.text}}</li>
          </ul>
      </section>

    

    </main>


    


  </div>
</template>

<script setup>
import {ref,computed}from 'vue'
import { changeStatus } from './helpers/useTodos'

const newTodo = ref('')

const todos = ref([])


const pending = computed(()=>
  todos.value.filter(todo => todo.status ==='pending'),
)


const completed = computed(()=>
  todos.value.filter(todo => todo.status ==='completed'),
)


const changestatus= id =>{
  todos.value.map(todo=>{
    if(todo.id===id){
    todo.status = todo.status ==='pending'? 'completed': 'pending'}
  })
}

const addTodo = ()=> {
  if(newTodo.value.length >0 ){
    todos.value.push({
      id:todos.value.length,
      text:newTodo.value,
      status:'pending'
    })

    newTodo.value= ''
  }

}
</script>