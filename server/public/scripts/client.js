$(document).ready(function(){
    addClickHandlers();
    refreshTasks();
    console.log('jQuery sourced.');
  });
  function addClickHandlers() {
    $('#submitBtn').on('click', handleSubmit);
    // $('#taskList').on('click', '.btn-delete', deleteTask);
    // $('#taskList').on('click', '.btn-read', updateIsBookRead);
  }
  
  function handleSubmit() {
    console.log('Submit button clicked.');
    let tasks = {};
    tasks.task = $('#taskToComplete').val();
    tasks.dateAdded = $('#dateAdded').val();
    addNewTask();
  }
// function addNewTask(itemToDo) {
//     console.log('new task', itemToDo.task);
//     // $('#taskList').append(task);
// }

    // refreshBooks will get all books from the server and render to page
function refreshTasks() {
    $.ajax({
      type: 'GET',
      url: '/tasks'
    }).then(function(response) {
        renderTasks(response);
    //   console.log(response);
    }).catch(function(error){
      console.log('error in GET', error);
    });
  
}

// Displays an array of books to the DOM
function renderTasks(itemToDo) {
    $('#taskList').empty();
  
    for(let i = 0; i < itemToDo.length; i += 1) {
      let item = itemToDo[i];
      // For each book, append a new row to our table
      $('#taskList').append(`
        <tr>
          <td>${item.task}</td>
          <td>${item.dateAdded}</td>
          <td>${item.isComplete}</td>
        </tr>
      `);
    }
  }
  