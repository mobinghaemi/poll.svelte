<script>
    // Libraryies
    import { createEventDispatcher } from "svelte";
    const DISPATCH = createEventDispatcher()
    // Props
    export let tabs;
    export let activeTab;
    // Variables
    // Functions
</script>

<div class="tabs">
    <ul>
       {#each tabs as tab}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class:active={activeTab === tab} on:click={_ => DISPATCH('tab',tab)}>{tab}</li>
       {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 0 1rem;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
    .active {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: .5rem;
    }
</style>