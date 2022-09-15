const addBtn = document.querySelector('.addNote');
showNotes();
addBtn.addEventListener('click' , (e) => {
let addNote = document.querySelector('.input');
let notes = localStorage.getItem("notes")
if(notes == null){
	notesArr = [];
}else{
	notesArr = JSON.parse(notes);
}
notesArr.push(addNote.value);
localStorage.setItem("notes" , JSON.stringify(notesArr))
addNote.value = "";
console.log(notesArr);

showNotes();
})
function showNotes(){
	let notes = localStorage.getItem("notes") 
	if(notes == null){
	notesArr = [];
}else{
	notesArr = JSON.parse(notes);
}
let noteContainer = ""
notesArr.forEach((element , index)=> {
   noteContainer += `<div id="notes" class="smallContainer">
       <div id="${index}" onclick="deleteNote(this.id)" class="delBtn"><i class="fa-solid fa-trash"></i></div>
       <p>${element}</p>
       </div>`
});
let notesElm = document.querySelector('.box')
if(notesArr.length != 0){
	notesElm.innerHTML = noteContainer;
}else{
	notesElm.innerHTML = "No Notes added! Add notes to show! "
}


}

const deleteNote = (index) => {
	 let notes = localStorage.getItem("notes"); 
	if(notes == null){
	notesArr = [];
    }else{
	notesArr = JSON.parse(notes);
}
notesArr.splice(index , 1)
localStorage.setItem("notes" , JSON.stringify(notesArr))
   showNotes();  
}
let search = document.getElementById('searchNote');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("smallContainer");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        
    })
})