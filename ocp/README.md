# Open-closed Principle (OCP)

The Open Closed Principle (OCP) states that a class should be open for extensibility and closed for modification.

What this means is that as soon as your class is in the wild and being used by other clients then you should not change its behaviour. However, it should be possible to extend the class so that it's possible to redefine its behaviour.

## Challenge

From the SRP solution classes, extend some behavior to demostrate an OCP scenario.

### Possible solution

Using inheritance we can extend the MessageService class to use some custom monitoring service for logging.
Also, this monitoring sevice class must implement the same members for logging that MessageService expects.