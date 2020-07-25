// chapter 35-38
// Q1
function date()
{
    var today=new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days=["sun","mon","tue","wed","thu","fri","sat"];
 var date=days[today.getDay(0)]+" "+months[today.getMonth()]+" "+today.getDate()+" "+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" "+today.getTimezoneOffset();
  document.write(date);
}
date();

// Q2
function name()
{
    var first_name=prompt("Enter your first name");
    var last_name=prompt("Enter you last name");
    var full_name=first_name+" "+last_name;
    alert("Hello: "+full_name);
}
name();

// Q3
function sum(a,b)
{
    return(a+b)
}
var c=sum(3,4);
document.write("ADD:"+c)


// Q4
function cal(num1,num2,opra)
{
    if(opra=='/'&&num2==0)
    {
        document.write("IN DIVISION OPERATION DENOMINATOR CANNOT BE ZERO");
        return;
    }
    switch(opra){
        case '+':
            return(num1+num2);
            break;
        case '-':
            return(num1-num2);
            break;
        case '*':
            return(num1*num2);
            break;
        case '/':
            return(num1/num2);
            break;
    }
}
var num1=prompt("Enter number 1");
var num2=prompt("Enter Number 2");
var opra=prompt("Enter Operation");
var result=cal(num1,num2,opra);
document.write("ANSWER IS "+result);

// Q5
function square(num)
{
    return(num**2)
}
num=prompt("Enter a number to find out its square");
var result=square(num);
document.write("ANSWER IS "+result);


// Q6
function fact(num){
    var f=1;
    for(var i=num;i>0;i--)
    {
        f=f*i;
    }
    return f;
}
num=prompt("Enter a number to find out its Factorial");
var result=fact(num);
document.write("ANSWER IS "+result);

// Q7
function counting(start,end)
{
    for(var i=start;i<=end;i++)
    {
        document.write(i+" ");
    }

}
var start=prompt("Enter a Start number");
var end=prompt("Enter a End number");
counting(start,end);

// Q8
function hyp(base,perp)
{
    function square(num)
    {
        return(num**2);
    }
    base=square(base);
    perp=square(perp);
    var result=base+perp;
    document.write("Hypotnuse of Triangle is: "+result);
}
var base=prompt("Enter a base ");
var perp=prompt("Enter a perpendicular ");
hyp(base,perp);

// Q9
function area(h,w)
{
    return(h*w);

}
var h=prompt("Enter a height ");
var w=prompt("Enter a width ");
var result=area(h,w);//by variable
document.write("ANSWER IS "+result+"<br>");
var result=area(3,2);//by value
document.write("ANSWER IS "+result);


// Q10
function pailndrome(str)
{
    for(var i=0 ,j=(str.length-1);i<str.length;i++,j--)
    {
        if(str[i]==str[j])
        {
            continue;
        }
        else{
            document.write("NOt A Pailndrome");
            break;
        }
    }
    document.write("STRING IS PAILNDROME");
}
var str=prompt("Enter a String to find out it is pailndrome or not");
pailndrome(str);

// chapters38-42

// Q1
function custom_pow(num,pow)
{
    return(num**pow);
}
var num=prompt('Enter number');
var pow=prompt("Enter power to be converted");
var result=custom_pow(num,pow);
document.write("ANSWER IS "+result);

// Q2
function area(a,b,c)
{
    var s=(a+b+c)/2;
    a=s*(s-a)*(s-b)*(s-c);
    return a;
}
var a=prompt("Enter length of First side");
var b=prompt("Enter length of Second side");
var c=prompt("Enter length of Third side");
var result=area(a,b,c);
document.write("AREA IS "+result);

// Q3
function main_function(mark1,mark2,mark3)
{
    function percentage(mark1,mark2,mark3)
    {   
        var percent=((mark1+mark2+mark3)/300)*100;
        return percent;

    }
    function average(mark1,mark2,mark3)
    {
        avg=(mark1+mark2+mark3)/3;
        return avg;

    }
    var percent=percentage(mark1,mark2,mark3);
    var avg=average(mark1,mark2,mark3);
    document.write("The percentage is: "+percent+"<br>");
    document.write("The Average is: "+avg);
}
var a=prompt("Enter subject 1 marks");
var b=prompt("Enter subject 2 marks");
var c=prompt("Enter subject 3 marks");
main_function(a,b,c);a

// Q4
function index_of(str,item)
{
    for(var i=0;i<str.length;i++)
    {
        if(str[i]==item)
        {
            return i;
        }
    }
}
var str=prompt("Enter string");
var item=prompt("Enter character you want to search");
var index=index_of(str,item)
document.write("The Character "+item+" is present at index "+index);

// Q5
function vowels_Elimination(str)
{
    for(var i=0;i<str.length;i++)
    {
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
        {
            str=str.splice(i);
        }
    }
    document.write("String without vowels :"+str);
}
var str=prompt("Enter string to remove vowels");
vowels_Elimination(str);

// Q6
function meters(kilo_meter)
{
    var meter=kilo_meter*1000;
    return meter;
}
function centimeters(kilo_meter)
{
    var centimeter=kilo_meter*1000*100;
    return centimeter;
}
function feet(kilo_meter)
{
    var Feet=kilo_meter*3281;
    return Feet;
}
function inches(kilo_meter)
{
    var inch=kilo_meter*39370;
    return inch;
}
var km=parseFloat(prompt("Enter distance in kilometer"));
var meter=meters(km);
var cm=centimeters(km);
var Feet=feet(km);
var inch=inches(km);
document.write("INCHES: "+inch+" METERS: "+meter+" CENTIMETER: "+cm+" FEET: "+Feet);

// Q7
function overtime(hours)
{
   if(hours>40)
   {
       overtime1=hours-40;
       var pay=overtime1*12;
       return (pay);
   }
   else{
       print("NO ADDITIONAL HOURS");
   }
}
var hours=parseInt(prompt("Enter number of working hours"));
var pay=overtime(hours);
document.write("YOUR OVERTIME PAY IS "+pay);

// Q8
function denomination(amount)
{
    var h=Math.trunc( amount/100);
    var ht=Math.trunc(amount%100);
    var f=Math.trunc(ht/50);
    var ft=Math.trunc(ht%50);
    var t=Math.trunc(ft/10);
    document.write("You will have "+h+" hundred notes "+f+" fifty notes "+t+" ten notes");
}
var amount=prompt("Enter amount to withdraw");
denomination(amount);



// chapter 43-48
Q1
function open_link()
{
    alert("Thanks for opening this link");
}

// Q2
function mobile_purchase()
{
    alert("Thank you for Purchasing this Mobile");
}

// Q3
function del(i)
{
    document.getElementById("my_table").deleteRow(i);

}

// Q4
function change_imager()
{
    imager=document.getElementById("imager");
    imager.src="https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349"
}
function remain_imager()
{
    imager=document.getElementById("imager");
    imager.src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
}

// Q5
function counter_increase()
{
    input_screen=document.getElementById("input_screen");
    input_screen.value++;
}
function counter_decrease()
{
    input_screen=document.getElementById("input_screen");
    input_screen.value--;
}

// chapter 49-52
// Q1
function submission()
{
    email=document.getElementById("email");
    password=document.getElementById("password");
    password_confirm=document.getElementById("password_confirm");

    var mail=email.value;
    var pass=password.value;
    var repass=password_confirm.value;
    if(pass==repass)
    {
        document.write("<h1>YOUR SUBMISSION</h1>");
        document.write("<b>MAIL</b>:"+mail+"<br>");
        document.write("<b>PASSWORD</b>: "+pass);
    }
    else
    {
        document.write("<b>PASSWORD ERROR</b>")
    }
}

// Q2
function read_more()
{
    var para=document.getElementById('para');
    para.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, hic laudantium qui dolor magnam ipsum eveniet minus quis error iure nihil dolore. Rem eligendi, quos numquam incidunt consectetur repellat culpa!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque ab dolorum dignissimos amet necessitatibus ipsa ex eum odio minus rerum, nihil nobis! Quisquam illum suscipit maiores dolores. Possimus, rerum."

}

// Q3





// 58-67
// Q1
function dom1()
{
    var main_content=document.getElementById("main-content");
    console.log(main_content.childNodes);
    var render=document.getElementsByClassName("render");
    for(var i=0;i<5;i++)
    {
        console.log(render[i].innerHTML);
    }
    var first_name=document.getElementById("first-name");
    first_name.value="Huzaifa";
    console.log(first_name.value)
    var lastname=document.getElementById("last-name");
    lastname.value="Shahid";
    console.log(lastname.value)
    var email=document.getElementById("email");
    email.value="alexbank@example.com"
    console.log(email.value)
    
}
dom1()

// Q2
function dom2()
{
    var form_content=document.getElementById("form-content");
    console.log("FORM CONTENT NODE TYPE: "+form_content.nodeType);
    var lastname=document.getElementById("lastName");
    console.log("LAST NAME NODE TYPE: "+lastname.nodeType);
    var last_name_text=document.createTextNode("BANK LIMITED");
    lastname.innerHTML="Last Name: "
    lastname.appendChild(last_name_text);
    console.log(lastname.innerHTML);
    var main_content=document.getElementById("main-content");
    console.log("FIRST CHILD"+main_content.firstChild);
    console.log("LAST"+main_content.lastChild);
    console.log("NEXT SIBLING OF LASTNAME "+lastname.nextSibling);
    console.log("PREVIOUS SIBLING OF LAST NAME "+lastname.previousSibling);
    var email=document.getElementById("email");
    console.log("EMAIL PARENT NODE "+email.parentNode);
    console.log("NODE TYPE EMAIL "+email.nodeType);


}
dom2()
