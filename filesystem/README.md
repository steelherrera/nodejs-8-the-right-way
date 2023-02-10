## 📘 Tips from this chapter

- **Stream** and **ChildProcess** classes inherit from the **EventEmitter** class, that's the reason we can add **eventListeners** to these objects.
- Variable hoisting: Var uses function or module scope while let and const are blocked scoped, this means they can't be used outside of the declared block scope.

## 🚧 Reminders
> - Any time you add a **non-string** to a string in JavaScript, the **runtime will implicitly call the object's toString() method**. For a Buffer, this means copying the content into Node.js's heap using the default encoding (UTF-8). Shuttling data in this way can be a slow operation,  it's often **better to work with Buffers directly**.