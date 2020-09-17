<script>
  import shave from "shave";
  import lozad from "lozad";

  import { truncate } from "./helpers";
  import { createEventDispatcher, onMount } from "svelte";

  export let thumbnailUrl,
    title,
    subtitle,
    description,
    id,
    landingPage,
    url,
    authoritative;

  let observer;

  onMount(() => {
    const el = document.querySelector("img");
    observer = lozad();
    observer.observe();
    observer.triggerLoad(el);
  });

  $: if (observer) observer.observe();

  const dispatch = createEventDispatcher();

  const openHub = () => {
    dispatch("hub", { id, landingPage });
  };

  const openArcgis = () => {
    dispatch("arcgis", { id, landingPage, url });
  };

  // card display reference:
  //https://uidaho.maps.arcgis.com/home/gallery.html?view=grid&sortOrder=asc&sortField=title
</script>

<div class="card mb-3 mr-3" style="width: 20rem; font-size: 1rem;">
  <img
    src={thumbnailUrl}
    class="card-img-top"
    alt="dataset image"
    style="height: 14rem;" />
  <div class="card-body">
    <h6 class="card-title text-primary text-truncate w-100" {title}>{title}</h6>

    <style>
      .badge {
        display: inline-flex;
        align-items: center;
        color: #0ba80b;
        background-color: #b6e6b9a3;
        border-radius: 4rem;
        margin-right: 0.2rem;
        font-size: 0.80rem;
      }
      .badge-muted {
        display: inline-flex;
        align-items: center;
        color: #008d97;
        background-color: #b8faff;
        border-radius: 4rem;
      }
      .badge-container {
        display: flex;
        align-items: center;
        font-size: 0.80rem;
      }
    </style>
    <div class="badge-container">
      {#if authoritative}
        <span class="badge">
          <svg class="" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0
              0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
          <span title="Authoritative">
            Authoritative
          </span>
        </span>
      {/if}
      {#if subtitle}
        <span class="badge-muted">
          <svg class="" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0
              0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
          <span
            title={subtitle}>
            {subtitle}
          </span>
        </span>
      {/if}
    </div>

    {#if description}
      <style>
        .text-fade {
          position: relative;
          height: 3.6em; /* exactly three lines */
        }
        .text-fade:after {
          content: "";
          text-align: right;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 90%;
          height: 1.5em;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1) 90%
          );
        }
      </style>
      <p
        class="card-text text-fade w-100"
        style="height: 4.5rem; overflow: hidden;">
        {description}
      </p>
    {/if}

  </div>
  <div class="card-body pt-0">
    <div class="d-flex justify-content-center w-100">
      <a on:click={openArcgis} href="#" class="btn btn-sm btn-info w-100 mr-2">
        ArcGIS Item Details
      </a>
      <a on:click={openHub} href="#" class="btn btn-sm btn-info w-100">
        Open Data Item Details
      </a>
    </div>

  </div>

</div>
