<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Dropdown from "./dropdown.svelte";
  import { sorter } from "@uidaholib/shared/api/helpers";

  export let selectedGroups = [];
  let title = "Groups";
  let selected;

  const dispatch = createEventDispatcher();

  function setSelectedGroup(group) {
    dispatch("change", group);
  }

  const onSelectionChanged = (event) => {
    selected = selectedGroups.find((g) => g.title === event.target.value);
    setSelectedGroup(selected);
  };
</script>

<div class="form-group">
  <label for="exampleFormControlSelect1">{title}</label>
  <select
    class="form-control"
    id="GroupFormControlSelect1"
    bind:value={selected}
    on:change={onSelectionChanged}>
    {#each selectedGroups as group (group.id)}
      <option>{group.title}</option>
    {/each}
  </select>
</div>
