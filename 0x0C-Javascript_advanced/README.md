# 0x0C. JavaScript advanced
![js](https://miro.medium.com/max/1600/1*bxEkHw1xewxOFjmGunb-Cw.png)

- **What is lexical scoping in JavaScript**

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

- **What is closure in JavaScript**

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

Consider the following code example:

```
function makeFunc() {
  const text = 'I'm a Closure example';
  function displayText() {
    alert(text);
  }
  return displayText;
}

const myFunc = makeFunc();
myFunc();
```

In this case, myFunc is a reference to the instance of the function displayText that is created when makeFunc is run. The instance of displayText maintains a reference to its lexical environment, within which the variable text exists. For this reason, when myFunc is invoked, the variable text remains available for use, and *"I'm a Closure example"* is passed to alert.

- **How to use closure**

Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event).

- **How to chain different closures**

When a variable is used, the program traverses the scope chain until it finds an entry for that variable. Redeclaring a variable or passing it into a function is a way of separating it from its previous existence in the scope chain.

```
var str1 = 'hello';
//Redeclaring the variable
var str2 = str1;
str1 = 'goodbye';
//Redeclaring the variable has separated it from its original reference
console.log(str2);//hello

var str1 = 'hello';
var printVar = function(v){
	return function(){
		console.log(v);
	};
};
//Passing in variable into a function
var printHello = printVar(str1);
str1 = 'goodbye';
//Passing the variable into a function has saved it in the function's scope
printHello();//hello
```

In the Hello example, the original string was preserved because it was passed into a function and persisted in the function's scope, even though its variable outside the function was reassigned.

At the last line of the Hello Bob example, this is what the scope chain looks like when the program cursor is at the console.log statement.

- **How to simulate private methods with Closure**

JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code. They also provide a powerful way of managing your global namespace.

The following code illustrates how to use closures to define public functions that can access private functions and variables.

```
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
```

In previous examples, each closure had its own lexical environment. Here though, there is a single lexical environment that is shared by the three functions: counter.increment, counter.decrement, and counter.value.

The shared lexical environment is created in the body of an anonymous function, which is executed as soon as it has been defined (also known as an IIFE). The lexical environment contains two private items: a variable called privateCounter, and a function called changeBy. You can't access either of these private members from outside the anonymous function. Instead, you can access them using the three public functions that are returned from the anonymous wrapper.

Those three public functions are closures that share the same lexical environment. Thanks to JavaScript's lexical scoping, they each have access to the privateCounter variable and the changeBy function.

- **The execution stack order with JavaScript**

Execution stack, also known as “calling stack” in other programming languages, is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.
When the JavaScript engine first encounters your script, it creates a global execution context and pushes it to the current execution stack. Whenever the engine finds a function invocation, it creates a new execution context for that function and pushes it to the top of the stack.
The engine executes the function whose execution context is at the top of the stack. When this function completes, its execution stack is popped off from the stack, and the control reaches to the context below it in the current stack.


- **How to use binding**

In this component, the value of this is determined or set.
In the global execution context, the value of this refers to the global object. (in browsers, this refers to the Window Object).
In the function execution context, the value of this depends on how the function is called. If it is called by an object reference, then the value of this is set to that object, otherwise, the value of this is set to the global object or undefined(in strict mode).

- **How to use callbacks**

In JavaScript, a callback is a function passed into another function as an argument to be executed later.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

___
