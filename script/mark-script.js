function calculate() {
    let container = document.getElementById("great-result-container");
    container.classList.remove("hide");
    container.classList.add("show");
    container.style.visibility = "visible";
    let islamic = parseFloat(document.getElementById("islamic").value);
    let arabic = parseFloat(document.getElementById("arabic").value);
    let english = parseFloat(document.getElementById("english").value);
    let taree = parseFloat(document.getElementById("taree").value);
    if (isNaN(islamic)) {
        document.getElementById("alert").style.display = "inline";
        document.getElementById("alert").innerText = "لم تقم بادخال علامة التربية الاسلامية";
    } else

        if (isNaN(arabic)) {
            document.getElementById("alert").style.display = "block";
            document.getElementById("alert").innerText = "لم تقم بادخال علامة اللغة العربية";
        } else


            if (isNaN(english)) {
                document.getElementById("alert").style.display = "block";
                document.getElementById("alert").innerText = "لم تقم بادخال علامة اللغة الانجليزية";
            } else


                if (isNaN(taree)) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById("alert").innerText = "لم تقم بادخال علامة تاريخ الاردن";
                } else {


                    // إظهار النافذة


                    // مثال حساب (انت بتعدل المعادلة حسب المطلوب)
                    let result100 = (islamic + arabic + english + taree) / 3;
                    let result30 = (islamic + arabic + english + taree) / 10;

                    document.getElementById("result").innerText = "المعدل";
                    document.getElementById("result100").innerText = "المعدل من 100 : " + result100.toFixed(2);
                    document.getElementById("result30").innerText = "المعدل من 30 : " + result30.toFixed(2);
                }
}

function ok() {
    let container = document.getElementById("great-result-container");
    container.classList.remove("show");
    container.classList.add("hide");
    document.getElementById("alert").style.display = "none";

    // بعد انتهاء الأنيميشن أخفيها
    setTimeout(() => {
        container.style.visibility = "hidden";
    }, 600); // نفس زمن الـ animation
}
