var facts=[
    "Ambani Family",
    "Kapoor Family",
    ];
    var photos=[ 
    "https://static.india.com/wp-content/uploads/2019/03/mukesh-ambanis-son-marriage.jpg?impolicy=Medium_Resize&w=1200&h=800",
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Kapoor_family_on_Randir%27s_birthday.jpg",
    ];
    var y=0;
    function next(){
    document.getElementById("Reseasons").innerHTML=facts[y]
    document.getElementById("Family_Photos").src=photos[y];
    y++;
    }