import { writable } from "svelte/store";

console.log(writable);

const PollStore = writable([
    {
        question : 'Javascript or Python?', 
        answerA : 'Javascript',
        answerB : 'Python',
        votesA : 15, votesB : 8, id : Math.random()
    },
    {
        question : 'GoLang or Ruby?', 
        answerA : 'GoLang',
        answerB : 'Ruby',
        votesA : 9, votesB : 10, id : Math.random()
    }
])

export default PollStore;