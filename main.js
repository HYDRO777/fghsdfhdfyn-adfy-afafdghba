var i= [
    "Dad Anime.jpg",
    "Mom Anime.jpg",
    "Sister Anime.jpg",
    "Veer Anime.jpg"
];
var identity= [
  "Binoy Parekh",
  "Priya Parekh",
  "Maanya Parekkh",
  "Veer Parekh"
];
  
  var images = 0;
  function nextslide() {
    if( images == 4 )
      {
        images=0;
      }
    document.getElementById("Family").src = i[images];
    document.getElementById("Names").innerHTML = identity[images];
    images++;
    console.log(images);
  }
  
 
  
 
   
  