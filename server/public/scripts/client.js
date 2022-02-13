$(document).ready(function(){
    addClickHandlers();
    refreshTasks();
  });

function addClickHandlers() {
    $('#submitBtn').on('click', handleSubmit);
    $('#taskList').on('click', '.btn-delete', deleteTask);
    $('#taskList').on('click', '.btn-update', updateIsTaskComplete,);
  }
function handleSubmit() {
    if ($('#dateAdded').val() && $('#taskToComplete').val()) {
        let taskObject = {};
        taskObject.task = $('#taskToComplete').val();
        taskObject.dateAdded = $('#dateAdded').val();
        $('#taskToComplete').val('');
        $('#dateAdded').val('');
        addNewTask(taskObject);
    }
}
function renderTasks(itemToDo) {
    $('#taskList').empty();
  
    for(let i = 0; i < itemToDo.length; i += 1) {
      let item = itemToDo[i];
      // For each item, append a new row to our table
    //   console.log('hey there, im in renderTasks', item.isComplete)
    if (item.isComplete) {
        // console.log('item is complete', item.isComplete)
      $('#taskList').append(`
        <tr id="true">
          <td>${item.task}</td>
          <td>${item.dateAdded}</td>
          <td>${item.isComplete}</td>
          <td><button class="btn-update" data-id=${item.id}>update</button></td>
          <td><button class="btn-delete" data-id=${item.id}>delete</button></td>
        </tr>
      `);
    } else {
        $('#taskList').append(`
        <tr id="false">
          <td>${item.task}</td>
          <td>${item.dateAdded}</td>
          <td>${item.isComplete}</td>
          <td><button class="btn-update" data-id=${item.id}>update</button></td>
          <td><button class="btn-delete" data-id=${item.id}>delete</button></td>
        </tr>
      `);
    }
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
        // console.log('Deleted it!');
        refreshTasks();
    })
    .catch(function(error) {
        console.log('Error deleting the thingy', error);
    })
  }
function updateIsTaskComplete() {
    let taskId = $(this).data().id;
    let taskStatus = $(this).data(); //true
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`
    })
    .then(function(response) {
        // console.log('updated it!');
        refreshTasks();
    })
    .catch(function(error) {
        console.log('OPE, error updating the tasks', error);
    })    
}
