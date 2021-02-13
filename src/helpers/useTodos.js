import {ref,computed}from 'vue'


export const  newTodo = ref('')

 const todos = ref([])


export const pending = computed(()=>
  todos.value.filter(todo => todo.status ==='pending'),
)


export const completed = computed(()=>
  todos.value.filter(todo => todo.status ==='completed'),
)


export const changestatus= id =>{
  todos.value.map(todo=>{
    if(todo.id===id){
    todo.status = todo.status ==='pending'? 'completed': 'pending'}
  })
}

export const addTodo = ()=> {
  if(newTodo.value.length >0 ){
    todos.value.push({
      id:todos.value.length,
      text:newTodo.value,
      status:'pending'
    })

    newTodo.value= ''
  }

}