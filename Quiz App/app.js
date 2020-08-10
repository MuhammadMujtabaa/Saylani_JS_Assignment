///////////////////////////////////////Quiz Questions
const QuizData = [
        {
            id:'1',
            Question: 'Fly is to Aeroplane as Sail is to _______________________________',
            option1:'Sea',
            option2:'Ocean',
            option3: 'Ship',
            option4:'Cabin',
            Answer: 'Ship',
            
        }
        ,
        {
            id:'2',
            Question: 'Which Word is Out of List ?',
            option1:'Cure',
            option2:'Examination',
            option3: 'Student',
            option4:'Failure',
            Answer: 'Cure',
        
        },
        {
            id:'3',
            Question: 'What Will Comes Next in Following Series of Number ? 10 20 30 40 50 __?__',
            option1:'60',
            option2:'65',
            option3: '70',
            option4:'55',
            Answer: '60',
            
        },
        {
            id:'4',
            Question: 'Free is to Imprison as Forgive is to _________________?',
            option1:'Accept',
            option2:'Condemn',
            option3: 'Punish',
            option4:'Accuse',
            Answer: 'Ship',
    
        },
        {
            id:'5',
            Question: 'If BOX is Coded as CDPQYZ, How would you write COAT in Code ___________________________?',
            option1:'UVDEPQBC',
            option2:'PQDEBCUV',
            option3: 'BCPQDEUV',
            option4:'DEPQBCUV',
            Answer: 'DEPQBCUV',
        
        },
        {
            id:'6',
            Question: 'What is Next Number ? 62 31 34 17 20 ___?____',
            option1:'9',
            option2:'8',
            option3: '6',
            option4:'10',
            Answer: '10',
            
        },
        {
            id:'7',
            Question: 'What Will Come Next In Following List ? 4 12 36 108 __?__',
            option1:'324',
            option2:'224',
            option3: '124',
            option4:'424',
            Answer: '324',
            
        },
        {
            id:'8',
            Question: 'What Number Comes in this Series ? 13 15 17 19 21 ___?___',
            option1:'26',
            option2:'24',
            option3: '26',
            option4:'20',
            Answer: '23',
    
        },
        {
            id:'9',
            Question: 'Essence is to Flower as ____________________ is to Oven ?',
            option1:'Steam',
            option2:'Ice',
            option3: 'Heat',
            option4:'Vapour',
            Answer: 'Heat',
        
        },
        {
            id:'10',
            Question: 'What Will Come Next in Following Series ? 20 25 23 28 26 31 29 34 __?__',
            option1:'30',
            option2:'32',
            option3: '31',
            option4:'43',
            
            Answer: '32',
            
        },
        {
            id:'11',
            Question: 'Finger is to Elbow as Toe is to ________________________?',
            option1:'Arm',
            option2:'Foot',
            option3: 'Knee',
            option4:'Ankle',
            Answer: 'Knee',
    
        },
        {
            id:'12',
            Question: 'Write Next Two Number in this Series ? 5 , 3 , 6 , 4 , 7 , 5 , 8 , 6 , __?__ , __?__',
            option1:'8 , 10',
            option2:'9 , 5',
            option3: '9 , 7',
            option4:'7 , 5',
            Answer: '9 , 7',
        
        },
        {
            id:'13',
            Question: "A is Father of B but B is not A's Son then What is Relationship Between B and A?",
            option1:'Daughter',
            option2:'Father',
            option3: 'Uncle',
            option4:'Cousin',
            Answer: 'Daughter',
            
        },
        {
            id:'14',
            Question: 'Meat is to Vegetarian as _____________________ is to Teeotaller ?',
            option1:'Fruit',
            option2:'Vegetable',
            option3: 'Liquor',
            option4:'Mutton',
            Answer: 'Liquor',
            
        },
        {
            id:'15',
            Question: 'Which One is Out of List ?',
            option1:'Cow',
            option2:'Goat',
            option3: 'Horse',
            option4:'Buffalo',
            Answer: 'Horse',
            
        },
    ];
    
    var interval ;
 ///////////////////////////////////////////making all radio button disabled after getting time off
    const diabledradiobutton = ()=>{
            var input = document.getElementsByTagName('input');
                for(var i = 0 ; i < input.length ; i++){

                if(input[i].type == 'radio'){

                    input[i].disabled = true;
                }
            }
    }
/////////////////////////////////////////////////////////extrating questions and options using map method from object and placing that into table
const App = ()=>{
   ////////////////////////////////////////////disabling start button
    document.getElementById('startquiz').disabled = true ;
    var quizQuestionsList = document.getElementById('quizQuestionsList')

    quizQuestionsList.innerHTML = QuizData.map((val)=>{
    return(`<tr >
    <td>    
    
        <ul id="optnslist" class="list-group mb-5">
            <li class="list-group-item list-group-item-action bg-dark text-white font-weight-bold">${val.id} -:~ ${val.Question}</li>
            <li class="list-group-item list-group-item-action mb-2"><input id="radio-button" type="radio" name="Question ${val.id} Optn" value="${val.option1}" /> ${val.option1}</li>
            <li class="list-group-item list-group-item-action mb-2"><input id="radio-button" type="radio" name="Question ${val.id} Optn" value="${val.option2}" /> ${val.option2}</li>
            <li class="list-group-item list-group-item-action mb-2"><input id="radio-button" type="radio" name="Question ${val.id} Optn" value="${val.option3}" /> ${val.option3}</li>
            <li class="list-group-item list-group-item-action mb-2"><input id="radio-button" type="radio" name="Question ${val.id} Optn" value="${val.option4}" /> ${val.option4}</li>
        </ul>
    </td>
</tr>` 
)
    
    
}
);

//////////////////////////////Adding button for submission of the result and view the result
    quizQuestionsList.innerHTML += `<tr >
    <td class="text-right">
        <button class="btn btn-danger " onclick="Checker()" id="submit">SUBMIT</button>
        <button class="btn btn-success " style="display:none" id="showresult" onclick="ShowResult()">VIEW RESULT</button>
    </td>
    </tr>`;
    quizQuestionsList.childNodes[1].nodeValue = " ";



    ///////////////////timer
    var mnt = 0;
    var sc = 0;
    var ms = 0;

    var mint = document.getElementById('mint');
    var seco = document.getElementById('seco'); 
    var milli = document.getElementById('milli');


interval =  setInterval(()=>{
    
},10);

    var timer = ()=>{
        ms ++;
        milli.innerHTML = ms;

    if(ms >= 100){
        sc++;
        
            seco.innerHTML =  sc  ;
        
        
        ms = 0;
        if(sc >= 60){
            mnt++ ; 
            mint.innerHTML = mnt ;
            sc = 0; 
            if(mnt >= 10){
                seco.innerHTML='00'
                milli.innerHTML='00'
                clearInterval(interval);
                Checker();
                diabledradiobutton();
               
                
                
            }
        }
    }
}

interval =  setInterval(timer,10);
}



//////////////////////////////function for checking each question and score of the right answers
    let count=0;
    //////////////////////////////////////////stoping time 
    
const Checker =()=>{
    clearInterval(interval);
    diabledradiobutton();

    ////////////////////////////////////////////condtion checking the answers
    var Question1 = document.getElementsByName('Question 1 Optn')
        Question1.forEach(radio => {
    if(radio.checked){
        //  console.log(radio.parentNode);
        if(radio.value === QuizData[0].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question2 = document.getElementsByName('Question 2 Optn')
        Question2.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[1].Answer){
            console.log('correct');
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question3 = document.getElementsByName('Question 3 Optn')
        Question3.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[2].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })


    var Question4 = document.getElementsByName('Question 4 Optn')
        Question4.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[3].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question5 = document.getElementsByName('Question 5 Optn')
        Question5.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[4].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })



    var Question6 = document.getElementsByName('Question 6 Optn')
        Question6.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[5].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question7 = document.getElementsByName('Question 7 Optn')
        Question7.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[6].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question8 = document.getElementsByName('Question 8 Optn')
        Question8.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[7].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })


    var Question9 = document.getElementsByName('Question 9 Optn')
        Question9.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[8].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question10 = document.getElementsByName('Question 10 Optn')
        Question10.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[9].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })





    var Question11 = document.getElementsByName('Question 11 Optn')
        Question11.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[10].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question12 = document.getElementsByName('Question 12 Optn')
        Question12.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[11].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question13 = document.getElementsByName('Question 13 Optn')
        Question13.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[12].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })


    var Question14 = document.getElementsByName('Question 14 Optn')
        Question14.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[13].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question15 = document.getElementsByName('Question 15 Optn')
        Question15.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[14].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })


    document.getElementById('submit').style.display = "none";
    document.getElementById('showresult').style.display = "inline-block";
    
    console.log(count);
}



///////////////////////////////////////////////function for to View the final result
const ShowResult=()=>{
    
    document.getElementById('quizQuestionsList').innerHTML= `
    <tr class="alert alert-primary">
        <td>
            <h1 class="display-2 text-center">Quiz Result</h1>
        </td>
    </tr>
    <tr >
        <td>
            <b class="mr-2">Total MCQ's :</b> 15
        </td>
    </tr>

    <tr>
        <td>
           <b class="mr-2">Correct Answer :</b> ${count}
        </td>
    </tr>
    
    <tr>
        <td>
           <b class="mr-2"> Wrong Answer :</b> ${15 - count}
        </td>
    </tr>

    <tr>
        <td>
            <b class="mr-2">Percentage :</b> ${Math.floor((count/15) * 100)} %
        </td>
    </tr>
    
    <tr>
        <td class="text-right">
            <a class="btn btn-warning" href="index.html">Start Again !</a>
        </td>
    </tr>
    `;
    

}





















/*
///////////////////////////////////////Quiz Questions
const QuizData = [
        {
            id:'1',
            Question: 'Fly is to Aeroplane as Sail is to _______________________________',
            option1:'Sea',
            option2:'Ocean',
            option3: 'Ship',
            option4:'Cabin',
            Answer: 'Ship',
            
        }
        ,
        {
            id:'2',
            Question: 'Which Word is Out of List ?',
            option1:'Cure',
            option2:'Examination',
            option3: 'Student',
            option4:'Failure',
            Answer: 'Cure',
        
        },
        {
            id:'3',
            Question: 'What Will Comes Next in Following Series of Number ? 10 20 30 40 50 __?__',
            option1:'60',
            option2:'65',
            option3: '70',
            option4:'55',
            Answer: '60',
            
        },
        {
            id:'4',
            Question: 'Free is to Imprison as Forgive is to _________________?',
            option1:'Accept',
            option2:'Condemn',
            option3: 'Punish',
            option4:'Accuse',
            Answer: 'Ship',
    
        },
        {
            id:'5',
            Question: 'If BOX is Coded as CDPQYZ, How would you write COAT in Code ___________________________?',
            option1:'UVDEPQBC',
            option2:'PQDEBCUV',
            option3: 'BCPQDEUV',
            option4:'DEPQBCUV',
            Answer: 'DEPQBCUV',
        
        },
        {
            id:'6',
            Question: 'What is Next Number ? 62 31 34 17 20 ___?____',
            option1:'9',
            option2:'8',
            option3: '6',
            option4:'10',
            Answer: '10',
            
        },
        {
            id:'7',
            Question: 'What Will Come Next In Following List ? 4 12 36 108 __?__',
            option1:'324',
            option2:'224',
            option3: '124',
            option4:'424',
            Answer: '324',
            
        },
        {
            id:'8',
            Question: 'What Number Comes in this Series ? 13 15 17 19 21 ___?___',
            option1:'26',
            option2:'24',
            option3: '26',
            option4:'20',
            Answer: '23',
    
        },
        {
            id:'9',
            Question: 'Essence is to Flower as ____________________ is to Oven ?',
            option1:'Steam',
            option2:'Ice',
            option3: 'Heat',
            option4:'Vapour',
            Answer: 'Heat',
        
        },
        {
            id:'10',
            Question: 'What Will Come Next in Following Series ? 20 25 23 28 26 31 29 34 __?__',
            option1:'30',
            option2:'33',
            option3: '31',
            option4:'43',
            option5:'32',
            Answer: '32',
            
        },
        {
            id:'11',
            Question: 'Finger is to Elbow as Toe is to ________________________?',
            option1:'Arm',
            option2:'Foot',
            option3: 'Knee',
            option4:'Ankle',
            Answer: 'Knee',
    
        },
        {
            id:'12',
            Question: 'Write Next Two Number in this Series ? 5 , 3 , 6 , 4 , 7 , 5 , 8 , 6 , __?__ , __?__',
            option1:'8 , 10',
            option2:'9 , 5',
            option3: '9 , 7',
            option4:'7 , 5',
            Answer: '9 , 7',
        
        },
        {
            id:'13',
            Question: "A is Father of B but B is not A's Son then What is Relationship Between B and A?",
            option1:'Daughter',
            option2:'Father',
            option3: 'Uncle',
            option4:'Cousin',
            Answer: 'Daughter',
            
        },
        {
            id:'14',
            Question: 'Meat is to Vegetarian as _____________________ is to Teeotaller ?',
            option1:'Fruit',
            option2:'Vegetable',
            option3: 'Liquor',
            option4:'Mutton',
            Answer: 'Liquor',
            
        },
        {
            id:'15',
            Question: 'Which One is Out of List ?',
            option1:'Cow',
            option2:'Goat',
            option3: 'Horse',
            option4:'Buffalo',
            Answer: 'Horse',
            
        },
    ];
    
    var interval ;
/////////////////////////////////////////////////////////extrating questions and options using map method from object and placing that into table
const App = ()=>{
   ////////////////////////////////////////////disabling start button
    document.getElementById('startquiz').disabled = true ;
    var quizQuestionsList = document.getElementById('quizQuestionsList')

    quizQuestionsList.innerHTML = QuizData.map((val)=>{
    return(`<tr >
    <td>    
    
        <ul id="optnslist" class="list-group mb-5">
            <li class="list-group-item list-group-item-action bg-dark text-white font-weight-bold">${val.id} -:~ ${val.Question}</li>
            <li class="list-group-item list-group-item-action mb-2"><input  type="radio"  name="Question ${val.id} Optn" value="${val.option1}" /> ${val.option1}</li>
            <li class="list-group-item list-group-item-action mb-2"><input type="radio" name="Question ${val.id} Optn" value="${val.option2}" /> ${val.option2}</li>
            <li class="list-group-item list-group-item-action mb-2"> <input type="radio" name="Question ${val.id} Optn" value="${val.option3}" /> ${val.option3}</li>
            <li class="list-group-item list-group-item-action"><input type="radio" name="Question ${val.id} Optn" value="${val.option4}" /> ${val.option4}</li>
        </ul>
    </td>
</tr>` 
)
    
    
}
);

//////////////////////////////Adding button for submission of the result and view the result
    quizQuestionsList.innerHTML += `<tr >
    <td class="text-right">
        <button class="btn btn-danger " onclick="Checker()" id="submit">SUBMIT</button>
        <button class="btn btn-success " style="display:none" id="showresult" onclick="ShowResult()">VIEW RESULT</button>
    </td>
    </tr>`;
    quizQuestionsList.childNodes[1].nodeValue = " ";



    ///////////////////timer
    var mnt = 0;
    var sc = 0;
    var ms = 0;

    var mint = document.getElementById('mint');
    var seco = document.getElementById('seco'); 
    var milli = document.getElementById('milli');


interval =  setInterval(()=>{
    
},10);

    var timer = ()=>{
        ms ++;
        milli.innerHTML = ms;

    if(ms >= 100){
        sc++;
        
            seco.innerHTML =  sc  ;
        
        
        ms = 0;
        if(sc >= 60){
            mnt++ ; 
            mint.innerHTML = mnt ;
            sc = 0; 
        }
    }
}

interval =  setInterval(timer,10);
}



//////////////////////////////function for checking each question and score of the right answers
    let count=0;
    //////////////////////////////////////////stoping time 
    
const Checker =()=>{
    clearInterval(interval);
    

    ////////////////////////////////////////////condtion checking the answers
    var Question1 = document.getElementsByName('Question 1 Optn')
        Question1.forEach(radio => {
    if(radio.checked){
        //  console.log(radio.parentNode);
        if(radio.value === QuizData[0].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question2 = document.getElementsByName('Question 2 Optn')
        Question2.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[1].Answer){
            console.log('correct');
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question3 = document.getElementsByName('Question 3 Optn')
        Question3.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[2].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })


    var Question4 = document.getElementsByName('Question 4 Optn')
        Question4.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[3].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question5 = document.getElementsByName('Question 5 Optn')
        Question5.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[4].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })



    var Question6 = document.getElementsByName('Question 6 Optn')
        Question6.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[5].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question7 = document.getElementsByName('Question 7 Optn')
        Question7.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[6].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question8 = document.getElementsByName('Question 8 Optn')
        Question8.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[7].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })


    var Question9 = document.getElementsByName('Question 9 Optn')
        Question9.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[8].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question10 = document.getElementsByName('Question 10 Optn')
        Question10.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[9].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })





    var Question11 = document.getElementsByName('Question 11 Optn')
        Question11.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[10].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question12 = document.getElementsByName('Question 12 Optn')
        Question12.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[11].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question13 = document.getElementsByName('Question 13 Optn')
        Question13.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[12].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })


    var Question14 = document.getElementsByName('Question 14 Optn')
        Question14.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[13].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })

    var Question15 = document.getElementsByName('Question 15 Optn')
        Question15.forEach(radio => {
    if(radio.checked){
        // console.log(radio.value);
        if(radio.value === QuizData[14].Answer){
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-success ");
            console.log('correct');
            count = count+1
        }
        else{
            radio.parentNode.setAttribute("class","list-group-item list-group-item-action mb-2 border border-danger ");
            console.log('Un correct');
        }
    }
    })


    document.getElementById('submit').style.display = "none";
    document.getElementById('showresult').style.display = "inline-block";
    
    console.log(count);
}



///////////////////////////////////////////////function for to View the final result
const ShowResult=()=>{
    
    document.getElementById('quizQuestionsList').innerHTML= `
    <tr>
        <td>
            Total MCQ's : 15
        </td>
    </tr>

    <tr>
        <td>
            Correct Answer : ${count}
        </td>
    </tr>
    
    <tr>
        <td>
            Wrong Answer : ${15 - count}
        </td>
    </tr>

    <tr>
        <td>
            Percentage : ${Math.floor((count/15) * 100)} %
        </td>
    </tr>
    <tr>
        <td>
            Remarks : Remarks will be added later 
        </td>
    </tr>

    `;
    

}



*/