// class TextArea extends Element {
//     constructor(type,text,id,attribute) {
//         super(type);
//         super(text);
//         super(id);
//         super(attribute);
//         super(createElement());
//       }

// }
// class Button extends Element {
//     constructor(attribute) {
//         this.attribute = attribute;
//       }
// }
// class Form extends Element {

// }

// class Input extends Form {
//     constructor(name,value,checked) {
//         this.name = name;
//         this.value = value;
//         this.checked = checked; 'button','Сохранить','saveButton',''
//       }

// }

var patients = [];
var id = 0;

var curentPatints = {
    id : id++,
    // name : name,
    complaints : '',
    anamezMorbi : '',
    // // briefInfo : briefInfo,
    // work : '',
    // epHistory : '',
};

let elementTextarea = {
    id : '',
    type : 'div',
    text : 'test',
    attribute : '',
    default : '',
};

let forms = ['complaints','anamezMorbi'];




var elements = [];

// var mainForm = document.createElement('div');
// mainForm.id = 'mainForm';
// document.body.prepend(mainForm);

var osmotrForm = document.createElement('div');
osmotrForm.id = 'osmotrForm';
document.body.prepend(osmotrForm);

function checkboxAcitviti(value){
    var  inputs = null;
    try {
        inputs = document.getElementById(value).children[2].getElementsByTagName('input');
    } catch {

    }
    
    if (document.getElementById(value).children[1][0].checked) {
        document.getElementById(value).children[1][1].disabled = true;

        if (inputs) {
            
            for (let el of  inputs) {
                el.disabled = true;
            }
        }

    } else {
        document.getElementById(value).children[1][1].disabled = false;
        
        if (inputs) {

            for (let el of  inputs) {
                el.disabled = false;
            }
        }

    } 

}

// var parametrsDiv = document.createElement('div');
// parametrsDiv.id = 'parametrsDiv';
// document.body.prepend(parametrsDiv);

class Element {
    
    constructor(element, type, id, text, contaner, contanerId) {
        this.element = element;
        this.id = id;
        this.type = type;
        this.text = text;
        this.hide = '';
        this.contaner = contaner;
        this.contanerId = contanerId;
        this.createDivContaner();
      }

    createElement(mainForm, childForm) {
        let a = document.createElement(this.element); 
        a.id = this.id;
        a.type = this.type;
        a.innerHTML = this.text;
        mainForm.prepend(a);

        let b = this.createDivContaner();

        if (typeof childForm !== 'undefined') {
            mainForm.prepend(childForm);
            childForm.prepend(b);
            b.prepend(a);
            
        } else {
            mainForm.prepend(b);
            b.prepend(a);
        }
          

        //dmainForm.prepend(a); // 
    }
    createDivContaner(){

        let v  = document.createElement(this.contaner);
        v.id = this.contanerId;
        return v;
    }

    delateElement() {
    }
};



class Input extends Element {
    constructor(type, id, text,  contaner, contanerId) {
        super();
        this.type = type;
        this.id = id;
        this.text = text;
        this.contaner = contaner;
        this.contanerId = contanerId;
        this.createDivContaner();
      }
};

class TextArea extends Element {
    constructor(element,  id ,contaner, contanerId) {
        super();
        this.element = element;
        this.id = id;
        this.contaner = contaner;
        this.contanerId = contanerId;
        this.createDivContaner();

      }

      createElement(mainForm) {
        let a = document.createElement(this.element); 
        a.id = this.id;
        let b = this.createDivContaner();

        mainForm.prepend(b);
        b.prepend(a);
    }
};

class Button extends Element {
    constructor(element, id, text, attribute, attributeFunc,contaner, contanerId) {
        super();
        this.element = element;
        this.id = id;
        this.text = text;
        this.attribute = attribute;
        this.attributeFunc = attributeFunc;
        this.contaner = contaner;
        this.contanerId = contanerId;
        this.createDivContaner();
      }

      createElement(mainForm) {
        let a = document.createElement(this.element); 
        a.id = this.id;
        a.innerHTML = this.text;
        a.setAttribute(this.attribute,this.attributeFunc);
        let b = this.createDivContaner();

        mainForm.prepend(b);
        b.prepend(a);
    }
};


// let textareaСomplaints = new TextArea('textarea','textareaСomplaints','div','fff');

// let anamnezMorbi = new Element('p','','anamnezMorbi','Анамнез заболевания','div','fff');
// let textareaAnamnezMorbi = new TextArea('textarea','textareaAnamnezMorbi','div','fff');


// let medicine = new Element('p','','medicine','Принимает','div','fff');
// let textareaMedicine = new TextArea('textarea','textareaMedicine','div','fff')

// let anamnezEpid = new Element('p','','anamnezEpid','Эпид. анамнез','div','fff');
// let textareaAnamnezEpid = new TextArea('textarea','textareaAnamnezEpid','div','fff');

// let anamnezWork = new Element('p','','anamnezWork','Клинико-экспертный анамнез','div','fff');
// let textareAnamnezWork = new TextArea('textarea','textareAnamnezWork','div','fff');

// let anamnezAlerg= new Element('p','','anamnezAlerg','Алергологический анамнез','div','fff');
// let textareAnamnezAlerg = new TextArea('textarea','textareAnamnezAlerg','div','fff');

// let habits= new Element('p','','habits','Хронические интоксикации','div','fff');
// let textarehabits = new TextArea('textarea','textarehabits','div','fff');

// let checkboxHabits = new Element('input','checkbox','checkboxHabits','Без изменения','div','checkbox');
// let checkboxHabitsText = new Element('p','checkbox','form','Без изменения','div','checkbox');


// let chDiseases= new Element('p','','chDiseases','Хронические заболевания','div','fff');
// let textchDiseases = new TextArea('textarea','textchDiseases','div','fff');

// let objectively= new Element('p','','objectively','Объективно','div','fff');
// let textaObjectively = new TextArea('textarea','textaObjectively','div','fff');

// let Diagnosis= new Element('p','','Diagnosis','Диагноз','div','fff');
// let textaDiagnosis = new TextArea('textarea','textaDiagnosis','div','fff');

// let concDiagnosis= new Element('p','','concDiagnosis','Соп. диагноз','div','fff');
// let textaConcDiagnosis = new TextArea('textarea','textaConcDiagnosis','div','fff');

// let rec= new Element('p','','rec','Рекомендации и назначения','div','fff');
// let textaRec = new TextArea('textarea','textaRec','div','fff');
// //

// let AdSText= new Element('p','','AdSText','АД Сис:','div','parametrs1');
// let AdS = new Element('input','','AdS','АД Сис','div','parametrs1');

// let AddText = new Element('p','','AddText','АД Дис:','div','parametrs1');
// let Add = new Element('input','','Add','АД Дис','div','parametrs1');

// let PsText= new Element('p','','PsText','Пульс:','div','parametrs1');
// let Ps = new Element('input','','Ps','Пульс','div','parametrs1');

// let SaOText = new Element('p','','SaOText','Сатурация:','div','parametrs1');
// let SaO = new Element('input','','SaO','Сатурация','div','parametrs1');

// let heightText = new Element('p','','heightText','Вес:','div','parametrs1');
// let height = new Element('input','','height','Вес','div','parametrs1');

// let weightText = new Element('p','','weightText','Рост:','div','parametrs1');
// let weight = new Element('input','','weight','Рост','div','parametrs1');

// let temptext = new Element('p','','temptext','Температура тела:','div','parametrs0');
// let temp = new Element('input','','temp','Температура тела','div','parametrs0');



// let saveButton = new Button('button','but','Сгенерировать','onclick', 'CreateOsmort()','div','fff');



// // let checkbox = new Element('input','checkbox','form','checkBox_1','div','fff','fff');
// let checkboxAnamnezAlerg = new Element('input','checkbox','checkboxAnamnezAlerg','Без изменения','div','checkbox');
// let checkboxAnamnezAlergText = new Element('p','checkbox','form','Без изменения','div','checkbox');

// let checkboxAnamnezEpid = new Element('input','checkbox','checkboxAnamnezEpid','Без изменения','div','checkbox');
// let checkboxAnamnezEpidText = new Element('p','checkbox','form','Без изменения','div','checkbox');

// let checkboxMedicine = new Element('input','checkbox','checkboxMedicine','Без изменения','div','checkbox');
// let checkboxMedicineText = new Element('p','checkbox','form','Без изменения','div','checkbox');

// let checkboxСhDiseases = new Element('input','checkbox','checkboxСhDiseases','Без изменения','div','checkbox');
// let checkboxСhDiseasesText = new Element('p','checkbox','form','Без изменения','div','checkbox');

// elementsForm = [

//     saveButton,

//     textaRec,
//     rec,
    
//     textaConcDiagnosis,
//     concDiagnosis,

//     textaDiagnosis,
//     Diagnosis,

//     SaO,
//     SaOText,
//     Ps,
//     PsText,

//     Add,
//     AddText,
//     AdS,
//     AdSText,

//     weight, // ИМТ считать
//     weightText,
//     height,
//     heightText,

//     textaObjectively,
//     objectively,

//     temp,
//     temptext,

//     checkboxHabitsText,
//     checkboxHabits,
//     textarehabits,
//     habits,


//     checkboxAnamnezAlergText,
//     checkboxAnamnezAlerg,
//     textareAnamnezAlerg,
//     anamnezAlerg,

//     textareAnamnezWork,
//     anamnezWork,

//     checkboxСhDiseasesText,
//     checkboxСhDiseases,
//     textchDiseases,
//     chDiseases,

//     checkboxAnamnezEpidText,
//     checkboxAnamnezEpid,
//     textareaAnamnezEpid,
//     anamnezEpid,

//     checkboxMedicineText,
//     checkboxMedicine,
//     textareaMedicine,
//     medicine,

//     textareaAnamnezMorbi,
//     anamnezMorbi,

//     textareaСomplaints,
//     complaints
// ];
// for (let el of elementsForm) {
//     if (el.contanerId == 'parametrs1') {
//         el.createElement(mainForm,parametrsDiv);
//     //   el.createElement(mainForm);
//     } else {
//         el.createElement(mainForm);
//     }
// }

// утсновка текущей даты и времени осмотра
// let date = document.getElementById('date'); 
// let time = document.getElementById('time');
// let dateObj = new Date();
// date.value = dateObj.toISOString().slice(0,10)
// time.value = dateObj.getHours() + ':' + dateObj.getMinutes();



var elementsGeneratedOsmotr = [];

function CreateOsmort() {
    document.getElementById('mainForm').style.display = 'none'; // Скрыть главную форму
    document.getElementById('osmotrForm').style.display = '';


    //Индекс пачка лет  sigNumb sigYears
    let sigNumb = document.getElementById('sigNumb').value;
    let sigYears = document.getElementById('sigYears').value;
    // температура тела 
    let temp = document.getElementById('tempText').value
    // рост вес ад пульс окс 
    let SaO = document.getElementById('SaOText').value;
    let Ps = document.getElementById('PsText').value;
    let Add = document.getElementById('AddText').value;
    let AdS = document.getElementById('AdSText').value;
    let weight = document.getElementById('weightText').value;
    let height = document.getElementById('heightText').value;
    let IMT = Math.floor(weight/((height*0.01)*(height*0.01)));


    let condition = document.getElementById('condition').value;
    let maind = document.getElementById('maind').value;

    let skin = document.getElementById('skin').value;
    let skinColor = document.getElementById('skinColor').value;
    let skinWet = document.getElementById('skinWet').value;
    // let turgor = document.getElementById('turgor').value;

    let sveling = document.getElementById('sveling').value;
    let svelingText = document.getElementById('svelingText').value;

    let breath = document.getElementById('breath').value;
    let romberg = document.getElementById('romberg').value;
    let finherTonose = document.getElementById('finherTonose').value;
    let skinSens = document.getElementById('skinSens').value;

    let contactPation = document.getElementById('contactPation').value;


 let defObj = ' t тела = '+ temp +' °C. Состояние '+ condition +'. Сознание '+ maind +'. \n' + 
 'Кожа и видимые слизистые '+ skin +','+ skinColor + '' + skinWet + '. ' + sveling + ' ' + svelingText + '. Носовое дыхание не затруднено.' + 
 'Слизистая оболочка зева обычной окраски. Язык влажный, чистый.' +  
 'Лимфатические узлы при пальпации не увеличены, безболезненны. Движения в суставах не ограничены.<br><br>\n' + 
 'Рост -  '+ height +' см. Вес - '+ weight + ' кг. ИМТ - '+ IMT + ' кг/м2. Пульс - ' + Ps +' уд/мин. SpO2 -' + SaO + ' %. АДД  - '+ AdS +'/'+ Add +' мм.рт.ст. \n' + 
 '<br><br>Пульс удовлетворительного наполнения, ритмичный. Тоны сердца приглушены.  Шумы не выслушиваются. ' + 
 'Границы сердца перкуторно не расширены. Акцент II тона над аортой. \n Грудная клетка правильной формы, симметричная.' + 
 'Межрёберные промежутки не расширены. ЧДД - 16 в мин. <br><br> Дыхание  ' + breath +'.' +  
 'Перкуторно: ясный легочный звук над всеми отделами легких. Хрипы не выслушиваются. \n' + 
 '<br><br>Живот правильной формы, симметричный; при пальпации мягкий, безболезненный. Перитонеальные симптомы отрицательны.' + 
 'Печень не выступает из-под реберной дуги, контур гладкий. Естественные отправления, со слов, в норме.' + 
 'Поколачивание по поясничной области безболезненно с обеих сторон. \n' +
 '<br><br>Положение языка при высовывании симметричное, девиации не выявлено, походка с открытыми глазами физиологична. ' + 
 'В позе Ромберга '+ romberg +'. Пальценосовую пробу выполняет '+finherTonose+'. Кожная и глубокая чувствительность '+skinSens+'. Менингеальные симптомы отрицательные ' + 
 '<br><br>Пациент '+contactPation+', ориентируется в пространстве и времени. Речь чёткая, связная.';

    // установка даты
    let dateObj = new Date();
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      };

    let day = dateObj.toLocaleString("ru", options) 
    let time = dateObj.getHours() + ':' + dateObj.getMinutes();
    let dateValue = day  + ' ' + time;


    // let dateValue = document.getElementById('datetext').value; // Осмотр
    let date = new Element('p','','asd',' \n Дата: ' + dateValue + '\n','div','ooo');


    let fioValue = document.getElementById('fiotext').value; // Осмотр
    let fio = new Element('p','','asd',' \n ФИО: ' + fioValue + '\n','div','ooo');


    let titleText = new Element('p','','copytext',' Осмотр амбулаторно \n','div','ooo');
    let buttomText = new Element('p','','asd',' \n Явка по состоянию \n ','div','ooo');

    let complaintsValue = document.getElementById('textareaСomplaints').value; // Осмотр
    let complaints = new Element('p','','asd',' \n Жалобы: ' + complaintsValue + '\n','div','ooo');

    let anamnezMorbiValue = document.getElementById('textareaAnamnezMorbi').value; // 
    let anamnezMorbi = new Element('p','','textareaAnamnezMorbi',' \n Анамнез заболевания: ' + anamnezMorbiValue + '\n','div','ooo');

    

    
    let anamnezWorkValue = document.getElementById('textareAnamnezWork').value; //
    let anamnezWork = new Element('p','','textareAnamnezWork',' \n Клинико-экспертный анамнез: ' + anamnezWorkValue + '\n','div','ooo');

    let objectivelyValue = document.getElementById('textaObjectively').value; // объективно
    let objectively = new Element('p','','textaObjectively',' Объективно: ' + objectivelyValue + defObj,'div','ooo');

    let habitsValue = document.getElementById('textarehabits').value; // 
    let habits = new Element('p','','textarehabits','\n' + habitsValue + '\n','div','ooo');
//textarehabits
//checkboxHabits

    if (document.getElementById('checkboxHabits').checked)
    {
        habits.text = ' \n Хронические интоксикации: Курение, употребление алкоголя, наркотиков, отрицает.\n';

    } else {
        habits.text = ' \n Хронические интоксикации: ' + habitsValue + '\n';
        if (sigNumb && sigYears) {
            habits.text = habits.text + "Индекс пачка/лет - " + sigNumb * sigYears; // Высчитывает индекс пачка/лет
            console.log(typeof(sigNumb), sigYears);
        } else {
            console.log(sigNumb, sigYears);
        }
    }


    let chDiseasesValue = document.getElementById('textchDiseases').value; // 
    let chDiseases = new Element('p','','textchDiseases','\n Хронические заболевания: ' + chDiseasesValue + '\n','div','ooo');
 
    //checkboxMedicine
    if (document.getElementById('checkboxСhDiseases').checked)
    {
        chDiseases.text = '';

    } else {
        chDiseases.text = ' \n Хронические заболевания: ' + chDiseasesValue + '\n';
    }

    let DiagnosisValue = document.getElementById('textaDiagnosis').value; // 
    let Diagnosis = new Element('p','','textaDiagnosis','\n Диагноз: ' + DiagnosisValue + '\n','div','ooo');
        
    let concDiagnosisValue = document.getElementById('textaConcDiagnosis').value; // 
    let concDiagnosis = new Element('p','','textaConcDiagnosis','\n Соп. диагноз: ' + concDiagnosisValue + '\n','div','ooo');

    let recValue = document.getElementById('textaRec').value; // 
    let rec = new Element('p','','asd',' \n Рекомендации и назначения:' + recValue + '\n','div','ooo');

    let anamnezAlergValue = document.getElementById('textareAnamnezAlerg').value; // 
    let anamnezAlerg = new Element('p','','textareAnamnezAlerg','' + anamnezAlergValue,'div','ooo');

    if (document.getElementById('checkboxAnamnezAlerg').checked)
    {
        anamnezAlerg.text = ' \n Алергологический анамнез: не отягощен.' + anamnezAlergValue + '\n';

    } else {
        anamnezAlerg.text =  anamnezAlergValue + '\n';

    }

    
    let medicineValue = document.getElementById('textareaMedicine').value; // 
    let medicine = new Element('p','','textareaMedicine','\n  Принимает: \n' + medicineValue,'div','ooo');

    if (document.getElementById('checkboxMedicine').checked)
    {
        medicine.text = '';

    } else {
        medicine.text = ' \n Принимает: ' + medicineValue + '\n';
    }



    let anamnezEpidValue = document.getElementById('textareaAnamnezEpid').value; // 
    let anamnezEpid = new Element('p','','textareaAnamnezEpid','' + anamnezEpidValue,'div','ooo');

    if (document.getElementById('checkboxAnamnezEpid').checked)
    {
        anamnezEpid.text = ' \n Эпид. анамнез: Туб, венерические заболевания, вирусные гепатиты, ВИЧ отрицает. За пределы СПб и ЛО последние 6 мес не выезжал, контакт с инф больными отрицает.';

    } else {
        anamnezEpid.text = ' \n Эпид. анамнез: ' + anamnezEpidValue + '\n';
    }

    let backButton = new Button('button','but','Назад','onclick', 'backButton()','div','ooo');
    let SaveButton = new Button('button','download','Сохранить в текст','onclick', 'saveToText()','div','ooo');

        // вставка инф по чекбоксам

    


    elementsGeneratedOsmotr = [
        SaveButton,
        backButton, 
        buttomText,
        rec,
        concDiagnosis,
        Diagnosis,
        objectively,


        anamnezWork,
        anamnezAlerg,
        anamnezEpid,
        habits,
        chDiseases,
        medicine,
        anamnezMorbi,
        complaints,

        titleText,

        fio,
        date,

     ];

    for (let el of elementsGeneratedOsmotr) {

        el.createElement(osmotrForm);
    }

}

function backButton(elementsForm){
    document.getElementById('mainForm').style.display = ''; // Показать главную форму
    document.getElementById('osmotrForm').style.display = 'none';  // Удалить сгенерированную форму осмотра

    for (let el of elementsGeneratedOsmotr) { // генерация элементов 
        document.getElementById(el.contanerId).remove();
    }

    
    
}

function saveToText(){
    saveToPC(document.body.textContent);
}

function saveToPC(str){
    let dateObj = new Date();
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      };

    let day = dateObj.toLocaleString("ru", options) 
    let time = dateObj.getHours() + '-' + dateObj.getMinutes();
    let dateValue = day  + ' ' + time;

    let fioValue = document.getElementById('fiotext').value; // Осмотр

    let blob = new Blob([str], {type: "text/plain"});
    let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", dateValue + ' ' + fioValue + '.txt');
    link.click();
 }


// let name = document.getElementById('NAME');
// name.value = 'КОВАЛЬЧУК';

// let pass = document.getElementById('password');
// pass.value = 'П99ГКТЖКУФ';


// document.getElementsByClassName('buttonnormal')[0].click();