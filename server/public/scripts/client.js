$(document).ready(function(){
    addClickHandlers();
    refreshTasks();
    console.log('jQuery sourced.');
  });
  function addClickHandlers() {
    $('#submitBtn').on('click', handleSubmit);
    $('#taskList').on('click', '.btn-delete', deleteTask);
    // $('#taskList').on('click', '.btn-read', updateIsBookRead);
  }


function handleSubmit() {
    console.log('Submit button clicked.');
    let taskObject = {};
    taskObject.task = $('#taskToComplete').val();
    taskObject.dateAdded = $('#dateAdded').val();
    addNewTask(taskObject);
  }

// Displays an array of list items to the DOM
function renderTasks(itemToDo) {
    $('#taskList').empty();
  
    for(let i = 0; i < itemToDo.length; i += 1) {
      let item = itemToDo[i];
      // For each item, append a new row to our table
      $('#taskList').append(`
        <tr>
          <td>${item.task}</td>
          <td>${item.dateAdded}</td>
          <td>${item.isComplete}</td>
          <td><button class="btn-delete" data-id=${item.id}>delete</button></td>
        </tr>
      `);
    }
}

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
  
function addNewTask(taskToAdd) {
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: taskToAdd,
      }).then(function(response) {
        console.log('Response from server.', response);
        refreshTasks();
        renderTasks(taskToAdd);
      }).catch(function(error) {
        console.log('Error in POST', error)
        alert('Unable to eat taco at this time. Please try again later.');
      });
  }

function deleteTask() {
    let taskId = $(this).data().id;
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`
    })
    .then(function(response) {
        console.log('Deleted it!');
        refreshTasks();
    })
    .catch(function(error) {
        console.log('Error deleting the thingy', error);
    })
  }