import init from "./init.js";
import Axios from "axios";
import '../styles/Articles.css'

  console.log("yooo. ", init)
  const style = {
    block: {
      "width": "100px",
      "height": "100px",
        "display": "flex",
        "flex-direction": "column",
        "margin": "5%"
    },
    Art1: {
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "center",
      "margin": "2%"
    }

 }



class Articles extends init {

        constructor(){
            super()
           this.images = ["abc-news-au", "bbc-news", "bbc-sport", "business-insider", "bloomberg", "breitbart-news", "buzzfeed", "cnbc", "entertainment-weekly", "fortune", "the-huffington-post", "ign"];
        }


        get(params){
         Axios.get( process.env.uRl+params)
             .then(data => {
               this.State.emit("render", data)
               window.document.querySelector(".cover").classList.toggle('hide')
               console.log(data, "this >>>", this)
            })
            .catch(err => console.log(err))

        }

        Display(res){
          console.log("the process variable >>", process.env.foo)
          let Art1 = new Articles();
            this.check(Art1)
            let rs = this.images.map((el, index) => {
               const Art2 = new Articles();
                this.check(Art2)

               Art2.IMG.src = `/images/${el}.png`
               Art2.H1.innerHTML = el
               Art2.div.className = "block"
               Art2.Append(Art2.div, [Art2.IMG, Art2.H1]);
               Art2.div.addEventListener("click", (e) => {
                    e.stopPropagation()
                    window.document.querySelector(".cover").classList.toggle('hide')
                    Art2.get(el)

                    // A.emitt(Acl, re)
               }, false)
               return Art2.div

           })

            Art1.div.className = "Art1"
            // Art1.style(Art1.div, style.Art1)
            Art1.Append(Art1.div, rs)
            return Art1.div
        }

}




const Art = new Articles();
export default Art



























 // function Acl(res){
 // console.log("self >>>>>>>>> ", this)


 //  const trap = new Articles();
 //        console.log("article.data  >>>", trap)
 //        if(res){return console.log(res)}

 //      let rs = trap.images.map((el, index) => {
 //               const Art = new Articles();
 //               const A = new init(Art)
 //               Art.IMG.src = `/images/${el}.png`
 //               Art.H1.innerHTML = "click to get news"
 //               Art.div.className = "block"
 //               A.Append(Art.div, [Art.IMG, Art.H1]);
 //               A.style(Art.div, style)

 //               Art.div.addEventListener("click", (e) => {
 //                    e.stopPropagation()
 //                    Art.get(el)

 //                    // A.emitt(Acl, re)
 //               }, false)
 //               return Art.div

 //        })

 //      console.log(rs)
 //      return rs

 //  }

 //   module.exports = Acl()




