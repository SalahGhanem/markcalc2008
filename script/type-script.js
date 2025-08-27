const islamic = document.getElementById('islamic');
const arabic = document.getElementById('arabic');
const english = document.getElementById('english');
const taree = document.getElementById('taree');
const islamic_id = document.getElementById('islamic_id');
const arabic_id = document.getElementById('arabic_id');
const english_id = document.getElementById('english_id');
const taree_id = document.getElementById('taree_id');

islamic.addEventListener('input', () => {
    let value = parseInt(islamic.value);
    if (value > 100) islamic.value = 100;
    if (value < 0) islamic.value = 0;
    if (value > 100 || value < 0) {
        islamic_id.innerText = "الرجاء ادخال علامة بين ( 0 - 100 ) : "
        islamic_id.style.color = "red";
        dellay = setTimeout(() => {
            islamic_id.innerText = "علامة مادة التربية الإسلامية ( 0 - 100 ) : "
            islamic_id.style.color = "black";
        }, 2000);
    }
});
arabic.addEventListener('input', () => {
    let value = parseInt(arabic.value);
    if (value > 100) arabic.value = 100;
    if (value < 0) arabic.value = 0;
    if (value > 100 || value < 0) {
        arabic_id.innerText = "الرجاء ادخال علامة بين ( 0 - 100 ) : "
        arabic_id.style.color = "red";
        dellay = setTimeout(() => {
            arabic_id.innerText = "علامة مادة اللغة العربية ( 0 - 100 ) : "
            arabic_id.style.color = "black";
        }, 2000);
    }
});
english.addEventListener('input', () => {
    let value = parseInt(english.value);
    if (value > 60) english.value = 60;
    if (value < 0) english.value = 0;
    if (value > 60 || value < 0) {
        english_id.innerText = "الرجاء ادخال علامة بين ( 0 - 60 ) : "
        english_id.style.color = "red";
        dellay = setTimeout(() => {
            english_id.innerText = "علامة مادة اللغة الانجليزية ( 0 - 60 ) : "
            english_id.style.color = "black";
        }, 2000);
    }
});
taree.addEventListener('input', () => {
    let value = parseInt(taree.value);
    if (value > 40) taree.value = 40;
    if (value < 0) taree.value = 0;
    if (value > 40 || value < 0) {
        taree_id.innerText = "الرجاء ادخال علامة بين ( 0 - 40 ) : "
        taree_id.style.color = "red";
        dellay = setTimeout(() => {
            taree_id.innerText = "علامة مادة تاريخ الاردن ( 0 - 40 ) : "
            taree_id.style.color = "black";
        }, 2000);
    }
});