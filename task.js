function add(){
    var get=document.getElementById("parent")
    var a=document.getElementById("output").value

  if(a.length!==0){
    document.getElementById("output").value=""
    var p=document.createElement("p")
    p.className="zzz"  
   
    p.innerText=a
    get.appendChild(p)

   
    var div=document.createElement("img")
    div.src="/img/dustbin.png" 
    div.className="aaa"
    
     
     p.appendChild(div)
     div.onclick=(()=>{
      p.remove()


      })     
  }

    
}
