///avoid bugs in dev
///increase dev speed
///in prod covert ts to js command:(tsc filename.ts)


// let num_: number[]=[101,123,125];

// console.log(num_);


// function add(first:number,second:number)
// {
// return first+second;
// }

// console.log(add(12,30));

//number
//string
//string[]
//number[]
//boolean

//////////////////type alies(custom types)
// type student=
// {
//      age:number;
//      sex:string;
//      location?:string;


// }
// const itStu:student={
//      age:100,
//      sex:'male',
//      location:"mumbai"
// }


// function login(stu:student):student
// {
// return stu;
// }

// const iTstu:student=
// {
//      age:10,
//      sex:"female"
// }
// console.log(login(iTstu));

// ////////union in ts
const age: number|string=10;

console.log(age);
