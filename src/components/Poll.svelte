<script>
    // @ts-nocheck
    import { tweened } from 'svelte/motion';

    import Button from "../shared/Button.svelte";
    import Card from "../shared/Card.svelte";
    import PollStore from "../stores/PollStore";
    
    export let poll;

    $: totalVotes = poll.votesA + poll.votesB;

    // 
    $: precentA = (poll.votesA / totalVotes ) * 100 | 0;
    $: precentB = (poll.votesB / totalVotes ) * 100 | 0;

    const tweenedA = tweened(0)
    const tweenedB = tweened(0);


    $: tweenedA.set(precentA)
    $: tweenedB.set(precentB)


    // Functions
    const voteHandler = (which , id) => {
        // Find Thats Item
        PollStore.update(data => {
            const upVotedPoll = data.find(i => i.id === id) 
            // Increase Votes
            which === 'a' ? upVotedPoll.votesA++ : upVotedPoll.votesB++
            // Updated 
            return data
        })
    }

    // deleteHandler
    const deleteHandler = id => PollStore.update(data => data.filter(i => i.id !== id))

</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total Votes : {totalVotes}</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => voteHandler('a',poll.id)}>
            <div class="precent precent-a" style="width: {$tweenedA}%;" value={$tweenedA}></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => voteHandler('b',poll.id)}>
            <div class="precent precent-b" style="width: {$tweenedB}%;"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <center><Button on:click={deleteHandler.bind(this,poll.id)}>Delete</Button></center>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background-color: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
        border-radius: 4px;
    }
    .answer:hover {
        opacity: .6;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    .precent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .precent-b {
        border-left: 4px solid #d91b42;
        background-color: rgba(217, 27, 66, .2);
    }
    .precent-a {
        border-left: 4px solid #45c496;
        background-color: rgba(69, 196, 150, .2);
    }
</style>