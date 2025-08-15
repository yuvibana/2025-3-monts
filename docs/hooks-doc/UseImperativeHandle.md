What it does
    It gives the refrence of child component to the parent component
    The main use case is to provide a controlled interface for the parent to interact with the child component. Instead of exposing the entire child component instance (which could be unsafe or unnecessary), useImperativeHandle allows you to expose only specific methods or properties to the parent.

