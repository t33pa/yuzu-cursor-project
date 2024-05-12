<script lang="ts">
  import { currentLanguage, translate } from "../lib/store";

  const togggleLanguage = () => {
    if ($currentLanguage === "en") {
      currentLanguage.update((value: string) => (value = "ja"));
    } else {
      currentLanguage.update((value: string) => (value = "en"));
    }
  };
</script>

<div>
  <p class="button-wrapper">
    <button on:click={togggleLanguage}
      >{translate($currentLanguage, "language-button")}</button
    >
  </p>
  <div class="header">
    <p class="title">{translate($currentLanguage, "header-t")}</p>
    <p class="subtitle">{translate($currentLanguage, "header-s")}</p>
    <img src="icons/down.svg" alt="" />
  </div>
</div>

<style>
  div.header {
    height: 100vh;
    padding-top: 20%;
    text-align: center;
    margin: auto;
  }
  p {
    color: rgb(204, 204, 204);
    font-weight: bold;
    margin: auto;
  }
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
  img {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-inline: auto;
    height: 40px;
    width: 40px;
  }

  .button-wrapper {
    margin: 3% 3% 0 0;
    text-align: right;
  }

  button {
    font-family: "Roboto", sans-serif;
    background-color: transparent;
    border: 1px solid rgb(204, 204, 204);
    color: rgb(204, 204, 204);
    padding: 0.5rem 1rem;
    margin: 1rem;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  button:hover {
    background-color: rgb(204, 204, 204);
    color: black;
  }

  @media (max-width: 768px) {
    div.header {
      padding-top: 25vh;
    }
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }

    .button-wrapper {
      margin: 0;
    }
  }
</style>
