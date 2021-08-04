// let x = "10";

// console.log(x)
// console.log(x++)
// console.log(x++)
// console.log(x++)
let i = 1
let self = {
    number: i,
    firstname: "Kong",
    lastname: "Nontawat",
    age: "18",
    fullname: function() {
        return this.number + "." + this.firstname + " " + this.lastname + " " + this.age;
    }
};
console.log(self.fullname());
