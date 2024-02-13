// Variables
let userName = "James";
userName = 'Reid';
let age = 34;
let isTrue = true;

// String, number, boolean

// Union types
// type stringInput = string;
type nameAgeInput = string | number;

// let studentName: stringInput;
let studentName: nameAgeInput;

studentName = "Mark Anthony";
studentName = 711;

// Object types with alias
type User = {
    name: string,
    age: number,
    isAdmin: boolean,
    id: string | number
}

// Declare variable with object type
let user: User; // User as alias

user = {
    name: "James",
    age: 34,
    isAdmin: true,
    id: "abc" // 123
}

user = {
    name: "James",
    age: 34,
    isAdmin: true,
    id: 123
}

// Arrays type
// let hobbies: Array<string>;
let hobbies: (string | number)[]; //boolean[]

hobbies = ["Sports", "Cooking", "Reading", 123];

// Key value pair or array of objects
let info: {
    name: string,
    age: number
}[];

info = [
    {
        name: "James",
        age: 32
    },
    {
        name: "John",
        age: 40
    }
];

// Function type
const add = (
    a: number,
    b: number
) => {
    const result = a + b;
    return result;
};

console.log(add(1, 2));

type AddFn = (
    a: number,
    b: number
) => number;

const calculate = (
    a: number,
    b: number,
    calcFn: AddFn
) => {
    calcFn(a, b);
};

// Invoke calculate
calculate(2, 5, add);

// Interface
interface Credentials{
    password: string;
    email: string;
}

let creds: Credentials;

creds = {
    password: "abc123",
    email: "test@example.com"
};

// class AuthCredentials implements Credentials{
//     email: string;
//     password: string;
//     userName: string;
// }

// const login = (credentials: Credentials) => {

// }

// login(new AuthCredentials);

// Merging types
type Admin = {
    permissions: string[];
};

type AppUser = {
    userName: string;
};

// Merged type
type AppAdmin = Admin | AppUser; // or & means required

// Interface
interface AppAdmins extends Partial<Admin>, Partial<AppUser>{}

let admin: AppAdmin;

admin = {
    permissions: ["view", "edit"],
    userName: "Jojo",
};

// Specific with literal types
type Role = "admin" | "user" | "editor" | "guest"

let role: Role;
role = "admin";
role = "editor";
role = "guest";

const performAction = (action: string | number, role: Role)=> {
    if(role === 'admin' && action === 'number'){
        // ... do the tasks
    }
};

// Array of rules
let roles: Array<Role>;
roles = ['admin', 'editor'];

// Generic types
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
};

// Generic users
const userStorage: DataStorage<User> = {
    storage: [],
    add(user){}
}

// Generic text storage
const textStorage: DataStorage<string> = {
    storage: [],
    add(data){
        this.storage.push(data);
    }
}

// Generic merge function
const merge = () => {

};

// const newUser = merge({name: "james"}, {age: 23});