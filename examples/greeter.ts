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
greeter(user);

