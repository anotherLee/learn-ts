var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello " + person.firstName + person.lastName;
}
var user = {
    firstName: "Lee",
    lastName: "A"
};
var user1 = new User("张", "三");
greeter(user);
greeter(user1);
