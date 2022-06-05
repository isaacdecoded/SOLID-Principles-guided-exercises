# Liskov Substitution Principle (LSP)

The Liskov Substitution Principle can be defined as the following:

- Given any Client, it should be able to apply any implementation of an interface without changing the correctness of the system

From a high level generic explanation, the correctness of the system refers that any software system should NOT crash independently from an interface implementation the Clients uses; seen by other side if uses implementation X of an interface and the system DOES crash then you can say that you have changed the correctness of the system.

## Challenge

Choose one of the SRP solution classes and show a case when the LSP is violated.

### Possible solution

We can break this rule by implementing a in-memory database class that doesn't have a member defined by the storing base class or by giving the possibility of returning a different value than expected.