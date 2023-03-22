const textDisplay= document.getElementById('text')
const phrases=['hi, my name is', 'what is your name']
let i=0
let j=0
let current=[]
let isDelete=false
let isEnd=false

// textDisplay.innerHTML=current
 function loop(){

   isEnd=false
   textDisplay.innerHTML=current.join('')
    if(i<phrases.length){

      if(j==phrases[i].length){
         isEnd=true
         isDelete=true
      }

         if(!isDelete && j<=phrases[i].length){
            // j++
            console.log(phrases[i].length)
            current.push(phrases[i][j])
            j++
         }

         if(isDelete && j<=phrases[i].length)
         {
            current.pop(phrases[i][j])

            j--
         }
         
         if(isDelete && j===0){
            current=[]
            isDelete=false
            i++
         }
         if(i== phrases.length){
            i=0
         }
    }

    const spedUP=Math.random()*(40-20)+(20)
    const normalSpeed=Math.random()*(60-30)+30
    const time= isEnd ? 2000 :isDelete ? spedUP : normalSpeed
    setTimeout(loop, time)
 }
loop()
