/*global document, window, clicking, delet,*/
/* jslint plusplus: true, evil:true*/
var navbar = document.querySelector(".nav"),
    head  = document.querySelector(".nav h3"),
    ulelement =  Array.from(document.querySelectorAll(".nav li"));
// كان لازم اعمل كويريى سيلكوتور اولل بعدين اعمل لوب على عناصر اللى 
var  a = document.createElement("a"),
    text = document.createTextNode("click"),
    list = document.createElement("li"),
    myNew = document.querySelector(".fotter");
list.appendChild(text);
a.classList.add("not");
a.appendChild(list);
myNew.appendChild(a);
a.onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 100;
};
// makeing click button so if the scrollTop is ended bring the scrollTop to the bigining
window.onscroll = function scroll() {
    'use strict';
    if (document.documentElement.scrollTop >= 200) {
        navbar.classList.add('active');
        head.style.color = '#0078ff';
        var i;
        for (i = 0; i < ulelement.length; i = i + 1) {
            ulelement[i].classList.add('colp');
        }
    }
    if (document.documentElement.scrollTop <= 200) {
        navbar.classList.remove('active');
        head.style.color = '#fff';
        for (i = 0; i < ulelement.length; i = i + 1) {
            ulelement[i].classList.remove('colp');
            a.classList.add("not");
        }
    }
    if (document.documentElement.scrollTop <= 100) {
        remove();
        ulelement[0].classList.add("activ");
        
    }
    if (document.documentElement.scrollTop >= 800) {
        remove();
        ulelement[1].classList.add("activ");
        a.classList.remove("not");
    }
    if (document.documentElement.scrollTop >= 1300) {
        remove();
        ulelement[2].classList.add("activ");
    }
    if (document.documentElement.scrollTop >= 2300) {
        remove();
        ulelement[3].classList.add("activ");

    }
    if (document.documentElement.scrollTop >= 2900) {
        remove();
        ulelement[4].classList.add("activ");
    }
    if (document.documentElement.scrollTop >= 4000) {
        remove();
        ulelement[5].classList.add("activ");
    }
    if (document.documentElement.scrollTop >= 4500) {
        remove();
        ulelement[6].classList.add("activ");
    }
    if (document.documentElement.scrollTop >= 5300) {
        remove();
        ulelement[7].classList.add("activ");
        
    }
   
};
//window .onscroll about the navbar backgroundcolor and the buttons class activ

window.onload = function () {
    'use strict';
    ulelement[0].classList.add("activ");
};//put activ on the first li

function remove() {
    'use strict';
    ulelement.forEach(function (ulelement) {
        ulelement.classList.remove('activ');
    });
}//function to remove the the classa activ form the all li

// makeing loop on the function and and  and any one i click on it make it has color
/*var u;
for (u = 0; u < ulelement.length; u++) {
    ulelement[u].onclick = function () {
        'use strict';
         remove();
        this.classList.add("activ");
       
    };
}
*/

//buttons to scrollTop 
ulelement[0].onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 100;

};
ulelement[1].onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 800;

    
};
ulelement[2].onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 1300;

   
};
ulelement[3].onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 2300;

   
};
ulelement[4].onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 2900;

   
};
ulelement[5].onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 4000;

    
};
ulelement[6].onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 4500;

};
ulelement[7].onclick = function () {
    'use strict';
    document.documentElement.scrollTop = 5300;

};


//makeing the control ul in the testmonials
var myOlmaz = Array.from(document.querySelectorAll(".test .inside1")),
    length = myOlmaz.length,
    current = 1,
    myUlulul = document.createElement("ul");
myUlulul.setAttribute('id', 'ulululul');
var h;
for (h = 1; h <= length; h = h + 1) {
    var lilili = document.createElement("li");
    lilili.setAttribute('data-index', h);
    lilili.appendChild(document.createTextNode(h));
    myUlulul.appendChild(lilili);
}
var myRefear = document.querySelector('.controle').appendChild(myUlulul);
var noTime = Array.from(document.querySelectorAll("#ulululul li"));
var y;
for (y = 0; y < noTime.length; y = y + 1) {
    noTime[y].onclick = function () {
        'use strict';
        current = parseInt(this.getAttribute("data-index"));
        clicking();
    };
}
clicking();
function clicking() {
    'use strict';
    delet();
    myOlmaz[current - 1].classList.add("display");
    myUlulul.children[current - 1].classList.add("display");
}
function delet() {
    'use strict';
    myOlmaz.forEach(function (newel) {
        newel.classList.remove("display");
    });
    noTime.forEach(function (oncolk) {
        oncolk.classList.remove("display");
    });
}
//makeing the control ul in the testmonials
//belo is so important
//belo is so important

/*Get the first element in the document with class="example":
document.querySelector(".example");

Get the first <p> element in the document:
document.querySelector("p");

Get the first <p> element in the document with class="example":
document.querySelector("p.example");

Change the text of an element with id="demo":
document.querySelector("#demo").innerHTML = "Hello World!";


HTML DOM querySelectorAll() Method
HTML DOM querySelectorAll() Method
\HTML DOM querySelectorAll() Method\HTML DOM querySelectorAll() Method
HTML DOM querySelectorAll() MethodHTML DOM querySelectorAll() Method
Get all elements in the document with class="example":
var x = document.querySelectorAll(".example");
// Get all <p> elements in the document
var x = document.querySelectorAll("p");

// Set the background color of the first <p> element
x[0].style.backgroundColor = "red"; 
// Get all <p> elements in the document with class="example"
var x = document.querySelectorAll("p.example");

// Set the background color of the first <p> element with class="example" (index 0)
x[0].style.backgroundColor = "red"; */
var ontodo = document.querySelector(".ontodo");
ontodo.onclick = function () {
    'use strict';
    var iddd = setInterval(myCounter, 50),
    currnet = 0,
    counting = document.querySelectorAll(".count h4");
function myCounter() {
    'use strict';
    counting[0].innerHTML = currnet++;
    counting[1].innerHTML = 5;
    counting[2].innerHTML = 15;
    counting[3].innerHTML = 10;
}
myCounter();
function stoping() {
            'use strict';
    setTimeout(function () {
        clearInterval(iddd);
    }, 4000);
}
stoping();
/* كل الى عملته انى قولتله ان هاجيب اول واحدة من الاتش فور وهازودها بالسيتانتريفل كل ثانية مثلا وبعدين لما يعدى اربع ثوانى هاتعمل دالة تخلى السيت انتيرفل تبقى كلير انتيرفل
*/
}


