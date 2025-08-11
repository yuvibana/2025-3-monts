1. What is useContext?
    useContext lets you access shared data from a Context in React without passing props manually through every level.
    It’s like a global store for your React tree (but simpler than Redux or Zustand).
    
   
2. Syntax
     const value = useContext(MyContext);
     MyContext → Created using React.createContext(defaultValue).
     value → Whatever was passed to the nearest <MyContext.Provider>.

3. Why Use It?
    Without context:
    <Parent user={user} />

    With context:
    <UserContext.Provider value={user}>
        <GreatGrandChild /> // Access user directly
    </UserContext.Provider>
