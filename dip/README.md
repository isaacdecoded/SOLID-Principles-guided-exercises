# Dependency Inversion Principle (DIP)

Dependency Inversion Principle (DIP) states that high level modules should not depend on low level modules. Both should depend on abstractions. Moreover, abstractions should not depend on details. The details should depend on abstractions.

So a client can talk to an abstraction because it owns the interface and whatever is on the other side of that abstraction is an implementation detail.


## Challenge

define a class that implements the previous segregated interfaces and use it to demostrate the utility of DIP.

### Possible solution

Let's refactor MessageManager constructor to receive StoreReader and StoreWriter as params. StoreReader and StoreWriter are interfaces that can be implemented by a logger class in order to invert the dependency for logging behaviors from MessageManager class.
