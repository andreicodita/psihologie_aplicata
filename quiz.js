var numericalValues = new Array();
numericalValues["ffals"]= 1;
numericalValues["fals"]= 2;
numericalValues["nfna"]= 3;
numericalValues["adevarat"]= 4;
numericalValues["fadevarat"]= 5;

function getScoreIncredere()
{
var scoreIncredere = 0;
var form = document.forms["form"];
var incredere = form.elements["incredere"];
var incredere1 = form.elements["incredere1"];
var incredere2 = form.elements["incredere2"];
var incredere3 = form.elements["incredere3"];
var incredere4 = form.elements["incredere4"];
for(var i=0; i<incredere.length; i++)
{
    if(incredere[i].checked)
    {
    scoreIncredere = scoreIncredere + numericalValues[incredere[i].value];
    }
    if(incredere1[i].checked)
    {
    scoreIncredere = scoreIncredere + numericalValues[incredere1[i].value];
    }
    if(incredere2[i].checked)
    {
    scoreIncredere = scoreIncredere + numericalValues[incredere2[i].value];
    }
    if(incredere3[i].checked)
    {
    scoreIncredere = scoreIncredere + numericalValues[incredere3[i].value];
    }
    if(incredere4[i].checked)
    {
    scoreIncredere = scoreIncredere + numericalValues[incredere4[i].value];
    }
}
    return scoreIncredere;
};

function getScoreModestie()
{
var scoreModestie = 0;
var form = document.forms["form"];
var modestie = form.elements["modestie"];
var modestie1 = form.elements["modestie1"];
var modestie2 = form.elements["modestie2"];
var modestie3 = form.elements["modestie3"];
var modestie4 = form.elements["modestie4"];
for(var i=0; i<modestie.length; i++)
{
    if(modestie[i].checked)
    {
    scoreModestie = scoreModestie + numericalValues[modestie[i].value];
    }
    if(modestie1[i].checked)
    {
    scoreModestie = scoreModestie + numericalValues[modestie1[i].value];
    }
    if(modestie2[i].checked)
    {
    scoreModestie = scoreModestie + numericalValues[modestie2[i].value];
    }
    if(modestie3[i].checked)
    {
    scoreModestie = scoreModestie + numericalValues[modestie3[i].value];
    }
    if(modestie4[i].checked)
    {
    scoreModestie = scoreModestie + numericalValues[modestie4[i].value];
    }
}
    return scoreModestie;
};

function getScoreCompasiune()
{
var scoreCompasiune = 0;
var form = document.forms["form"];
var compasiune = form.elements["compasiune"];
var compasiune1 = form.elements["compasiune1"];
var compasiune2 = form.elements["compasiune2"];
var compasiune3 = form.elements["compasiune3"];
var compasiune4 = form.elements["compasiune4"];
for(var i=0; i<compasiune.length; i++)
{
    if(compasiune[i].checked)
    {
    scoreCompasiune = scoreCompasiune + numericalValues[compasiune[i].value];
    }
    if(compasiune1[i].checked)
    {
    scoreCompasiune = scoreCompasiune + numericalValues[compasiune1[i].value];
    }
    if(compasiune2[i].checked)
    {
    scoreCompasiune = scoreCompasiune + numericalValues[compasiune2[i].value];
    }
    if(compasiune3[i].checked)
    {
    scoreCompasiune = scoreCompasiune + numericalValues[compasiune3[i].value];
    }
    if(compasiune4[i].checked)
    {
    scoreCompasiune = scoreCompasiune + numericalValues[compasiune4[i].value];
    }
}
    return scoreCompasiune;
};

function getScoreMoralitate()
{
var scoreMoralitate = 0;
var form = document.forms["form"];
var moralitate = form.elements["moralitate"];
var moralitate1 = form.elements["moralitate1"];
var moralitate2 = form.elements["moralitate2"];
var moralitate3 = form.elements["moralitate3"];
var moralitate4 = form.elements["moralitate4"];
for(var i=0; i<moralitate.length; i++)
{
    if(moralitate[i].checked)
    {
    scoreMoralitate = scoreMoralitate + numericalValues[moralitate[i].value];
    }
    if(moralitate1[i].checked)
    {
    scoreMoralitate = scoreMoralitate + numericalValues[moralitate1[i].value];
    }
    if(moralitate2[i].checked)
    {
    scoreMoralitate = scoreMoralitate + numericalValues[moralitate2[i].value];
    }
    if(moralitate3[i].checked)
    {
    scoreMoralitate = scoreMoralitate + numericalValues[moralitate3[i].value];
    }
    if(moralitate4[i].checked)
    {
    scoreMoralitate = scoreMoralitate + numericalValues[moralitate4[i].value];
    }
}
    return scoreMoralitate;
};

function getScoreAltruism()
{
var scoreAltruism = 0;
var form = document.forms["form"];
var altruism = form.elements["altruism"];
var altruism1 = form.elements["altruism1"];
var altruism2 = form.elements["altruism2"];
var altruism3 = form.elements["altruism3"];
var altruism4 = form.elements["altruism4"];
for(var i=0; i<altruism.length; i++)
{
    if(altruism[i].checked)
    {
    scoreAltruism = scoreAltruism + numericalValues[altruism[i].value];
    }
    if(altruism1[i].checked)
    {
    scoreAltruism = scoreAltruism + numericalValues[altruism1[i].value];
    }
    if(altruism2[i].checked)
    {
    scoreAltruism = scoreAltruism + numericalValues[altruism2[i].value];
    }
    if(altruism3[i].checked)
    {
    scoreAltruism = scoreAltruism + numericalValues[altruism3[i].value];
    }
    if(altruism4[i].checked)
    {
    scoreAltruism = scoreAltruism + numericalValues[altruism4[i].value];
    }
}
    return scoreAltruism;
};

function getScoreCooperare()
{
var scoreCooperare = 0;
var form = document.forms["form"];
var cooperare = form.elements["cooperare"];
var cooperare1 = form.elements["cooperare1"];
var cooperare2 = form.elements["cooperare2"];
var cooperare3 = form.elements["cooperare3"];
var cooperare4 = form.elements["cooperare4"];
for(var i=0; i<cooperare.length; i++)
{
    if(cooperare[i].checked)
    {
    scoreCooperare = scoreCooperare + numericalValues[cooperare[i].value];
    }
    if(cooperare1[i].checked)
    {
    scoreCooperare = scoreCooperare + numericalValues[cooperare1[i].value];
    }
    if(cooperare2[i].checked)
    {
    scoreCooperare = scoreCooperare + numericalValues[cooperare2[i].value];
    }
    if(cooperare3[i].checked)
    {
    scoreCooperare = scoreCooperare + numericalValues[cooperare3[i].value];
    }
    if(cooperare4[i].checked)
    {
    scoreCooperare = scoreCooperare + numericalValues[cooperare4[i].value];
    }
}
    return scoreCooperare;
};
 
function getTotal()
{
    var a = getScoreIncredere();
    var b = getScoreMoralitate();
    var c = getScoreAltruism();
    var d = getScoreCooperare();
    var e = getScoreModestie();
    var f = getScoreCompasiune();
    var array = [{key: 'incredere', value: a}, {key: 'moralitate', value: b}, {key: 'altruism', value: c}, {key: 'cooperare', value: d}, {key: 'modestie', value: e}, {key: 'compasiune', value: f}];
    array.sort(function(obj1, obj2) {
        return obj1.value - obj2.value;
     });

    if(array[5].value == a)
        {
        document.getElementById('result').innerHTML = "Încredere - " + array[5].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să aibă cele mai bune păreri despre ceilalți oameni. " +
        "Acestea presupun că majoritatea oamenilor sunt onești, cumsecade și demni de încredere și vor continua să aibă aceste convingeri atât "+
        "timp cât nu li se face dovada clară a contrariului." +
        "<br>Cei care au un procent scăzut presupun că nu pot conta pe ce spun oamenii, marcând lipsa de încredere în colectiv.";
        a = 0;
        }
    else if(array[5].value == b)
        {
        document.getElementById('result').innerHTML = "Moralitate - " + array[5].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au un simț puternic pentru ce este bine și ce este rău. " +
        "Acestea trăiesc respectând regulile și se mândresc că îi tratează pe ceilalți într-un mod onest."+
        "<br>Cei care au un procent scăzut sunt mai cinici și au tendința de a manipula. Ei apreciază relațiile după masura în care ei"
        +" pot profita de pe urma lor și cred că regulile sunt făcute pentru a fi ocolite sau în cel mai rău caz, încălcate.";
        b = 0;}
    
    else if(array[5].value == c)
        {
        document.getElementById('result').innerHTML = "Altruism - " + array[5].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a-i ajuta pe ceilalți oameni și de a face"+
        " lucruri bune doar din plăcerea de a proceda astfel. Acestea se simt bine atunci când îi fac pe cei din jurul lor să se simtă bine."
        "<br>Cei care au un procent scăzut sunt amabili doar dacă au un motiv sau un scop în spate, pentru ei a-i ajuta pe alții este o"
        +" pierdere de timp, cu excepția situației în care pot obține ceva la schimb.";
        c = 0}

    else if(array[5].value == d)
        {
        document.getElementById('result').innerHTML = "Cooperare - " + array[5].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a evita să își asume meritele și să fie mai iertători."
        +" Ele trăiesc după principiul că cea mai buna cale de a progresa este să coopereze cu ceilalți."
        +"<br>Cei care au un procent mai mic sunt oamenii competitivi, care cred că pentru a ajunge la varf trebuie să calce "+
        "pe spatele altora. Nu evită confruntările, ba chiar dimpotrivă, le plac, de vreme ce le oferă ocazia să își demonstreze superioritatea.";
        d = 0;}

    else if(array[5].value == e)
        {
        document.getElementById('result').innerHTML = "Modestie - " + array[5].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent mai mare au o slabă stimă de sine, cred că nu au vreo abilitate sau vreun talent deosebit și, "
        +"chiar dacă ar avea, nu sunt dornici să-i lase pe alții să afle."
        +"<br>Cei care obțin un procent scăzut sunt lipsiți de modestie și adoră să fie mereu în centrul atenției. Aceștia nu simt nicio "
        +"constrângere să fie tranșanți când vorbesc despre talentele și cunoștințele lor.";
        e = 0;}

    else if(array[5].value == f)
        {
        document.getElementById('result').innerHTML = "Compasiune - " + array[5].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare pot simți durerea altora, sunt mai preocupate de cei mai puțin norocoși și vor transpune "
        +"adesea această preocupare în acțiune."+
        "<br>Cei care obțin un procent mai mic se gândesc rareori la cei defavorizați de soartă, iar, dacă o fac, vor ajunge probabil la concluzia "+
        "că statutul inferior reflectă slăbiciuni.";
        f = 0;}

    if(array[4].value == a)
        {
        document.getElementById('result1').innerHTML = "Încredere - " + array[4].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să aibă cele mai bune păreri despre ceilalți oameni. " +
        "Acestea presupun că majoritatea oamenilor sunt onești, cumsecade și demni de încredere și vor continua să aibă aceste convingeri atât "+
        "timp cât nu li se face dovada clară a contrariului." +
        "<br>Cei care au un procent scăzut presupun că nu pot conta pe ce spun oamenii, marcând lipsa de încredere în colectiv.";
        a = 0;}

    if(array[4].value == b)
        {
        document.getElementById('result1').innerHTML = "Moralitate - " + array[4].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au un simț puternic pentru ce este bine și ce este rău. " +
        "Acestea trăiesc respectând regulile și se mândresc că îi tratează pe ceilalți într-un mod onest."+
        "<br>Cei care au un procent scăzut sunt mai cinici și au tendința de a manipula. Ei apreciază relațiile după masura în care ei"
        +" pot profita de pe urma lor și cred că regulile sunt făcute pentru a fi ocolite sau în cel mai rău caz, încălcate.";
        b = 0;}

    else if(array[4].value == c)
        {
        document.getElementById('result1').innerHTML = "Altruism - " + array[4].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a-i ajuta pe ceilalți oameni și de a face"+
        " lucruri bune doar din plăcerea de a proceda astfel. Acestea se simt bine atunci când îi fac pe cei din jurul lor să se simtă bine."
        "<br>Cei care au un procent scăzut sunt amabili doar dacă au un motiv sau un scop în spate, pentru ei a-i ajuta pe alții este o"
        +" pierdere de timp, cu excepția situației în care pot obține ceva la schimb.";
        c = 0;}

    else if(array[4].value == d)
        {
        document.getElementById('result1').innerHTML = "Cooperare - " + array[4].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a evita să își asume meritele și să fie mai iertători."
        +" Ele trăiesc după principiul că cea mai buna cale de a progresa este să coopereze cu ceilalți."
        +"<br>Cei care au un procent mai mic sunt oamenii competitivi, care cred că pentru a ajunge la varf trebuie să calce "+
        "pe spatele altora. Nu evită confruntările, ba chiar dimpotrivă, le plac, de vreme ce le oferă ocazia să își demonstreze superioritatea.";
        d = 0;}

    else if(array[4].value == e)
        {
        document.getElementById('result1').innerHTML = "Modestie - " + array[4].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent mai mare au o slabă stimă de sine, cred că nu au vreo abilitate sau vreun talent deosebit și, "
        +"chiar dacă ar avea, nu sunt dornici să-i lase pe alții să afle."
        +"<br>Cei care obțin un procent scăzut sunt lipsiți de modestie și adoră să fie mereu în centrul atenției. Aceștia nu simt nicio "
        +"constrângere să fie tranșanți când vorbesc despre talentele și cunoștințele lor.";
        e = 0;}

    else if(array[4].value == f)
        {
        document.getElementById('result1').innerHTML = "Compasiune - " + array[4].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare pot simți durerea altora, sunt mai preocupate de cei mai puțin norocoși și vor transpune "
        +"adesea această preocupare în acțiune."+
        "<br>Cei care obțin un procent mai mic se gândesc rareori la cei defavorizați de soartă, iar, dacă o fac, vor ajunge probabil la concluzia "+
        "că statutul inferior reflectă slăbiciuni.";
        f = 0;}

    if(array[3].value == a)
        {
        document.getElementById('result2').innerHTML = "Încredere - " + array[3].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să aibă cele mai bune păreri despre ceilalți oameni. " +
        "Acestea presupun că majoritatea oamenilor sunt onești, cumsecade și demni de încredere și vor continua să aibă aceste convingeri atât "+
        "timp cât nu li se face dovada clară a contrariului." +
        "<br>Cei care au un procent scăzut presupun că nu pot conta pe ce spun oamenii, marcând lipsa de încredere în colectiv.";
        a = 0;}

    else if(array[3].value == b)
        {
        document.getElementById('result2').innerHTML = "Moralitate - " + array[3].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au un simț puternic pentru ce este bine și ce este rău. " +
        "Acestea trăiesc respectând regulile și se mândresc că îi tratează pe ceilalți într-un mod onest."+
        "<br>Cei care au un procent scăzut sunt mai cinici și au tendința de a manipula. Ei apreciază relațiile după masura în care ei"
        +" pot profita de pe urma lor și cred că regulile sunt făcute pentru a fi ocolite sau în cel mai rău caz, încălcate.";
        b = 0;}

    else if(array[3].value == c)
        {
        document.getElementById('result2').innerHTML = "Altruism - " + array[3].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a-i ajuta pe ceilalți oameni și de a face"+
        " lucruri bune doar din plăcerea de a proceda astfel. Acestea se simt bine atunci când îi fac pe cei din jurul lor să se simtă bine."
        "<br>Cei care au un procent scăzut sunt amabili doar dacă au un motiv sau un scop în spate, pentru ei a-i ajuta pe alții este o"
        +" pierdere de timp, cu excepția situației în care pot obține ceva la schimb.";
        c = 0;}

    else if(array[3].value == d)
        {
        document.getElementById('result2').innerHTML = "Cooperare - " + array[3].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a evita să își asume meritele și să fie mai iertători."
        +" Ele trăiesc după principiul că cea mai buna cale de a progresa este să coopereze cu ceilalți."
        +"<br>Cei care au un procent mai mic sunt oamenii competitivi, care cred că pentru a ajunge la varf trebuie să calce "+
        "pe spatele altora. Nu evită confruntările, ba chiar dimpotrivă, le plac, de vreme ce le oferă ocazia să își demonstreze superioritatea.";
        d = 0;}

    else if(array[3].value == e)
        {
        document.getElementById('result2').innerHTML = "Modestie - " + array[3].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent mai mare au o slabă stimă de sine, cred că nu au vreo abilitate sau vreun talent deosebit și, "
        +"chiar dacă ar avea, nu sunt dornici să-i lase pe alții să afle."
        +"<br>Cei care obțin un procent scăzut sunt lipsiți de modestie și adoră să fie mereu în centrul atenției. Aceștia nu simt nicio "
        +"constrângere să fie tranșanți când vorbesc despre talentele și cunoștințele lor.";
        e = 0;}

    else if(array[3].value == f)
        {
        document.getElementById('result2').innerHTML = "Compasiune - " + array[3].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare pot simți durerea altora, sunt mai preocupate de cei mai puțin norocoși și vor transpune "
        +"adesea această preocupare în acțiune."+
        "<br>Cei care obțin un procent mai mic se gândesc rareori la cei defavorizați de soartă, iar, dacă o fac, vor ajunge probabil la concluzia "+
        "că statutul inferior reflectă slăbiciuni.";
        f = 0;}

    if(array[2].value == a)
        {
        document.getElementById('result3').innerHTML = "Încredere - " + array[2].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să aibă cele mai bune păreri despre ceilalți oameni. " +
        "Acestea presupun că majoritatea oamenilor sunt onești, cumsecade și demni de încredere și vor continua să aibă aceste convingeri atât "+
        "timp cât nu li se face dovada clară a contrariului." +
        "<br>Cei care au un procent scăzut presupun că nu pot conta pe ce spun oamenii, marcând lipsa de încredere în colectiv.";
        a = 0;}

    else if(array[2].value == b)
        {
        document.getElementById('result3').innerHTML = "Moralitate - " + array[2].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au un simț puternic pentru ce este bine și ce este rău. " +
        "Acestea trăiesc respectând regulile și se mândresc că îi tratează pe ceilalți într-un mod onest."+
        "<br>Cei care au un procent scăzut sunt mai cinici și au tendința de a manipula. Ei apreciază relațiile după masura în care ei"
        +" pot profita de pe urma lor și cred că regulile sunt făcute pentru a fi ocolite sau în cel mai rău caz, încălcate.";
        b = 0;}

    else if(array[2].value == c)
        {
        document.getElementById('result3').innerHTML = "Altruism - " + array[2].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a-i ajuta pe ceilalți oameni și de a face"+
        " lucruri bune doar din plăcerea de a proceda astfel. Acestea se simt bine atunci când îi fac pe cei din jurul lor să se simtă bine."
        "<br>Cei care au un procent scăzut sunt amabili doar dacă au un motiv sau un scop în spate, pentru ei a-i ajuta pe alții este o"
        +" pierdere de timp, cu excepția situației în care pot obține ceva la schimb.";
        c = 0;}

    else if(array[2].value == d)
        {
        document.getElementById('result3').innerHTML = "Cooperare - " + array[2].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a evita să își asume meritele și să fie mai iertători."
        +" Ele trăiesc după principiul că cea mai buna cale de a progresa este să coopereze cu ceilalți."
        +"<br>Cei care au un procent mai mic sunt oamenii competitivi, care cred că pentru a ajunge la varf trebuie să calce "+
        "pe spatele altora. Nu evită confruntările, ba chiar dimpotrivă, le plac, de vreme ce le oferă ocazia să își demonstreze superioritatea.";
        d = 0;}

    else if(array[2].value == e)
        {
        document.getElementById('result3').innerHTML = "Modestie - " + array[2].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent mai mare au o slabă stimă de sine, cred că nu au vreo abilitate sau vreun talent deosebit și, "
        +"chiar dacă ar avea, nu sunt dornici să-i lase pe alții să afle."
        +"<br>Cei care obțin un procent scăzut sunt lipsiți de modestie și adoră să fie mereu în centrul atenției. Aceștia nu simt nicio "
        +"constrângere să fie tranșanți când vorbesc despre talentele și cunoștințele lor.";
        e = 0;}

    else if(array[2].value == f)
        {
        document.getElementById('result3').innerHTML = "Compasiune - " + array[2].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare pot simți durerea altora, sunt mai preocupate de cei mai puțin norocoși și vor transpune "
        +"adesea această preocupare în acțiune."+
        "<br>Cei care obțin un procent mai mic se gândesc rareori la cei defavorizați de soartă, iar, dacă o fac, vor ajunge probabil la concluzia "+
        "că statutul inferior reflectă slăbiciuni.";
        f = 0}

    if(array[1].value == a)
        {
        document.getElementById('result4').innerHTML = "Încredere - " + array[1].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să aibă cele mai bune păreri despre ceilalți oameni. " +
        "Acestea presupun că majoritatea oamenilor sunt onești, cumsecade și demni de încredere și vor continua să aibă aceste convingeri atât "+
        "timp cât nu li se face dovada clară a contrariului." +
        "<br>Cei care au un procent scăzut presupun că nu pot conta pe ce spun oamenii, marcând lipsa de încredere în colectiv.";
        a = 0;}

    else if(array[1].value == b)
        {
        document.getElementById('result4').innerHTML = "Moralitate - " + array[1].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au un simț puternic pentru ce este bine și ce este rău. " +
        "Acestea trăiesc respectând regulile și se mândresc că îi tratează pe ceilalți într-un mod onest."+
        "<br>Cei care au un procent scăzut sunt mai cinici și au tendința de a manipula. Ei apreciază relațiile după masura în care ei"
        +" pot profita de pe urma lor și cred că regulile sunt făcute pentru a fi ocolite sau în cel mai rău caz, încălcate.";
        b = 0;}

    else if(array[1].value == c)
        {
        document.getElementById('result4').innerHTML = "Altruism - " + array[1].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a-i ajuta pe ceilalți oameni și de a face"+
        " lucruri bune doar din plăcerea de a proceda astfel. Acestea se simt bine atunci când îi fac pe cei din jurul lor să se simtă bine."
        "<br>Cei care au un procent scăzut sunt amabili doar dacă au un motiv sau un scop în spate, pentru ei a-i ajuta pe alții este o"
        +" pierdere de timp, cu excepția situației în care pot obține ceva la schimb.";
        c = 0;}

    else if(array[1].value == d)
        {
        document.getElementById('result4').innerHTML = "Cooperare - " + array[1].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a evita să își asume meritele și să fie mai iertători."
        +" Ele trăiesc după principiul că cea mai buna cale de a progresa este să coopereze cu ceilalți."
        +"<br>Cei care au un procent mai mic sunt oamenii competitivi, care cred că pentru a ajunge la varf trebuie să calce "+
        "pe spatele altora. Nu evită confruntările, ba chiar dimpotrivă, le plac, de vreme ce le oferă ocazia să își demonstreze superioritatea.";
        d = 0;}

    else if(array[1].value == e)
        {
        document.getElementById('result4').innerHTML = "Modestie - " + array[1].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent mai mare au o slabă stimă de sine, cred că nu au vreo abilitate sau vreun talent deosebit și, "
        +"chiar dacă ar avea, nu sunt dornici să-i lase pe alții să afle."
        +"<br>Cei care obțin un procent scăzut sunt lipsiți de modestie și adoră să fie mereu în centrul atenției. Aceștia nu simt nicio "
        +"constrângere să fie tranșanți când vorbesc despre talentele și cunoștințele lor.";
        e = 0;}

    else if(array[1].value == f)
        {
        document.getElementById('result4').innerHTML = "Compasiune - " + array[1].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare pot simți durerea altora, sunt mai preocupate de cei mai puțin norocoși și vor transpune "
        +"adesea această preocupare în acțiune."+
        "<br>Cei care obțin un procent mai mic se gândesc rareori la cei defavorizați de soartă, iar, dacă o fac, vor ajunge probabil la concluzia "+
        "că statutul inferior reflectă slăbiciuni.";
        f = 0;}

    if(array[0].value == a)
        {
        document.getElementById('result5').innerHTML = "Încredere - " + array[0].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința să aibă cele mai bune păreri despre ceilalți oameni. " +
        "Acestea presupun că majoritatea oamenilor sunt onești, cumsecade și demni de încredere și vor continua să aibă aceste convingeri atât "+
        "timp cât nu li se face dovada clară a contrariului." +
        "<br>Cei care au un procent scăzut presupun că nu pot conta pe ce spun oamenii, marcând lipsa de încredere în colectiv.";
        a = 0;}

    else if(array[0].value == b)
        {
        document.getElementById('result5').innerHTML = "Moralitate - " + array[0].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au un simț puternic pentru ce este bine și ce este rău. " +
        "Acestea trăiesc respectând regulile și se mândresc că îi tratează pe ceilalți într-un mod onest."+
        "<br>Cei care au un procent scăzut sunt mai cinici și au tendința de a manipula. Ei apreciază relațiile după masura în care ei"
        +" pot profita de pe urma lor și cred că regulile sunt făcute pentru a fi ocolite sau în cel mai rău caz, încălcate.";
        b = 0;}

    else if(array[0].value == c)
        {
        document.getElementById('result5').innerHTML = "Altruism - " + array[0].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a-i ajuta pe ceilalți oameni și de a face"+
        " lucruri bune doar din plăcerea de a proceda astfel. Acestea se simt bine atunci când îi fac pe cei din jurul lor să se simtă bine."
        "<br>Cei care au un procent scăzut sunt amabili doar dacă au un motiv sau un scop în spate, pentru ei a-i ajuta pe alții este o"
        +" pierdere de timp, cu excepția situației în care pot obține ceva la schimb.";
        c = 0;}

    else if(array[0].value == d)
        {
        document.getElementById('result5').innerHTML = "Cooperare - " + array[0].value/25 * 100 + "%" + 
        "<br>Persoanele care obțin un procent mare au tendința de a evita să își asume meritele și să fie mai iertători."
        +" Ele trăiesc după principiul că cea mai buna cale de a progresa este să coopereze cu ceilalți."
        +"<br>Cei care au un procent mai mic sunt oamenii competitivi, care cred că pentru a ajunge la varf trebuie să calce "+
        "pe spatele altora. Nu evită confruntările, ba chiar dimpotrivă, le plac, de vreme ce le oferă ocazia să își demonstreze superioritatea.";
        d = 0;}

    else if(array[0].value == e)
        {
        document.getElementById('result5').innerHTML = "Modestie - " + array[0].value/25 * 100 + "%" +    
        "<br>Persoanele care obțin un procent mai mare au o slabă stimă de sine, cred că nu au vreo abilitate sau vreun talent deosebit și, "
        +"chiar dacă ar avea, nu sunt dornici să-i lase pe alții să afle."
        +"<br>Cei care obțin un procent scăzut sunt lipsiți de modestie și adoră să fie mereu în centrul atenției. Aceștia nu simt nicio "
        +"constrângere să fie tranșanți când vorbesc despre talentele și cunoștințele lor.";
        e = 0;}

    else if(array[0].value == f)
       {
        document.getElementById('result5').innerHTML = "Compasiune - " + array[0].value/25 * 100 + "%" +  
        "<br>Persoanele care obțin un procent mai mare pot simți durerea altora, sunt mai preocupate de cei mai puțin norocoși și vor transpune "
        +"adesea această preocupare în acțiune."+
        "<br>Cei care obțin un procent mai mic se gândesc rareori la cei defavorizați de soartă, iar, dacă o fac, vor ajunge probabil la concluzia "+
        "că statutul inferior reflectă slăbiciuni.";
        f = 0;}

    event.preventDefault();

}

document.getElementById('calculate').onclick=getTotal;