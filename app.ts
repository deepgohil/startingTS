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


////////////////////////////interface
interface Transection{
    senderAdd: string|number;
    recAdd: string|number;
    amount: number;
}

interface Banckaccount{
name:string;
age:number;
sex:string;
transections:Transection[];
}



const deepGohilAccount: Banckaccount={
name:"deep",
age:15,
sex:"male",
transections:[{senderAdd:"123",recAdd:"456",amount:100},{senderAdd:"1230",recAdd:"4560",amount:150}]
}