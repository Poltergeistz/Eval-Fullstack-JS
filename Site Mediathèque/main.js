// API Google Books
var apibooks ="" ; // AIzaSyDryhDj129-9EgUtLOqE3zFvIkuSH3Tx3Y

// DOM
var btn = document.getElementById('btn');
var search = document.getElementById('search').value;
document.getElementById('results').innerHTML = "";

// On click display the research
btn.addEventListener('click', function (){
    var query = new XMLHttpRequest();
    query.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + search);
    query.onload(function(){
        var bookdata = JSON.parse(query.responseText);
        console.log(bookdata);
    });
});

function searchBook(){

}