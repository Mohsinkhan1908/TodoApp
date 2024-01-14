const Task = document.querySelector('#task');
const Submit = document.querySelector('#submit')
let toDoBox = document.getElementById('to-do-box')

Submit.addEventListener("click", function (event) {
      event.preventDefault();
      if (Task.value === "" ){
            alert("plz enter task");
      }else{
            addToDo(Task.value)
}
})

const addToDo = (item)=>{
      let toDos = document.createElement('li');
      toDos.innerHTML = `${item}
                   <i id="logo" class="fas fa-times"></i>`;
      toDoBox.appendChild(toDos);
      Task.value = '';



toDos.addEventListener('click', function (e) {
      // e.preventDefault()
      toDos.classList.toggle('done')
      if (toDos.classList.contains('done') === true) {
            toDos.querySelector('i').addEventListener(
                  "click",
                  function () {
                        toDos.remove();
                  })
      }
})
}


