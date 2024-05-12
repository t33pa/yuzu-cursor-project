<script lang="ts">
  import { currentLanguage, translate } from "../lib/store";
</script>

<footer>
  <div class="footer">
    <div class="content">
      <p>
        {translate($currentLanguage, "footer-1")}<a
          href="https://twitter.com/Te3p4V"
          target="_blank"
          rel="noopener">Teepa</a
        >
      </p>
      <p>{translate($currentLanguage, "footer-2")}</p>
    </div>
  </div>
</footer>

<style>
  a,
  a:visited {
    color: #8c9bd3;
  }
  a:hover {
    color: #55659f;
  }
</style>
