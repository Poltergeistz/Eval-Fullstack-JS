// API Google Books
var search = document.getElementById('search').value;
var apibooks ="https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyDryhDj129-9EgUtLOqE3zFvIkuSH3Tx3Y" ; // AIzaSyDryhDj129-9EgUtLOqE3zFvIkuSH3Tx3Y

// DOM
var btn = document.getElementById('btn');
var results = document.getElementById('results');

// On click display the research
btn.addEventListener('click', function (){
    var request = new XMLHttpRequest();
    request.open('GET', apibooks);
    request.onload = function(){
        var data = JSON.parse(request.responseText);
        console.log(data);
        /* for (var i = 0; i < data.items.length; i++){
            var item = data.items[i];
            results.innerHTML += "<br>" + item.volumeInfo.title;
        } */
    };
    request.send();
});
