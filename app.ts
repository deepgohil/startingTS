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

//////////////////type alies(custom datatypes)
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
// const age: number|string=10;

// console.log(age);


////////////////////////////interface with extends

///Note:it will merge the data members if we make two same interface ex: book with name and book with price,auther,and sellNUmber will merge
interface book{
    name:string 
}
interface book{
    price:number
    auther:number
    colour:string
}

const firstbook:book={
    name: "",
    price: 0,
    auther: 0,
    colour: ""
}
// interface Transection{
//     senderAdd: string|number;
//     recAdd: string|number;
//     amount: number;
// }

// interface Banckaccount{
// name:string;
// age:number;
// sex:string;
// transections:Transection[];
// }



// const deepGohilAccount: Banckaccount={
// name:"deep",
// age:15,
// sex:"male",
// transections:[{senderAdd:"123",recAdd:"456",amount:100},{senderAdd:"1230",recAdd:"4560",amount:150}]
// }

// interface book{
//     name:string
//     price:number
//     auther:string

// }
// interface Ebook extends book{
//     site:string
// }

// const AmazonEbook: Ebook={
//     site: "www.amazon.com",
//     name: "deep gohil",
//     price: 110,
//     auther: "deep gohil"
// }
