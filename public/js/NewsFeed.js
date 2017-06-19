import init from "./init.js";
import '../styles/NewsFeed.css'

  const style = {
  "display": "flex",
  "flex-direction": "column",
  "width": "100%",
  "padding": "1%",
  "margin-bottom": "2%"
 }


 class NewsFeed extends init {
          constructor(){
            super()
          }


          Display(res){
            if(res){
              let y = res.data.articles.map((el, index) => {
                const Art = new NewsFeed();
                  this.check(Art)
                 Art.IMG.src = `${el.urlToImage}`
                 Art.H2.innerHTML = el.title
                 Art.H3.innerHTML = `by ${el.author || el.url}`
                 Art.A.href = el.url
                 Art.A.rel = "noopener noreferrer"
                 Art.A.target = "_blank"
                 Art.Append(Art.A, Art.IMG)
                 Art.Append(Art.div, [ Art.H2, Art.H3, Art.A]);
                 Art.style(Art.div, style)
                 return Art.div
              })
                  const Art2 = new NewsFeed();
                  this.check(Art2)
                  const Art3 = new NewsFeed();
                  this.check(Art3)
                  Art3.H2.innerHTML = "REMOVE"
                  Art3.IMG.src = `/images/${res.data.source}.png`
                  Art3.H3.addEventListener("click", function(){
                        window.document.querySelector(".container").removeChild(Art2.div)
                  }, false)
                  Art3.style(Art3.IMG, {"width": "120px", "margin": "1%"})
                  Art3.style(Art3.H2, {"font-size": "inherit", "margin": "1%"})
                  Art3.style(Art3.div, {"display": "flex", "flex-direction": "row", "width": "25%", "justify-content": "space-between"})

                  Art2.H1.innerHTML = res.data.source
                  Art2.style(Art2.H1, {"border-bottom": "1px solid black", "height": "100px"})

                  Art3.Append(Art3.div, [Art3.IMG, Art3.H2])
                  Art2.Append(Art2.div, [Art3.div, Art2.H1])
                  Art2.Append(Art2.div, y)
                  Art2.div.className = "feeds"
                  return Art2.div
            }
          }

}

const News = new NewsFeed()
export default News;


