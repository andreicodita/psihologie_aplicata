var numericalValues = new Array();
numericalValues["ffals"]= 1;
numericalValues["fals"]= 2;
numericalValues["nfna"]= 3;
numericalValues["adevarat"]= 4;
numericalValues["fadevarat"]= 5;

function getScoreAnxietate()
{
var scoreAnxietate = 0;
var form = document.forms["form"];
var anxietate = form.elements["anxietate"];
var anxietate1 = form.elements["anxietate1"];
var anxietate2 = form.elements["anxietate2"];
var anxietate3 = form.elements["anxietate3"];
var anxietate4 = form.elements["anxietate4"];
for(var i=0; i<anxietate.length; i++)
{
    if(anxietate[i].checked)
    {
    scoreAnxietate = scoreAnxietate + numericalValues[anxietate[i].value];
    }
    if(anxietate1[i].checked)
    {
    scoreAnxietate = scoreAnxietate + numericalValues[anxietate1[i].value];
    }
    if(anxietate2[i].checked)
    {
    scoreAnxietate = scoreAnxietate + numericalValues[anxietate2[i].value];
    }
    if(anxietate3[i].checked)
    {
    scoreAnxietate = scoreAnxietate + numericalValues[anxietate3[i].value];
    }
    if(anxietate4[i].checked)
    {
    scoreAnxietate = scoreAnxietate + numericalValues[anxietate4[i].value];
    }
}
    return scoreAnxietate;
};

function getScoreManie()
{
var scoreManie = 0;
var form = document.forms["form"];
var manie = form.elements["manie"];
var manie1 = form.elements["manie1"];
var manie2 = form.elements["manie2"];
var manie3 = form.elements["manie3"];
var manie4 = form.elements["manie4"];
for(var i=0; i<manie.length; i++)
{
    if(manie[i].checked)
    {
    scoreManie = scoreManie + numericalValues[manie[i].value];
    }
    if(manie1[i].checked)
    {
    scoreManie = scoreManie + numericalValues[manie1[i].value];
    }
    if(manie2[i].checked)
    {
    scoreManie = scoreManie + numericalValues[manie2[i].value];
    }
    if(manie3[i].checked)
    {
    scoreManie = scoreManie + numericalValues[manie3[i].value];
    }
    if(manie4[i].checked)
    {
    scoreManie = scoreManie + numericalValues[manie4[i].value];
    }
}
    return scoreManie;
};

function getScoreDeprimare()
{
var scoreDeprimare = 0;
var form = document.forms["form"];
var deprimare = form.elements["deprimare"];
var deprimare1 = form.elements["deprimare1"];
var deprimare2 = form.elements["deprimare2"];
var deprimare3 = form.elements["deprimare3"];
var deprimare4 = form.elements["deprimare4"];
for(var i=0; i<deprimare.length; i++)
{
    if(deprimare[i].checked)
    {
    scoreDeprimare = scoreDeprimare + numericalValues[deprimare[i].value];
    }
    if(deprimare1[i].checked)
    {
    scoreDeprimare = scoreDeprimare + numericalValues[deprimare1[i].value];
    }
    if(deprimare2[i].checked)
    {
    scoreDeprimare = scoreDeprimare + numericalValues[deprimare2[i].value];
    }
    if(deprimare3[i].checked)
    {
    scoreDeprimare = scoreDeprimare + numericalValues[deprimare3[i].value];
    }
    if(deprimare4[i].checked)
    {
    scoreDeprimare = scoreDeprimare + numericalValues[deprimare4[i].value];
    }
}
    return scoreDeprimare;
};

function getScoreCds()
{
var scoreCds = 0;
var form = document.forms["form"];
var cds = form.elements["cds"];
var cds1 = form.elements["cds1"];
var cds2 = form.elements["cds2"];
var cds3 = form.elements["cds3"];
var cds4 = form.elements["cds4"];
for(var i=0; i<cds.length; i++)
{
    if(cds[i].checked)
    {
    scoreCds = scoreCds + numericalValues[cds[i].value];
    }
    if(cds1[i].checked)
    {
    scoreCds = scoreCds + numericalValues[cds1[i].value];
    }
    if(cds2[i].checked)
    {
    scoreCds = scoreCds + numericalValues[cds2[i].value];
    }
    if(cds3[i].checked)
    {
    scoreCds = scoreCds + numericalValues[cds3[i].value];
    }
    if(cds4[i].checked)
    {
    scoreCds = scoreCds + numericalValues[cds4[i].value];
    }
}
    return scoreCds;
};

function getScoreImpulsivitate()
{
var scoreImpulsivitate = 0;
var form = document.forms["form"];
var impulsivitate = form.elements["impulsivitate"];
var impulsivitate1 = form.elements["impulsivitate1"];
var impulsivitate2 = form.elements["impulsivitate2"];
var impulsivitate3 = form.elements["impulsivitate3"];
var impulsivitate4 = form.elements["impulsivitate4"];
for(var i=0; i<impulsivitate.length; i++)
{
    if(impulsivitate[i].checked)
    {
    scoreImpulsivitate = scoreImpulsivitate + numericalValues[impulsivitate[i].value];
    }
    if(impulsivitate1[i].checked)
    {
    scoreImpulsivitate = scoreImpulsivitate + numericalValues[impulsivitate1[i].value];
    }
    if(impulsivitate2[i].checked)
    {
    scoreImpulsivitate = scoreImpulsivitate + numericalValues[impulsivitate2[i].value];
    }
    if(impulsivitate3[i].checked)
    {
    scoreImpulsivitate = scoreImpulsivitate + numericalValues[impulsivitate3[i].value];
    }
    if(impulsivitate4[i].checked)
    {
    scoreImpulsivitate = scoreImpulsivitate + numericalValues[impulsivitate4[i].value];
    }
}
    return scoreImpulsivitate;
};

function getScoreVulnerabilitate()
{
var scoreVulnerabilitate = 0;
var form = document.forms["form"];
var vulnerabilitate = form.elements["vulnerabilitate"];
var vulnerabilitate1 = form.elements["vulnerabilitate1"];
var vulnerabilitate2 = form.elements["vulnerabilitate2"];
var vulnerabilitate3 = form.elements["vulnerabilitate3"];
var vulnerabilitate4 = form.elements["vulnerabilitate4"];
for(var i=0; i<vulnerabilitate.length; i++)
{
    if(vulnerabilitate[i].checked)
    {
    scoreVulnerabilitate = scoreVulnerabilitate + numericalValues[vulnerabilitate[i].value];
    }
    if(vulnerabilitate1[i].checked)
    {
    scoreVulnerabilitate = scoreVulnerabilitate + numericalValues[vulnerabilitate1[i].value];
    }
    if(vulnerabilitate2[i].checked)
    {
    scoreVulnerabilitate = scoreVulnerabilitate + numericalValues[vulnerabilitate2[i].value];
    }
    if(vulnerabilitate3[i].checked)
    {
    scoreVulnerabilitate = scoreVulnerabilitate + numericalValues[vulnerabilitate3[i].value];
    }
    if(vulnerabilitate4[i].checked)
    {
    scoreVulnerabilitate = scoreVulnerabilitate + numericalValues[vulnerabilitate4[i].value];
    }
}
    return scoreVulnerabilitate;
};
 
function getTotal()
{
    var a = getScoreAnxietate();
    var b = getScoreManie();
    var c = getScoreDeprimare();
    var d = getScoreCds();
    var e = getScoreImpulsivitate();
    var f = getScoreVulnerabilitate();
    var array = [{key: 'anxietate', value: a}, {key: 'manie', value: b}, {key: 'deprimare', value: c}, {key: 'cds', value: d}, {key: 'impulsivitate', value: e}, {key: 'vulnerabilitate', value: f}];
    array.sort(function(obj1, obj2) {
        return obj1.value - obj2.value;
     });

    if(array[5].value == a)
        {
        document.getElementById('result').innerHTML = "Anxietate - " + array[5].value/25 * 100 + "%";
        a = 0;
        }
    else if(array[5].value == b)
        {
        document.getElementById('result').innerHTML = "Mânie - " + array[5].value/25 * 100 + "%";
        b = 0;}
    
    else if(array[5].value == c)
        {
        document.getElementById('result').innerHTML = "Deprimare - " + array[5].value/25 * 100 + "%";
        c = 0}

    else if(array[5].value == d)
        {
        document.getElementById('result').innerHTML = "Conștiința de sine - " + array[5].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să fie mai retrași în societate, în special în compania unor oameni "
        +"pe care nu-i cunosc bine și este probabil că sunt ușor de intimidat.";
        d = 0;}

    else if(array[5].value == e)
        {
        document.getElementById('result').innerHTML = "Vulnerabilitate - " + array[5].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent ridicat vor manifesta o nervozitate mai mare și vor găsi că este dificil să își realizeze "
        +"sarcinile în condiții de stres. Cu alte cuvinte, aceștia par să fie deosebit de vulnerabili în circumstanțe dificile. ";
        e = 0;}

    else if(array[5].value == f)
        {
        document.getElementById('result').innerHTML = "Impulsivitate - " + array[5].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare au tendința să aibă un slab control asupra impulsurilor lor. "
        +"De asemenea, ele sunt predispuse să aibă mai multe probleme când vine vorba de abuzurile de alcool, nicotina, etc, comparativ cu restul lumii.";
        f = 0;}

    if(array[4].value == a)
        {
        document.getElementById('result1').innerHTML = "Anxietate - " + array[4].value/25 * 100 + "%";
        a = 0;
        }
    else if(array[4].value == b)
        {
        document.getElementById('result1').innerHTML = "Mânie - " + array[4].value/25 * 100 + "%";
        b = 0;}
    
    else if(array[4].value == c)
        {
        document.getElementById('result1').innerHTML = "Deprimare - " + array[4].value/25 * 100 + "%";
        c = 0}

    else if(array[4].value == d)
        {
        document.getElementById('result1').innerHTML = "Conștiința de sine - " + array[4].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să fie mai retrași în societate, în special în compania unor oameni "
        +"pe care nu-i cunosc bine și este probabil că sunt ușor de intimidat.";
        d = 0;}

    else if(array[4].value == e)
        {
            "<br>Persoanele care obțin un procent ridicat vor manifesta o nervozitate mai mare și vor găsi că este dificil să își realizeze "
            +"sarcinile în condiții de stres. Cu alte cuvinte, aceștia par să fie deosebit de vulnerabili în circumstanțe dificile. ";
        e = 0;}

    else if(array[4].value == f)
    {
    document.getElementById('result1').innerHTML = "Impulsivitate - " + array[4].value/25 * 100 + "%" +  
    "<br>Persoanele care obțin un procent mai mare au tendința să aibă un slab control asupra impulsurilor lor. "
        +"De asemenea, ele sunt predispuse să aibă mai multe probleme când vine vorba de abuzurile de alcool, nicotina, etc, comparativ cu restul lumii.";
    f = 0;}

    if(array[3].value == a)
        {
        document.getElementById('result2').innerHTML = "Anxietate - " + array[3].value/25 * 100 + "%";
        a = 0;
        }
    else if(array[3].value == b)
        {
        document.getElementById('result2').innerHTML = "Mânie - " + array[3].value/25 * 100 + "%";
        b = 0;}
    
    else if(array[3].value == c)
        {
        document.getElementById('result2').innerHTML = "Deprimare - " + array[3].value/25 * 100 + "%";
        c = 0}

    else if(array[3].value == d)
        {
        document.getElementById('result2').innerHTML = "Conștiința de sine - " + array[3].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să fie mai retrași în societate, în special în compania unor oameni "
        +"pe care nu-i cunosc bine și este probabil că sunt ușor de intimidat.";
        d = 0;}

    else if(array[3].value == e)
        {
        document.getElementById('result2').innerHTML = "Vulnerabilitate - " + array[3].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent ridicat vor manifesta o nervozitate mai mare și vor găsi că este dificil să își realizeze "
        +"sarcinile în condiții de stres. Cu alte cuvinte, aceștia par să fie deosebit de vulnerabili în circumstanțe dificile. ";
        e = 0;}

    else if(array[3].value == f)
        {
        document.getElementById('result2').innerHTML = "Impulsivitate - " + array[3].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare au tendința să aibă un slab control asupra impulsurilor lor. "
        +"De asemenea, ele sunt predispuse să aibă mai multe probleme când vine vorba de abuzurile de alcool, nicotina, etc, comparativ cu restul lumii.";
        f = 0;}

    if(array[2].value == a)
        {
        document.getElementById('result3').innerHTML = "Anxietate - " + array[2].value/25 * 100 + "%";
        a = 0;
        }
    else if(array[2].value == b)
        {
        document.getElementById('result3').innerHTML = "Mânie - " + array[2].value/25 * 100 + "%";
        b = 0;}
    
    else if(array[2].value == c)
        {
        document.getElementById('result3').innerHTML = "Deprimare - " + array[2].value/25 * 100 + "%";
        c = 0}

    else if(array[2].value == d)
        {
        document.getElementById('result3').innerHTML = "Conștiința de sine - " + array[2].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să fie mai retrași în societate, în special în compania unor oameni "
        +"pe care nu-i cunosc bine și este probabil că sunt ușor de intimidat.";
        d = 0;}

    else if(array[2].value == e)
        {
        document.getElementById('result3').innerHTML = "Vulnerabilitate - " + array[2].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent ridicat vor manifesta o nervozitate mai mare și vor găsi că este dificil să își realizeze "
        +"sarcinile în condiții de stres. Cu alte cuvinte, aceștia par să fie deosebit de vulnerabili în circumstanțe dificile. ";
        e = 0;}

    else if(array[2].value == f)
        {
        document.getElementById('result3').innerHTML = "Impulsivitate - " + array[2].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare au tendința să aibă un slab control asupra impulsurilor lor. "
        +"De asemenea, ele sunt predispuse să aibă mai multe probleme când vine vorba de abuzurile de alcool, nicotina, etc, comparativ cu restul lumii.";
        f = 0;}

    if(array[1].value == a)
        {
        document.getElementById('result4').innerHTML = "Anxietate - " + array[1].value/25 * 100 + "%";
        a = 0;
        }
    else if(array[1].value == b)
        {
        document.getElementById('result4').innerHTML = "Mânie - " + array[1].value/25 * 100 + "%";
        b = 0;}
    
    else if(array[1].value == c)
        {
        document.getElementById('result4').innerHTML = "Deprimare - " + array[1].value/25 * 100 + "%";
        c = 0}

    else if(array[1].value == d)
        {
        document.getElementById('result4').innerHTML = "Conștiința de sine - " + array[1].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să fie mai retrași în societate, în special în compania unor oameni "
        +"pe care nu-i cunosc bine și este probabil că sunt ușor de intimidat.";
        d = 0;}

        else if(array[1].value == e)
        {
        document.getElementById('result4').innerHTML = "Vulnerabilitate - " + array[1].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent ridicat vor manifesta o nervozitate mai mare și vor găsi că este dificil să își realizeze "
        +"sarcinile în condiții de stres. Cu alte cuvinte, aceștia par să fie deosebit de vulnerabili în circumstanțe dificile. ";
        e = 0;}

    else if(array[1].value == f)
        {
        document.getElementById('result4').innerHTML = "Impulsivitate - " + array[1].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare au tendința să aibă un slab control asupra impulsurilor lor. "
        +"De asemenea, ele sunt predispuse să aibă mai multe probleme când vine vorba de abuzurile de alcool, nicotina, etc, comparativ cu restul lumii.";
        f = 0;}

    if(array[0].value == a)
        {
        document.getElementById('result5').innerHTML = "Anxietate - " + array[0].value/25 * 100 + "%";
        a = 0;
        }
    else if(array[0].value == b)
        {
        document.getElementById('result5').innerHTML = "Mânie - " + array[0].value/25 * 100 + "%";
        b = 0;}
    
    else if(array[0].value == c)
        {
        document.getElementById('result5').innerHTML = "Deprimare - " + array[0].value/25 * 100 + "%";
        c = 0}

        else if(array[0].value == d)
        {
        document.getElementById('result5').innerHTML = "Conștiința de sine - " + array[0].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să fie mai retrași în societate, în special în compania unor oameni "
        +"pe care nu-i cunosc bine și este probabil că sunt ușor de intimidat.";
        d = 0;}

        else if(array[0].value == e)
        {
        document.getElementById('result5').innerHTML = "Vulnerabilitate - " + array[0].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent ridicat vor manifesta o nervozitate mai mare și vor găsi că este dificil să își realizeze "
        +"sarcinile în condiții de stres. Cu alte cuvinte, aceștia par să fie deosebit de vulnerabili în circumstanțe dificile. ";
        e = 0;}

    else if(array[0].value == f)
        {
        document.getElementById('result5').innerHTML = "Impulsivitate - " + array[0].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare au tendința să aibă un slab control asupra impulsurilor lor. "
        +"De asemenea, ele sunt predispuse să aibă mai multe probleme când vine vorba de abuzurile de alcool, nicotina, etc, comparativ cu restul lumii.";
        f = 0;}

    event.preventDefault();

}

document.getElementById('calculate').onclick=getTotal;