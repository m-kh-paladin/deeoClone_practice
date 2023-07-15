
let user = {
    color: "blue",
    family: {
        mother: "sara"
    },

};

let Deep = _.cloneDeep(user)

Deep.family.mother = "zahra"

console.log(user.family.mother); // sara
console.log(Deep.family.mother); // zahra


// -------------------------------------------------------------

// deep clone a opject with fucntion method 

let bmw_2020 = {
    bmw_i8: {
        price: 800,
        tax: 50,
        total: function () {
            return this.price + this.tax;
        }
    }
}

let bmw_2023 = _.cloneDeep(bmw_2020)
bmw_2023.bmw_i8.price = 1200;
bmw_2023.bmw_i8.tax = 70;

console.log(bmw_2020.bmw_i8.total()); // return 850
console.log(bmw_2023.bmw_i8.total()); // return 1270