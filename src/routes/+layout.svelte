<script lang="ts">
  import { page } from "$app/stores";

  $: isLinkActive = (link: string): boolean => {
    if (link.replace("/", "") == $page.url.pathname.split("/")[1]) return true;
    return false;
  };
</script>

<header>
  <div class="page_title">
    <h1>Advent of Svelte</h1>
    <p>By: Gavin Noktes</p>
  </div>
  <nav>
    <ul>
      <li><a href="/" class:active={isLinkActive("/")}>Home</a></li>
      <li>
        <a
          href="/advent-of-svelte"
          class:active={isLinkActive("/advent-of-svelte")}>Advent of Svelte</a
        >
      </li>
      <li>
        <a href="/advent-of-code" class:active={isLinkActive("/advent-of-code")}
          >Advent of Code</a
        >
      </li>
    </ul>
  </nav>
</header>
<main>
  <slot />
</main>

<style lang="scss">
  @use "$lib/styles/variables" as *;

  header {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 1rem;
    background-color: $red;
    color: $white;
  }

  .page_title > * {
    line-height: 1;

    &:last-child {
      color: $light-gray;
    }
  }

  ul {
    display: flex;
    gap: 2rem;
  }

  a {
    color: $white;
    position: relative;

    &:hover {
      color: $light-gray;
    }

    &.active {
      &::before {
        content: "";
        position: absolute;
        top: -12px;
        right: -18px;
        display: block;
        height: 28px;
        width: 28px;
        background-image: url("/christmas_hat.png");
        background-size: 28px 28px;
        transform: rotateZ(15deg);
      }
    }
  }

  main {
    padding: 1rem 2rem;
  }
</style>
