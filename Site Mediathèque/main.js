// API Google Books
var apibooks ="" ; // AIzaSyDryhDj129-9EgUtLOqE3zFvIkuSH3Tx3Y

// DOM
var btn = document.getElementById('btn');
var results = document.getElementById('results')
// On click display the research
btn.addEventListener('click', function (){
    var request = new XMLHttpRequest();
    var search = document.getElementById('search').value;
    request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + search);
    request.onload = function(data){
        var bookdata = JSON.parse(request.responseText);
        console.log(bookdata);
        for (var i = 0; i < data.items.length; i++){
            var item = data.items[i];
            results.innerHTML += "<br>" + item;
        }
    };
    request.send();
});
