What it does
    useMemo is used to memoize (cache) the result of a computation so it doesn’t have to be recalculated on every render.
    It only recalculates when its dependencies change.

When to use
    Expensive calculations (loops, data processing, filtering) that should not re-run unnecessarily.
    To prevent recalculations when props/state unrelated to the calculation change.
    When passing computed values to child components that depend on stable references.

    First argument: A function returning the computed value.
    Second argument: Dependency array — recomputes only if these values change.

