<script lang='ts'>
  export let up;
  export let down;
  export let hiddenUp;
  export let hiddenDown;
</script>

<div class="selectors">
  <button class="selectButton" class:hiddenUp on:click={up}>▲</button>
  <slot></slot>
  <button class="selectButton" class:hiddenDown on:click={down}>▼</button>
</div>

<style lang="scss">
  @import "../styles.scss";
  .selectors {
    grid-column: 2;
  }
  .selectButton {
    height: 20px;
    width: 20px;
    background: none;
    border: none;
    box-shadow: none;
    color: $wheat-main;
  }
  .hiddenUp {
    color: transparent;
  }
  .hiddenDown {
    color: transparent;
  }
</style>