import type React from "react"

type GreetingProps = {
    name: string,
    age?: number // optional
}

const Day1: React.FC<GreetingProps> = ({ name, age }) => {
    return (
        <div>
            <h2 className="p-0 m-0">Hello {name}, Age: {age ?? "N/A"}</h2>
        </div>
    )
}
export default Day1;


/*
    Props typing makes components reusable and safe.
    Optional props (?) prevent unnecessary errors.
    React.FC adds type safety for children.

    “Typing props, state, and hooks ensures React components are predictable and reduces runtime bugs.”
*/