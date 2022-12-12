/*
    Define a variable named `notes` and assign a value of an empty array
*/
 const notes = [];

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const note1 = {
    id: 1,
    text: "King Harvest has surely come.",
    author: "The Band",
    date: "1969-09-22",
    topics: ["harvest", "droughts", "labor unions"]
}

const note2 = {
    id: 2,
    text: "Everybody must get stoned.",
    author: "Bob Dylan",
    date: "1966-06-20",
    topics: ["drug use", "executions", "loneliness", "hallucinations"]
}

const note3 = {
    id: 3,
    text: "Drink your green liquor, Lord",
    author: "Townes Van Zandt",
    date: "1969-04-02",
    topics: ["God", "alcohol", "prayer"]
}

notes.push(note1);
notes.push(note2);
notes.push(note3);

// console.log(notes);

notes.push({
    id: 4,
    text: "You can't always get what you want.",
    author: "The Rolling Stones",
    date: "1969-11-28",
    topics: ["trying", "hardship", "prayer"]
})

notes.push({
    id: 5,
    text: "You can go outside and polish your car.",
    author: "The Kinks",
    date: "1969-10-10",
    topics: ["utopia", "lost kingdoms", "longing"]
})

notes.push({
    id: 6,
    text: "I wish I had a river.",
    author: "Joni Mitchell",
    date: "1971-06-22",
    topics: ["love", "escape", "longing"]
})

// for(let note of notes) {
//     console.log(note.text);
// }



//console.log(*** All Note Topics ***);
// for(let note of notes) {
//     for(let topic of note.topics) {
//         console.log(topic);
//     }
// }



// console.log("*** Average Topics Per Note ***");
// let totalTopics = 0;

// for(let note of notes) {
//     totalTopics += note.topics.length;
//     }

// let averageTopics = totalTopics / notes.length;

// console.log(averageTopics);



// console.log("*** Notes with the longing topic ***");
// const filteredNotes = [];
// const criteria = "longing";

// for(let note of notes) {
//     for(let topic of note.topics) {
//         if(topic.includes("longing")) {
//             console.log(note);
//         }
//     }
// }



// console.log("***  Note Articles  ***")
// for(let note of notes) {
//     console.log(`<article>${note.text}</article>`);
// }


console.log("*** Note Articles with Topic Sections ***");
let totalString = "";

for(let note of notes) {
    totalString += `<article>${note.text}`;
    for(topic of note.topics) {
        totalString += `<section>${topic}</section>`;
    }
    totalString += `</article>`;
}

console.log(totalString);