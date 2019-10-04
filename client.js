console.log("js working")

$(document).ready(readyNow);

function readyNow() {
    console.log("in jQuery");
    addMeetup();
    deleteButton(); 

}

function addMeetup() {
    $("#addMeetup").on("click", function () {
        let group = $("#newGroup").val();
        let newDate = $("#newDate").val();
        let button = '<button class="delete">Delete</button>';
        $('tbody').append($(`<td>${group}</td><td>${newDate}</td><td>${button}</td>`));
    })
}

function deleteButton() {
    $(".delete").on("click", function () {
        console.log("delete all the things!")
        $(this).closest('tr').remove();
    })
}