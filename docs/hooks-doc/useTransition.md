What is useTransition?
    A React hook that helps manage UI responsiveness when you trigger state updates that might be expensive (like filtering, rendering big lists, or navigation).
    It lets you mark some state updates as “non-urgent”, so React can keep the UI (like inputs, clicks) responsive while doing the heavy work in the background.

👉 Basically, it prevents UI lag during big renders.

How it Works
    const [isPending, startTransition] = useTransition();
    startTransition(() => { ... }) → Wrap slow state updates here.
    isPending → Boolean that tells you if the transition is still happening (you can show a loading spinner).