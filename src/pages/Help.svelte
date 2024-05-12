<script lang="ts">
  import { currentLanguage, translate } from "../lib/store";
</script>

<div class="wrapper">
  <div class="container">
    <div class="text">
      <p class="title">{translate($currentLanguage, "help-t")}</p>
      <p>{translate($currentLanguage, "help-1")}</p>
      <p>{translate($currentLanguage, "help-2")}</p>
      <p class="indent">
        {translate($currentLanguage, "help-2-1")}
      </p>
      <p>
        {translate($currentLanguage, "help-3")}
      </p>
      <p>{translate($currentLanguage, "help-contact")}</p>
    </div>
  </div>
</div>

<style>
  .wrapper {
    width: 90%;
    margin-left: 3%;
  }

  .container {
    width: 100%;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .text {
    text-align: left;
  }

  .indent {
    margin-left: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .wrapper {
      height: auto;
      padding-bottom: 20px;
    }
    .container {
      display: block;
      height: 100%;
    }

    .indent {
      margin: 0;
    }

    .text {
      margin-top: 0;
      margin-inline: auto;
    }
  }
</style>
