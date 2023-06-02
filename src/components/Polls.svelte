<script>
    import Poll from "./Poll.svelte";
    import {onMount, onDestroy} from 'svelte'
    import PollStore from "../stores/PollStore.js";
    import { flip } from "svelte/animate";
    import { fade, slide, scale,draw,fly } from "svelte/transition";


    // const unsub = PollStore.subscribe(data => polls = data)

    // onMount(_ => {
    //     console.log('Component to be loaded');
    // })

    // onDestroy(_ => {
    //     console.log('Component to be distory');
    // })

</script>

<div class="polls">
    {#each $PollStore as poll (poll.id)}
        <!-- <div class="poll">{poll.question}</div> -->
        <div animate:flip={{duration : 500}} in:fly={{x : 10}} out:scale|local>
            <Poll {poll} on:vote />
        </div>
    {:else} 
        <!-- <h2>Please Add Some Poll dude ;)</h2> -->
    {/each}
</div>

<style>
    .polls {
        display: grid;
        gap: .5rem;
        grid-template-columns: 1fr 1fr;
    }
</style>