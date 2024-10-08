<script lang="ts">
 import Sun from "lucide-svelte/icons/sun";
 import Moon from "lucide-svelte/icons/moon";
 
 import { resetMode, setMode,toggleMode } from "mode-watcher";
 import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
 import { Button } from "$lib/components/ui/button/index.js";
</script>
 

  <Button on:click={toggleMode} variant="ghost" size="icon" class="hover:bg-transparent hover:border m-5 focus:border-white">
   <Sun
    class="h-[1.7rem] stroke-white w-[1.7rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
   />
   <Moon
    class="absolute h-[1.7rem] w-[1.7rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
   />
   <span class="sr-only">Toggle theme</span>
  </Button>


