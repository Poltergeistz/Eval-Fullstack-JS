// API Google Books
var apibooks ="" ; // AIzaSyDryhDj129-9EgUtLOqE3zFvIkuSH3Tx3Y

// DOM
var btn = document.getElementById('btn');

// On click display the research
btn.addEventListener('click', function (){
    var request = new XMLHttpRequest();
    var search = document.getElementById('search').value;
    request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + search);
    request.onload = function(){
        var bookdata = JSON.parse(request.responseText);
        console.log(bookdata);
    };
    request.send();
});

function searchBook(){
    
    document.getElementById('results').innerHTML = "";
    console.log(search);
}