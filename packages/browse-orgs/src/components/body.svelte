<script>
  import { organizations$ } from "@uidaholib/shared/api/organizations";
  import { currentGroup$ } from "@uidaholib/shared/api/group";

  import Selection from "./selection.svelte";
  import Sidebar from "./sidebar.svelte";
  import { sorter } from "@uidaholib/shared/api/helpers";

  let selected;
  let selectedGroups = [];

  let selectedGroup;

  function setSelectedGroup(event) {
    selectedGroup = event.detail;
    console.log("set selected groups: ", selectedGroup);
    currentGroup$.next(selectedGroup);
  }

  function selectionChanged(event) {
    selected = event.detail;
    selectedGroups = sorter("title")(selected.groups);
    selectedGroup = selectedGroups[0];
    console.log("selection: ", selected, selectedGroup, selectedGroups);
    currentGroup$.next(selectedGroup);
  }
</script>

<div class="container mx-auto px-4 py-2">
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-center mb-3">
      <Selection items={$organizations$} on:change={selectionChanged} />
    </div>

    {#if selected}
      <Sidebar {selectedGroups} {selectedGroup} on:change={setSelectedGroup} />
    {/if}
  </div>
</div>
