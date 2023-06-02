<script>
    export let type = 'primary';
    export let isFlat = false;
    export let isInverse = false;
</script>

<button class={type} class:flat={isFlat} class:inverse={isInverse} on:click>
    <slot></slot>
</button>

<style>
    button {
        border-radius: 6px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
    }
    .primary {
        background-color: #d91b42;
        color: white;
    }
    .secondary {
        background-color: #45c496;
        color: white;
    }
    .flat {
        box-shadow: none;
    }
    .primary.inverse {
        color: #d91b42;
        background-color: white;
        border: 2px solid #d91b42;
    }
    .secondary.inverse {
        color: #45c496;
        background-color: white;
        border: 2px solid #45c496;
    }
</style>