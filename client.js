console.log("js working")

let numberOfMeetups = 3;

$(document).ready(readyNow);

function readyNow() {
    console.log("in jQuery");
    addMeetup();
    $("tbody").on("click", ".delete", deleteButton);
}

function addMeetup() {
    $("#addMeetup").on("click", function () {
        let group = $("#newGroup").val();
        let newDate = $("#newDate").val();
        let button = '<button class="delete">Delete</button>';
        $('tbody').append($(`<tr><td>${group}</td><td>${newDate}</td><td>${button}</td></tr>`));
        numberOfMeetups++;
        $("#numberOfMeetups").text(`Total Meetups: ${numberOfMeetups}`);
    })
}

function deleteButton() {
        console.log("delete");
        numberOfMeetups--;
        $("#numberOfMeetups").text(`Total Meetups: ${numberOfMeetups}`);
        return $(this).closest('tr').remove();
}