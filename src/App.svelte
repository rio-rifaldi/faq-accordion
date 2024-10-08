<script lang="ts">
	import ToggleTheme from "$lib/ToggleTheme.svelte";
  import starIcon from "$assets/icon-star.svg"


  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import { ModeWatcher } from "mode-watcher";

</script>
<ModeWatcher />

<main class="font-workSans h-screen bg-[url(./assets/background-mobile.svg)] bg-no-repeat bg-contain md:bg-[url(./assets/background-desktop.svg)]">
  <ToggleTheme />
    <div class="bg-white dark:bg-[#191825] max-w-xl mx-4 sm:mx-auto rounded-xl p-5 px-8 mt-40 shadow-md">
        <div class=" flex gap-8 items-center">
          <img src={starIcon} alt="icon-star">
          <p class="font-bold text-cus_dark-purple dark:text-white text-3xl">FAQs</p>
        </div>

        <div class="mt-4 ">
            <Accordion.Root class="w-full ">
            <Accordion.Item value="item-1">
              <Accordion.Trigger > What is Frontend Mentor, and how will it help me?
               
              </Accordion.Trigger>
              <Accordion.Content
                >  Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. </Accordion.Content
              >
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Trigger>Is Frontend Mentor free? </Accordion.Trigger>
              <Accordion.Content>
              Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3">
              <Accordion.Trigger>Can I use Frontend Mentor projects in my portfolio? </Accordion.Trigger>
              <Accordion.Content>
                   Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-4">
              <Accordion.Trigger>How can I get help if I'm stuck on a Frontend Mentor challenge?</Accordion.Trigger>
              <Accordion.Content>
                   The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
    </div>
</main>


