import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  const displayIndex = useSignal(0)
  return (
    <div>
      
    </div>
  );
});

export const head: DocumentHead = {
  title: "Affirmations",
  meta: [
    {
      name: "description",
      content: "This is a feel good app that reminds you of all the positive things people have to say about you!",
    },
  ],
};
