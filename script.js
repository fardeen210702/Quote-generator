const quote_btn = document.querySelector('button')
const para = document.querySelector('.para')
const author= document.querySelector('author')
const sound_BTn = document.querySelector('.sound')
const copy_BTn = document.querySelector('.copy')
const share_BTn = document.querySelector('.social')




function random_quote_generator(){
    fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(results=>{
            console.log(results)
       para.innerHTML= results.content;  
       author.innerHTML  = results.author;

        })
}
quote_btn.addEventListener('click', random_quote_generator);


sound_BTn.addEventListener('click',()=>{
    let sound = new SpeechSynthesisUtterance(`${para.innerHTML} by${author.innerHTML}`)
 speechSynthesis.speak(sound)

})
copy_BTn.addEventListener('click',()=>{
 navigator.clipboard.writeText(para.innerHTML)

})