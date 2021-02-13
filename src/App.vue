<template> 
  <div class ="min-h-screen flex flex-col
   justify-center Items-center">

    <Header/>
    
    <Main> 
      <ListTodos color="green" title="completed Items"  :todos="completed"/>
      <ListTodos color="red" title="pending Item" :todos="pending"/>
      
 </Main>
   


    


  </div>
</template>

<script setup>

import Header from './components/Header.vue'
import ListTodos from './components/ListTodos.vue'
import Main from './components/Main.vue'
import {completed,pending} from './helpers/useTodos'
</script>