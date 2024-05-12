<script>
  export let series = "";
  export let character = "";
  export let index = 0;
  export let message = "";

  $: basePath = `cursors/${series}/${character}/${index}`;

  $: path = `${basePath}${index === 3 || index === 4 ? ".gif" : ".avif"}`;
</script>

<div class="wrapper">
  <div class="container">
    <img src={path} alt="" />
  </div>
  <div class="message">{message}</div>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .container {
    width: 80px;
    height: 80px;
    background-color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  .message {
    margin-left: 10px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-direction: column;
    }
    .container {
      width: 200px;
      height: 200px;
      margin-top: 5%;
    }
    img {
      width: 150px;
      height: 150px;
    }
    .message {
      margin-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
</style>
