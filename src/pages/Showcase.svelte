<script lang="ts">
  import { onMount } from "svelte";
  import Cursorbox from "./components/Cursorbox.svelte";
  import { currentLanguage, translate } from "../lib/store";
  import {
    CHARACTER_LIST,
    CHARACTER_NAME_LIST,
    CURSOR_STATUS_LIST,
    CURSOR_SERIES_LIST,
  } from "./translations/translationData";

  let selectedSeries = "sanoba";
  let selectedCharacter = "nene";
  const indexes = Array.from({ length: 15 }, (_, i) => i + 1);
  let gridElement: Element;

  onMount(() => {
    if (window.innerWidth <= 768) {
      gridElement.scrollLeft = 120;
    }

    Object.keys(CHARACTER_LIST[selectedSeries]).forEach((series) => {
      CHARACTER_LIST[series].forEach((character) => {
        indexes.forEach((index) => {
          const img = new Image();
          img.src = `./assets/${series}/${character}/${index}.avif`;
        });
      });
    });
  });

  $: selectedCharacter = CHARACTER_LIST[selectedSeries][0];
</script>

<div class="container">
  <p class="title">{translate($currentLanguage, "showcase-t")}</p>
  <div class="sel">
    <span class="select-label"
      >{translate($currentLanguage, "showcase-option-1")}</span
    >
    <select bind:value={selectedSeries}>
      <option value="sanoba" selected
        >{CURSOR_SERIES_LIST[$currentLanguage][0]}</option
      >
      <option value="stella" selected
        >{CURSOR_SERIES_LIST[$currentLanguage][1]}</option
      >
    </select>
  </div>
  <div class="sel">
    <span class="select-label"
      >{translate($currentLanguage, "showcase-option-2")}</span
    >
    <select bind:value={selectedCharacter}>
      {#each CHARACTER_LIST[selectedSeries] as character}
        <option value={character}
          >{CHARACTER_NAME_LIST[$currentLanguage][selectedSeries][
            character
          ]}</option
        >
      {/each}
    </select>
  </div>
  <div class="grid" bind:this={gridElement}>
    {#each indexes as index}
      <Cursorbox
        series={selectedSeries}
        character={selectedCharacter}
        {index}
        message={CURSOR_STATUS_LIST[$currentLanguage][index - 1]}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    width: 100%;
    min-height: 400px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding-top: 1rem;
    margin-inline: auto;
  }

  .grid {
    width: 100%;
    margin-top: 40px;
    margin-left: 5%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: center;
  }

  .select-label {
    width: 8rem;
  }

  .sel select {
    background-color: white;
    border: 1px solid grey;
    padding: 7px;
    font-size: 1.1rem;
    width: 200px;
    margin: 10px auto;
    border-radius: 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .grid {
      display: flex;
      overflow-x: auto;
      flex-direction: row;
      margin-top: 70px;
    }
  }
</style>
