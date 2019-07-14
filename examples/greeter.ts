class User{
    firstName: string;
    lastName: string;
    fullName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.lastName;
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return "Hello " + person.firstName + person.lastName;
}

let user: Person = {
    firstName: "Lee",
    lastName: "A"
};
let user1: User = new User("张", "三");
greeter(user);
greeter(user1);


