<script>
    import Button from "../shared/Button.svelte";
    import { createEventDispatcher } from "svelte";
    const DISPATCH = createEventDispatcher();
    import PollStore from "../stores/PollStore";

    // Variables Binding 
    let fields = {question : '', answerA : '', answerB : ''}
    let erros = {question : '', answerA : '', answerB : ''};
    let valid = false;
    // Functions
    const submitHandler = _ => {
        valid = true;

        // Validate Question
        if (fields.question.trim().length < 5) {
            erros.question = 'Question Must Be at least 5 char'
            valid = false;
        } else erros.question = ''
        // Validate Answer A
        if (fields.answerA.trim().length < 1) {
            erros.answerA = 'Answer A Cannot Be empty'
            valid = false;
        } else erros.answerA = ''
        // Validate Answer B
        if (fields.answerB.trim().length < 1) {
            erros.answerB = 'Answer A Cannot Be empty'
            valid = false;
        } else erros.answerB = ''

        if (valid) {
            const poll = {...fields, votesA : 0, votesB : 0, id : Math.random()}
            DISPATCH('add',poll)
            PollStore.update(data => [...data, poll])
        }
    }

</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Question</label>
        <input type="text" id="question" bind:value={fields.question}>
        <p class="error">{erros.question}</p>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A</label>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
        <p class="error">{erros.answerA}</p>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B</label>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
        <p class="error">{erros.answerB}</p>
    </div>
    <!-- <button>Add Poll</button> -->
    <Button type={'secondary'}>Add Poll</Button>
</form>

<style>
    form {
        width: 400px;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
        padding: .5rem;
        border: 1px solid #333;
        font-size: 1rem;
    }
    .error {
        color: #d91b42;
        font-weight: 600;
    }
</style>