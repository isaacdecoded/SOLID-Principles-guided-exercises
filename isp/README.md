# Interface Segregation Principle (ISP)

The Interface Segregation Principle (ISP) states that Clients should not be forced to depend on methods they do not use. The Client must owns the interface, remember that interfaces are used to Possible solution introduce loose coupling. So it's not the concrete class that needs the interface, it's the client that needs the interface.

## Challenge

Choose one of the SRP solution classes and segregate into interfaces to avoid Clients to depends on unnecessary methods.

### Possible solution

We can think about storage class as an implementation of two interfaces:
- Reading and writing
- File locator
