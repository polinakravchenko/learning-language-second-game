// const N = 7;
// alert("Варіант: " +  N + "\nКравченко Поліна");

var username = prompt("Уведіть ім'я користувача: ");
if (username == ''){
    username=prompt("Ви забули ввести ім'я користувача: ");
}

const easycards = [
    {src: "./img/apple.png", word: "Apple", translate: "яблуко"},
    {src: "./img/ball.png", word: "Ball", translate: "м'яч"}, 
    {src: "./img/car.png", word: "Car", translate: "машина"},
    {src: "./img/doctor.png", word: "Doctor", translate: "лікар"},
    {src: "./img/doll.png", word: "Doll", translate: "лялька"}, //5
    {src: "./img/education.png", word: "Education", translate: "освіта"}, 
    {src: "./img/family.png", word: "Family", translate: "сім'я"},
    {src: "./img/pizza.png", word: "Pizza", translate: "піца"}, 
    {src: "./img/strawberry.png", word: "Strawberry", translate: "полуниця"}, 
    {src: "./img/student.png", word: "Student", translate: "студент"} //10
]
const normalcards = [
    {src: "./img/blizzard.png", word: "Blizzard", translate: "хуртовина"},
    {src: "./img/blossom.png", word: "Blossom", translate: "цвітіння"},
    {src: "./img/climate.png", word: "Climate", translate: "клімат"},
    {src: "./img/dessert.png", word: "Dessert", translate: "десерт"},
    {src: "./img/disorganization.png", word: "Disorganization", translate: "неорганізованість"},
    {src: "./img/expectation.png", word: "Expectation", translate: "очікування"},
    {src: "./img/hairdo.png", word: "Hairdo", translate: "зачіска"},
    {src: "./img/imitator.png", word: "Imitator", translate: "імітатор"},
    {src: "./img/religion.png", word: "Religion", translate: "релігія"},
    {src: "./img/spade.png", word: "Spade", translate: "лопата"},
]
const hardcards = [
    {src: "./img/chemistry.png", word: "Chemistry", translate: "хімія"},
    {src: "./img/fortune.png", word: "Fortune", translate: "фортуна"},
    {src: "./img/generation.png", word: "Generation", translate: "покоління"},
    {src: "./img/journey.png", word: "Journey", translate: "подорож"},
    {src: "./img/nightmare.png", word: "Nightmare", translate: "кошмар"},
    {src: "./img/purchase.png", word: "Purchase", translate: "покупка"},
    {src: "./img/qualification.png", word: "Qualification", translate: "кваліфікація"},
    {src: "./img/schedule.png", word: "Schedule", translate: "графік"},
    {src: "./img/victory.png", word: "Victory", translate: "перемога"},
    {src: "./img/web-development.png", word: "Web-development", translate: "веброзробник"},
]

const easyButton = document.getElementById("easybutt");
const normalButton = document.getElementById("normalbutt");
const hardButton = document.getElementById("hardbutt");

const rightbutton = document.getElementById("right");
const leftbutton = document.getElementById("left");

$(window).on('load', function() {

    $("#correct").css("color", "rgb(15, 165, 7)");
    $("#wrong").css("color", "rgb(190, 30, 21)");

    alert("Оберіть один із запропонованих рівнів.\nПам'ятайте, користувач не може змінювати рівень \nпід час вивчення слів!");

easyButton.addEventListener('click', () => {
    
    document.getElementById("easybutt").style.visibility = "hidden";
    document.getElementById("normalbutt").style.visibility = "hidden";
    document.getElementById("hardbutt").style.visibility = "hidden";

    var length = easycards.length;
    var randomcards = Math.floor(Math.random() * length);
    var count = 1;
    var tempSrc = [10];
    var tempWord = [10]; 
    var tempTranslate = [10];
    var check = 0;

    for(let i = 0; i < length; i++)
    {
        randomcards = Math.floor(Math.random() * (length - i)) + i;
        tempSrc[i] = easycards[randomcards].src;
        tempWord[i] = easycards[randomcards].word;
        tempTranslate[i] = easycards[randomcards].translate;
        easycards[randomcards].src = easycards[i].src;
        easycards[randomcards].word = easycards[i].word;
        easycards[randomcards].translate = easycards[i].translate;
        easycards[i].src = tempSrc[i];
        easycards[i].word = tempWord[i];
        easycards[i].translate = tempTranslate[i];
    }

    $(".cards").attr("src", tempSrc[count - 1]);
    $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");

rightbutton.addEventListener('click', () => {
        if(count < 10)
        {
            count++;
            $("#count").html(count + " / 10");
            $(".cards").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
            if(check == 0)
            {
                if($("#answer").val().toLowerCase() == tempTranslate[count - 2])
                {
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else
                {
                    $("#wrong").text(Number($("#wrong").text()) + 1);
                }
            }
            else
            { 
                check--;
            }
            $("#answer").val('');
        }
        else
        {
            $("#count").html(count + " / 10");
            $(".cards").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
            if(check == 0)
            {
                if($("#answer").val().toLowerCase() == tempTranslate[count - 2])
                {
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else
                {
                    $("#wrong").text(Number($("#wrong").text()) + 1);
                }
            }
            else
            { 
                check--; 
            }
            $("#answer").val('');

            var result = Number($("#correct").text());

            if(result <= 3)
            {
                alert("Здається, ви поганого засвоїли слова легкого рівня. \nБудь-ласка, спробуйте ще!");
            }
            else
            {
                if(result <= 8)
                {
                    alert("Молодець, але можете краще! \nВаш результат: " + result);
                }
                else
                {
                    if(result <= 10)
                    {
                        alert("Вітаємо! Користувач " + username + " добре засвоїв слова! \nСпробуйте середній рівень!");
                    }
                }
            }
            window.location.href=".\\index.html";
        }
    });
leftbutton.addEventListener('click', () => {
        if (count != 1) 
        {
        count--;
        check++;
        $("#count").html(count + " / 10");
        $(".cards").attr("src", tempSrc[count - 1]);
        $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
        $("#answer").val('');
        }
        else 
        {
            alert("Поверніться до вивчення слів!")
        }
    });
}); 

normalButton.addEventListener('click', () => {

    document.getElementById("easybutt").style.visibility = "hidden";
    document.getElementById("normalbutt").style.visibility = "hidden";
    document.getElementById("hardbutt").style.visibility = "hidden";

    var length = normalcards.length;
    var randomcards = Math.floor(Math.random() * length);
    var count = 1;
    var tempSrc = [10];
    var tempWord = [10]; 
    var tempTranslate = [10];
    var check = 0;
    
    for(let i = 0; i < length; i++)
    {
        randomcards = Math.floor(Math.random() * (length - i)) + i;
        tempSrc[i] = normalcards[randomcards].src;
        tempWord[i] = normalcards[randomcards].word;
        tempTranslate[i] = normalcards[randomcards].translate;
        normalcards[randomcards].src = normalcards[i].src;
        normalcards[randomcards].word = normalcards[i].word;
        normalcards[randomcards].translate = normalcards[i].translate;
        normalcards[i].src = tempSrc[i];
        normalcards[i].word = tempWord[i];
        normalcards[i].translate = tempTranslate[i];
    }

    $(".cards").attr("src", tempSrc[count - 1]);
    $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");

rightbutton.addEventListener('click', () => {
        if(count < 10)
        {
            count++;
            $("#count").html(count + " / 10");
            $(".cards").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
            if(check == 0)
            {
                if($("#answer").val().toLowerCase() == tempTranslate[count - 2])
                {
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else
                {
                    $("#wrong").text(Number($("#wrong").text()) + 1);
                }
            }
            else
            { 
                check--;
            }
            $("#answer").val('');
        }
        else
        {
            $("#count").html(count + " / 10");
            $(".cards").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
            if(check == 0)
            {
                if($("#answer").val().toLowerCase() == tempTranslate[count - 2])
                {
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else
                {
                    $("#wrong").text(Number($("#wrong").text()) + 1);
                }
            }
            else
            { 
                check--; 
            }
            $("#answer").val('');

            var result = Number($("#correct").text());

            if(result <= 4)
            {
                alert("Спробуйте ще раз вивчити слова середнього рівня. \nВаш результат: " + result);
            }
            else
            {
                if(result <= 7)
                {
                    alert("Молодець, але можете краще! \nВаш результат: " + result);
                }
                else
                {
                    if(result <= 10)
                    {
                        alert("Відмінно! Користувач добре засвоїв слова середнього рівня! \nСпробуйте складний рівень.");
                    }
                }
            }
            window.location.href=".\\index.html";
        }
    });
leftbutton.addEventListener('click', () => {
        if (count != 1) 
        {
        count--;
        check++;
        $("#count").html(count + " / 10");
        $(".cards").attr("src", tempSrc[count - 1]);
        $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
        $("#answer").val('');
        }
        else 
        {
            alert("Поверніться до вивчення слів!")
        }
    });
}); 

hardButton.addEventListener('click', () => {

    document.getElementById("easybutt").style.visibility = "hidden";
    document.getElementById("normalbutt").style.visibility = "hidden";
    document.getElementById("hardbutt").style.visibility = "hidden";

    var length = hardcards.length;
    var randomcards = Math.floor(Math.random() * length);
    var count = 1;
    var tempSrc = [10];
    var tempWord = [10]; 
    var tempTranslate = [10];
    var check = 0;

    for(let i = 0; i < length; i++)
    {
        randomcards = Math.floor(Math.random() * (length - i)) + i;
        tempSrc[i] = hardcards[randomcards].src;
        tempWord[i] = hardcards[randomcards].word;
        tempTranslate[i] = hardcards[randomcards].translate;
        hardcards[randomcards].src = hardcards[i].src;
        hardcards[randomcards].word = hardcards[i].word;
        hardcards[randomcards].translate = hardcards[i].translate;
        hardcards[i].src = tempSrc[i];
        hardcards[i].word = tempWord[i];
        hardcards[i].translate = tempTranslate[i];
    }

    $(".cards").attr("src", tempSrc[count - 1]);
    $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");

rightbutton.addEventListener('click', () => {
        if(count < 10)
        {
            count++;
            $("#count").html(count + " / 10");
            $(".cards").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
            if(check == 0)
            {
                if($("#answer").val().toLowerCase() == tempTranslate[count - 2])
                {
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else
                {
                    $("#wrong").text(Number($("#wrong").text()) + 1);
                }
            }
            else
            { 
                check--;
            }
            $("#answer").val('');
        }
        else
        {
            $("#count").html(count + " / 10");
            $(".cards").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
            if(check == 0)
            {
                if($("#answer").val().toLowerCase() == tempTranslate[count - 2])
                {
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else
                {
                    $("#wrong").text(Number($("#wrong").text()) + 1);
                }
            }
            else
            { 
                check--; 
            }
            $("#answer").val('');

            var result = Number($("#correct").text());

            if(result <= 5)
            {
                alert("Оберіть складний рівень та спробуйте знову!");
            }
            else
            {
                if(result <= 8)
                {
                    alert("Непогано! Ваш результат: " + username);
                }
                else
                {
                    if(result <= 10)
                    {
                        alert("У " + username + " високий рівень англійської мови!");
                    }
                }
            }
            window.location.href=".\\index.html";
        }
    });
leftbutton.addEventListener('click', () => {
        if (count != 1) 
        {
        count--;
        check++;
        $("#count").html(count + " / 10");
        $(".cards").attr("src", tempSrc[count - 1]);
        $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
        $("#answer").val('');
        }
        else 
        {
            alert("Поверніться до вивчення слів!")
        }
    });
}); 
});
