<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { currentLanguage, translate } from "../lib/store";

  let currentImage = "about1.avif";
  let images = ["about1.avif", "about2.avif"];
  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      currentImage = images[currentIndex];
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="wrapper">
  <div class="container">
    {#each [currentImage] as image (image)}
      <img
        src={image}
        alt=""
        transition:fade={{ duration: 500 }}
        height="100%"
        width="100%"
      />
    {/each}
    <div class="text">
      <span class="title">{translate($currentLanguage, "about-t")}</span>
      <p>
        {translate($currentLanguage, "about-1")}
      </p>
      <p>
        <span>{translate($currentLanguage, "about-2-1")}</span>
        <a href="https://twitter.com/Minthiuchidani" target="_blank"
          >Minthiuchidani</a
        >
        <span>{translate($currentLanguage, "about-2-2")}</span>
      </p>
      <p>{translate($currentLanguage, "about-3")}</p>
    </div>
  </div>
</div>

<style>
  .wrapper {
    height: 100vh;
    width: 100%;
  }
  .container {
    display: grid;
    grid-template-columns: 3fr 5fr;
    gap: 50px;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    padding-inline: 20px;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    padding-block: 1rem;
  }
  img {
    grid-area: 1 / 1;
    margin-top: 5%;
    height: 90vh;
    width: auto;
  }
  p {
    font-size: 1.4rem;
  }
  .text {
    grid-area: 1 / 2;
    text-align: left;
    margin-top: 5%;
    margin-right: 25%;
  }

  @media (max-width: 768px) {
    .wrapper {
      height: auto;
    }
    .container {
      display: block;
      gap: 0;
      height: 100%;
    }
    img {
      display: none;
    }
    .text {
      width: 75vw;
      margin-top: 5%;
      margin-inline: 20px;
    }
    a,
    a:visited {
      color: #8c9bd3;
    }
    a:hover {
      color: #55659f;
    }
  }
</style>
