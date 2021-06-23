# 0x0C. JavaScript advanced
![js](https://miro.medium.com/max/1600/1*bxEkHw1xewxOFjmGunb-Cw.png)
- What is lexical scoping in JavaScript
Lexical scope is a convention used with many programming languages that sets the scope  of a variable so that it may only be called from within the block of code in which it is defined.

The scope of any component is determined by the location of this component within the code. And nested blocks have access to their external scopes.
```
let a = 1
let b = 2

const sum = () => {
    let a = 8
    return (a + b)
}

console.log(sum()) // 10
```

JavaScript starts with a search for 'a' inside the local scope - inside the function sum. It finds the value immediately (in this case a = 8) and goes for 'b'. It is impossible to find a value for 'b' in the local scope, so it goes to the outer area. Here it finds 'b' (whihc is 2) and a(8) + b(2) = 10, so it returns 10.

- What is closure in JavaScript



- How to use closure

Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event).

- How to chain different closures
- How to simulate private methods with Closure
- The execution stack order with JavaScript
- How to use binding
- How to use callbacks