<script>
  import { organizations$ } from "@uidaholib/shared/api/organizations";
  import CatalogList from "./catalog-list.svelte";
  import GroupSelection from "./group-selection.svelte";
  import { focusable } from "@uidaholib/shared/actions/focusable";

  export let selectedGroup, selectedGroups;


</script>

<div class="d-flex flex-column">
  <GroupSelection {selectedGroups} on:change />
  <div class="flex flex-col w-full bg-white rounded px-2 md:px-4 py-2 min-h-0">
    <CatalogList {selectedGroup} />
  </div>
</div>
