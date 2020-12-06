async function prom() {
    await fetch("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=wDX1usVPbPO60kJhTrC98O3pPJJbeDSM" )
      .then(function (resp) {
       
        
 return resp.json();

      })
      .then(function (jsonString) {

        
  console.log(jsonString.results[0].title)
  console.log(jsonString.results[0].abstract)
  console.log( Date(jsonString.results[0].published_date))
  console.log(jsonString.results[0].section)  
  console.log(jsonString.results[0].multimedia[0].url)    
  console.log(jsonString.results[0].url)
  console.log(jsonString)
          








for(let i=0 ; i<=jsonString.results.length ; i++){



var container = document.createElement("div");
container.setAttribute("class","container")
document.body.appendChild(container);

var row = document.createElement("div")
row.setAttribute("class","row")
container.appendChild(row);

var col1 =document.createElement("div")
col1.setAttribute("class","col a1")
row.appendChild(col1);



var section =document.createElement("div")
section.setAttribute("class","col")
section.setAttribute("id","section")
section.innerHTML=jsonString.results[i].section;
col1.appendChild(section);

var w =document.createElement("div")
w.setAttribute("class","w-100")
col1.appendChild(w);

var title =document.createElement("div")
title.setAttribute("class","col")
title.setAttribute("id","title")
title.innerHTML=jsonString.results[i].title;
col1.appendChild(title);

var w =document.createElement("div")
w.setAttribute("class","w-100")
col1.appendChild(w);

var date =document.createElement("div")
date.setAttribute("class","col")
date.setAttribute("id","date")
date.innerHTML=jsonString.results[i].published_date;
col1.appendChild(date);

var w =document.createElement("div")
w.setAttribute("class","w-100")
col1.appendChild(w);

var abstract =document.createElement("div")
abstract.setAttribute("class","col")
abstract.setAttribute("id","abstract")
abstract.innerHTML=jsonString.results[i].abstract;
col1.appendChild(abstract);

var w =document.createElement("div")
w.setAttribute("class","w-100")
col1.appendChild(w);

var url =document.createElement("a")
url.setAttribute("class","col")
url.setAttribute("id","url")
url.innerHTML="Continue reading"
url.href=jsonString.results[i].url;
col1.appendChild(url);

var col2=document.createElement("div")
col2.setAttribute("class","col a3")
row.appendChild(col2)

var img =document.createElement("img")
img.setAttribute("class","col a2")
img.setAttribute("id","img")
img.setAttribute("src",jsonString.results[i].multimedia[0].url)
col2.appendChild(img);

var br =document.createElement("br")

container.appendChild(br);














}


  
})
        
.catch(function (){
    console.log("error");
});
}



 prom();