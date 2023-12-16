<script lang="ts">
  import Loading from "../loading/Loading.svelte";
  import { setData } from "./data";

  export let name: string;
  export let tally: number;

  let refreshing: boolean = false;

  function handleClick(eventType: "add" | "subtract") {
    if (eventType == "add") tally += 1;
    else tally -= 1;

    setData(name, tally);

    refreshing = true;
    setTimeout(function () {
      refreshing = false;
    }, 2000);
  }
</script>

<div
  class="card row mt-3"
  class:red={tally < 0}
  class:green={tally >= 0}
  class:refreshing
>
  {#if refreshing}
    <div class="loader">
      <Loading />
    </div>
  {/if}

  <div>
    <h3>{name}</h3>
    <p>Score: {tally}</p>
  </div>
  <button
    class="ml-auto mr-2"
    on:click={() => handleClick("subtract")}
    disabled={refreshing}
  >
    Was Naughty
  </button>
  <button
    class="green"
    on:click={() => handleClick("add")}
    disabled={refreshing}
  >
    Was Nice!
  </button>
</div>

<style lang="scss">
  .card {
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      background-color: rgba(0, 0, 0, 0);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      z-index: 1;
      transition: all 300ms ease;
    }

    &.refreshing::before {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
