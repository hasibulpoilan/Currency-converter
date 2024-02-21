                                                            /*-----DOM-----*/




// let name = console.dir(document.getElementById("name"));     //object bole name er modda rakhe korte hoya6a.   r console.dir use korte hoya6a

// let name = console.dir(document.getElementsByClassName("name"));    //html collection return kore

// let para = console.dir(document.getElementsByTagName("p"));

// best approach querySelector use kora. je kono ki6u use korte parbo

// let para = console.dir(document.querySelector("p"));  //ata korle only first p dabe

// let paras = console.dir(document.querySelectorAll("p"));  //ata korle joto same a6a p sob return korbe  //node list return kore

// let name = console.dir(document.querySelector(".name"))   //class er jonno dot dia likhbo

// let names = console.dir(document.querySelectorAll(".name"))

// let nameid = console.dir(document.querySelectorAll("#name")) ;

/*agulo holo value gulo access kora......*/




// tagName dia kmn type seta pawa jabe   eg:name.tagName,innerText,innerHtml,textContent    ai property gulo dia value get,set,change,update korte parbo
//innerText text content return kore
// let div = document.querySelector("div")
// console.dir(div);
// console  a gia div.innerText div er modda sob gulo dia dabe r div.innerHtml korle tag gulo o return korbe mane h1,p ogulo

// div.innerText="abcd"
// 'abcd'    text set korte parbo

// textContent, innerHtml er motoi hoi but hidden thakle seta k o return kore
// div.innerText="abcd" a6a atar css a gia visiblity hidden kore dile o div.textContent korle dakte pabo

// let h2 = (document.querySelector("h2"));  //access korlam h2 k
// console.dir(h2.innerText)
// innertext properties ko change korlam    h2.innerText = h2.innerText+" is the best engineer";  //ki change korlam




//attribute value ki a6a seta jante hole
//   let div = document.querySelector("div");   //div k access korlam
//   console.log(div);
//   let id = div.getAttribute("id")   //id attribute er value chai
//   console.log(id)
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// attribute ka value change korte hole
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));


// let div = document.querySelector("div")
// console.log(div)     ata kore console gia div.style korle sob style info paye jabo    atak node.style bole  eg: div.style.backgroundColor="green"
//js er modda css likh6i...ki6u change hoi likhte somoi jeta background-color ta backgroundColor  amn 

/*ato ta projonto access and changes kivabe kore seta jante parlam.....*/






//new ele. insert kivabe korbo
// 1. create korbo-->  let el = document.createElement("div")
//2. add

// let newbtn = document.createElement("button")
// console.log(newbtn)                                             //button create hoye galo
                                    // insert kore6i abar ata k display korar jonno
// let div = document.querySelector("div");
// div.append(newbtn);



//delete korar jonno
// let para = document.querySelector("p");
// para.remove();

//appendChild and removeChild    ata nije korbo

//akta tag er modda 1 er basi class use korte chaile classList use korbo   eg: para.classList.add("newClass");




                                                                   /* atai holo DOM */ 









                                                                   /*Events*/


// agulo inline event handling...nicher code gulo html a lakha hoya6a...inline karon html er vitor likh6i tai
       //    <button onclick="console.log('button was clicked');alert('hello')">Click me</button>
      //    <button ondblclick="console.log('button was clicked 2 times');alert('hello 2')">Click me 2</button>
      //    <button onmouseover="console.log('mouse hover done');alert('mouse hover done')">mouse hover</button>  
      
    //   jodi js er modda likhte chai thle----
             // Node.event=()=>{
             //     handle here
             // }
    // eg:    let btn1 = document.querySelector("#btn1");
           
    //     btn1.onclick = () =>{
    //         console.log("btn1 was clicked"); 
    //         let a = 25;
    //         a++;
    //         console.log(a);
    //     } 
    //jodi html and js 2 jaigai event likhi thle inline(html) nabe na js ta nabe....

   
    //Event object--> event er detail dai
    // eg:
    // btn1.onclick = (e) =>{
    //     console.log(e); 
    //     console.log(e.target); 
    //     console.log(e.clientX); 
    // } 

                                                /*ato projonto kivabe event handle kore seta dakhlam-->jeta 2 vabe 1.inline, 2.js er modda*/
    

// Event Listeners-->
// Node.addEventListener(event,callback)  jokhon e event occure korbe callback exicute hobe. callback akta function,handler(event ko handle karne wala kam kare ga) hoi
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// })     button was clicked2, button was clicked3 akbar click korle joto gulo i66a print korte parbo....


// for  remove EventListener korte parbo jeta -->Node.removeEventListener(event,callback)
// let btn1 = document.querySelector("#btn1");

// const handler1=()=>{
//     console.log("button was clicked")
// }
// btn1.addEventListener("click",handler1);

// btn1.removeEventListener("click",handler1);  
// remove korar jonno callback reference same hote hobe jamon handler1 nahole remove hobe na

// eg:
// let mode = "light";
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     if(mode==="light"){
//        mode="dark";
//        document.querySelector("body").style.backgroundColor="violet";
//     }else{
//         mode="light";
//         document.querySelector("body").style.backgroundColor="pink";
//     }
//     console.log(mode)
// })

               








                                                           /* <--ROCK PAPER SCISSORS--> */

                                                           /* <--JS--> */

// let userScore = 0;
// let compScore=0;

// const choices = document.querySelectorAll(".choice");  //2. choice k access kor6i
// const msg = document.querySelector("#msg");
// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");


// const genCompChoice = () =>{
//     const option = ["rock","paper","scissors"];          //onek gulo string choice a6a tar modda akta choice korbe tar jonno array use korlam
//     const randIdx = Math.floor(Math.random()*3)
//     return option[randIdx];
// }
// const drawGame = () =>{
//     console.log("drawGame");
//     msg.innerText = "Game was draw. Play again!"
//     msg.style.backgroundColor = "#081b31";
// }
// const showWiner = (userWin,userChoice,compChoice) =>{
//     if(userWin){
//         userScore++;
//         userScorePara.innerText = userScore;
//         console.log("you win");
//         msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "green";
//     }else{
//         console.log("computer win");
//         compScore++;
//         compScorePara.innerText = compScore
//         msg.innerText = `you Lose! ${compChoice} beats Your ${userChoice}`;
       
//         msg.style.backgroundColor = "red";
//     }
// }

// const playGame = (userChoice) =>{        //playGame jane user er choice ki kore6e
//     console.log(userChoice)
//     const compChoice = genCompChoice();
//     console.log(compChoice);

//     if(userChoice===compChoice){
//         // drawgame
//         drawGame();
//     }else{
//         let userWin = true;
//         // userWin++;
//         if(userChoice==="rock"){
//             //comp opt thakbe paper r scissors
//             userWin=compChoice=="paper"?false:true;
//         }else if(userChoice==="paper"){
//             userWin=compChoice==="scissors"?false:true;
//         }else{
//             userWin=compChoice==="rock"?false:true;
//         }
//         showWiner(userWin,userChoice,compChoice);   //k win seta r ki ki choice 6ilo seta o janaga6i...seta showWiner k pata6i...
//     }

// }


// //1 kau choice select korle tar id payajabo
// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
       
//         const userChoice = choice.getAttribute("id");
//         playGame(userChoice)   //play game k bol6i j user choice kora6a...play game jante parlo je user ki choice kora6a..
//     })
// })


                                                      /* CSS */

//                                                       *{
//                                                         margin: 0;
//                                                         padding: 0;
//                                                         text-align: center;
//                                                     }
//                                                     h1{
//                                                         background-color: #081b31;
//                                                        line-height: 5rem;
//                                                         height: 5rem;
//                                                         color: white;
//                                                     }
//                                                     img{
//                                                         height: 150px;
//                                                         width: 150px;
//                                                         object-fit: cover;
//                                                         border-radius: 50%;
//                                                         border: 0.5px solid black;
//                                                     }
//                                                     .choice{
//                                                         height: 165px;
//                                                         width: 165px;
//                                                         display: flex;
//                                                         justify-content: center;
//                                                         align-items: center;
//                                                         border-radius: 50%;
//                                                     }
//                                                     .choice:hover{
//                                                         cursor: pointer;
//                                                         background-color: #081b31;
//                                                     }
//                                                     .choices{
//                                                         display: flex;
//                                                         justify-content: center;
//                                                         align-items: center;
//                                                         margin-top: 5rem;
//                                                         gap: 2rem;
//                                                         /* border: 1px solid black; */
                                                        
//                                                     }
//                                                     .score-board{
//                                                         display: flex;
//                                                         align-items: center;
//                                                         justify-content: center;
//                                                         gap: 5rem;
//                                                         font-size: 2rem;
//                                                         margin-top: 4rem;
//                                                     }
//                                                     #user-score,#comp-score{
//                                                         font-size: 5rem;
//                                                     }
//                                                     #msg{
//                                                         background-color: #081b31;
//                                                         color: white;
//                                                         font-size: 2rem;
//                                                         display: inline;
//                                                         border-radius: 1rem;
//                                                         padding: 1rem;
//                                                     }
//                                                     .msg-container{
//                                                       margin-top: 2rem;
//                                                     }     
                                                    
                                                    


//                                                     /* HTML */




// <body>
// <h1>Rock Paper Scissors</h1>
// <div class="choices">
//     <div class="choice" id="rock"><img src="https://w7.pngwing.com/pngs/422/99/png-transparent-rock-paper-scissors-computer-icons-scissors-game-white-face-thumbnail.png" alt="" srcset=""></div>

//     <div class="choice" id="paper"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPYntOZRVHIB24w1rkZATXc8EsfIxTWErHAd5AqVm-UYQtxVD" alt="" srcset=""></div>

//     <div class="choice" id="scissors"><img src="https://previews.123rf.com/images/nito500/nito5001109/nito500110900094/10508893-scissors-sign-in-rock-paper-scissors-game.jpg" alt="" srcset=""></div>

// </div>

// <div class="score-board">
// <div class="score">
//     <p id="user-score">0</p>
//     <p>me</p>
// </div>
// <div class="score">
//     <p id="comp-score">0</p>
//     <p>comp</p>
// </div>
// </div>

// <div class="msg-container">
// <P id="msg">Play Your Move</P>
// </div>
    
//     <script src="script.js"></script>
// </body>





                                                            /* CLASSES AND OBJECTS */

                                                            // create an object

// const student = {
//     name: " Hasibul Pailan",        //name job agulo property, state o bola jai
//     job: "IT Engineer",
//     printJob: function () {             //function ata k method or object ka behavior bola jai
//         console.log("job=",this.job);    //this lakhar mane student k bojhano ho66a
//     }
// };

// eg:
// console a gia 

// student.name
// func o call korte pari jamon
// -->student.printJob()

//ek object k undar by default object thake called--> prototype
// js er modda array akta object hoi


// const employee = {
//     calcTax1(){
//         console.log("tax is 10%");                          //ai 2 vabei kono obj or method k define kora jai 1st one is good.
//     },
    // calcTax2 : function () {
    //     console.log("tax is 10%");

    // }
// }

// const karanArjun = {
//     salary: 50000,
// }

// // jodi karanArjun er modda employee use korte chaile thle--> karanArjun.__proto__
// karanArjun.__proto__ = employee;    //mane er modda calcTax function chole as6e.....protype akta reference hoi akta object er





// create a class

// class ToyotaCar {
//     constructor(brand){      //ata na korle o js nije nije akta constructor bania nai
//             console.log("create new object")
//             this.brand=brand;
//         }
//     start(){
//         console.log("start");
//     }
//                                                 //koma dite lagbe na
//     stop(){
//         console.log("stop");
//     }
// }

// //jodi ai class thake object create korte hole-->
// let Ferrari = new ToyotaCar("BMW");     //ata akta object hoyega6e jekhane start,stop avaliable a6a...jeta use korte parbo

//constructor akta method , new keyword constructor k khoje jodi na pai thle auto matic create kore
// r kono notun object toiri kor6i...jodi toiri time a ki6u kaj korate hole  tokon constructor use hoi
// create constructor--> 
// constructor(){
//     console.log("create new object")
// }


// or
// class ToyotaCar {
//     constructor(brand){      
//             console.log("create new object")
//             this.brand=brand;
//         }
//     start(){
//         console.log("start");
//     }
                                               
//     stop(){
//         console.log("stop");
//     }
// }

// let Ferrari = new ToyotaCar("BMW");    //amn vabe o constructor use kora jai




//inheritance-->
// passing down properties and method from parent class to child class

//create inheritance
// class Parent{

// }
// class Child extends Parent{

// }
// eg
// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent {}
// let obj = new Child();


// super keyword tokhon use korbo jokhon child class se parent class ko call karna parta hai tab or parent er constructor k call korte hoi...


// Q.
// let DATA = "secret information";
// class User {
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//      viewData(){
//         console.log("data=",DATA);
//     }
// }
// let student1 = new User("hasibul","hasibulpailan8@gmail.com");
// let student2 = new User("ranit","royranit458@gmail.com");


// class Admin extends User{
//     constructor(name,email){
//         super(name,email)
        
//     }
//     editData(){
//         DATA = "some new";
//     }
// }

// let admin1 = new Admin("vegy","gdc@bdeye.com");

// let a= 1;
// let b=2;
// console.log("a",a);
// console.log("b",b);
// console.log("b+a",a+b);
// console.log("b+a",a+b);
// console.log("b+a",a+c); //er por thake out put asa bondho hoye jabe...tai error handleing use korbo
// console.log("b+a",a+b);
// console.log("b+a",a+b);

// // try{
// // //normal code

// // }catch(arg){   //err is error object
// //   // handling error
// // }
// try{
// //normal code
// console.log("b+a",a+c);
// }catch(err){   //err is error object
//   // handling error
//   console.log(err)
// }


                                            /* this is all about class object inheritance errorhandling*/








                                
                                
                                
                                            /*callback,promises,async-await*/


// synchronus--> means jis sequence mai hum code likha hai us sequence mai code ka exicution hoga 
//asynchronus -->
// eg:
// code1
// code2
// code3
// Api(jodi api aste time lag6e thle tar porer ta exicute kore dabo...r atao parallel a cholbe)
// code4

// function hello() {
//     console.log("hello");
// }
// setTimeout(hello,2000);

// or

// setTimeout (()=>{
// console.log("hello");
// },4000)

// console.log("one");
// console.log("two");
// setTimeout (()=>{
//     console.log("hello");
// },4000)
// console.log("three");


// aisa function jo dusre function k undar argument pass hota hai-->callback
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){    //callback na likhle o cholbe
//     sumCallback(a,b);
// }
// calculator(1,2,sum);     //sum() use korle error dabe


// const hello = () => {
//     console.log("hello");     //hello pass kor6i jeta akta call back set time out callback nai
// }
// setTimeout(hello,2000);

// function getData (dataId){
//     setTimeout(()=>{

//         console.log("data",dataId);
//     },2000)
// }

// jodi chai je akta exicute howar pore r akta exicute hok thle-->call back use korbo



// function getData (dataId, getNextData){
//     setTimeout(()=>{

//         console.log("data",dataId);

//         if(getNextData){
//             getNextData();        //getData2 er modda kono getNextData bole ki6u nei tai if condition lagia6i...
//         }
        
//     },2000)
// }


//callback hell ka code
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);    //complex dakte lag6e r jodi comment add kori thle r o complex lagbe tai -->callback hell bole
//     })           //1 er por arrow function type na likhle aksathe exicute hoye jabe....1 er por jeta a6a seta call back
// });



// callback hell k solve korar jonno  promise ase-- 
// promises js k under akta object hoi

// create promises-->promises js k undar ek object hota hai...jar 3 ta stake->pending,resolve,rejected,,,api call a khub use hoi
// let promise = new Promise((resolve,reject)=>{})   //promise holo akta class , 2handlers-->resolve,reject , resolve akta function

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am the best expensive IT engineer")
//     reject("some error")
// })   

// promises uses-->
// promise.then( 

// eg
// const getPromise = () =>{
//    return new Promise ((resolve, reject)=>{
//         console.log(" i am promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fulfilled",res);
// });

// promise.catch(err)=>{
//     console.log("rejected",err)
// }

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000)
//     })
// } 
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000)
//     })
// } 


//promise chain
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     let p2 = asyncFunc2();      //aktar complete kore r akta hobe...jodi akta p1 abar pore p2 amn likhle aksathe print hoye jabe...ata callback dia o hobe but promises dia easy hobe..aktar modda r akta then chain kore likh6i..atak promise chaining bolbo
//     p2.then((res)=>{})
// })

//or last line k amn vabe o kora jai
// asyncFunc1().then((res)=>{
// asyncFunc2().then((res)=>{})      //aktar complete kore r akta hobe...jodi akta p1 abar pore p2 amn likhle aksathe print hoye jabe...ata callback dia o hobe but promises dia easy hobe
    
// })




// async-await
// Async keyword function er sathe use kori...asyn return promise...normal function ko async bana sakta hai...

// async function hello () {
//     console.log("hello")
// }

// function api(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     })
// }


//async-await
// async function getWeatherData(){                        //api k call kor6i...function j promise return kore seta k accept korar jonno then,catch,call use na kore async await use korbo
//     await api();     //just ata 2 bar likhbo 2 bar call hoyejabe
//     await api();
//     await api();
// }

//jekhane .then,.catch use hobe sekhane async-await use hobe na vice-versa


                                        /* ai gulo sob korlam kivabe akta por akta data show hobe tar jonno*/
















                                            /*<--FETCH API-->*/

// API : Application Programming Interface-->vitore ki chol6e seta janbo only final output tai janbo
// url thakle take request pathate or response nite fetch api use korbi...data pathano or use korar jonno fetch api use korbo
// fetch a promise return hoi 
//api call kore data nawa asynchronus hoi...await use korbo


// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#getFacts");

// create fetch api
// let promise = fetch(url,[options])
//jokhon fetch request pathai r kono option die na--> GET Request-->data nia asar kaj kore

// eg

// const getFacts = async()=>{
//     let response = await fetch(URL);      //response akta object
//     console.log(response)

// }

//data jai AJAX,JSON format a -->AJAX: Asynchronous js & xml, JSON is js object Notation..mane je data jabe seta js object er moto dakte lagbe
// api k jokhon e request pathabo tokhon e response asserts..r response json format a hoi--> r json thake js object a convert korte hoi
// JSON() method second promise return kore...i/p pathai json format a o/p pai js object format a ...first promise fetch return kore

// const getFacts = async()=>{
//     let response = await fetch(URL);     
//     console.log(response)
//    let data = await response.json();   //.json kor6i karon data redable korar jonno
//    console.log(data);           //ai data useable data hobe
//    factPara.innerText = data[1].text;

// }
// btn.addEventListener("click",getFacts);




//http: hyper text transfer protocol(protocol means rules)
//header in api-->additional information 