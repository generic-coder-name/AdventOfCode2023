<script lang="ts">
  import { onMount } from "svelte";
  import KidCard from "$lib/day1/KidCard.svelte";
  import { data, getData } from "$lib/day1/data";

  onMount(async () => {
    await getData();
  });
</script>

<a href="https://advent.sveltesociety.dev/#challenges">
  <h1>Day 1: Naughty Or Nice</h1>
</a>
<p>
  The Elves have been tirelessly creating presents all year round. They're right
  on schedule, but today they've run into a big problem; the ancient system for
  tracking who's been naughty or nice is out of commission. With the hundreds of
  thousands of letters from children piling up alongside their records of good
  and bad deeds, the Elves are in dire need of a modern solution. Your mission
  is to build a system for the elves, enabling them to input names and tally
  each childs' deeds to keep track of whether they're good or bad. You could
  even categorize these automatically as "naughty" and "nice." Fortunately, the
  elves have been meticulous in their record-keeping and have a backup of all
  the current data in JSON format. You'll need to import this data into your
  newly developed system.
</p>

<!-- Start Day 1 -->
<div class="row gap-3 mt-6">
  <div class="card full">
    <h2 class="centered red">Naughty</h2>
    <p class="statistic centered">
      {#if $data}
        {$data.filter(({ tally }) => tally < 0).length}
      {:else}
        0
      {/if}
    </p>
  </div>
  <div class="card full">
    <h2 class="centered green">Nice</h2>
    <p class="statistic centered">
      {#if $data}
        {$data.filter(({ tally }) => tally >= 0).length}
      {:else}
        0
      {/if}
    </p>
  </div>
</div>

<div class="kids">
  {#if $data}
    {#each $data as { name, tally }}
      <KidCard {name} {tally} />
    {/each}
  {/if}
</div>

<style>
  .kids {
    overflow: auto;
  }
</style>
