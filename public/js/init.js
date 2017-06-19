import State from './State';
import './Process';
class init  {

      constructor(){
        // super()
        this.data = null
        this.State = State
      }

      check(Obj){
        if(Obj === undefined){return true}
          this.obj = Obj
          Obj.div = document.createElement("DIV")
          Obj.H1 = document.createElement("H1")
          Obj.H2 = document.createElement("H2")
          Obj.H3 = document.createElement("H3")
          Obj.H4 = document.createElement("H4")
          Obj.P = document.createElement("P")
          Obj.A = document.createElement("A")
          Obj.UL = document.createElement("UL")
          Obj.LI = document.createElement("LI")
          Obj.NAV = document.createElement("NAV")
          Obj.IMG = document.createElement("IMG")
      }


      emitt(){
       console.log("in the emitt >",res,  argg)
       State.on("render", function(result){
           this.data = result
        })
      }

      Append(parent, arr){
        if(Array.isArray(arr)){
            // console.log("is the Father !!>>><<<<. ")
            return arr.forEach((el, index) => {
             parent.appendChild(el);
           })
        }
          console.log("is not array !!!!!!!!")
          // console.log(parent, "and", arr)
          return  parent.appendChild(arr);
      }

      style(el, object){
         if(object){
            for(let key in object){
              // console.log("object>>", object)
              // console.log("element.  >>", el)
              // console.log(key)
              el.style[key] = object[key]
            }
          }
      }




}

export default init;

