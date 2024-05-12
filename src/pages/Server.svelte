<script lang="ts">
  import { currentLanguage, translate } from "../lib/store";
</script>

<div>
  <p class="title">{translate($currentLanguage, "server-t")}</p>
  <img class="left" src="icons/orie.avif" alt="" />
  <p class="text">
    {translate($currentLanguage, "server-1")}
  </p>
  <img class="right" src="icons/fumika.avif" alt="" />
  <p class="text">
    {translate($currentLanguage, "server-2")}
  </p>
  <p class="link">
    <a href="https://discord.gg/jJRNgzh" target="_blank"
      >{translate($currentLanguage, "server-join")}</a
    >
  </p>
</div>

<style>
  div {
    padding: 20px;
    text-align: left;
    width: 95%;
    margin-left: -10px;
  }

  p {
    margin: auto;
  }

  .left {
    float: left;
    margin-right: 20px;
  }

  .right {
    float: right;
    margin-left: 20px;
  }

  .text {
    font-size: 1.2rem;
    padding-block: 1rem;
  }

  .text::first-letter {
    font-size: 2rem;
    font-weight: bold;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    padding-block: 1rem;
  }

  .link {
    text-align: center;
    margin-block: 50px;
  }

  a {
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
    color: #55659f;
    background-color: #eeeeee;
    padding: 8px 20px;
    text-decoration: none;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  a:hover {
    background-color: #55659f;
    color: white;
  }

  a:visited {
    color: #55659f;
  }
</style>
