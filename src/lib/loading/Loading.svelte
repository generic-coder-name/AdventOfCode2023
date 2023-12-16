<script lang="ts">
  import greenOrnament from "./green_ornament.svg";
  import redOrnament from "./red_ornament.svg";
  import yellowOrnament from "./yellow_ornament.svg";
</script>

<div class="loader">
  <img class="green" src={greenOrnament} alt="Green Ornament" />
  <img class="red" src={redOrnament} alt="Red Ornament" />
  <img class="yellow" src={yellowOrnament} alt="Yellow Ornament" />
</div>

<style>
  @keyframes up-down {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateY(-8px);
    }
    20% {
      transform: translateX(0);
    }
  }

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    max-width: 28px;
    width: fit-content;
  }

  .green {
    animation: up-down 1.3s ease-in-out infinite;
  }
  .red {
    animation: up-down 1.3s ease-in-out 0.15s infinite;
  }
  .yellow {
    animation: up-down 1.3s ease-in-out 0.3s infinite;
  }
</style>
