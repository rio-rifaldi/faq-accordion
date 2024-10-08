<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { Accordion as AccordionPrimitive } from "bits-ui";

	type $$Props = AccordionPrimitive.TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;

	let className: $$Props["class"] = undefined;
	export let level: AccordionPrimitive.HeaderProps["level"] = 3;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			"flex flex-1 text-cus_dark-purple dark:text-white font-bold items-center text-left gap-3 sm:gap-7 md:text-lg justify-between py-4 transition-all hover:underline [&[data-state=closed]>#minus-icon]:hidden [&[data-state=open]>#plus-icon]:hidden [&[data-state=open]>#minus-icon]:inline",
			className
		)}
		{...$$restProps}
		on:click
	>
		<slot />
		<svg xmlns="http://www.w3.org/2000/svg" class="fill-violet-600 dark:fill-violet-300" id="plus-icon" width="30" height="31" fill="none" viewBox="0 0 30 31"><path  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>

		<svg xmlns="http://www.w3.org/2000/svg" id="minus-icon" class="fill-violet-900 dark:fill-violet-600" width="30" height="31" fill="none" viewBox="0 0 30 31"><path  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
		
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>

