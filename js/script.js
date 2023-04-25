//Element

const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");


//Functions

function addNote() {

    const noteObject = {
        id: generateId(),
        content:noteInput.value,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id, noteObject.content);

    //add noteElement in notesContainer
    notesContainer.appendChild(noteElement);
}

//Create note element

//Function for ID not repeat

function generateId() {
    return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed){
    //create the news DOM elements
    const element = document.createElement("div")
    element.classList.add("note")

    const textarea = document.createElement("textarea")
    textarea.value = content //It will filled witch data
    textarea.placeholder = "Add some text"

    //add textarea for element(div)
    element.appendChild(textarea)

    return element;
}

//Event

addNoteBtn.addEventListener("click", () => addNote());
