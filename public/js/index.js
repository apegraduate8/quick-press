import Articles from './Articles';
import NewsFeed from './NewsFeed';
import init from "./init.js";


window.addEventListener("load", function(){


   const styles = {
    "width": "100vw",
  "display": "flex",
  "flex-direction": "column",
  "align-items": "center"
 }

  let index = {}
  let Con = document.querySelector(".container")
  // Con.style.backgroundImage = '/image/backgroundd.svg'
  console.log("yo", Con)
  // init(index)     ///////// this is where the erro is...cant call class as function!!!

  const ind = new init()
  // console.log("inside the index.js this is ind >> ", ind)
  ind.State.on("render", function(method){
    console.log("news. display")
     ind.Append(Con, NewsFeed.Display(method))
     ind.style(Con, styles)
  })

    ind.Append(Con, Articles.Display())
    ind.style(Con, styles)

  function side(e){
    console.log("scrolling")
       if(window.document.body.scrollTop > A1+200){
        // return console.log(e, window.document.body.scrollTo)
         window.document.querySelector(".Art1").classList.toggle('sideBar')
         window.document.querySelectorAll(".Art1 h1").forEach(el => el.classList.toggle('hide'))
         window.removeEventListener("scroll", side, false)
         window.addEventListener("scroll", normal, false)
      }else{

      }
  }
   function normal(e){
    console.log("scrolling")
       if(window.document.body.scrollTop < A1+100){
        // return console.log(e, window.document.body.scrollTo)
         window.document.querySelector(".Art1").classList.toggle('sideBar')
         window.document.querySelectorAll(".Art1 h1").forEach(el => el.classList.toggle('hide'))
         window.removeEventListener("scroll", normal, false)
         window.addEventListener("scroll", side, false)
      }else{

      }
  }
    window.addEventListener("scroll", side, false)
    const A1 = window.document.querySelector(".Art1").offsetHeight


});

/////////// References  //////////
//https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
