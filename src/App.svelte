<script>
    // Imports
    import CreatePollForm from './components/CreatePollForm.svelte';
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import Polls from './components/Polls.svelte';
    import Tabs from './shared/Tabs.svelte';
    // Variables
    // Tabs
    const tabs = ['Polls', 'Add a New'];
    let activeTab = 'Polls'
    // Functions
    const tabChangeHandler = e => activeTab = e.detail;
    // Add Poll
    const addPollHandler = e => activeTab = 'Polls'

</script>

<Header />
<main class="container">
  <Tabs {tabs} {activeTab} on:tab={tabChangeHandler}/>
  {#if activeTab === 'Polls'}
    <Polls />
  {:else if activeTab === 'Add a New'}
    <CreatePollForm on:add={addPollHandler}/>
  {:else}
    <h1>404 Not Found :(</h1>
  {/if}
</main>
<Footer />

<style>
  .container {
    max-width: 960px;
    margin: auto;
  }
</style>
