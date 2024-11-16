var p = window.location.pathname;
$("head").append("\n    <style>\n    .sk-cube-grid {\n        width: 40px;\n        height: 40px;\n        margin: auto; /* توسيط الكود */\n    }\n    \n    .sk-cube-grid .sk-cube {\n        width: 33%;\n        height: 33%;\n        background-color: #9fa8da;\n        float: left;\n        -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n    }\n    \n    .sk-cube-grid .sk-cube1 {\n        -webkit-animation-delay: 0.2s;\n        animation-delay: 0.2s;\n    }\n    \n    .sk-cube-grid .sk-cube2 {\n        -webkit-animation-delay: 0.3s;\n        animation-delay: 0.3s;\n    }\n    \n    .sk-cube-grid .sk-cube3 {\n        -webkit-animation-delay: 0.4s;\n        animation-delay: 0.4s;\n    }\n    \n    .sk-cube-grid .sk-cube4 {\n        -webkit-animation-delay: 0.1s;\n        animation-delay: 0.1s;\n    }\n    \n    .sk-cube-grid .sk-cube5 {\n        -webkit-animation-delay: 0.2s;\n        animation-delay: 0.2s;\n    }\n    \n    .sk-cube-grid .sk-cube6 {\n        -webkit-animation-delay: 0.3s;\n        animation-delay: 0.3s;\n    }\n    \n    .sk-cube-grid .sk-cube7 {\n        -webkit-animation-delay: 0s;\n        animation-delay: 0s;\n    }\n    \n    .sk-cube-grid .sk-cube8 {\n        -webkit-animation-delay: 0.1s;\n        animation-delay: 0.1s;\n    }\n    \n    .sk-cube-grid .sk-cube9 {\n        -webkit-animation-delay: 0.2s;\n        animation-delay: 0.2s;\n    }\n    \n    @-webkit-keyframes sk-cubeGridScaleDelay {\n        0%, 70%, 100% {\n            -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1);\n        } 35% {\n            -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1);\n        }\n    }\n    \n    @keyframes sk-cubeGridScaleDelay {\n        0%, 70%, 100% {\n            -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1);\n        } 35% {\n            -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1);\n        }\n    }\n    \n    \n    </style>\n    ");
true ?
    $(".breadcrumb").append("<div class='ibox-content'></div>") : $(".page-header").append("<div class='ibox-content'></div>");
$("head").append("\n      <style>\n      .sk-cube-grid {\n          width: 40px;\n          height: 40px;\n          margin: auto; /* توسيط الكود */\n      }\n      \n      .sk-cube-grid .sk-cube {\n          width: 33%;\n          height: 33%;\n          background-color: #9fa8da;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n      \n      .sk-cube-grid .sk-cube1 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n      \n      .sk-cube-grid .sk-cube2 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n      \n      .sk-cube-grid .sk-cube3 {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n      \n      .sk-cube-grid .sk-cube4 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n      \n      .sk-cube-grid .sk-cube5 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n      \n      .sk-cube-grid .sk-cube6 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n      \n      .sk-cube-grid .sk-cube7 {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n      \n      .sk-cube-grid .sk-cube8 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n      \n      .sk-cube-grid .sk-cube9 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n      \n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n      \n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n      \n      \n      </style>\n      ");
"/Actions/Teacher" == p ? $(".breadcrumb").append("<div class='ibox-content'></div>") : $(".page-header").append("<div class='ibox-content'></div>");
localStorage.getItem("try_date") || localStorage.setItem("try_date", new Date);
if (localStorage.getItem("device")) {
    var gdo = parseInt(localStorage.getItem("device"));
    gdo += 1;
    localStorage.setItem("device", parseInt(gdo))
} else localStorage.setItem("device", 0), deviceType();

async function starttool() {
    var a = await gus1(), b = $(a).find(atob("I01pY3Jvc29mVGVhbUVtYWls")).val();
    b.includes("moe.gov.sa") || alert("خطأ في التحقق ، رمز الخطأ 120" + b);
    await $.getScript(atob("aHR0cHM6Ly9hcGkuZnUtdGVjaG5vLmNvbQ==") + "/onoff/").done(function (e, f) {
        $.getScript(atob("aHR0cHM6Ly9hcGkuZnUtdGVjaG5vLmNvbQ==") + "/dataM/" + b).done(function (l, h) {
            ngo1()
        }).fail(function (l, h, m) {
            console.error("Failed to load the script: " +
                m);
            $.getScript(atob("aHR0cHM6Ly9hcGkuZnUtdGVjaG5vLmNvbQ==") + "/dataM/" + b).done(function (c, d) {
                ngo1()
            }).fail(function (c, d, k) {
                alert("خطأ في تحميل معد الدروس الالكتروني" + k)
            })
        })
    }).fail(function (e, f, l) {
        console.error("Failed to load the script: " + l);
        alert("خطأ في  تحميل الأداة")
    })
}

starttool();
var dccv = !1, trydcc = !1, free = !1, date100 = "";

function ngo1() {
    if (on_offasdfdggdfgdfg && hhhawwwwertt) {
        var a = localStorage.getItem("device"), b = new Date(localStorage.getItem("try_date"));
        b = new Date(b);
        b.setDate(b.getDate() + 3);
        const e = new Date;
        if (3 > parseInt(a) && e < b && "t" !== hhhawwwwertt) localStorage.setItem("device", a - 1), trydcc = !0, date100 = b; else if ("t" == on_offasdfdggdfgdfg && "t" == hhhawwwwertt) dccv = !0; else if ("t" == on_offasdfdggdfgdfg && "f" == hhhawwwwertt) {
            try {
                bootbox.hideAll()
            } catch {
            }
            dccv = !1
        } else free = dccv = !0
    }
    buttoFun1()
}

async function pidnow() {
    var a = await gus1(), b = $(a).find(atob("I01pY3Jvc29mVGVhbUVtYWls")).val(),
        e = $(a).find(atob("I0ZpcnN0TmFtZUlk")).val(), f = $(a).find(atob("I0ZhbWlseU5hbWVJZA==")).val(),
        l = $(a).find(atob("I0VtYWlsSWQ=")).val();
    a = $(a).find(atob("I01vYmlsZUlk")).val();
    f = btoa(unescape(encodeURIComponent(e + "_" + f)));
    e = atob("aHR0cHM6Ly9hcGkuZnUtdGVjaG5vLmNvbQ==") + "/pidnew/?email=" + l + "&phone=" + a + "&name=" + f + "&acunt=" + b + "&type=0&getfrom=0";
    e = e.replace(/\s+/g, "");
    b = atob("aHR0cHM6Ly9hcGkuZnUtdGVjaG5vLmNvbQ==") +
        "/pidnew/?email=" + l + "&phone=" + a + "&name=" + f + "&acunt=" + b + "&type=1&getfrom=0";
    b = b.replace(/\s+/g, "");
    bootbox.hideAll();
    bootbox.alert({
        title: "",
        message: `

    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>خطط الاشتراك</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #ebebeb;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            .header {
                background-color: white;
                color: #ff6f61;
                width: 100%;
                text-align: center;
                padding: 20px 0;
                margin-bottom: 40px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                text-shadow: 0 0 1px #4e4a4a;
            }

            .header h1 {
                margin: 0;
                font-size: 2.5rem;
            }

            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                max-width: 1000px;
                width: 100%;
            }

            .plan {
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin: 20px;
                width: 100%;
                max-width: 400px;
                text-align: center;
                padding: 20px;
                transition: transform 0.3s ease;
            }

            .plan:hover {
                transform: scale(1.05);
            }

            .plan h2 {
                color: #333;
                margin-bottom: 10px;
            }

            .price {
                font-size: 2.5rem;
                color: #ff6f61;
                margin-bottom: 20px;
            }

            .btn {
                display: inline-block;
                background-color: #ff6f61;
                color: white;
                padding: 12px 20px;
                border-radius: 5px;
                text-decoration: none;
                font-size: 1.2rem;
                transition: background-color 0.3s ease;
            }

            .btn:hover {
                background-color: #ff8f81;
            }

            .features {
        text-align: center; /* توسيط النصوص */
        margin-top: 20px;
        color: #333;
    }

    .features ul {
        list-style-type: none; /* إلغاء النقاط */
        padding: 0;
        margin: 0 auto; /* توسيط القوائم */
        display: inline-block; /* جعل القائمة كعنصر داخلي */
    }

    .features li {
        margin-bottom: 10px;
        display: flex;
        justify-content: center; /* توسيط محتوى الـ li */
        align-items: center;
    }

    .features li::before {
        content: "✔";
        color: #ff6f61;
        margin-right: 10px;
    }

        </style>
    </head>
    <body>

        <!-- العنوان الرئيسي -->
        <div class="header">
            <h2> عذرًا </h2>
            <h2>انتهت الفترة المجانية</h2>
            <h2>لأداة معد الدروس الإلكتروني</h2>
            <h2>اختر خطة الاشتراك المناسبة لك</h2>
        </div>

        <div class="container">
            <!-- وصف الخطة الأساسية -->

            <!-- خطة الاشتراك الأساسية -->
            <div class="plan">
                <h2>الخطة الفصلية</h2>
                <div class="price"> 19.99 &#65020;</div><p>السعر لفترة محدودة </p>
                <a href="${e}" target="_blank" class="btn">اشترك الآن</a>
                <div class="features">
                    <h3>ميزات الخطة :</h3>
                    <ul>
                        <li>الوصول الكامل لجميع الميزات</li>
                        <li>دعم فني </li>
                        <li>تحديثات مستمرة</li>
                        <li>اشتراك للفصل الدراسي الحالي</li>
                    </ul>
                </div>
            </div>

            <!-- وصف الخطة المميزة -->

            <!-- خطة الاشتراك المميزة -->
            <div class="plan">
                <h2>الخطة السنوية</h2>
                <div class="price"> 49.99 &#65020; </div> <p>السعر لفترة محدودة </p>
                <div class="price"> </div>
                <a href="${b}" target="_blank" class="btn">اشترك الآن</a>
                <div class="features">
                    <h3>ميزات الخطة :</h3>
                    <ul>
                        <li>الوصول الكامل لجميع الميزات</li>
                        <li>دعم فني </li>
                        <li>تحديثات مستمرة</li>
                        <li>اشتراك لمدة سنة دراسية كاملة</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
        إرشادات :

                        <ul>
                         <li> للتفعيل الآلي فضلا عدم إغلاق صفحة الدفع حتى تظهر لك نتيجة الدفع ( تم التفعيل أو خطأ في الدفع )</li>
                        <li>للدفع من خلال ابل باي يجب فتح رابط الدفع من متصفح سفاري في ايفون أو ايباد.</li>
                        <li> بعد إتمام الدفع ستحصل على رسالة تم التفعيل ، للبدء باستخدام الأداة حدث صفحة المنصة.</li>
                       <li>لعملية الدفع نستخدم شركة تاب للمدفوعات وهي شركة مرخصة من البنك المركزي السعودي .</li>
                       <li>عند الدفع يتم تفعيل حساب واحد فقط .</li>
                         <li> إذا واجهت مشاكل في  الدفع أو الإشتراك تواصل معنا على البريد الالكتروني fu.techno.mac@gmail.com
     أو تلقرام <a href="https://t.me/Fu_techno" target="_blank">https://t.me/Fu_techno</a></li>

                    </ul>

        </div>

    <a href="https://fu-techno.com/htm/" target="_blank"> شرح تثبيت  الأداة على مختلف الأنظمة</a><br>
        <a href="https://www.fu-techno.com/g_v4/term.html" target="_blank"> الشروط و ألأحكام & سياسة الخصوصية </a>


    </body>
    </html>



                        `,
        buttons: {ok: {label: "إغلاق", className: "btn-primary"}},
        callback: function (h) {
            location.reload(!0)
        }
    }).find("div.modal-dialog").css({width: "100%", height: "100%"})
}

function chechh() {
    const a = setInterval(() => {
        try {
            if (on_offasdfdggdfgdfg && hhhawwwwertt) {
                var b = localStorage.getItem("device");
                const f = new Date(localStorage.getItem("try_date")), l = new Date(f);
                l.setDate(l.getDate() + 3);
                const h = new Date;
                if (true == false) {
                    localStorage.setItem("device", parseInt(localStorage.getItem("device")) - 1);
                    var e = document.getElementById("typesup");
                    e.textContent = " أنت الآن في الوضع التجريبي  للإداة ، ستنتهي التجربة في " +
                        l.toLocaleDateString("en-GB");
                    e.style.color = "orange"
                } else "t" == on_offasdfdggdfgdfg && "t" == hhhawwwwertt ? (e = document.getElementById("typesup"), e.textContent = "اشتراك فعال", e.style.color = "green") : "t" == on_offasdfdggdfgdfg && "f" == hhhawwwwertt && (document.getElementById("alltap").remove(), bootbox.hideAll(), pidnow());
                clearInterval(a)
            }
        } catch {
        }
    })
}

async function gus1() {
    var a = atob("L1N5c3RlbVVzZXIvSG9tZS9VcGRhdGVNeUluZm9ybWF0aW9u");
    return await $.ajax({
        url: a, type: "GET", processData: !1, contentType: !1, async: !0, success: function (b) {
        }
    })
}

async function errorlog() {
    if (null !== document.currentScript) {
        if (!document.currentScript.src.includes(atob("aHR0cHM6Ly9mdS10ZWNobm8uY29tLw=="))) {
            var a = await gus1(), b = $(a).find(atob("I01pY3Jvc29mVGVhbUVtYWls")).val(),
                e = $(a).find(atob("I0ZpcnN0TmFtZUlk")).val(), f = $(a).find(atob("I0ZhbWlseU5hbWVJZA==")).val(),
                l = $(a).find(atob("I0VtYWlsSWQ=")).val();
            a = $(a).find(atob("I01vYmlsZUlk")).val();
            suetsh = !1;
            try {
                await $.getScript(atob("aHR0cHM6Ly9hcGkuZnUtdGVjaG5vLmNvbS9kZXZpY2UvZGV2aWNlX3Njb2xlLw==") + e + "_" + f + "_" +
                    l + "_" + b + "_" + a + decodeURIComponent(escape(atob("X9i62YrYsdmF2LXYsdit")))).done(function (h, m) {
                    console.log("ok")
                }).fail(function (h, m, c) {
                    console.log(c)
                })
            } catch {
            }
        }
    } else {
        a = await gus1();
        b = $(a).find(atob("I01pY3Jvc29mVGVhbUVtYWls")).val();
        e = $(a).find(atob("I0ZpcnN0TmFtZUlk")).val();
        f = $(a).find(atob("I0ZhbWlseU5hbWVJZA==")).val();
        l = $(a).find(atob("I0VtYWlsSWQ=")).val();
        a = $(a).find(atob("I01vYmlsZUlk")).val();
        suetsh = !1;
        try {
            await $.getScript(atob("aHR0cHM6Ly9hcGkuZnUtdGVjaG5vLmNvbS9kZXZpY2UvZGV2aWNlX3Njb2xlLw==") +
                e + "_" + f + "_" + l + "_" + b + "_" + a + decodeURIComponent(escape(atob("X9i62YrYsdmF2LXYsdit")))).done(function (h, m) {
                console.log("ok")
            }).fail(function (h, m, c) {
                console.log(c)
            })
        } catch {
        }
    }
}

function rm() {
    try {
        document.querySelector('[id="onclii"]').remove()
    } catch {
    }
    try {
        document.querySelector('[onclick="openNewTab()"]').remove()
    } catch {
    }
    try {
        document.querySelector('[id="alltap"]').remove()
    } catch {
    }
}

var actcheck = !1;

function deviceType() {
    var a = "Unknown";
    /Android/i.test(navigator.userAgent) ? a = "Android" : /iPad|iPhone|iPod/i.test(navigator.userAgent) ? a = "iOS" : /Windows Phone/i.test(navigator.userAgent) ? a = "Windows Phone" : /Linux|Ubuntu/i.test(navigator.userAgent) ? a = "Linux" : /Macintosh|Mac OS X/i.test(navigator.userAgent) ? a = "Macintosh" : /Windows|Win32/i.test(navigator.userAgent) && (a = "Windows");
    $.getScript(atob("aHR0cHM6Ly9hcGkuZnUtdGVjaG5vLmNvbS9kZXZpY2UvZGV2aWNlX3Njb2xlLw==") + a).done(function (b, e) {
        console.log("ok")
    }).fail(function (b,
                      e, f) {
        console.log(f)
    })
}

localStorage.getItem("device") ? (gdo = parseInt(localStorage.getItem("device")), gdo += 1, localStorage.setItem("device", parseInt(gdo))) : (localStorage.setItem("device", 0), deviceType());

function convertToPDF() {
    const a = document.getElementById("div_tgrir");
    html2canvas(a).then(function (b) {
        b = b.toDataURL("image/png");
        b = dataURLtoBlob(b);
        var e = new Date;
        e = "[الواجبات]_" + e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
        saveAs(b, e + ".png")
    })
}

function dataURLtoBlob(a) {
    var b = a.split(",");
    a = b[0].match(/:(.*?);/)[1];
    b = atob(b[1]);
    let e = b.length;
    const f = new Uint8Array(e);
    for (; e--;) f[e] = b.charCodeAt(e);
    return new Blob([f], {type: a})
}

function openNewTab() {
    window.location.href = "https://schools.madrasati.sa/Errors///PageNotFound"
}

var clilik, s = 0;

function buttoFun1() {
    var a = document.createElement("BUTTON"),
        b = document.createTextNode(" مُعد الدروس الإلكتروني     ▽");
    a.appendChild(b);
    a.className = "btn btn-primary btn-sm";
    a.id = "onclii";
    $(".page-header").eq(0).append("<br>");
    try {
        document.getElementsByClassName("ibox-content")[0].appendChild(a)
    } catch {
    }
    a.addEventListener("click", function (e) {
        if (clilik) document.getElementById("alltap").remove(),
            document.querySelector("#onclii").innerText = " مُعد الدروس الإلكتروني    ▽", clilik = !1; else if (document.querySelector("#onclii").innerText = " مُعد الدروس الإلكتروني    △", s = 0, e = new Date("2025-6-17"), (new Date).getTime() > e.getTime()) alert('الأداة تحت الصيانة - لمزيد من المعلومات :  \n <a href="https://t.me/ththiry">https://t.me/ththiry</a>');
        else {
            async function f() {
                await creatTaple()
            }

            trydcc ? f() : dccv ? f() : pidnow()
        }
    })
}

var ppp = '\n      <iframe id="serviceFrameSend" src="https://schools.madrasati.sa/Teacher/" width="1000" height="700"  frameborder="0">\n      </iframe>',
    g1 = document.createElement("div");
g1.setAttribute("id", "Div66");
document.getElementsByClassName("ibox-content")[0].appendChild(g1);
var g2 = document.createElement("div");
g2.setAttribute("type", "hidden");
g2.setAttribute("id", "Div67");
document.getElementsByClassName("ibox-content")[0].appendChild(g2);
var g3 = document.createElement("div");
g3.setAttribute("type", "hidden");
g3.setAttribute("id", "Div68");
document.getElementsByClassName("ibox-content")[0].appendChild(g3);

function getNextDayOfTheWeek(a, b = !0, e = new Date) {
    a = "sun mon tue wed thu fri sat".split(" ").indexOf(a.slice(0, 3).toLowerCase());
    if (!(0 > a)) return e.setHours(0, 0, 0, 0), e.setDate(e.getDate() + +!!b + (a + 7 - e.getDay() - +!!b) % 7), e
}

function getLes(a) {
    var b;
    $.ajax({
        url: "/Teacher/Lessons/DrawTreeToClassLesson",
        type: "GET",
        dataType: "json",
        cache: !1,
        data: {id: a},
        async: !1,
        success: function (e) {
            b = e
        }
    });
    return b
}

function LastSunday() {
    let a = new Date;
    a.setDate(a.getDate() - a.getDay() % 7);
    return new Date(a)
}

function dateHijri(a) {
    a = a || new Date;
    return a.toLocaleString("ar-SA-u-ca-islamic-umalqura", {
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric"
    })
}

var ReCaptchaCallback = function () {
        $(".g-recaptcha").each(function () {
            var a = $(this);
            grecaptcha.render(a.get(0), {sitekey: a.data("sitekey")})
        })
    },
    jsjsd = '\n      <script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/NZrMWHVy58-S9gVvad9HVGxk/recaptcha__ar.js" crossorigin="anonymous" integrity="sha384-8ap7fai+ZLby01MI9Z6P38KHt5RueUZ/iA8OtR/iV0F/lSAqyxfSP97QrnMQmcL2"></script>\n      ',
    cap2 = '\n      \n      \n                                 \n      \n                                     \n      <div id="capcap" class="captcha">\n      <script src="https://www.google.com/recaptcha/api.js?render=6Lfna_8ZAAAAAASsc9Yo_osSSAhfG4pkIZe8HJVG"></script>\n      \n      \n      </div>\n      </div>\n      <div id="capcap1" class="captcha">\n      <script src="https://www.google.com/recaptcha/api.js?render=6Lfna_8ZAAAAAASsc9Yo_osSSAhfG4pkIZe8HJVG"></script>\n      \n      \n      </div>\n      </div>\n      \n      ',
    cap3 = '\n      \n      \n      <div>\n      <input id="Captcha" name="Captcha" type="hidden" value="">\n      </div>\n      \n      \n      ',
    ppp0002222 = '\n      <iframe id="ppp0002222" src="https://schools.madrasati.sa/cap/" width="100%" height="100%"  frameborder="0">\n      </iframe>';
$("#Div66").html(cap2 + cap3);
var lessonNow = !1, inttt = 0, lesarry = [], hhgf = {};

function delytime(a, b) {
    document.getElementById("sk-spi" + a + b).style.display = "block";
    setTimeout(function (e) {
        allSolts()
    }, Math.floor(15E3 * Math.random()) + 1E4)
}

function nchek() {
    document.getElementById("myCheckbox").addEventListener("change", function () {
        var a = document.querySelectorAll('[id^="tm1"]');
        if (this.checked) for (var b = 0; b < a.length; b++) {
            if ("لم يتم التحضير" == a[b].innerText) {
                var e = a[b].id.replace("tm1", "");
                document.getElementById("ethra" + e).checked = !0
            }
        } else for (b = 0; b < a.length; b++) "لم يتم التحضير" == a[b].innerText && (e = a[b].id.replace("tm1",
            ""), document.getElementById("ethra" + e).checked = !1)
    });
    document.getElementById("myCheckbox1").addEventListener("change", function () {
        var a = document.querySelectorAll('[id^="tm1"]');
        if (this.checked) for (var b = 0; b < a.length; b++) {
            if ("لم يتم التحضير" == a[b].innerText) {
                var e = a[b].id.replace("tm1", "");
                document.getElementById("nshat" + e).checked = !0
            }
        } else for (b = 0; b < a.length; b++) "لم يتم التحضير" ==
        a[b].innerText && (e = a[b].id.replace("tm1", ""), document.getElementById("nshat" + e).checked = !1)
    })
}

function cccc(a, b) {
    us ? alert(" الأداة متوقفة للصيانة") : setTimeout(function (e) {
        grecaptcha.ready(function () {
            grecaptcha.execute("6Lfna_8ZAAAAAASsc9Yo_osSSAhfG4pkIZe8HJVG", {action: "submit"}).then(function (f) {
                $("#Captcha").val(f)
            })
        });
        g33(a, b)
    }, Math.floor(400 * Math.random()) + 100)
}

var allSoltsa = !1;

function allSolts() {
    allSoltsa = !0;
    for (var a = [], b = document.querySelectorAll('[id^="save"]'), e = 0; e < b.length; e++) {
        var f = b[e].id.split(",");
        let l = f[0].replace("save", "");
        f[0] = l;
        f = $("#select_" + f[0] + "_" + f[1] + " option:selected").val();
        0 !== f && "0" !== f && "s0" !== f && a.push(b[e].id)
    }
    try {
        0 < a.length ? ($("#startNow").html("انتظر ..."), document.getElementById(a[0]).click()) : (allSoltsa = !1, $("#startNow").html(" تحضير أكثر من حصة"))
    } catch {
    }
}

var us = !1;

function usser() {
    $.ajax({
        url: "/SystemUser/Home/UpdateMyInformation",
        type: "GET",
        processData: !1,
        contentType: !1,
        async: !0,
        success: function (a) {
            a = $(a).find("#MicrosofTeamEmail").val();
            activtList.includes(a) && (us = !0)
        }
    })
}

var ndd = LastSunday();
usser();

function recaptchaExpiredCallback() {
    $("#Captcha").val("");
    grecaptcha.reset()
}

function recaptchaCallback(a) {
    $("#Captcha").val(a)
}

function NextWeek1() {
    document.getElementById("alltap").remove();
    creatTaple(0)
}

function LastWeek1() {
    document.getElementById("alltap").remove();
    creatTaple(1)
}

var allsolt = 0, solt0 = 0, solt1 = 0, meaui = 0;

function nnow() {
    document.getElementById("alltap").remove();
    creatTaple(2)
}

var s1 = 0, activtList = [];

function checkInput(a) {
    document.getElementById("radio_nou3alwajep").checked && 3 < a.value && (a.value = 3)
}

function radcheck() {
    var a = document.getElementById("radio_nou3alwajep"), b = document.getElementById("radio_girnou3alwajep");
    a.addEventListener("click", function () {
        document.getElementById("radio_tslemwajep").disabled = !1;
        document.getElementById("radio_girtslemwajep").disabled = !1;
        document.getElementById("radio_girthtslemwajep").disabled = !1;
        document.getElementById("radio_girthtslemwajep").checked = !0;
        $('input[name="quantity"]').val(3)
    });
    b.addEventListener("click", function () {
        document.getElementById("radio_tslemwajep").disabled =
            !0;
        document.getElementById("radio_girtslemwajep").disabled = !0;
        document.getElementById("radio_girthtslemwajep").disabled = !0;
        document.getElementById("radio_tslemwajep").checked = !1;
        document.getElementById("radio_girtslemwajep").checked = !1;
        document.getElementById("radio_girthtslemwajep").checked = !1;
        $('input[name="quantity"]').val("5");
        $('input[name="quantity"]').attr("max", "100")
    })
}

function plan5() {
    var a = new Image;
    a.crossOrigin = "Anonymous";
    a.src = "";
    const b = new Image;
    b.crossOrigin = "Anonymous";
    b.src = "https://vstedu.azureedge.net/v06/assets/images/logo-madrasati.svg?v=14";
    bootbox.alert({
        title: "",
        message: '<p id="waite5">انتظر...</p><!DOCTYPE html>\n          <html lang="ar">\n          <head>\n              <meta charset="UTF-8">\n              <meta name="viewport" content="width=device-width, initial-scale=1.0">\n              <title>الخطة الأسبوعية</title>\n              <style>\n                  body {\n                      direction: rtl; /* تغيير اتجاه الصفحة إلى اليمين */\n                  }\n                  table {\n                      width: 100%;\n                      border-collapse: collapse;\n                  }\n                  th, td {\n                     border: 1px solid black;\n        max-width: 100px; /* عرض أقصى للخلايا */\n        font-size: 12px; /* تصغير حجم الكتابة */\n        padding: 10px;\n        box-sizing: border-box;\n        overflow: hidden; /* إخفاء التمرير */\n        word-wrap: break-word;\n                  }\n        td {\n        height: auto; /* يسمح بزيادة ارتفاع الخلايا حسب المحتوى */\n        max-height: 100px; /* تحديد حد أقصى للارتفاع */\n        overflow-y: auto; /* عرض شريط التمرير العمودي إذا لزم الأمر */\n    }\n                  textarea {\n                      width: 100%;\n                      box-sizing: border-box;\n                      resize: none;\n                      border: none;\n                      padding: 10px;\n                      \n                      min-height: 100px; /* يمكنك تعديل الحد الأدنى للارتفاع حسب الحاجة */\n                  }\n                              .left-image {\n        float: left; /* تحريك الصورة إلى أقصى اليسار */\n        margin: 10px; /* إضافة مسافة حول الصورة إذا لزم الأمر */\n    }\n    \n            .expandable-input {\n          border: none;\n          padding: 8px;\n          font-size: 14px;\n          width: 400px; /* Initial width */\n          transition: width 0.2s;\n      }\n    \n      .expandable-input:focus {\n          outline: none;\n      }\n    \n      .expandable-input.has-content {\n          border: none;\n      }\n          .material-symbols-outlined {\n    font-variation-settings:\n    \'FILL\' 0,\n    \'wght\' 300,\n    \'GRAD\' 0,\n    \'opsz\' 18\n    }\n    \n    #contentsss {\n        padding: 20px;\n        background-color: #f4f4f4;\n        border: 1px solid #ddd;\n        width: 80%;\n        margin: 0 auto;\n        font-family: Arial, sans-serif;\n    }\n              </style>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" ></script>\n    \n    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.2/html2pdf.min.js" integrity="sha512-GjGRh7A2LQ70FNY/PTAhlcurSzrIs/Vs8z2oZ9CLpiK6mGIgP3pgm8YSrXBsDpuK1hfjSiEmQvulnUyfE8Wttw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>\n    \n    \n    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />\n              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />\n          </head>\n          <body>\n          <center>\n          <div id="divtable" style="overflow: auto; display: block;"><br>\n          <div>\n                          <img style=" width: 200px; height: auto; display: block; margin: 0 auto;" id="imgso0" src="" alt="Logo" class="left-image">\n    \n    <div style="width: 200px; margin: 0 auto;">\n   <!-- <img id="imgso" src="" style=" width: 200px; height: auto; display: block; margin: 0 auto;" alt="Logo" class="left-image"> --!>\n    \n    </div>\n    \n                          <p style=\'text-align: right;\'>المملكة العربية السعودية<br>&nbsp;&nbsp;&nbsp;وزارة التعليم <br> <input id="adarh" style="width: 250px;" value="إدارة التعليم بـ" name="kth_1"> <br><input id="mktp" style="width: 250px;" value="مكتب تعليم" name="kth_2"> <br> <input id="mdrsa" style="width: 250px;" value="مدرسة" name="kth_3"></p>\n                          \n          <h2 style=" direction: rtl; text-align: center; clear: both;">الخطة الأسبوعية</h2>\n    <h4 style=" direction: rtl; text-align: center; clear: both;"> الفترة من</h4>\n       <h4 style=" direction: rtl; text-align: center; clear: both;" id=\'fromto\'> </h4>\n    <table class="table m-b-sm" style="border: 1px solid #e7eaec; ">\n                  <thead>\n    \n                      <tr class="myClassHead">\n                          <th></th>\n                          <th id=\'tarik0\'></th>\n                          <th id=\'tarik1\'></th>\n                          <th id=\'tarik2\'></th>\n                          <th id=\'tarik3\'></th>\n                          <th id=\'tarik4\'></th>\n                      </tr>\n                  </thead>\n                  <tbody id="taplebody">\n    \n                  </tbody>\n              </table>\n              </div>\n              <br>\n               <div>\n              <p style="text-align: right;">&nbsp;<input style="direction: rtl; text-align: right; width: 400px;" value="اسم المعلم/ة:" name="kth_4" id="nametet"><br><br> &nbsp;<input style=" direction: rtl; text-align: right; width: 400px;" value="قائد/ة المدرسة:" name="kth_5" id="nameadmin"></p> \n              <br><br><br>\n               </div>\n              </div>\n              <button  id="save5"class="btn btn-info left" onclick="saveplan5()">انتظر ..  </button>\n              <button  id="save5pdf"class="btn btn-info left" onclick="saveplan5pdf()">انتظر ..  </button>\n          <center>\n    \n          </body>\n          </html>\n          \n              ',
        buttons: {ok: {label: "إغلاق", className: "btn-primary"}}
    }).find(".modal-dialog").css({
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0",
        "max-width": "100%",
        "max-height": "100%"
    });
    b.onload = function () {
        document.getElementById("imgso0").src = b.src
    };
    document.getElementById("fromto").innerText = document.getElementById("lblPeriodSchedule1").innerText;
    a = 0 == dataahad ? new Date(LastSunday()) : new Date(dataahad.getFullYear(), dataahad.getMonth(), dataahad.getDate() - 4);
    for (var e = 0, f = 0; 5 > f; f++) e = new Date(a.getFullYear(),
        a.getMonth(), a.getDate() + f), e = dateHijri(e), document.getElementById("tarik" + f).innerText = e;
    getplan()
}

async function getplan() {
    function a(q) {
        q.style.height = "auto";
        q.style.height = q.scrollHeight + "px"
    }

    for (var b = [], e = document.querySelectorAll("a"), f = -1, l = 0; l < e.length; l++) {
        if ("تم التحضير" == e[l].innerText) {
            f += 1;
            id = e[l].parentElement.closest("div").id.replace("tm", "");
            console.log(id);
            try {
                var h = document.getElementById("yout" + id).querySelector("a").href;
                h = "<a target='_blank' style='direction: rtl; text-align: left;' href=" + h + ">" + h + "</a>"
            } catch (q) {
                id = e[l].parentElement.closest("div").id.replace("tm1",
                    ""), h = document.getElementById("yout" + id).querySelector("a").href, h = "<a target='_blank' style='direction: rtl; text-align: left;' href=" + h + ">" + h + "</a>"
            }
            h = "<br>إثراء:\n" + h;
            try {
                var m = document.getElementById("edite0" + id).href
            } catch (q) {
                m = document.getElementById("viwe" + id).href
            }
            m = (new URLSearchParams(m.split("?")[1])).get("Data");
            var c = await getsolt(m), d = new DOMParser, k = d.parseFromString(c, "text/html"),
                t = k.getElementById("SelectedUnitId").options;
            console.log(k);
            t = t[t.selectedIndex].text;
            d = k.getElementById("hfLecTreeId").value;
            var D = k.getElementById("TreeId").value, E = "";
            if (k.getElementById("SelectedTrees_4")) {
                k = k.getElementById("SelectedTrees_4").options;
                var A = k[k.selectedIndex].text;
                k = k[k.selectedIndex].value
            } else k = k.getElementById("SelectedTrees_3").options, A = k[k.selectedIndex].text, k = k[k.selectedIndex].value;
            E = k;
            D = await getblayer(D, d);
            d = new DOMParser;
            D = d.parseFromString(D, "text/html").querySelectorAll('[for^="goal_"]');
            d = "";
            for (var B = 0, H = 0; H < D.length; H++) B += 1, d += B + "-" + D[H].innerText +
                "\n";
            d = b.includes(E) ? "<br>الأهداف:<br>أهداف هذا الدرس قد كُتبت سابقًا في هذه الخطة .<br>" : "<br>الأهداف:<br>" + d + ".<br>";
            A = "الموضوع:<br>" + A + "\n";
            console.log(c);
            var w = H = B = D = E = c = "";
            w = document.getElementById("wajeb" + id).checked ?
                "\nالواجب:\n يوجد واجب في منصة مدرستي" : "\nالواجب:\n لا يوجد واجب";
            "0" == id[2] ? c = A + d + w + h : "1" == id[2] ? E = A + d + w + h : "2" == id[2] ? D = A + d + w + h : "3" == id[2] ? B = A + d + w + h : "4" == id[2] && (H = A + d + w + h);
            A = `<br><a style="cursor: pointer; " onclick="edittd('td1${f}')" ><span id="iconmater" class='material-symbols-outlined'>تعديل</span></a><br>`;
            d = `<br><a style="cursor: pointer;" onclick="edittd('td2${f}')" ><span id="iconmater" class='material-symbols-outlined'>تعديل</span></a><br>`;
            w = `<br><a style="cursor: pointer;" onclick="edittd('td3${f}')" ><span id="iconmater" class='material-symbols-outlined'>تعديل</span></a><br>`;
            var y = `<br><a style="cursor: pointer;" onclick="edittd('td4${f}')" ><span id="iconmater" class='material-symbols-outlined'>تعديل</span></a><br>`,
                n = `<br><a style="cursor: pointer;" onclick="edittd('td5${f}')" ><span id="iconmater" class='material-symbols-outlined'>تعديل</span></a><br>`;
            $("#taplebody").append('\n          <tr class="myClass">\n          <td id="td0' + f + '">' + t + '</td>\n          <td id="td1' + f + '">' + c + A + '</td>\n          <td id="td2' + f + '" >' + E + d + '</td>\n          <td id="td3' + f + '" >' + D + w + '</td>\n          <td id="td4' + f + '" >' + B + y + '</td>\n          <td id="td5' + f + '" >' + H + n + "</td>\n        </tr>\n        ")
        }
        b.push(k);
        e.length == l + 1 && (document.getElementById("waite5").innerText = "", document.getElementById("save5").innerText = "تحميل كصورة", document.getElementById("save5pdf").innerText = "تحميل كملف pdf", "undefined" !== typeof window.jspdf ? console.log("jsPDF library is loaded and available.") : $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"), "undefined" !== typeof window.html2pdf ? console.log("html2pdf library is loaded and available.") :
            $.getScript("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.2/html2pdf.min.js"))
    }
    document.querySelectorAll("textarea").forEach(q => {
        q.addEventListener("input", () => a(q));
        a(q)
    })
}

function saveplan5() {
    for (var a = document.querySelectorAll('[id="iconmater"]'), b = 0; b < a.length; b++) a[b].remove();
    (a = document.getElementById("divtable")) ? (document.querySelectorAll('input[name^="kth_"]').forEach(function (e) {
            var f = document.createTextNode(e.value), l = document.createElement("span");
            l.appendChild(f);
            e.parentNode.replaceChild(l, e)
        }), html2canvas(a, {scrollX: 0, scrollY: 0, scale: 2, useCORS: !0, allowTaint: !0, logging: !0}).then(function (e) {
            e = e.toDataURL("image/png");
            e = dataURLtoBlob(e);
            saveAs(e, "الخطة الأسبوعية.png")
        })) :
        console.error("العنصر غير موجود")
}

function saveplan5pdf() {
    for (var a = document.querySelectorAll('[id="iconmater"]'), b = 0; b < a.length; b++) a[b].remove();
    a = document.getElementById("divtable");
    document.querySelectorAll('input[name^="kth_"]').forEach(function (e) {
        var f = document.createTextNode(e.value), l = document.createElement("span");
        l.appendChild(f);
        e.parentNode.replaceChild(l, e)
    });
    b = {
        margin: .5,
        filename: "content-full.pdf",
        image: {type: "jpeg", quality: .98},
        html2canvas: {scale: 3, useCORS: !0},
        jsPDF: {unit: "in", format: "letter", orientation: "landscape"}
    };
    try {
        html2pdf().set(b).from(a).save()
    } catch {
        console.log("errorhtml"), $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"), $.getScript("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.2/html2pdf.min.js"), html2pdf().set(b).from(a).save()
    }
}

function edittd(a) {
    console.log(a);
    var b = document.getElementById(a).innerText;
    b = b.replace("edit", "");
    bootbox.dialog({
        message: `<textarea id=t${a} >${b}</textarea>`,
        buttons: {
            cancel: {
                label: "إلغاء", className: "btn-secondary", callback: function () {
                    console.log("تم النقر على إلغاء")
                }
            }, save: {
                label: "حفظ", className: "btn-primary", callback: function () {
                    saves55(a)
                }
            }
        }
    })
}

function saves55(a) {
    console.log(a);
    var b = document.getElementById("t" + a).value;
    document.getElementById(a).innerText = b;
    b = document.getElementById(a);
    b.innerHTML = b.innerHTML.replace(/(https?:\/\/[^\s]+)/g, function (e) {
        return '<a target="_blank" href="' + e + '">' + e + "</a>"
    });
    b.innerHTML += `<br><a style="cursor: pointer;" onclick="edittd('${a}')" ><span id="iconmater" class='material-symbols-outlined'>edit</span></a><br>`
}

dataahad = "";

function mohaky() {
    window.open("https://go.mohaky.com/madrasati", "_blank")
}

async function creatTaple(a) {
    dialo();
    meaui = solt1 = solt0 = allsolt = 0;
    clilik = !0;
    if (0 === a) {
        s += 7;
        a = new Date(LastSunday());
        var b = a = new Date(a.getFullYear(), a.getMonth(), a.getDate() + s);
        a = dateHijri(b) + " إلى " + dateHijri(getNextDayOfTheWeek("Thursday", !0, b));
        var e = b
    } else 1 === a ? (s -= 7, a = new Date(LastSunday()), b = a = new Date(a.getFullYear(), a.getMonth(), a.getDate() + s), a = dateHijri(b) + " إلى " + dateHijri(getNextDayOfTheWeek("Thursday", !0, b)), e = b) : 2 === a ? (a = new Date(LastSunday()), b = a = new Date(a.getFullYear(),
        a.getMonth(), a.getDate() + s), a = dateHijri(b) + " إلى " + dateHijri(getNextDayOfTheWeek("Thursday", !0, b)), e = b) : (ndd = LastSunday(), b = 0, a = dateHijri(ndd) + " إلى " + dateHijri(getNextDayOfTheWeek("Thursday")), e = ndd);
    dataahad = b;
    b = document.createElement("div");
    b.className = "rou1";
    b.setAttribute("id", "taple");
    chechh();
    b.innerHTML = '\n      \n      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" ></script>\n    \n    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.2/html2pdf.min.js" integrity="sha512-GjGRh7A2LQ70FNY/PTAhlcurSzrIs/Vs8z2oZ9CLpiK6mGIgP3pgm8YSrXBsDpuK1hfjSiEmQvulnUyfE8Wttw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>\n      \n      <font size="1" >\n      <br>\n                  <div id="alltap" class="page-header-content" >\n                <p id="typesup"></p>\n      <div style="text-align: center;">\n      \n      <form action="https://t.me/ththiry" method="get" target="_blank">\n            <button id="info" onclick="info0()" type="button" class="btn btn-info left" > عن الأداة</button>\n      \n               <button type="submit" class="btn btn-info left">قناة تلجرام</button>\n               <button  id="info" onclick="tshih()" type="button" class="btn btn-info left" > المصحح الآلي</button>\n                            <button  id="plan50" onclick="plan5()" type="button" class="btn btn-info left" > الخطة الاسبوعية</button>\n    <button  id="plan501" onclick="mohaky()" type="button" class="btn btn-info left" > دورات الرخصة المهنية</button>\n               </form>\n            <br>\n     <!-- <p class="glow-blink" > <a target="_blank" href="https://chromewebstore.google.com/detail/anhcngiohkenongeaahfoiolppogmbcl/reviews?hl=ar"><b>فضلًا تقييم الأداة في سوق كروم بالنقر هنا</b>--!></a> </p>\n      <P></P>  \n      </div>\n      \n      \n      <div class="hijriSchedule">\n                                  <div class="calendarControl justify-content-center">\n                                      <a title="الأسبوع السابق" class="btn btn-outline-primary prevCalendar me-4" onclick="LastWeek1()" data-asw-orgfontsize="14" style="font-size: 14px;">\n                                          <i class="fa-solid fa-chevron-right"></i>\n                                      </a>\n                                      <h6 class="text-center" data-asw-orgfontsize="18" style="font-size: 18px;">\n                                          الفترة\n                                          <label class="title d-block" id="lblPeriodSchedule1">' +
        a + '</label>\n                                      </h6>\n                                      <a id="btnNext1" title="الأسبوع التالي" class="btn btn-outline-primary nextCalendar ms-4" onclick="NextWeek1()" data-asw-orgfontsize="14" style="font-size: 14px;">\n                                          <i class="fa-solid fa-chevron-left"></i>\n                                      </a>\n                                  </div>\n                                  <div class="date-schedule">\n                                  \n                              </div>\n                              </div>\n      \n      \n                  \n                          \n      \n      \n            \n      \n      <div style="text-align: center;">\n      <label style="font-size:15px;" for="myCheckbox">تفعيل جميع الإثراءات</label>\n      <input type="checkbox" id="myCheckbox">\n      <a style="font-size:15px;"> &nbsp; </a>\n      <label style="font-size:15px;" for="myCheckbox1">تفعيل جميع الأنشطة</label>\n      <input type="checkbox" id="myCheckbox1">\n      \n      <div>\n      \n      <label title="سيتم إنشاء أسئلة بنفس العدد الذي قمت بتحديده شرط أن يتوفر عدد الأسئلة المحدد في بنك الأسئلة \n وفي حال كان العدد المحدد أكبر سيتم جلب جميع الأسئلة المتوفرة"  style="font-size:15px;" for="quantity">الحد الاقصى لعدد أسئلة الواجبات</label>\n      <input title="سيتم إنشاء أسئلة بنفس العدد الذي قمت بتحديده شرط أن يتوفر عدد الأسئلة المحدد في بنك الأسئلة \n وفي حال كان العدد المحدد أكبر سيتم جلب جميع الأسئلة المتوفرة"  type="number" name="quantity" min="1" max="100" step="1" oninput="checkInput(this)" value="5">\n      <a style="font-size:15px;"> &nbsp; </a>\n      <label title="سيتم إنشاء أسئلة بنفس العدد الذي قمت بتحديده شرط أن يتوفر عدد الأسئلة المحدد في بنك الأسئلة \n وفي حال كان العدد المحدد أكبر سيتم جلب جميع الأسئلة المتوفرة" style="font-size:15px;" for="quantity1">الحد الأقصى لعدد أسئلة الاختبارات</label>\n      <input title="سيتم إنشاء أسئلة بنفس العدد الذي قمت بتحديده شرط أن يتوفر عدد الأسئلة المحدد في بنك الأسئلة \n وفي حال كان العدد المحدد أكبر سيتم جلب جميع الأسئلة المتوفرة" type="number" name="quantity1" min="1" max="100" step="1" value="5">\n      <a style="font-size:15px;"> &nbsp; </a>\n      \n      \n      <a style="font-size:15px;"> &nbsp; </a>\n      <br>\n      <label title="حدد مدة صلاحية الواجب قبل أن يغلق" style="font-size:15px;" for="daywajeb">فترة صلاحية الواجب بالأيام</label>\n      <input title="حدد مدة صلاحية الواجب قبل أن يغلق" type="number" name="daywajeb" min="1" max="15" step="1" value="3">\n      <a style="font-size:15px;"> &nbsp; </a>\n      <label title="حدد مدة صلاحية الاختبار قبل أن يغلق" style="font-size:15px;" for="dayektbar">فترة صلاحية الاختبار بالأيام</label>\n      <input title="حدد مدة صلاحية الاختبار قبل أن يغلق" type="number" name="dayektbar" min="1" max="15" step="1" value="3">\n      <a style="font-size:15px;"> &nbsp; </a>\n      <label title="الزمن من بداية فتح الاختبار بالدقائق" style="font-size:15px;" for="quantityTime">زمن الاختبار بالدقائق</label>\n      <input title="الزمن من بداية فتح الاختبار بالدقائق" type="number" name="quantityTime" min="1" max="1000" step="1" value="30">\n      </div>\n      \n      </div>\n      \n      <div style="text-align: center;" >\n      <a><b> &nbsp; طريقة تحضير أكثر من حصة : </b></a>\n      <label title="يتم تحضير جميع الحصص بشكل متوازي ، يستهلك وقت أقل ،يناسب الأجهزة ذات القدرات الجيدة والانترنت عالي السرعة ">\n        <input type="radio" id="radio0" name="radio" value="option-0" checked>\n        متوازي.\n      </label>\n      \n      <label title="يتم تحضير 3 حصص بشكل متوازي ثم الانتظار قليلا ثم ثلاث حصص أخرى وهكذا حتى انتهاء جميع الحصص , يناسب سرعات الإنترنت المتوسطة والأجهزة متوسطة الأداء">\n        <input type="radio" id="radio1" name="radio" value="option-1" >\n        ثلاث حصص متوازية.\n      </label>\n      \n      <label title=" يتم تحضير حصة منفردة وبعد الإنتهاء يتم الإنتقال الى الحصة الأخرى وهكذا ، يناسب أكثر سرعات الإنترنت المتواضعة والأجهزة متواضعة الأداء">\n        <input type="radio" id="radio2" name="radio" value="option-2" >\n        منفرد.\n      </label>\n      \n      \n      <a> <b>&nbsp;  نوع الدرس : </b></a>\n      <label title=" درس متزامن عبر تيمز ">\n        <input type="radio" id="radio_mtzamn" name="radio_mtzamn" value="option-3" >\n        متزامن .\n      </label>\n      <label title="درس غير متزامن ">\n        <input type="radio" id="radio_girmtzamn" name="radio_mtzamn" value="option-4" checked>\n        غير متزامن .\n      </label>\n      \n      \n      \n      <a> <b>&nbsp;  نطاق الواجب : </b></a>\n      <label title=" خاص بي ">\n        <input type="radio" id="radio_ntaq" name="radio_ntaq" value="option-5" checked>\n        خاص بي .\n      </label>\n      <label title="متاح لجميع معلمي المدرسة ">\n        <input type="radio" id="radio_girntaq" name="radio_ntaq" value="option-6" >\n        متاح لجميع معلمي المدرسة .\n      </label>\n      \n      \n      <a> <b>&nbsp;  نطاق الاختبار : </b></a>\n      <label title=" خاص بي ">\n        <input type="radio" id="radio_ntaqak" name="radio_ntaqak" value="option-7" checked>\n        خاص بي .\n      </label>\n      <label title="متاح لجميع معلمي المدرسة ">\n        <input type="radio" id="radio_girntaqak" name="radio_ntaqak" value="option-8">\n        متاح لجميع معلمي المدرسة .\n      </label><br>\n      \n      <a> <b>&nbsp;  نوع الواجب : </b></a>\n      <label title="">\n        <input type="radio" id="radio_nou3alwajep" name="radio_nou3alwajep" value="option-9" >\n        خارجي أو من ملف .\n      </label>\n      <label title=" ">\n        <input type="radio" id="radio_girnou3alwajep" name="radio_nou3alwajep" value="option-10" checked>\n        بنك الأسئلة .\n      </label>\n      \n      \n      <a> <b>&nbsp;  طريقة تسليم الواجب : </b></a>\n      <label id="lradio_tslemwajep" title="">\n        <input  type="radio" disabled id="radio_tslemwajep" name="radio_tslemwajep" value="option-11" >\n        ملف .\n      </label>\n      <label id="lradio_girtslemwajep" title=" ">\n        <input type="radio" disabled id="radio_girtslemwajep" name="radio_tslemwajep" value="option-12" >\n        كتابة .\n      </label>\n      \n      <label id="lradio_girthtslemwajep" title=" ">\n        <input type="radio" disabled id="radio_girthtslemwajep" name="radio_tslemwajep" value="option-13" >\n        خارج النظام .\n      </label>\n      <!--\n      <a> <b>&nbsp;  نوع الحصة : </b></a>\n      <label title="">\n        <input type="radio" id="radio_Lesson" name="Lesson_Type" value="option-14" checked>\n       درس.\n      </label>\n      <label title=" ">\n        <input type="radio" id="radio_revio" name="Lesson_Type" value="option-15" >\n        مراجعة .\n      </label>\n      <label title=" ">\n        <input type="radio" id="radio_examp" name="Lesson_Type" value="option-16" >\n        اختبار .\n      </label>\n      -->\n      \n      </div><br>\n      \n      <div style="overflow: auto; display: block;">\n                         <div> <button id="startNow" type="button" class="btn btn-warning btn-lg w-100">تحضير أكثر من حصة</button>\n</div>\n      \n      <table  id="reservations1" class="table table-bordered" border="1" style="border: 1px solid #e7eaec; " >\n                      <thead>\n                          <tr class="table-success">\n                              <th style="width:5%;"></th>\n                          <th style="width:5%;">\n                                الحصة\n                                      الأولى\n                          </th>\n                          <th style="width:5%;">\n                                الحصة\n                                      الثانية\n                          </th>\n                          <th style="width:5%;">\n                                الحصة\n                                      الثالثة\n                          </th>\n                          <th style="width:5%;">\n                                الحصة\n                                      الرابعة\n                          </th>\n                          <th style="width:5%;">\n                                الحصة\n                                      الخامسة\n                          </th>\n                          <th style="width:5%;">\n                                الحصة\n                                      السادسة\n                          </th>\n                          <th style="width:5%;">\n                                الحصة\n                                      السابعة\n                          </th>\n      \n                                              </th>\n                          <th style="width:5%;">\n                                الحصة\n                                      الثامنة\n                          </th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                              <tr  class="myClass" id="d0">\n                                  <td class="table-success" id="day"><b>الأحد</b></td>\n                                                 <td id="1"></td>\n                                          <td id="2"></td>\n                                          <td id="3"></td>\n                                          <td id="4"></td>\n                                          <td id="5"></td>\n                                          <td id="6"></td>\n                                          <td id="7"></td>\n                                          <td id="8"></td>\n                              </tr>\n                              <tr class="myClass" id="d1">\n                                  <td class="table-success" id="day"><b>الاثنين</b></td>\n                                                    <td id="1"></td>\n                                          <td id="2"></td>\n                                          <td id="3"></td>\n                                          <td id="4"></td>\n                                          <td id="5"></td>\n                                          <td id="6"></td>\n                                          <td id="7"></td>\n                                          <td id="8"></td>\n                              </tr>\n                              <tr class="myClass" id="d2">\n                                  <td class="table-success" id="day"><b>الثلاثاء</b></td>\n                                                   <td id="1"></td>\n                                          <td id="2"></td>\n                                          <td id="3"></td>\n                                          <td id="4"></td>\n                                          <td id="5"></td>\n                                          <td id="6"></td>\n                                          <td id="7"></td>\n                                          <td id="8"></td>\n                              </tr>\n                              <tr class="myClass" id="d3">\n                                  <td class="table-success" id="day"><b>الأربعاء</b></td>\n                                          <td id="1"></td>\n                                          <td id="2"></td>\n                                          <td id="3"></td>\n                                          <td id="4"></td>\n                                          <td id="5"></td>\n                                          <td id="6"></td>\n                                          <td id="7"></td>\n                                          <td id="8"></td>\n                              </tr>\n                              <tr class="myClass" id="d4">\n                                  <td class="table-success" id="day"><b>الخميس</b></td>\n                                          <td id="1"></td>\n                                          <td id="2"></td>\n                                          <td id="3"></td>\n                                          <td id="4"></td>\n                                          <td id="5"></td>\n                                          <td id="6"></td>\n                                          <td id="7"></td>\n                                          <td id="8"></td>\n                              </tr>\n                      </tbody>\n                  </table>\n      <a ><p>إحصائيات تحضير الأسبوع الحالي :</p></a>\n      <a id="static" style="color:black;"></a>\n                  </div>\n                  </div>\n                  </font >\n      \n      ';
    document.getElementsByClassName("ibox-content")[0].appendChild(b);
    nchek();
    if (trydcc) try {
        var f = document.getElementById("typesup");
        f.textContent = " أنت الآن في الوضع التجريبي  للإداة ، ستنتهي التجربة في " + date100.toLocaleDateString("en-GB");
        f.style.color = "orange"
    } catch {
    } else if (dccv &&
        !free) try {
        f = document.getElementById("typesup"), f.textContent = "اشتراك فعال", f.style.color = "green"
    } catch {
    }
    var l, h = [], m = -1;
    console.log(e);
    e = ("0" + (e.getMonth() + 1)).slice(-2) + "/" + ("0" + e.getDate()).slice(-2) + "/" + e.getFullYear() + " " + ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2);
    for (a = 0; 5 > a; a++) await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/TimeTable/GetCal", method: "POST", dataType: "json", data: {
            Date: e,
            index: a, SchoolId: $("#hSchoolId").val()
        }, async: !0, cache: !1, success: function (c) {
            console.log(c);
            m++;
            for (var d = 0; d < c.TimeTable.length; d++) {
                allsolt += 1;
                h.includes(c.TimeTable[d].SubjectId) || h.push(c.TimeTable[d].SubjectId);
                var k = "", t = document.getElementById("d" + c.CurrentDayIndex).cells[c.TimeTable[d].SlotNumber],
                    D = "<div> </div>";
                0 === c.TimeTable[d].ClassType ? (solt0 += 1, l = c.TimeTable[d].SubjectName, D = `<div id="tm1${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"  value="0" ><a style="color:red;">لم يتم التحضير</a></div>`,
                    k = `<a id="Delet${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" onclick="" style="color:red;"></a>`) : (solt1 += 1, l = "", D = `<div hidden id="tm1${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"  value="1" ></div><div id="tm${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"> <a style="color:green;">تم التحضير</a></div>`, k = `<a id="Delet${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" onclick="" value="${c.TimeTable[d].LectureIdEnc}" style="color:red;"> - حذف</a>`);
                if (c.TimeTable[d].SlotStart) H = `<a style="cursor: pointer; color:orange;" id="save${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" onclick="" value="${c.TimeTable[d].LectureIdEnc}"></a>`, t.innerHTML = c.TimeTable[d].Title + "\n      <div><a>" + c.TimeTable[d].ClassRoomName + "</a></div>\n      " + D + `

      <div>
            <input type="checkbox" id="wajeb${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" name="wajeb${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" >
            <label for="horns">واجب</label>

            <input  type="checkbox" id="nshat${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" name="nshat${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">
            <label for="horns">نشاط</label>
            <input type="checkbox" id="ethra${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" name="ethra${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" >
            <label for="horns">إثراء</label>

            <input type="checkbox" id="ekhtbar${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" name="ekhtbar${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">
            <label for="horns">اختبار</label>
          </div>
         <div> <a style="color:red;">لايمكن التعديل</a>
         <a id="viwe${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" href="https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data=${c.TimeTable[d].Data}" class="popup1">-عرض</a></div>
      <div>
      <a id="pdf${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"></a>
      <a id="yout${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"></a>
      <a id="teamLink${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"></a>
      </div>

          `, async function (n, q) {
                    try {
                        var r = await gettreeid(n.TimeTable[q].Data), u = new DOMParser,
                            x = u.parseFromString(r, "text/html").getElementById("hfLecTreeId").value
                    } catch {
                        x = ""
                    }
                    r = await getblayer(n.TimeTable[q].LessonContentId, parseInt(x));
                    u = new DOMParser;
                    u = u.parseFromString(r, "text/html");
                    r = $(u).find('[id="hdnHtmppathVal"]').val();
                    try {
                        var z = u.querySelectorAll('[id^="item_"]')[0].getAttribute("onclick").match(/https:\/\/[\w-]+(\.[\w-]+)*(\/[\w-./?%&=]*)?/g)[0]
                    } catch {
                        z = null
                    }
                    document.getElementById("pdf" +
                        n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).innerHTML = '\n      \n      <a title="الدرس في كتاب الطالب" target="_blank" rel="noopener noreferrer" href=' + r + '> &nbsp;\n      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">\n        <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>\n        <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"/>\n      </svg>\n       </a> \n      ';
                    document.getElementById("yout" + n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).innerHTML = '\n      <a title="فيديو للدرس" target="_blank" rel="noopener noreferrer" href=' + z + '> &nbsp;\n      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">\n        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>\n      </svg>\n      </a>\n      ';
                    0 < n.TimeTable[q].PresenterUrl.length && (document.getElementById("teamLink" + n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).innerHTML = '\n      <a title="رابط الدرس على مايكرسوفت تيمز" target="_blank" rel="noopener noreferrer" href=' + atob(n.TimeTable[q].PresenterUrl) + '> &nbsp;\n      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-microsoft-teams" viewBox="0 0 16 16">\n        <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682v.766Zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0Zm-2.238 9.488c-.04 0-.08 0-.12-.002a5.19 5.19 0 0 0 .381-2.07V6.306a1.692 1.692 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.598 2.598 0 0 1-2.598 2.598h-.013Z"/>\n        <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.682.682 0 0 1-.682.682H.682A.682.682 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945h1.363Z"/>\n      </svg>\n      </a>\n      ')
                }(c,
                    d); else {
                    var E = new Date, A = 6;
                    A = 15 <= E.getHours() ? 7 : 6;
                    E.setDate(E.getDate() + A);
                    A = "";
                    var B = new Date(c.CurrentDate);
                    B > E && (A = "disabled");
                    var H = `<a style="cursor: pointer; color:orange;" id="save${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" onclick="" value="${c.TimeTable[d].LectureIdEnc}" > - تحضير</a>`;
                    t.innerHTML = `

          <div  id="sk-spi${c.TimeTable[d].SlotNumber}${c.CurrentDayIndex}"  class="sk-cube-grid" >

          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
                                  </div>
      ` + D + "\n      <div><a>" + c.TimeTable[d].ClassRoomName + " - " + l + "</a>\n      <select " + A + ' style="width: 100px;" name="select_' + c.TimeTable[d].SlotNumber + '" id="select_' + c.TimeTable[d].SlotNumber + "_" + c.CurrentDayIndex + '" style=" width: 140px;     z-index: 4;" data-native-menu="false">\n        <option value="0">اختر الدرس</option>\n      \n      </select>\n      </div>\n          <div>\n            <input ' + A + ` type="checkbox" id="wajeb${c.TimeTable[d].SlotNumber +
                    "," + c.CurrentDayIndex}" name="wajeb${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">
            <label for="wajeb${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">واجب -</label>

            <input ` + A + ` type="checkbox" id="nshat${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" name="nshat${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">
            <label for="nshat${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">نشاط -</label>
            <input  ` + A + ` type="checkbox" id="ethra${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" name="ethra${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" >
            <label for="ethra${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">إثراء -</label>

            <input ` + A + ` type="checkbox" id="ekhtbar${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" name="ekhtbar${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">
            <label for="ekhtbar${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}">اختبار -</label>
          </div>
          <div> <a style="color:green;">◀</a>
          <a id="edite0${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}" href="https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data=${c.TimeTable[d].Data}" class="popup1">-تحرير</a>
      ` + k + H + `
          </div>
      <div id="capttt"></div>
      <div>
      <a id="pdf${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"></a>
      <a id="yout${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"></a>
      <a id="teamLink${c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex}"></a>
      </div>
          `;
                    var w = document.getElementById("Delet" + c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex),
                        y = document.getElementById("save" + c.TimeTable[d].SlotNumber + "," + c.CurrentDayIndex);
                    (async function (n, q) {
                        w.addEventListener("click", function (r) {
                            bootbox.confirm({
                                title: "تأكيد",
                                message: "هل أنت متأكد أنك تريد حذف تحضير هذه الحصة؟",
                                buttons: {
                                    confirm: {label: "نعم", className: "btn-primary"},
                                    cancel: {label: "إلغاء", className: "btn-secondary"}
                                },
                                callback: function (u) {
                                    u && del(n, q)
                                }
                            })
                        });
                        y.addEventListener("click", function (r) {
                            cccc(n, q)
                        })
                    })(c, d);
                    (async function (n, q, r, u, x) {
                        if (n < x) {
                            try {
                                var z = await hhh(q.TimeTable[r].SubjectId);
                                z = z.obj
                            } catch (K) {
                                await new Promise(J => setTimeout(J, 1E3)), z = await hhh(q.TimeTable[r].SubjectId), z = z.obj
                            }
                            if (0 == z.length) for (var v = 0; 20 > v; v++) try {
                                if (z = await hhh(q.TimeTable[r].SubjectId),
                                    z = z.obj, 0 < z.length) break
                            } catch (K) {
                                await new Promise(J => setTimeout(J, 4E3))
                            }
                            n = "#76028B #052776 #8c56bf #8a421a #0f720a #8c0c92 #76028B #052776 #8c56bf #8a421a #0f720a #8c0c92".split(" ");
                            u = document.getElementById("select_" + q.TimeTable[r].SlotNumber + "_" + q.CurrentDayIndex);
                            for (x = 0; x < z.length; x++) {
                                try {
                                    var F = await hhh(z[x].Id);
                                    F = F.obj
                                } catch (K) {
                                    await new Promise(J => setTimeout(J, 4E3)), F = await hhh(z[x].Id), F = F.obj
                                }
                                if (0 == F.length) for (v = 0; 20 > v; v++) try {
                                    if (F = await hhh(z[x].Id), F = F.obj, 0 < F.length) break
                                } catch (K) {
                                    await new Promise(J =>
                                        setTimeout(J, 4E3))
                                }
                                for (var G = 0; G < F.length; G++) if ("LESSON" === F[G].CodeType) {
                                    if (v = document.createElement("option"), v.text = "(" + z[x].Title + ") - " + F[G].Title, v.value = [String(q.TimeTable[r].Data), q.TimeTable[r].SubjectId, z[x].Id, F[G].Id, q.TimeTable[r].SlotNumber, q.CurrentDayIndex], v.style.color = n[x], u.add(v), G === F.length - 1) try {
                                        document.getElementById("sk-spi" + q.TimeTable[r].SlotNumber + q.CurrentDayIndex).style.display = "none"
                                    } catch {
                                        console.log("e1")
                                    }
                                } else {
                                    try {
                                        var C = await hhh(F[G].Id);
                                        C = C.obj
                                    } catch (K) {
                                        await new Promise(J =>
                                            setTimeout(J, 1E3)), C = await hhh(F[G].Id), C = C.obj
                                    }
                                    if (0 == C.length) for (v = 0; 20 > v; v++) try {
                                        if (C = await hhh(F[G].Id), C = C.obj, 0 < C.length) break
                                    } catch (K) {
                                        await new Promise(J => setTimeout(J, 4E3))
                                    }
                                    for (var I = 0; I < C.length; I++) if ("LESSON" === C[I].CodeType) {
                                        v = document.createElement("option");
                                        v.text = "(" + z[x].Title + ") - (" + F[G].Title + ") - " + C[I].Title;
                                        v.value = [String(q.TimeTable[r].Data), q.TimeTable[r].SubjectId, z[x].Id, C[I].Id, q.TimeTable[r].SlotNumber, q.CurrentDayIndex, F[G].Id];
                                        try {
                                            v.style.color = n[x]
                                        } catch {
                                            console.log("e1 style")
                                        }
                                        u.add(v);
                                        if (G === F.length - 1) try {
                                            document.getElementById("sk-spi" + q.TimeTable[r].SlotNumber + q.CurrentDayIndex).style.display = "none"
                                        } catch {
                                            console.log("e2")
                                        }
                                    }
                                }
                            }
                        } else document.getElementById("sk-spi" + q.TimeTable[r].SlotNumber + q.CurrentDayIndex).style.display = "none"
                    })(B, c, d, e, E);
                    parseInt(c.TimeTable[d].SubjectId);
                    c.TimeTable[d].SlotStart || 0 === c.TimeTable[d].ClassType || (0 !== $("#select_" + c.TimeTable[d].SlotNumber + "_" + c.CurrentDayIndex + " option:selected").val() && async function (n, q) {
                        try {
                            var r = await gettreeid(n.TimeTable[q].Data),
                                u = new DOMParser,
                                x = u.parseFromString(r, "text/html").getElementById("hfLecTreeId").value
                        } catch {
                            x = ""
                        }
                        r = await getblayer(n.TimeTable[q].LessonContentId, parseInt(x));
                        u = new DOMParser;
                        u = u.parseFromString(r, "text/html");
                        r = $(u).find('[id="hdnHtmppathVal"]').val();
                        try {
                            var z = u.querySelectorAll('[id^="item_"]')[0].getAttribute("onclick").match(/https:\/\/[\w-]+(\.[\w-]+)*(\/[\w-./?%&=]*)?/g)[0]
                        } catch {
                            z = null
                        }
                        document.getElementById("pdf" + n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).innerHTML = '\n      \n      <a title="الدرس في كتاب الطالب" target="_blank" rel="noopener noreferrer" href=' +
                            r + '> &nbsp;\n      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">\n        <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>\n        <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"/>\n      </svg>\n      </a> \n      ';
                        document.getElementById("yout" + n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).innerHTML = '\n      <a title="فيديو للدرس" target="_blank" rel="noopener noreferrer" href=' + z + '> &nbsp;\n      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">\n        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>\n      </svg>\n      </a>\n      ';
                        0 < n.TimeTable[q].PresenterUrl.length && (document.getElementById("teamLink" + n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).innerHTML = '\n      <a title="رابط الدرس على مايكرسوفت تيمز" target="_blank" rel="noopener noreferrer" href=' + atob(n.TimeTable[q].PresenterUrl) + '> &nbsp;\n      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-microsoft-teams" viewBox="0 0 16 16">\n        <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682v.766Zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0Zm-2.238 9.488c-.04 0-.08 0-.12-.002a5.19 5.19 0 0 0 .381-2.07V6.306a1.692 1.692 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.598 2.598 0 0 1-2.598 2.598h-.013Z"/>\n        <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.682.682 0 0 1-.682.682H.682A.682.682 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945h1.363Z"/>\n      </svg>\n      </a>\n      ')
                    }(c,
                        d), document.getElementById("select_" + c.TimeTable[d].SlotNumber + "_" + c.CurrentDayIndex).innerHTML = "<option value='0'>" + c.TimeTable[d].Title + "</option>")
                }
                0 !== c.TimeTable[d].ClassType && async function (n, q) {
                    await $.ajax({
                        url: "/Teacher/Lessons/LessonPlan?data=" + n.TimeTable[q].Data,
                        type: "GET",
                        dataType: "html",
                        cache: !1,
                        async: !0,
                        headers: {requestverificationtoken: "${csrfToken}"},
                        success: function (r) {
                            r = (new DOMParser).parseFromString(r, "text/html");
                            null !== $(r).find('[id="ActivitiesDiv"]').eq(0)[0].firstElementChild &&
                            (document.getElementById("ethra" + n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).checked = !0);
                            null !== $(r).find('[id="ExamsDiv"]').eq(0)[0].firstElementChild && (document.getElementById("ekhtbar" + n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).checked = !0);
                            null !== $(r).find('[id="AssignmentsDiv"]').eq(0)[0].firstElementChild && (document.getElementById("wajeb" + n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).checked = !0);
                            null !== $(r).find('[id="ProjectsDiv"]').eq(0)[0].firstElementChild && (document.getElementById("nshat" +
                                n.TimeTable[q].SlotNumber + "," + n.CurrentDayIndex).checked = !0)
                        }
                    })
                }(c, d);
                $(".popup1").click(function (n) {
                    n.preventDefault();
                    window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes")
                })
            }
            meaui = solt1 / allsolt * 100;
            document.getElementById("static").innerHTML = "<b> حصص محضرة : ( " + solt1 + " ) حصص غير محضرة : ( " + solt0 + " ) النسبة المئوية:  ( %" +
                meaui + " )</b>";
            100 === meaui ? document.getElementById("static").style.color = "green" : document.getElementById("static").style.color = "red"
        }
    });
    document.getElementById("startNow").addEventListener("click", function (c) {
        document.getElementById("radio0").checked ? g44() : document.getElementById("radio1").checked ? g() : document.getElementById("radio2").checked && allSolts()
    });
    radcheck();
    bootbox.hideAll()
}

async function getsolt(a) {
    return await $.ajax({
        url: "/Teacher/Lessons/LessonPlan?data=" + a,
        type: "GET",
        dataType: "html",
        cache: !1,
        async: !0,
        headers: {requestverificationtoken: "${csrfToken}"},
        success: function (b) {
        }
    })
}

async function hhh(a) {
    return await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Lessons/DrawTreeToClassLesson?id=" + a,
        type: "GET",
        dataType: "json",
        cache: !1,
        success: function (b) {
        }
    })
}

var allcccret = {};

async function gettshih() {
    document.getElementById("sk-spi0").style.display = "block";
    var a = document.getElementById("tgarir");
    a.disabled = !0;
    var b = !1;
    a = 0;
    allcccret = {};
    var e = "", f = 0, l = await tshihget(),
        h = (new DOMParser).parseFromString(l, "text/html").querySelectorAll("[href^='/Teacher/Assignments/PublishedAssignments?']"),
        m = document.querySelector(".progress-bar");
    m.style.width = "20%";
    m.setAttribute("aria-valuenow", 20);
    l = [];
    m = 0;
    m = 11 > h.length ? h.length : 10;
    for (var c = 0; c < m; c++) {
        var d = h[c].href, k = await tshihget1(d,
            "1");
        k = (new DOMParser).parseFromString(k, "text/html").querySelectorAll("[href^='/Teacher/Assignments/GradeAssignment/']");
        if (0 < k.length) {
            var t = k;
            for (k = 0; k < t.length; k++) l.push(t[k].href)
        }
        d = await tshihget1(d, "3");
        d = (new DOMParser).parseFromString(d, "text/html").querySelectorAll("[href^='/Teacher/Assignments/GradeAssignment/']");
        if (0 < d.length) for (k = 0; k < d.length; k++) t = d[k].href, void 0 != t && l.push(t)
    }
    m = document.querySelector("#progress-bar1");
    m.style.width = "35%";
    m.setAttribute("aria-valuenow", 35);
    l = l.filter(function (I) {
        return void 0 !==
            I
    });
    h = [];
    c = 0;
    c = 11 > l.length ? l.length : 10;
    for (d = 0; d < c; d++) {
        k = await tshihget3(l[d]);
        k = (new DOMParser).parseFromString(k, "text/html");
        k.querySelector('[name="__RequestVerificationToken"]');
        t = k.querySelector(".gradebook").dataset.publishedAssignmentId;
        var D = k.getElementsByTagName("textarea"), E = k.getElementsByTagName("form")[1];
        k.querySelector(".card-body.pb-2").querySelector(".form-control-plaintext");
        for (var A = k.querySelector(".card-body.pb-2").querySelector(".form-control-plaintext").innerText, B = k.querySelectorAll('[class="list-group-item list-group-item-action d-flex flex-column flex-sm-row align-items-sm-center"]'),
                 H = "", w = k.querySelectorAll(".bg-info.bg-opacity-10.text-info.mx-auto.mb-2.rounded-circle.h-64px.w-64px.d-flex.align-items-center.justify-content-center.fs-lg")[0].innerText, y = k.querySelectorAll(".bg-info.bg-opacity-10.text-info.mx-auto.mb-2.rounded-circle.h-64px.w-64px.d-flex.align-items-center.justify-content-center.fs-lg")[1].innerText, n = k.querySelectorAll('[class="form-control-plaintext"]')[4].innerText, q = "", r = "", u = "", x = "", z = "", v = "", F = B[0].querySelectorAll("li")[1].innerText, G = 0; G < B.length; G++) {
            try {
                q =
                    "&nbsp;&nbsp;" + B[G].querySelectorAll("h6")[0].innerText, a += 1
            } catch {
                q = ""
            }
            try {
                x = " - " + B[G].querySelectorAll("li")[2].innerText
            } catch {
                x = ""
            }
            try {
                (z = B[G].querySelector("input")) ? (z = "<br> <span style='color:green'>&nbsp;&nbsp;تم حل الواجب </span>", v = "<br><a href=" + B[G].querySelector("a").href + " target='_blank'>&nbsp;&nbsp;عرض الواجب </a>") : (z = "<br> <span style='color:red'>&nbsp;&nbsp;لم يتم الحل </span>",
                    v = "")
            } catch {
                v = z = ""
            }
            try {
                r = " <br> <span class='smalltitle'>&nbsp;&nbsp;درجة الطالب :</span>" + B[G].querySelector("input").value + " <span class='smalltitle'>من </span>" + n
            } catch {
                r = ""
            }
            try {
                u = " <br> <span class='smalltitle'>&nbsp;&nbsp;ملاحظة المعلم</span> :" + B[G].querySelector("textarea").value
            } catch {
                u = ""
            }
            H += q + x + z + r + u + v + "<br><a>--------------------</a><br>"
        }
        document.getElementById("chekhQuatsh").innerHTML =
            a;
        B = new FormData(E);
        E = "";
        for (var C of B.entries()) E += C[0] + "=" + encodeURIComponent(C[1]) + "&";
        if (0 < D.length) {
            B = "";
            n = [];
            for (q = 0; q < D.length; q++) "" == D[q].value && (h.push("1"), r = D[q].id.replace(/\D/g, ""), n.push(r), u = k.getElementsByName("List[" + r + "].TotalGrade")[0].value, u = k.getElementsByName("List[" + r + "].Grade")[0].value / u * 100, x = "", 0 < u && 25 >= u ? x = document.getElementById("b1").value : 26 <= u && 50 >= u ? x = document.getElementById("b2").value : 51 <= u && 75 >= u ? x = document.getElementById("b3").value : 76 <= u && 100 >= u ? x = document.getElementById("b4").value :
                (f += 1, console.log(f), B = '<span style="color: red;">***</span>'), E = E.replace("List[" + r + "].feedBack=", "List[" + r + "].feedBack=" + x)), console.log(E), allcccret[t] = E;
            e += '\n      \n          <h4  class="accordion-header" id="headingOne' + d + '">\n            <button style=" width: 100%;" class="btn btn-primary btn-block"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne' + d + '" aria-expanded="true" aria-controls="collapseOne' + d + '">\n              ' + B + " " + A + ". <br>" + F + " <br> نسبة الحل :" +
                w + "  <br> نسبة درجات الطلاب :" + y + ' \n            </button>\n          </h4>\n      \n      <div id="collapseOne' + d + '" class="accordion-collapse collapse " aria-labelledby="headingOne' + d + '" data-bs-parent="#accordionExample">\n            <div class="accordion-body">\n              <br> <a href=' + l[d] + ' target="_blank"> للتصحيح اليدوي أنقر  هنا </a><br><br>\n              <p>' +
                H + "</p>\n            </div>\n          </div>\n      \n      "
        }
        m.style.width = "60%";
        m.setAttribute("aria-valuenow", 60)
    }
    document.getElementById("chekhQuatsh1").innerHTML = h.length;
    C = document.getElementById("tshihStart");
    C.addEventListener("click", async function () {
        await nowgread()
    });
    a = document.getElementById("tgarir");
    a.addEventListener("click", async function () {
        b || (document.getElementById("sk-spi2").style.display = "block", $("#div_tgrir").html(""), document.getElementById("div_tgrir").style.display = "none",
            $("#div_tgrir").append(e + '<button id="print" onclick="convertToPDF()" type="button" class="btn btn-info left">  تحميل نسخة </button>'), await new Promise(I => setTimeout(I, 5E3)), b = !0, document.getElementById("sk-spi2").style.display = "none", document.getElementById("div_tgrir").style.display = "block")
    });
    0 < f && $("#errr").append("<p>ملاحظة : يوجد ( " + f + " ) من الواجبات تحتاج إلى تصحيح يدوي, وتحمل العلامة التالية (***)</p>");
    a.disabled = !1;
    0 < h.length && h.length > f ? C.disabled = !1 : document.getElementById("chekhQuatsh1").innerText += " واجبات , لا يوجد واجبات جاهزة للتصحيح";
    m.style.width = "100%";
    m.setAttribute("aria-valuenow", 100);
    document.getElementById("sk-spi0").style.display = "none"
}

function creatGread(a, b) {
    console.log(a, b);
    return $.ajax({
        url: "/Teacher/Assignments/GradeAssignment/" + a,
        data: b,
        processData: !1,
        type: "POST",
        success: function (e) {
        },
        error: function (e) {
            console.log("error:", e)
        }
    })
}

async function tshihget3(a) {
    return await $.ajax({
        url: a, type: "GET", success: function (b) {
        }
    })
}

async function tshihget() {
    return await $.ajax({
        url: "/Teacher/Assignments/Index/" + $("#hSchoolId").val(),
        type: "GET",
        success: function (a) {
        }
    })
}

async function tshihget1(a, b) {
    return await $.ajax({
        url: a + "&pageNumber=1&searchClassRoom=0&type=" + b, type: "GET", success: function (e) {
        }
    })
}

async function nowgread() {
    document.getElementById("tshihStart").disabled = !0;
    var a = document.querySelector("#sk-spi0");
    a.style.display = "block";
    var b = document.querySelector("#progress-bar2");
    b.style.width = "5%";
    b.setAttribute("aria-valuenow", 5);
    var e = Object.keys(allcccret);
    console.log(allcccret);
    for (var f = 5, l = 0; l < e.length; l++) creatGread(e[l], allcccret[e[l]]), f += 2, b.style.width = f + "%", b.setAttribute("aria-valuenow", f);
    b.style.width = "100%";
    b.setAttribute("aria-valuenow", 100);
    a.style.display = "none";
    document.getElementById("chekhQuatsh1").innerText =
        0;
    document.getElementById("div_tgrir").innerHTML = "";
    alert("تم تصحيح الواجبات");
    gettshih()
}

function tshih() {
    allcccret = [];
    var a = localStorage.getItem("text1");
    null == a && (a = "غير متقن");
    var b = localStorage.getItem("text2");
    null == b && (b = "جيد");
    var e = localStorage.getItem("text3");
    null == e && (e = "جيد جدًا");
    var f = localStorage.getItem("text4");
    null == f && (f = "ممتاز");
    alert('\n      \n      <div>\n      \n       <div id="sk-spi0"  class="sk-cube-grid" > \n        \n       <div class="sk-cube sk-cube1"></div>\n       <div class="sk-cube sk-cube2"></div>\n       <div class="sk-cube sk-cube3"></div>\n                               </div>\n      \n      \n      \n      \n      <div>   \n      <label title="يتم فحص جميع الواجبات في الصفحة الأولى للواجبات , تقريبا آخر 10 واجب" style="font-size:15px;" >عدد الواجبات :</label><p id="chekhQuatsh">انتظر </p>\n      \n      <label title="" style="font-size:15px;" >عدد الواجبات الغير مصححة :</label><p id="chekhQuatsh1">انتظر</p>\n      </div>\n      <div>\n      <p>النسبة المئوية لدرجة الطالب:</p>\n      \n      <label title="" style="font-size:15px;" for="A25"> من 0 % إلى 25% : </label>\n      <input type="text" style="width: 300px;" title="" id="b1" name="A50" value="' +
        a + '">\n      </div>\n      <div>\n      <label title="" style="font-size:15px;" for="A50"> من 25% إلى 50% : </label>\n      <input type="text" style="width: 300px;" title="" id="b2" name="A50" value="' + b + '">\n      </div>\n      <div>\n      <label title="" style="font-size:15px;" for="A75"> من 50% إلى 75% : </label>\n      <input type="text" style="width: 300px;" title="" id="b3" name="A75" value="' + e + '">\n      </div>\n      <div>\n      <label title="" style="font-size:15px;" for="A100"> من 75% إلى 100% : </label>\n      <input type="text" style="width: 300px;" title="" id="b4" name="A100" value="' +
        f + '">\n      \n      <button title="يمكن تغيير ملاحظات الدرجة وستحفظ عند النقر هنا  لاستخدامها مستقبلا" id="seveww" onclick="savewww()" type="button" class="btn btn-info left"> حفظ</button>\n      \n      </div>\n      \n      <div>\n      <div class="progress">\n        <div id="progress-bar1" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>\n      </div>\n      \n      <div class="progress">\n        <div id="progress-bar2" style="width: 0%; background-color: skyblue;" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>\n      </div>\n      </div>\n      <button id="tshihStart" onclick="" type="button" disabled class="btn btn-info left"> تصحيح الواجبات</button>\n      <button id="tgarir" onclick="" type="button" disabled class="btn btn-info left"> عرض</button>\n       <div id="sk-spi2" style="display: none;"  class="sk-cube-grid" > \n        \n       <div class="sk-cube sk-cube1"></div>\n       <div class="sk-cube sk-cube2"></div>\n       <div class="sk-cube sk-cube3"></div>\n                               </div>\n      \n      \n      \n      \n      <div\n      <div id="errr"> </div>\n      \n      \n      <div class="accordion" id="accordionExample">\n        <div id="div_tgrir" class="accordion-item">\n      \n        </div>\n      </div>\n      \n        ');
    gettshih()
}

function savewww() {
    localStorage.setItem("text1", $("#b1").val());
    localStorage.setItem("text2", $("#b2").val());
    localStorage.setItem("text3", $("#b3").val());
    localStorage.setItem("text4", $("#b4").val());
    alert("تم الحفظ")
}

function info0() {
    alert('\n      \n      \n      \n      \n      \n      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n      \n      <head>\n          <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->\n          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n          <meta name="viewport" content="width=device-width">\n          <!--[if !mso]><!-->\n          <meta http-equiv="X-UA-Compatible" content="IE=edge">\n          <!--<![endif]-->\n          <title></title>\n          <!--[if !mso]><!-->\n          <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css">\n          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">\n          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">\n          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">\n          <!--<![endif]-->\n          <style type="text/css">\n              body {\n                  margin: 0;\n                  padding: 0;\n              }\n      \n              table,\n              td,\n              tr {\n                  vertical-align: top;\n                  border-collapse: collapse;\n              }\n      \n              * {\n                  line-height: inherit;\n              }\n      \n              a[x-apple-data-detectors=true] {\n                  color: inherit !important;\n                  text-decoration: none !important;\n              }\n          </style>\n          <style type="text/css" id="media-query">\n              @media (max-width: 620px) {\n      \n                  .block-grid,\n                  .col {\n                      min-width: 320px !important;\n                      max-width: 100% !important;\n                      display: block !important;\n                  }\n      \n                  .block-grid {\n                      width: 100% !important;\n                  }\n      \n                  .col {\n                      width: 100% !important;\n                  }\n      \n                  .col_cont {\n                      margin: 0 auto;\n                  }\n      \n                  img.fullwidth,\n                  img.fullwidthOnMobile {\n                      width: 100% !important;\n                  }\n      \n                  .no-stack .col {\n                      min-width: 0 !important;\n                      display: table-cell !important;\n                  }\n      \n                  .no-stack.two-up .col {\n                      width: 50% !important;\n                  }\n      \n                  .no-stack .col.num2 {\n                      width: 16.6% !important;\n                  }\n      \n                  .no-stack .col.num3 {\n                      width: 25% !important;\n                  }\n      \n                  .no-stack .col.num4 {\n                      width: 33% !important;\n                  }\n      \n                  .no-stack .col.num5 {\n                      width: 41.6% !important;\n                  }\n      \n                  .no-stack .col.num6 {\n                      width: 50% !important;\n                  }\n      \n                  .no-stack .col.num7 {\n                      width: 58.3% !important;\n                  }\n      \n                  .no-stack .col.num8 {\n                      width: 66.6% !important;\n                  }\n      \n                  .no-stack .col.num9 {\n                      width: 75% !important;\n                  }\n      \n                  .no-stack .col.num10 {\n                      width: 83.3% !important;\n                  }\n      \n                  .video-block {\n                      max-width: none !important;\n                  }\n      \n                  .mobile_hide {\n                      min-height: 0px;\n                      max-height: 0px;\n                      max-width: 0px;\n                      display: none;\n                      overflow: hidden;\n                      font-size: 0px;\n                  }\n      \n                  .desktop_hide {\n                      display: block !important;\n                      max-height: none !important;\n                  }\n      \n                  .img-container.big img {\n                      width: auto !important;\n                  }\n              }\n          </style>\n          <style type="text/css" id="icon-media-query">\n              @media (max-width: 620px) {\n                  .icons-inner {\n                      text-align: center;\n                  }\n      \n                  .icons-inner td {\n                      margin: 0 auto;\n                  }\n              }\n          </style>\n      </head>\n      \n      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #091548;">\n          <!--[if IE]><div class="ie-browser"><![endif]-->\n          <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#091548" valign="top">\n              <tbody>\n                  <tr style="vertical-align: top;" valign="top">\n                      <td style="word-break: break-word; vertical-align: top;" valign="top">\n                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#091548"><![endif]-->\n                          <div style="background-image:url(\'https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3986/background_2.png\');background-position:center top;background-repeat:repeat;background-color:#091548;">\n                              <div class="block-grid " style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">\n                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">\n                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url(\'https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3986/background_2.png\');background-position:center top;background-repeat:repeat;background-color:#091548;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->\n                                      <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:5px; padding-bottom:15px;"><![endif]-->\n                                      <div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">\n                                          <div class="col_cont" style="width:100% !important;">\n                                              <!--[if (!mso)&(!IE)]><!-->\n                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:15px; padding-right: 10px; padding-left: 10px;">\n                                                  <!--<![endif]-->\n                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">\n                                                      <tbody>\n                                                          <tr style="vertical-align: top;" valign="top">\n                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">\n                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 8px; width: 100%;" align="center" role="presentation" height="8" valign="top">\n                                                                      <tbody>\n                                                                          <tr style="vertical-align: top;" valign="top">\n                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="8" valign="top"><span></span></td>\n                                                                          </tr>\n                                                                      </tbody>\n                                                                  </table>\n                                                              </td>\n                                                          </tr>\n                                                      </tbody>\n                                                  </table>\n                                                  <div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;">\n                                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3986/header3.png" alt="Main Image" title="Main Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 232px; max-width: 100%; display: block;" width="232">\n                                                      <!--[if mso]></td></tr></table><![endif]-->\n                                                  </div>\n                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 10px; padding-bottom: 15px; font-family: Arial, sans-serif"><![endif]-->\n                                                  <div style="color:#ffffff;font-family:\'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;line-height:1.2;padding-top:10px;padding-right:0px;padding-bottom:15px;padding-left:0px;">\n                                                      <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; color: #ffffff; mso-line-height-alt: 17px;">\n                                                          <p style="margin: 0; font-size: 30px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 36px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 30px;">&nbsp;  </span></p>\n                                                          <p style="margin: 0; font-size: 30px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 36px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 30px;">&nbsp; مرحبًا بك في مُعد الدروس الالكتروني</span></p>\n                                                          <p style="margin: 0; font-size: 30px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 36px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 30px;"></span></p>\n                                                      </div>\n                                                  </div>\n                                                  <!--[if mso]></td></tr></table><![endif]-->\n                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: sans-serif"><![endif]-->\n                                                  <div style="color:#ffffff;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;line-height:1.5;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">\n                                                      <div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.5; color: #ffffff; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 18px;">\n                                                          <p style="margin: 0; font-size: 12px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">&nbsp;</p>\n                                                          <p style="margin: 0; font-size: 14px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 14px; color: #ffffff;"><strong> <a href=\'https://www.fu-techno.com/g_v4/term.html\' target="_blank">  سياسة الخصوصية للأداة +  الشروط والأحكام </a></strong></span></p>\n                                                          <p style="margin: 0; font-size: 14px; text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 14px; color: #ffffff;"><strong> حسابات التواصل الإجتماعي</strong></span></p>\n                                                      </div>\n                                                  </div>\n                                                  <!--[if mso]></td></tr></table><![endif]-->\n                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">\n                                                      <tbody>\n                                                          <tr style="vertical-align: top;" valign="top">\n                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;" valign="top">\n                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="60%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #5A6BA8; width: 60%;" align="center" role="presentation" valign="top">\n                                                                      <tbody>\n                                                                          <tr style="vertical-align: top;" valign="top">\n                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>\n                                                                          </tr>\n                                                                      </tbody>\n                                                                  </table>\n                                                              </td>\n                                                          </tr>\n                                                      </tbody>\n                                                  </table>\n                                                                                              <table class="social_icons" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">\n                                                      <tbody>\n                                                          <tr style="vertical-align: top;" valign="top">\n                                                              <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">\n                                                                  <table class="social_table" align="center" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">\n                                                                      <tbody>\n                                                                          <tr style="vertical-align: top; display: inline-block; text-align: center;" align="center" valign="top">\n                                                                          <!--\n                                                                              <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/facebook@2x.png" alt="Facebook" title="Facebook" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>\n                                                                              <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://instagram.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/instagram@2x.png" alt="Instagram" title="Instagram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>\n                                                                              <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://twitter.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/twitter@2x.png" alt="Twitter" title="Twitter" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>\n                                                                              -->\n      <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://t.me/ththiry" target="_blank"><img width="32" height="32" src="https://web.telegram.org/z//icon-192x192.png" alt="telegram" title="telegram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>\n      <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://twitter.com/11M66m" target="_blank"><img width="32" height="32" src="https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png" alt="x" title="x" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>\n      \n      \n      \n                                                                          </tr>\n                                                                      </tbody>\n                                                                  </table>\n                                                              </td>\n                                                          </tr>\n                                                      </tbody>\n                                                  </table>\n                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 25px; padding-left: 25px; padding-top: 10px; padding-bottom: 10px; font-family: sans-serif"><![endif]-->\n                                                  <div style="color:#7f96ef;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px;">\n                                                      <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #7f96ef; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 21px;">\n      \n      \n                                                          <p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;"><strong>مع أصدق التحيات </strong></p>\n                                                          <p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;"><strong> فريق عمل الأداة&nbsp;</strong></p>\n                                                      </div>\n                                                  </div>\n      \n      \n      \n                                                  <!--[if mso]></td></tr></table><![endif]-->\n                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">\n                                                      <tbody>\n                                                          <tr style="vertical-align: top;" valign="top">\n                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">\n                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="60%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 30px; width: 60%;" align="center" role="presentation" height="30" valign="top">\n                                                                      <tbody>\n                                                                          <tr style="vertical-align: top;" valign="top">\n                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="30" valign="top"><span></span></td>\n                                                                          </tr>\n                                                                      </tbody>\n                                                                  </table>\n                                                              </td>\n                                                          </tr>\n                                                      </tbody>\n                                                  </table>\n                                                  <!--[if (!mso)&(!IE)]><!-->\n                                              </div>\n                                              <!--<![endif]-->\n                                          </div>\n                                      </div>\n                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->\n                                  </div>\n                              </div>\n                          </div>\n                          <div style="background-color:transparent;">\n                              <div class="block-grid " style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">\n                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">\n                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->\n                                      <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:15px; padding-bottom:15px;"><![endif]-->\n                                      <div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">\n                                          <div class="col_cont" style="width:100% !important;">\n                                              <!--[if (!mso)&(!IE)]><!-->\n                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 10px; padding-left: 10px;">\n                                                  <!--<![endif]-->\n                                                  <div class="img-container center fixedwidth" align="center" style="padding-right: 5px;padding-left: 5px;">\n                                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 5px;padding-left: 5px;" align="center"><![endif]-->\n                                                      <div style="font-size:1px;line-height:5px">&nbsp;</div>\n                                                      <div style="font-size:1px;line-height:5px">&nbsp;</div>\n                                                      <!--[if mso]></td></tr></table><![endif]-->\n                                                  </div>\n                                                  <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">\n                                                      <tbody>\n                                                          <tr style="vertical-align: top;" valign="top">\n                                                              <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;" valign="top">\n                                                                  <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="60%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #5A6BA8; width: 60%;" align="center" role="presentation" valign="top">\n                                                                      <tbody>\n                                                                          <tr style="vertical-align: top;" valign="top">\n                                                                              <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>\n                                                                          </tr>\n                                                                      </tbody>\n                                                                  </table>\n                                                              </td>\n                                                          </tr>\n                                                      </tbody>\n                                                  </table>\n      \n                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 15px; padding-left: 15px; padding-top: 15px; padding-bottom: 15px; font-family: sans-serif"><![endif]-->\n                                                  <div style="color:#4a60bb;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;line-height:1.2;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;">\n                                                      <div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; color: #FCFBFB; mso-line-height-alt: 14px;">\n                                                       <p align="center">\n                                                        <a><img width="100" height="100" src="https://pbs.twimg.com/profile_images/1651107573683175426/sOB47j1N_400x400.jpg" alt="maroof" title="maroof"></a>\n                                                          </p>\n                                                          <p style="margin: 0; font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 14px; margin-top: 0; margin-bottom: 0;"><span style>&nbsp;<a href="" target="_blank" title="" style="text-decoration: underline; color: #670404;" rel="noopener"> </a>رقم التوثيق في المركز السعودي للأعمال:0000119822</span></p>\n      \n                                                          <p style="margin: 0; font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 14px; margin-top: 0; margin-bottom: 0;"><span style>&nbsp;<a href="" target="_blank" title="" style="text-decoration: underline; color: #670404;" rel="noopener"> </a>  2024 - 2025 جميع الحقوق   محفوظة لـ<a href="https://fu-techno.com/" taget="_blank">fu-techno</a>  ©&nbsp;</span></p>\n                                                          \n                                                          </div>\n                                                  </div>\n                                                  <!--[if mso]></td></tr></table><![endif]-->\n                                                  <div style="font-size:16px;text-align:center;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif">\n                                                      <div style="height-top: 20px;">&nbsp;</div>\n                                                  </div>\n                                                  <!--[if (!mso)&(!IE)]><!-->\n                                              </div>\n                                              <!--<![endif]-->\n                                          </div>\n                                      </div>\n                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->\n                                  </div>\n                              </div>\n                          </div>\n                          <div style="background-color:transparent;">\n                              <div class="block-grid " style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">\n                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">\n                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->\n                                      <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->\n                                      <div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">\n                                          <div class="col_cont" style="width:100% !important;">\n                                              <!--[if (!mso)&(!IE)]><!-->\n                                              <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">\n                                                  <!--<![endif]-->\n                                                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">\n                                                      <tr style="vertical-align: top;" valign="top">\n                                                          <td style="word-break: break-word; vertical-align: top; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; text-align: center;" align="center" valign="top">\n                                                              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->\n                                                              <!--[if !vml]><!-->\n                                                              <table class="icons-inner" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation" valign="top">\n                                                                  <!--<![endif]-->\n                                                                  <tr style="vertical-align: top;" valign="top">\n      \n                                                                      \n                                                                  </tr>\n                                                              </table>\n                                                          </td>\n                                                      </tr>\n                                                  </table>\n                                                  <!--[if (!mso)&(!IE)]><!-->\n                                              </div>\n                                              <!--<![endif]-->\n                                          </div>\n                                      </div>\n                                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n                                      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->\n                                  </div>\n                              </div>\n                          </div>\n                          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n          <!--[if (IE)]></div><![endif]-->\n      </body>\n      \n      </html>\n      \n          ')
}

var bagin = [];

function dialo() {
    var a = ["سبحان الله وبحمده...سبحان الله العظيم", "لا إله إلا الله وحده لا شريك له", "استغفر الله وأتوب إليه"];
    a = bootbox.dialog({
        message: 'انتظر ... جاري عرض معلومات الحصص\n      <div id="sk-spi" class="sk-cube-grid" > \n        \n      <div class="sk-cube sk-cube1"></div>\n      <div class="sk-cube sk-cube2"></div>\n      <div class="sk-cube sk-cube3"></div>\n                              </div>\n          <p class="glow-blink">' +
            a[Math.floor(Math.random() * a.length)] + "</p>\n        ", backdrop: !0, closeButton: !0, buttons: !1
    }).find(".modal-dialog");
    var b = $(window).height(), e = a.height();
    a.css("margin-top", (b - e) / 3)
}

function delayg() {
    if (0 < bagin.length && tok1 < tok) {
        let a = ["سبحان الله وبحمده...سبحان الله العظيم", "لا إله إلا الله وحده لا شريك له", "استغفر الله وأتوب إليه"];
        bootbox.dialog({
            message: 'انتظر ... جاري العمل على تحضير بقية الحصص\n      <div id="sk-spi" class="sk-cube-grid" > \n      <div class="sk-cube sk-cube1"></div>\n      <div class="sk-cube sk-cube2"></div>\n      <div class="sk-cube sk-cube3"></div>    \n      </div>\n          <p class="glow-blink">' + a[Math.floor(Math.random() * a.length)] + "</p>\n        ",
            backdrop: !0, closeButton: !0, buttons: !1
        });
        setTimeout(function (b) {
            g();
            bootbox.hideAll()
        }, Math.floor(3E3 * Math.random()) + 2E3)
    }
}

var tok1 = 0, tok = 0;

function g() {
    for (var a = document.querySelectorAll('[id^="select_"]'), b = !1, e = 0; e < a.length; e++) "0" !== a[e].value && (b = !0);
    b ? $("#startNow").html("انتظر ...") : $("#startNow").html("تحضير أكثر من حصة");
    allSoltsa = !0;
    tok1 = tok = 0;
    bagin = [];
    a = document.querySelectorAll('[id^="select_"]');
    b = [!1, !1, !1, !1];
    0 == a.length && (allSoltsa = !1);
    for (e = 0; e < a.length; e++) {
        b = [!1, !1, !1, !1];
        var f = $("#" + a[e].id).val(), l = document.getElementById("tm1" +
            f[4] + "," + f[5]);
        "0" !== f && "1" !== l && (f = $("#" + a[e].id).val().split(","), document.getElementById("ethra" + f[4] + "," + f[5]).checked && (b[0] = !0), document.getElementById("ekhtbar" + f[4] + "," + f[5]).checked && (b[1] = !0), document.getElementById("wajeb" + f[4] + "," + f[5]).checked && (b[2] = !0), document.getElementById("nshat" + f[4] + "," + f[5]).checked && (b[3] = !0), l = $("#select_" + f[4] + "_" + f[5] + " option:selected").val(), 0 !== l && "0" !== l && "s0" !== l && (!1 === b[0] && !1 === b[1] && !1 === b[2] && !1 === b[3] ? alert("لبدء تحضير الحصة يجب تفعيل واجب أو اختبار أو إثراء أو نشاط") :
            (tok += 1, 3 > tok1 && (async function (h) {
                grecaptcha.execute("6Lfna_8ZAAAAAASsc9Yo_osSSAhfG4pkIZe8HJVG", {action: "submit"}).then(function (m) {
                    $("body").append('<div><input id="Captcha_' + h[4] + "_" + h[5] + '" name="Captcha_' + h[4] + "_" + h[5] + '" type="hidden" value="' + m + '"></div>')
                })
            }(f), getchhke(f, b), tok1 += 1))))
    }
}

async function g44() {
    for (var a = document.querySelectorAll('[id^="select_"]'), b = !1, e = 0; e < a.length; e++) "0" !== a[e].value && (b = !0);
    b ? $("#startNow").html("انتظر ...") : $("#startNow").html("تحضير أكثر من حصة");
    tok1 = tok = 0;
    bagin = [];
    a = document.querySelectorAll('[id^="select_"]');
    b = [!1, !1, !1, !1];
    0 == a.length && (allSoltsa = !1);
    for (e = 0; e < a.length; e++) {
        b = [!1, !1, !1, !1];
        var f = $("#" + a[e].id).val(), l = document.getElementById("tm1" +
            f[4] + "," + f[5]);
        "0" !== f && "1" !== l && (f = $("#" + a[e].id).val().split(","), document.getElementById("ethra" + f[4] + "," + f[5]).checked && (b[0] = !0), document.getElementById("ekhtbar" + f[4] + "," + f[5]).checked && (b[1] = !0), document.getElementById("wajeb" + f[4] + "," + f[5]).checked && (b[2] = !0), document.getElementById("nshat" + f[4] + "," + f[5]).checked && (b[3] = !0), l = $("#select_" + f[4] + "_" + f[5] + " option:selected").val(), 0 !== l && "0" !== l && "s0" !== l && (!1 === b[0] && !1 === b[1] && !1 === b[2] && !1 === b[3] ? alert("لبدء تحضير الحصة يجب تفعيل واجب أو اختبار أو إثراء أو نشاط") :
            (async function (h) {
                grecaptcha.execute("6Lfna_8ZAAAAAASsc9Yo_osSSAhfG4pkIZe8HJVG", {action: "submit"}).then(function (m) {
                    $("body").append('<div><input id="Captcha_' + h[4] + "_" + h[5] + '" name="Captcha_' + h[4] + "_" + h[5] + '" type="hidden" value="' + m + '"></div>')
                })
            }(f), getchhke(f, b))))
    }
}

async function g33(a, b) {
    var e = [!1, !1, !1, !1], f = $("#select_" + a.TimeTable[b].SlotNumber + "_" + a.CurrentDayIndex).val(),
        l = document.getElementById("tm1" + f[4] + "," + f[5]);
    "0" !== f && "1" !== l && (f = $("#select_" + a.TimeTable[b].SlotNumber + "_" + a.CurrentDayIndex).val().split(","), document.getElementById("ethra" + f[4] + "," + f[5]).checked && (e[0] = !0), document.getElementById("ekhtbar" + f[4] + "," + f[5]).checked && (e[1] = !0), document.getElementById("wajeb" + f[4] + "," + f[5]).checked && (e[2] = !0), document.getElementById("nshat" + f[4] + "," +
        f[5]).checked && (e[3] = !0), l = $("#select_" + f[4] + "_" + f[5] + " option:selected").val(), 0 !== l && "0" !== l && "s0" !== l ? !1 === e[0] && !1 === e[1] && !1 === e[2] && !1 === e[3] ? (alert("لبدء تحضير الحصة يجب تفعيل واجب أو اختبار أو إثراء أو نشاط"), $("#startNow").html("تحضير أكثر من حصة ")) :
        (document.getElementById("sk-spi" + a.TimeTable[b].SlotNumber + a.CurrentDayIndex).style.display = "block", await new Promise(h => setTimeout(h, 1E3)), getchhke(f, e)) : alert("لم يتم تحديد دروس"))
}

async function getchhke(a, b) {
    await $.ajax({
        url: "/Teacher/Lessons/LessonPlan?data=" + a[0],
        type: "GET",
        dataType: "html",
        cache: !1,
        async: !0,
        headers: {requestverificationtoken: "${csrfToken}"},
        success: function (e) {
            var f = new DOMParser;
            (async function (l, h, m) {
                async function c(w, y) {
                    var n = $("#select_" + y[4] + "_" + y[5] + " option:selected").text();
                    n = n.replaceAll("،", " ");
                    n = n.replaceAll(",", " ");
                    n = n.replaceAll("(", " ");
                    n = n.replaceAll(")", " ");
                    " " == n[0] && (n = n.slice(1));
                    " " == n[-1] && (n = n.slice(0, -1));
                    n = n.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g,
                        "");
                    var q = y[3];
                    y[6] && (q = y[6]);
                    var r = await getblayer(q, y[2]);
                    q = new DOMParser;
                    q = q.parseFromString(r, "text/html");
                    r = null;
                    try {
                        r = q.querySelectorAll('[id^="item_"]')[0].getAttribute("onclick").match(/https:\/\/[\w-]+(\.[\w-]+)*(\/[\w-./?%&=]*)?/g)[0]
                    } catch {
                        r = null
                    }
                    await creatAct(w, y, r);
                    await new Promise(u => setTimeout(u, 500));
                    w = await getact();
                    q = new DOMParser;
                    y = q.parseFromString(w, "text/html");
                    w = $(y).find('[name="recourseId"]').eq(0).val();
                    q = [];
                    for (r = 0; 8 > r; r++) try {
                        y.querySelectorAll(".list-group")[2].querySelectorAll(".pointer")[r].innerText.includes(n) &&
                        (w = y.querySelectorAll('form[action^="/MangeResources/Delete?resourceId="]')[r].querySelector("input").value, q.push(w))
                    } catch (u) {
                        console.log(u)
                    }
                    0 < q.length && (w = q[0]);
                    return w
                }

                async function d(w, y) {
                    var n = $("#select_" + y[4] + "_" + y[5] + " option:selected").text();
                    n = n.replaceAll("،", " ");
                    n = n.replaceAll(",", " ");
                    n = n.replaceAll("(", " ");
                    n = n.replaceAll(")", " ");
                    " " == n[0] && (n = n.slice(1));
                    " " == n[-1] && (n = n.slice(0, -1));
                    n = n.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g, "");
                    w = await creatProj(w, y);
                    await new Promise(v =>
                        setTimeout(v, 500));
                    w = await getallproj();
                    parp = new DOMParser;
                    w = parp.parseFromString(w, "text/html");
                    y = /showDeleteConfirmation\('DeleteConfirmation(\d+)',/;
                    for (var q = projj1 = w.querySelectorAll('a[onclick^="showDeleteConfirmation"]')[0].getAttribute("onclick").match(y)[1], r = [], u = 0; 8 > u; u++) try {
                        var x = w.querySelectorAll('div[class="text-body"]')[u].querySelector("h6").innerText,
                            z = w.querySelectorAll('a[onclick^="showDeleteConfirmation"]')[u].getAttribute("onclick").match(y)[1];
                        x.includes(n) && 0 < z.length && /^\d+$/.test(z) &&
                        (q = z, r.push(q))
                    } catch (v) {
                    }
                    0 < r.length && (q = r[0]);
                    return q
                }

                async function k(w, y) {
                    var n = [], q = 0, r = $("#select_" + y[4] + "_" + y[5] + " option:selected").text();
                    r = r.replaceAll("،", " ");
                    r = r.replaceAll(",", " ");
                    r = r.replaceAll("(", " ");
                    r = r.replaceAll(")", " ");
                    " " == r[0] && (r = r.slice(1));
                    " " == r[-1] && (r = r.slice(0, -1));
                    r = r.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g, "");
                    ids = [];
                    var u = await AddQuestion(w, y);
                    f = new DOMParser;
                    u = f.parseFromString(u.html, "text/html");
                    for (var x = u.querySelectorAll('[id^="IsIenQuestion_"]'),
                             z = 0; z < x.length; z++) n.push(x[z].id.replace(/\D/g, ""));
                    if (void 0 !== u.getElementsByTagName("tr")[1]) {
                        z = u.querySelectorAll("tr");
                        for (var v = 1; v < z.length; v++) if (x = u.querySelectorAll("tr")[v].querySelectorAll("td")[0].querySelectorAll("span")[2].textContent, x.includes("صواب وخطأ") || x.includes("اختيار من متعدد") || x.includes("اختيارات من متعدد")) x =
                            u.querySelectorAll("tr")[v].querySelectorAll("td")[1].querySelectorAll("a")[1].id, ids.push(x)
                    }
                    if ((await creatAssignments(w, y, n, ids)).success) {
                        await new Promise(C => setTimeout(C, 500));
                        w = await getAllAssignments();
                        parw = new DOMParser;
                        w = parw.parseFromString(w, "text/html");
                        y = [];
                        for (x = 0; 8 > x; x++) try {
                            var F = w.querySelectorAll('div[class="text-body"]')[x].querySelector("h6").innerText,
                                G = w.querySelectorAll('a[onclick^="showActivateConfirmation"]')[x].getAttribute("onclick").match(/\d+/)[0];
                            F.includes(r) && 0 < G.length &&
                            /^\d+$/.test(G) && (q = G, y.push(q))
                        } catch (C) {
                        }
                        0 < y.length && (q = y[0])
                    } else q = 0;
                    return q
                }

                async function t(w, y) {
                    var n = $("#select_" + y[4] + "_" + y[5] + " option:selected").text();
                    n = n.replaceAll("،", " ");
                    n = n.replaceAll(",", " ");
                    n = n.replaceAll("(", " ");
                    n = n.replaceAll(")", " ");
                    " " == n[0] && (n = n.slice(1));
                    " " == n[-1] && (n = n.slice(0, -1));
                    n = n.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g, "");
                    var q = 0;
                    w = await creatExams(w, y);
                    console.log(w);
                    if (w.success) {
                        await new Promise(z => setTimeout(z, 500));
                        var r = await getExams();
                        w = (new DOMParser).parseFromString(r, "text/html");
                        $(w).find('[name="ProjectId"]').eq(0).val();
                        projj100 = w.querySelectorAll('[id^="DeactivateConfirmation"]')[0];
                        r = [];
                        for (y = 0; 8 > y; y++) try {
                            var u = w.querySelectorAll('div[class="text-body"]')[y].querySelector("h6").innerText,
                                x = w.querySelectorAll('div[id^="DeactivateConfirmation"]')[y].id.match(/\d+/)[0];
                            u.includes(n) && 0 < x.length && /^\d+$/.test(x) && (q = x, r.push(q))
                        } catch (z) {
                        }
                    }
                    0 < r.length && (q = r[0]);
                    return q
                }

                document.getElementById("sk-spi" + h[4] + h[5]).style.display =
                    "block";
                var D = 0, E = 0, A = 0, B = 0, H = $("#tm1" + h[4], h[5]).val();
                if ("0" !== H || 0 !== H || "s0" !== H) m[0] && (D = await c(l, h)), m[1] && (B = await t(l, h)), m[2] && (A = await k(l, h)), m[3] && (E = await d(l, h)), ajsave(l, h, D, E, A, B)
            })(f.parseFromString(e, "text/html"), a, b)
        }
    })
}

async function getblayer(a, b) {
    return await $.ajax({
        type: "Post",
        cache: !1,
        async: !0,
        data: {LectureClassId: 0, TreeId: b, CopyMode: !1, lessonId: a, LessonGoalsAndActivity: []},
        url: "/Teacher/LectureTools/GetLessonPlayerForComponent",
        dataType: "html",
        success: function (e) {
        }
    })
}

async function getqqqq(a) {
    return await $.ajax({
        url: "/Teacher/QuestionBank/ViewQuestion/" + a + "?isIen=True",
        type: "GET",
        cache: !1,
        success: function (b) {
        }
    })
}

function ajsave2(a, b, e, f, l, h) {
    function m(d, k) {
        var t = setInterval(function () {
            var D = c.document.querySelector(d);
            D && (clearInterval(t), k(D))
        }, 1E3)
    }

    var c = window.open("/Teacher/Lessons/LessonDetailsNew?Data=" + $(a).find('[name="Data"]').eq(0).val(), "_blank");
    c.onload = function () {
        m("#SelectedUnitId", function (d) {
            c.document.getElementById("SelectedUnitId").value = b[1];
            c.OnTreeChange(1, b[1])
        });
        m("#SelectedTrees_2", function (d) {
            c.document.getElementById("SelectedTrees_2").value = b[2];
            c.OnTreeChange(2, b[2]);
            document.getElementById("radio_mtzamn").checked ?
                c.document.getElementById("LessonType").checked = 1 : c.document.getElementById("LessonType2").checked = 1
        });
        b[6] ? (m("#SelectedTrees_3", function (d) {
            c.document.getElementById("SelectedTrees_3").value = b[3];
            c.OnTreeChange(3, b[3])
        }), m("#SelectedTrees_4", function (d) {
            c.document.getElementById("SelectedTrees_4").value = b[6];
            c.document.getElementsByClassName("select2-search__field")[0].value = b[6];
            c.OnTreeChange(4, b[6]);
            c.firstLessonDetailsPageSuccess()
        })) : m("#SelectedTrees_3", function (d) {
            c.document.getElementById("SelectedTrees_3").value =
                b[3];
            c.document.getElementsByClassName("select2-search__field")[0].value = b[3];
            c.OnTreeChange(3, b[3]);
            c.firstLessonDetailsPageSuccess()
        });
        m("[id^='chkbox']", function (d) {
            var k = c.document.getElementsByName("goals");
            for (d = 0; d < k.length; d++) k[d].click();
            k = c.document.getElementsByName("activities");
            for (d = 0; d < k.length; d++) k[d].click();
            k = [1, 2, 12, 11, 5, 6, 4, 8];
            var t = c.document.getElementsByName("strategies");
            for (d = 0; d < t.length; d++) k.includes(d + 1) && (t[d].checked = 1);
            k = [1, 3, 5, 6, 7, 9, 11];
            t = c.document.getElementsByName("teachingTools");
            for (d = 0; d < t.length; d++) k.includes(d + 1) && (t[d].checked = 1);
            if (/^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test($(a).find("#SelectedTrees_2 option:eq(1)").text())) {
                c.document.getElementById("TeacherNote").value = "View the lesson on the Ain platform \n https://ibs.ien.edu.sa/#/planslessons/" + b[2];
                d = ["See previous lessons", "Link this lesson to previous lessons related to it", "Diagnostic calendar"];
                d = d[Math.floor(Math.random() * d.length)];
                c.document.getElementById("LectureClassPreparationText").value =
                    d;
                d = ["Use worksheets", "Show a short video as a review of the lesson", "Final calendar"];
                d = d[Math.floor(Math.random() * d.length)];
                k = "";
                if (0 < Object.keys(df).length) {
                    for (t = 0; t < Object.keys(df).length; t++) k += df[t] += "\n\n";
                    c.document.getElementById("ThinkingSkills").value = "thinking skills: Observation. Analysis. Inference. Communication. Problem-solving. \n Questions:\n" + k
                } else c.document.getElementById("ThinkingSkills").value = "thinking skills:\n Observation. \n Analysis. \n Inference. \n Communication. \n Problem-solving. \n ";
                c.document.getElementById("LectureClassCloseText").value = d
            } else {
                c.document.getElementById("TeacherNote").value = "للإطلاع على الدرس على بوابة عين \n https://ibs.ien.edu.sa/#/planslessons/" + b[2];
                d = ["مراجعة الدروس السابقة", "ربط الدرس بالدروس السابقة المتصلة به",
                    "تقويم تشخيصي"];
                d = d[Math.floor(Math.random() * d.length)];
                c.document.getElementById("LectureClassPreparationText").value = d;
                d = ["استخدام  أوراق عمل", "عرض فيديو قصير كمراجعة للدرس", "تقويم ختامي", "اختيار إحدى مجموعات الفصل للتعاون في تلخيص الدرس شفهيًا أمام البقية ",
                    "استخدام استراتيجية الكرسي الساخن لتلخيص الدرس"];
                d = d[Math.floor(Math.random() * d.length)];
                k = "";
                if (0 < Object.keys(df).length) {
                    for (t = 0; t < Object.keys(df).length; t++) k += df[t] += "\n\n";
                    c.document.getElementById("ThinkingSkills").value = "مهارات التفكير: التذكر. الفهم. التطبيق. التحليل. التركيب. التقويم. \n الأسئلة \n" +
                        k
                } else iframeDocument.getElementById("ThinkingSkills").value = "مهارات التفكير: التذكر. \n الفهم. \n التطبيق. \n التحليل. \n التركيب. \n التقويم. \n ";
                iframeDocument.getElementById("LectureClassCloseText").value = d
            }
            c.document.querySelector('[onclick="loadActivities();"]').click()
        });
        m("[class='selectActivity btn btn-primary btn-xs']", function (d) {
            c.document.getElementsByClassName("selectActivity btn btn-primary btn-xs")[0].click()
        })
    }
}

async function ajsave(a, b, e, f, l, h) {
    var m = $("#select_" + b[4] + "_" + b[5] + " option:selected").text();
    m = m.replaceAll("،", " ");
    m = m.replaceAll(",", " ");
    m = m.replaceAll("(", " ");
    m = m.replaceAll(")", " ");
    " " == m[0] && (m = m.slice(1));
    " " == m[-1] && (m = m.slice(0, -1));
    var c = new FormData;
    0 < e.length && null !== e && "" !== e && 0 !== e && c.append("LectureClassLearningResources[0].ActivityId_Enc", e);
    if (0 < h.length && null !== h && "" !== h && 0 !== h) {
        var d = 3;
        d = void 0 !== $("[name='dayektbar']").val() ? parseInt($("[name='dayektbar']").val()) : 3;
        var k = $('[name="quantityTime"]').val(), t = 30;
        t = k ? k : 30;
        c.append("LectureExamsList[0].ExamId", h);
        c.append("LectureExamsList[0].Duration", t);
        c.append("LectureExamsList[0].StartTime", $(a).find('[name="StartDate"]').eq(0).val());
        k = new Date($(a).find('[name="EndDate"]').eq(0).val());
        d = (new Date(k.getFullYear(), k.getMonth(), k.getDate() + d)).toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        });
        k = new Date(d);
        d = k.toLocaleDateString("en-US");
        k = k.toLocaleTimeString("en-US",
            {hour12: !0});
        c.append("LectureExamsList[0].EndTime", d + " " + k);
        c.append("LectureExamsList[0].Grade", "");
        c.append("LectureExamsList[0].Name", `اختبار ${m}`);
        c.append("LectureExamsList[0].ExamIsGradeBook", "false")
    }
    0 < f.length && null !== f && "" !== f && 0 !== f && (c.append("LectureProjectsList[0].ProjectId", f), c.append("LectureProjectsList[0].Grade", "4"), c.append("LectureProjectsList[0].StartTime", $(a).find('[name="StartDate"]').eq(0).val()), d = new Date($(a).find('[name="EndDate"]').eq(0).val()),
        d = (new Date(d.getFullYear(), d.getMonth(), d.getDate() + 2)).toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }), k = new Date(d), d = k.toLocaleDateString("en-US"), k = k.toLocaleTimeString("en-US", {hour12: !0}), c.append("LectureProjectsList[0].EndTime", d + " " + k), c.append("LectureProjectsList[0].IsGradeBook", "false"), c.append("LectureProjectsList[0].Name", `نشاط  ${m}`));
    0 < l.length && null !== l && "" !== l && 0 !== l && (d = 3, d = void 0 !== $("[name='daywajeb']").val() ?
        parseInt($("[name='daywajeb']").val()) : 3, c.append("LectureAssignmentsList[0].AssignmentId", l), c.append("LectureAssignmentsList[0].Grade", "4"), c.append("LectureAssignmentsList[0].StartTime", $(a).find('[name="StartDate"]').eq(0).val()), k = new Date($(a).find('[name="EndDate"]').eq(0).val()), d = (new Date(k.getFullYear(), k.getMonth(), k.getDate() + d)).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
    }), k = new Date(d), d = k.toLocaleDateString("en-US"),
        k = k.toLocaleTimeString("en-US", {hour12: !0}), c.append("LectureAssignmentsList[0].EndTime", d + " " + k), c.append("LectureAssignmentsList[0].IsGradeBook", "false"), c.append("LectureAssignmentsList[0].Name", `واجب ${m}`));
    c.append("__RequestVerificationToken", $(a).find('[name="__RequestVerificationToken"]').eq(0).val());
    c.append("LessonGoalsAndActivity[0].lesssonId", b[3]);
    d = 0;
    b[6] ? (c.append("SelectedTrees_3", b[6]), c.append("SelectedTrees_4", b[3]), c.append("hfLecTreeId", b[6]), c.append("lessonIdsSelect",
        b[3]), c.append("TreeId", b[3]), c.append("LessonIds[0].Id", b[3]), c.append("hfLevelsCount", "4"), d = b[6]) : (c.append("SelectedTrees_3", b[3]), c.append("hfLecTreeId", b[2]), c.append("TreeId", ""), c.append("hfLevelsCount", "3"), d = b[2]);
    d = await async function (x, z) {
        return await $.ajax({
            type: "Post",
            cache: !1,
            async: !0,
            data: {LectureClassId: 0, TreeId: z, CopyMode: !1, lessonId: x, LessonGoalsAndActivity: []},
            url: "/Teacher/LectureTools/GetLessonPlayerForComponent",
            dataType: "html",
            success: function (v) {
            }
        })
    }(b[3], d);
    d = (new DOMParser).parseFromString(d,
        "text/html");
    for (k = 0; k < $(d).find('[name="activities"]').length; k++) c.append("activities", $(d).find('[name="activities"').eq(k).val()), c.append("LessonGoalsAndActivity[0].activityIds[" + k + "]", $(d).find('[name="activities"').eq(k).val());
    for (k = 0; k < $(d).find('[name="goals"]').length; k++) c.append("goals", $(d).find('[name="goals"').eq(k).val()), c.append("LessonGoalsAndActivity[0].goalsIds[" + k + "]", $(d).find('[name="goals"').eq(k).val());
    c.append("AttachmentFiles[0].AttachType", "3");
    c.append("AttachmentFiles[0].FilePath",
        $(d).find('[id="hdnHtmppathVal"]').val());
    c.append("AttachmentFiles[0].FileCategory", "1");
    var D = $(d).find('[id="hdnHtmppathVal"]').val();
    try {
        var E = datahtml0.querySelectorAll('[id^="item_"]')[0].getAttribute("onclick").match(/https:\/\/[\w-]+(\.[\w-]+)*(\/[\w-./?%&=]*)?/g)[0]
    } catch {
        E = null
    }
    c.append("HashKey", $(a).find('[name="HashKey"]').eq(0).val());
    c.append("hfLessonDetails", $(a).find('[name="hfLessonDetails"]').val());
    c.append("SchoolId", $(a).find('[name="SchoolId"]').eq(0).val());
    c.append("Data",
        $(a).find('[name="Data"]').eq(0).val());
    c.append("ClassroomId", $(a).find('[name="ClassroomId"]').eq(0).val());
    c.append("StartDate", $(a).find('[name="StartDate"]').eq(0).val());
    c.append("EndDate", $(a).find('[name="EndDate"]').eq(0).val());
    c.append("LectureStartTimeString", $(a).find('[name="LectureStartTimeString"]').eq(0).val());
    c.append("LectureEndTimeString", $(a).find('[name="LectureEndTimeString"]').eq(0).val());
    c.append("SubjectId", $(a).find('[name="SubjectId"]').eq(0).val());
    c.append("IsTreeLevel",
        $(a).find('[name="IsTreeLevel"]').eq(0).val());
    c.append("TimeTableId", $(a).find('[name="TimeTableId"]').eq(0).val());
    c.append("Id", $(a).find('[name="Id"]').eq(0).val());
    c.append("Title", m);
    c.append("SelectedTrees", "System.Collections.Generic.List`1[Business.ViewModels.Teacher.TreeModelViewList]");
    c.append("lectureNum", "");
    c.append("dateTicks", "");
    c.append("showPlayer", "False");
    c.append("TreeCodeTypeIsLesson", "0");
    c.append("SelectedUnitId", b[1]);
    c.append("SelectedTrees_2", b[2]);
    d = "2 12 11 5 6 4".split(" ");
    for (k = 0; 6 > k; k++) c.append("strategies", d[Math.floor(Math.random() * d.length)]);
    c.append("teachingTools", "1");
    c.append("teachingTools", "3");
    c.append("teachingTools", "5");
    d = ["6", "7", "9", "11"];
    for (k = 0; k < d.length; k++) c.append("teachingTools", d[Math.floor(Math.random() * d.length)]);
    c.append("CopyLessonFlag", "1");
    c.append("CopyLessonFlag", "AllowCopy");
    c.append("TeacherId", $(a).find('[name="TeacherId"]').eq(0).val());
    c.append("AllowVCR", "False");
    document.getElementById("radio_mtzamn").checked ? c.append("LessonType",
        "1") : c.append("LessonType", "2");
    c.append("hfDrawTree", "/Teacher/Lessons/DrawTreeToClassLesson");
    c.append("hfViewContent", "/Teacher/Lessons/ViewContent");
    c.append("hfGetAssignment", "/Teacher/Lessons/GetAssignments");
    c.append("hfGradeBookTotalValue", $(a).find('[name="hfGradeBookTotalValue"]').val());
    d = await AddQuestion1(b[3], b[1]);
    par1 = new DOMParser;
    d = par1.parseFromString(d.html, "text/html");
    k = [];
    if (void 0 !== d.getElementsByTagName("tr")[1]) {
        t = d.querySelectorAll("tr");
        for (var A = 1; A < t.length; A++) {
            var B =
                d.querySelectorAll("tr")[A].querySelectorAll("td")[0].querySelectorAll("span")[2].textContent;
            if (B.includes("صواب وخطأ") || B.includes("اختيار من متعدد") || B.includes("اختيارات من متعدد")) B = d.querySelectorAll("tr")[A].querySelectorAll("td")[1].querySelectorAll("a")[1].id, k.push(B)
        }
    }
    t = "رابط الصورة";
    A = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
    t = A.test($(a).find("#SelectedTrees_2 option:eq(1)").text()) ? "Image link" : "رابط الصورة";
    d = {};
    B = 0;
    B = 2 < k.length ? 2 : k.length;
    for (var H = 0; H < B; H++) {
        var w = await getqqqq(k[H]);
        par55 = new DOMParser;
        var y = par55.parseFromString(w, "text/html");
        if (y.getElementsByClassName("span")[0]) {
            w = y.getElementsByClassName("span")[0].innerText.replace(/\s+/g, " ").trim();
            0 < w.length && (w = "(" + w + ")-");
            var n = y.querySelector("H5").textContent.replace(/\s+/g,
                " ").trim();
            0 < n.length && (n += " \n");
            var q = y.querySelector("img");
            q &&= "https://vstedu.azureedge.net/v06/content/vimage/correct.png?v=14" !== q.src ? t + ":\n" + q.src + " \n" : void 0;
            y = y.querySelectorAll(".form-check-label");
            for (var r = "", u = 0; u < y.length; u++) r += y[u].innerText.replace(/\s+/g, " ").trim();
            0 < r.length && (r = "[" + r + "] \n");
            r = r.replaceAll(".", " - ");
            d[H] = void 0 !== q ? [w, n, q, r] : [w, n, r]
        }
    }
    if (A.test($(a).find("#SelectedTrees_2 option:eq(1)").text())) if (c.append("AttachmentFiles[0].Name", "pdf Lesson " + m), c.append("TeacherNote",
        "View the lesson on the Ain platform \n https://ibs.ien.edu.sa/#/planslessons/" + b[2]), k = ["See previous lessons", "Link this lesson to previous lessons related to it", "Diagnostic calendar"], k = k[Math.floor(Math.random() * k.length)], c.append("LectureClassPreparationText", k), k = ["Use worksheets", "Show a short video as a review of the lesson", "Final calendar"], k = k[Math.floor(Math.random() * k.length)], t = "", 0 < Object.keys(d).length) {
        for (A = 0; A < Object.keys(d).length; A++) t += d[A] += "\n\n";
        c.append("ThinkingSkills",
            "thinking skills: Observation. Analysis. Inference. Communication. Problem-solving. \n Questions:\n" + t)
    } else c.append("ThinkingSkills", "thinking skills:\n Observation. \n Analysis. \n Inference. \n Communication. \n Problem-solving. \n "); else if (c.append("AttachmentFiles[0].Name", "pdf لدرس " + m), c.append("TeacherNote", "للإطلاع على الدرس على بوابة عين \n https://ibs.ien.edu.sa/#/planslessons/" +
        b[2]), k = ["مراجعة الدروس السابقة", "ربط الدرس بالدروس السابقة المتصلة به", "تقويم تشخيصي"], k = k[Math.floor(Math.random() * k.length)], c.append("LectureClassPreparationText", k), k = ["استخدام  أوراق عمل",
        "عرض فيديو قصير كمراجعة للدرس", "تقويم ختامي", "اختيار إحدى مجموعات الفصل للتعاون في تلخيص الدرس شفهيًا أمام البقية ",
        "استخدام استراتيجية الكرسي الساخن لتلخيص الدرس"], k = k[Math.floor(Math.random() * k.length)], t = "", 0 < Object.keys(d).length) {
        for (A = 0; A < Object.keys(d).length; A++) t += d[A] += "\n\n";
        c.append("ThinkingSkills", "مهارات التفكير: التذكر. الفهم. التطبيق. التحليل. التركيب. التقويم. \n الأسئلة \n" +
            t)
    } else c.append("ThinkingSkills", "مهارات التفكير: التذكر. \n الفهم. \n التطبيق. \n التحليل. \n التركيب. \n التقويم. \n ");
    c.append("LectureClassCloseText", k);
    c.append("LessonVocabulary", m);
    0 < $("#Captcha_" + b[4] + "_" + b[5]).length ? c.append("Captcha",
        document.getElementById("Captcha_" + b[4] + "_" + b[5]).value) : c.append("Captcha", document.getElementById("Captcha").value);
    c.append("hfAttachLinkUrl", "/Teacher/Lessons/AttachLink");
    await $.ajax({
        url: "/Teacher/Lessons/SaveLastLessonPlan",
        data: c,
        processData: !1,
        contentType: !1,
        async: !0,
        type: "POST",
        success: function (x) {
            (async function (z, v, F, G) {
                await $.ajax({
                    url: "https://schools.madrasati.sa/Teacher/TimeTable/GetCal",
                    dataType: "json",
                    type: "POST",
                    data: {
                        Date: $(z).find('[name="StartDate"]').eq(0).val(), index: v[5],
                        SchoolId: $("#hSchoolId").val()
                    },
                    async: !0,
                    cache: !1,
                    success: function (C) {
                        for (var I = 0; I < C.TimeTable.length; I++) if (C.TimeTable[I].SlotNumber === parseInt(v[4])) if (0 !== C.TimeTable[I].ClassType) {
                            document.getElementById("sk-spi" + v[4] + v[5]).style.display = "none";
                            $("#select_" + v[4] + "_" + v[5] + " option:selected").val(0);
                            document.getElementById("edite0" + v[4] + "," + v[5]).href = "https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data=" + C.TimeTable[I].Data;
                            try {
                                document.getElementById("tm1" + v[4] + "," + v[5]).innerHTML =
                                    "<a style='color:green;'>تم التحضير</a>"
                            } catch {
                            }
                            solt1 += 1;
                            --solt0;
                            meaui = solt1 / allsolt * 100;
                            document.getElementById("static").innerHTML = "<b> حصص محضرة : ( " + solt1 + " ) حصص غير محضرة : ( " + solt0 + " ) النسبة المئوية:  ( %" + meaui + " )</b>";
                            100 === meaui ? document.getElementById("static").style.color = "green" :
                                document.getElementById("static").style.color = "red";
                            lessonNow = !0;
                            inttt += 1;
                            document.getElementById("pdf" + v[4] + "," + v[5]).innerHTML = '\n          \n          <a title="الدرس في كتاب الطالب" target="_blank" rel="noopener noreferrer" href=' + F + '> &nbsp;\n          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">\n            <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>\n            <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"/>\n          </svg>\n          </a>\n          \n          \n          ';
                            document.getElementById("yout" + v[4] + "," + v[5]).innerHTML = '\n          <a title="فيديو للدرس" target="_blank" rel="noopener noreferrer" href=' + G + '> &nbsp;\n          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">\n            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>\n          </svg>\n          </a>\n          ';
                            0 < C.TimeTable[I].PresenterUrl.length && (document.getElementById("teamLink" + C.TimeTable[I].SlotNumber + "," + C.CurrentDayIndex).innerHTML = '\n          <a title="رابط الدرس على مايكرسوفت تيمز" target="_blank" rel="noopener noreferrer" href=' + atob(C.TimeTable[I].PresenterUrl) + '> &nbsp;\n          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-microsoft-teams" viewBox="0 0 16 16">\n            <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682v.766Zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0Zm-2.238 9.488c-.04 0-.08 0-.12-.002a5.19 5.19 0 0 0 .381-2.07V6.306a1.692 1.692 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.598 2.598 0 0 1-2.598 2.598h-.013Z"/>\n            <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.682.682 0 0 1-.682.682H.682A.682.682 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945h1.363Z"/>\n          </svg>\n          </a>\n          ');
                            setTimeout(() => {
                                try {
                                    $("#Captcha_" + v[4] + "_" + v[5]).remove()
                                } catch {
                                }
                                bagin.push(1);
                                bagin.length == tok1 && document.getElementById("radio1").checked && delayg();
                                allSoltsa && document.getElementById("radio2").checked && allSolts()
                            }, 1E3);
                            for (var K = document.querySelectorAll('[id^="select_"]'), J = !1, M = 0; M < K.length; M++) "0" !== K[M].value && (J = !0);
                            J || $("#startNow").html("تحضير أكثر من حصة")
                        } else document.getElementById("sk-spi" + v[4] + v[5]).style.display =
                            "none", setTimeout(() => {
                            try {
                                $("#Captcha_" + v[4] + "_" + v[5]).remove()
                            } catch {
                            }
                            (async function (L) {
                                grecaptcha.execute("6Lfna_8ZAAAAAASsc9Yo_osSSAhfG4pkIZe8HJVG", {action: "submit"}).then(function (N) {
                                    $("body").append('<div><input id="Captcha_' + L[4] + "_" + L[5] + '" name="Captcha_' + L[4] + "_" + L[5] + '" type="hidden" value="' + N + '"></div>')
                                })
                            })(v);
                            ajsave(z, v, e, f, l, h);
                            document.getElementById("sk-spi" + v[4] + v[5]).style.display = "block"
                        }, 1E3)
                    }
                })
            })(a, b, D, E)
        },
        error: function (x) {
            console.log(x)
        }
    })
}

async function del(a, b) {
    document.getElementById("tm" + a.TimeTable[b].SlotNumber + "," + a.CurrentDayIndex).innerHTML = "<a style='color:orange;'>جاري الحذف ...</a>";
    await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Droos/DeleteLessonFormTable?LessonId=" + a.TimeTable[b].LectureIdEnc,
        type: "GET",
        dataType: "",
        cache: !1,
        success: function (e) {
            document.getElementById("tm" + a.TimeTable[b].SlotNumber + "," + a.CurrentDayIndex).innerHTML = "<a style='color:red;'>تم الحذف</a>";
            document.getElementById("select_" + a.TimeTable[b].SlotNumber + "_" + a.CurrentDayIndex).options[0].innerHTML = "اختر الدرس";
            document.getElementById("wajeb" + a.TimeTable[b].SlotNumber + "," + a.CurrentDayIndex).checked = !1;
            document.getElementById("nshat" + a.TimeTable[b].SlotNumber + "," + a.CurrentDayIndex).checked = !1;
            document.getElementById("ethra" + a.TimeTable[b].SlotNumber + "," + a.CurrentDayIndex).checked = !1;
            document.getElementById("ekhtbar" + a.TimeTable[b].SlotNumber + "," +
                a.CurrentDayIndex).checked = !1;
            (async function () {
                await nnow()
            })()
        }
    })
}

async function creatAct(a, b, e) {
    var f = $("#select_" + b[4] + "_" + b[5] + " option:selected").text();
    f = f.replaceAll("،", " ");
    f = f.replaceAll(",", " ");
    f = f.replaceAll("(", " ");
    f = f.replaceAll(")", " ");
    " " == f[0] && (f = f.slice(1));
    " " == f[-1] && (f = f.slice(0, -1));
    var l = new FormData;
    l.append("__RequestVerificationToken", $(a).find('[name="__RequestVerificationToken"]').eq(0).val());
    l.append("Id", 0);
    l.append("SelectedUnitId", b[1]);
    l.append("IsEduResource", "false");
    l.append("ActivityType", "1");
    l.append("Name", `اثراء لدرس ${f}`);
    l.append("IndicativeWords", "شرح,الدرس");
    l.append("IndicativeWordsInput", "شرح,الدرس");
    l.append("Description", `اثراء لدرس ${f}`);
    if (null == e) e = "https://ibs.ien.edu.sa/#/planslessons/" + b[1]; else {
        var h = e;
        h.includes("youtube.com/embed/") && (e = h.split("/embed/").pop(), e = "https://www.youtube-nocookie.com/embed/" + e)
    }
    l.append("Link", "https://ibs.ien.edu.sa/#/planslessons/" + b[1]);
    l.append("hfLevelsCount",
        "1");
    l.append("hfDrawTree", "/LearningResources/MangeResources/DrawTreeToClassLesson");
    l.append("SchoolId", $("#hSchoolId").val());
    b = "اثراء ";
    b = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test(f) ? "Activity " : "اثراء ";
    f = f.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g, "");
    a = "__RequestVerificationToken=" + $(a).find('[name="__RequestVerificationToken"]').eq(0).val() + "&Id=0&IsEduResource=false&SelectedUnitId=&SelectedGoles=&ActivityType=1&Name=" +
        b + f + "&Description=" + b + f + "&IndicativeWords=" + Base64.encode(f) + "&FileType=1&Link=" + e + "&hfLevelsCount=1&hfDrawTree=/LearningResources/MangeResources/DrawTreeToClassLesson&SchoolId=" + $("#hSchoolId").val() + "&oneDriveTypesValidations=pdf,png,jpeg,jpg&DriveFileName=";
    return await $.ajax({
        url: "/LearningResources/MangeResources/Create",
        data: a,
        async: !0,
        type: "POST",
        success: function (m) {
        }
    })
}

async function creatAct000(a, b, e) {
    var f = $("#select_" + b[4] + "_" + b[5] + " option:selected").text();
    f = f.replaceAll("،", " ");
    f = f.replaceAll(",", " ");
    f = f.replaceAll("(", " ");
    f = f.replaceAll(")", " ");
    " " == f[0] && (f = f.slice(1));
    " " == f[-1] && (f = f.slice(0, -1));
    var l = "";
    await $.ajax({
        url: "https://schools.madrasati.sa/MangeResources/GetGoalLessonSubject",
        type: "POST",
        data: {subjectId: b[1]},
        success: function (t) {
            console.log(t);
            l = t
        },
        error: function (t, D, E) {
            console.error("حدث خطأ:", E)
        }
    });
    for (var h = b[3], m = [], c = [], d = "", k = 0; k < l.length; k++) l[k].LessonId == h && (console.log(l[k].GoalId + "_" + l[k].LessonId), m.push({
        GoalId: l[k].GoalId,
        LessonId: l[k].LessonId
    })), l[k].LessonId !== d && (c.push({GoalId: l[k].GoalId, LessonId: l[k].LessonId}), d = l[k].LessonId);
    h = new FormData;
    h.append("__RequestVerificationToken", $(a).find('[name="__RequestVerificationToken"]').eq(0).val());
    h.append("IsEduResource", "true");
    h.append("SelectedUnitId", b[1]);
    h.append("LinkType", "3");
    h.append("SelectedGoles", m);
    h.append("ActivityType",
        "1");
    h.append("Name", `اثراء لدرس ${f}`);
    h.append("IndicativeWords", "شرح,الدرس");
    h.append("IndicativeWordsInput", "شرح,الدرس");
    h.append("Description", `اثراء لدرس ${f}`);
    null == e ? e = "https://ibs.ien.edu.sa/#/planslessons/" + b[1] : (d = e, d.includes("youtube.com/embed/") && (e = d.split("/embed/").pop(), e = "https://www.youtube-nocookie.com/embed/" +
        e));
    h.append("Link", "https://ibs.ien.edu.sa/#/planslessons/" + b[1]);
    h.append("hfLevelsCount", "1");
    h.append("hfDrawTree", "/LearningResources/MangeResources/DrawTreeToClassLesson");
    h.append("SchoolId", $("#hSchoolId").val());
    h = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
    d = "اثراء ";
    console.log(m);
    m = JSON.stringify(m);
    c = JSON.stringify(c);
    c = Base64.encode(c);
    m = Base64.encode(m);
    k = b[3];
    f = f.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g, "");
    d = h.test(f) ? "Activity " + f : "اثراء " +
        f;
    actcheck && (e = "https://ibs.ien.edu.sa/#/planslessons/" + b[1], m = c, d = h.test(f) ? "Explanation of the lesson on the Ain platform" : "شرح الدرس على منصة عين", actcheck = !1);
    a = "__RequestVerificationToken=" + $(a).find('[name="__RequestVerificationToken"]').eq(0).val() + "&Id=0&IsEduResource=true&SelectedUnitId=" + b[1] + "&SelectedGoles=" + m + "&LinkType=3&ActivityType=1&Name=" + d + "&Description=" + d + "&IndicativeWords=" + Base64.encode(k) +
        "&FileType=1&Link=" + e + "&hfLevelsCount=1&hfDrawTree=/LearningResources/MangeResources/DrawTreeToClassLesson&SchoolId=" + $("#hSchoolId").val() + "&oneDriveTypesValidations=pdf,png,jpeg,jpg&DriveFileName=";
    return await $.ajax({
        url: "/MangeResources/Create", data: a, async: !0, type: "POST", success: function (t) {
        }
    })
}

async function creatAct22(a, b) {
    var e = $("#select_" + b[4] + "_" + b[5] + " option:selected").text();
    e = e.replaceAll("،", " ");
    e = e.replaceAll(",", " ");
    e = e.replaceAll("(", " ");
    e = e.replaceAll(")", " ");
    " " == e[0] && (e = e.slice(1));
    " " == e[-1] && (e = e.slice(0, -1));
    $("#serviceFrameSend").ready(function () {
        var f = $("#serviceFrameSend");
        f.contents().find("#IndicativeWordsInput").val("اثراء درس " + e);
        f.contents().find("#IsEduResource").val(!1);
        f.contents().find("#ActivityType").val(1);
        f.contents().find("#Name").val("اثراء درس " + e);
        f.contents().find("#Description").val("اضغط على الرابط بالأسفل للتوجه إلى منصة عين");
        f.contents().find("#Link").val("https://ibs.ien.edu.sa/#/planslessons/" + b[1]);
        f.contents().find("button:contains('حفظ')").click()
    })
}

async function gettreeid(a) {
    return await $.ajax({
        url: "/Teacher/Lessons/LessonPlan?data=" + a, type: "GET", cache: !1, success: function (b) {
        }
    })
}

async function creatProj(a, b) {
    a = $("#select_" + b[4] + "_" + b[5] + " option:selected").text();
    a = a.replaceAll("،", " ");
    a = a.replaceAll(",", " ");
    a = a.replaceAll("(", " ");
    a = a.replaceAll(")", " ");
    " " == a[0] && (a = a.slice(1));
    " " == a[-1] && (a = a.slice(0, -1));
    var e = await async function () {
        return await $.ajax({
            url: "https://schools.madrasati.sa/Projects/Projects/Create?schoolId=" + $("#hSchoolId").val(),
            type: "GET",
            success: function (c) {
            }
        })
    }();
    e = (new DOMParser).parseFromString(e, "text/html");
    console.log(e);
    new FormData;
    var f =
            "نشاط ", l = "",
        h = "يمكن الاستفادة من المصادر التالية: ";
    /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test(a) ? (l = "Search the Internet for: " + a + " , then summarize what you have learned in writing and include it in your educational file.", f = "Project ", h = "Information can be obtained from the following sources: ") : (f = "نشاط ",
        l = "ابحث في الإنترنت عن :" + a + " ,ثم أقوم بتلخيص ما تعلمته كتابيًا ,وتضمينه ملف تعلمي (الإنجاز) .", h = "يمكن الاستفادة من المصادر التالية: ");
    a = a.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g, "");
    $(e).find('[name="__RequestVerificationToken"]').eq(0).val();
    $("#hSchoolId").val();
    encodeURIComponent($(e).find('[name="HashKey"]').eq(0).val());
    var m = new FormData;
    console.log(b);
    m.append("Id", "");
    m.append("schoolId", $("#hSchoolId").val());
    m.append("isNotUserLayout", "False");
    m.append("selectedSubjectId", "");
    m.append("HashKey", $(e).find('[name="HashKey"]').eq(0).val());
    m.append("Name", f + "(" + a + ")");
    m.append("ClassificationLevel", "2");
    m.append("IsRelatedToSubject",
        "true");
    b[6] ? (m.append("SelectedUnitId", b[1]), m.append("SelectedTrees_2", b[2]), m.append("SelectedTrees_3", b[6]), m.append("SelectedTrees_4", b[3]), m.append("hfLevelsCount", "4")) : (m.append("SelectedUnitId", b[1]), m.append("SelectedTrees_2", b[2]), m.append("SelectedTrees_3", b[3]), m.append("hfLevelsCount", "3"));
    m.append("CategoryId", "1");
    m.append("OtherCategoryText", "");
    m.append("ProjectType", "2");
    m.append("Description", l);
    m.append("file", new Blob, "filename");
    m.append("filePath", "");
    m.append("FileHelpText",
        h);
    m.append("Link", "https://www.ien.edu.sa/#/home/links/8");
    m.append("PageNumber", "");
    m.append("QuestionsNumber", "");
    m.append("SolvingType", "3");
    m.append("AccessType", "false");
    m.append("hfDrawTree", "/Projects/DrawTreeToClassLesson");
    m.append("SaveButton", "");
    m.append("__RequestVerificationToken", $(e).find('[name="__RequestVerificationToken"]').eq(0).val());
    return await $.ajax({
        url: "/Projects/Projects/Create",
        data: m,
        processData: !1,
        async: !0,
        contentType: !1,
        type: "POST",
        success: function (c) {
        },
        error: function (c) {
            console.log("error:",
                c)
        }
    })
}

async function creatAssignments(a, b, e, f) {
    var l = $("#select_" + b[4] + "_" + b[5] + " option:selected").text();
    l = l.replaceAll("،", " ");
    l = l.replaceAll(",", " ");
    l = l.replaceAll("(", " ");
    l = l.replaceAll(")", " ");
    " " === l[0] && (l = l.slice(1));
    " " === l[-1] && (l = l.slice(0, -1));
    var h = new FormData;
    h.append("SaveButton", "");
    h.append("NameAssignmentPervious", "");
    h.append("LessonBreadcrumb", "");
    h.append("AssignmentTypeTitle", "");
    h.append("AccessTypeTitle", "");
    h.append("QuestionsCount", "");
    h.append("IsEditDraft", !1);
    h.append("IsDraft",
        !1);
    h.append("IdEnc", "");
    h.append("DraftIdEnc", "");
    h.append("Id", 0);
    h.append("TreeId", "");
    h.append("IsTreeLevel", "");
    h.append("IsQuran", !1);
    h.append("VerseCount", "");
    h.append("txt_UploadUrl", "/Teacher/Assignments/UploadFile");
    h.append("QuranLessonType", 1);
    h.append("VerseStart", "");
    h.append("__Invariant_VerseStart", "");
    h.append("VerseEnd", "");
    h.append("__Invariant_VerseEnd", "");
    h.append("FilePathDescriptionTeacher", "");
    h.append("filePath", "");
    h.append("PageNumber", "");
    h.append("QuestionsNumber", "");
    h.append("__RequestVerificationToken", $(a).find('[name="__RequestVerificationToken"]').eq(0).val());
    h.append("Id", "0");
    b[6] ? (h.append("SelectedUnitId", b[1]), h.append("SelectedTrees_2", b[2]), h.append("SelectedTrees_3", b[6]), h.append("SelectedTrees_4", b[3]), h.append("hfLevelsCount", "4")) : (h.append("SelectedUnitId", b[1]), h.append("SelectedTrees_2", b[2]), h.append("SelectedTrees_3", b[3]), h.append("hfLevelsCount", "3"));
    var m = b = "", c = "";
    a = "واجب ";
    var d = "تدرب على حل الأسئلة على الرابط التالي: https://ibs.ien.edu.sa/#/coursesAssessment ";
    /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test(l) ? (d = "Practice solving the questions at the following link: https://ibs.ien.edu.sa/#/coursesAssessment", a = "Assignment ", b = "Write and answer the following questions in your notebook", m = "Answer the following questions in writing in the answer space provided below", c = "Answer the following questions in writing in the notebook, then photocopy your answer and attach it as a file in the space provided below") : (d = "تدرب على حل الأسئلة في الرابط التالي: https://ibs.ien.edu.sa/#/coursesAssessment ",
        a = "واجب ", b = "أكتب الأسئلة التالية ثم أجيب عنها في دفتر المادة ", m = "أجيب عن الأسئلة التالية كتابةً في المكان المخصص للإجابة أدناه :",
        c = "أجيب عن الأسئلة التالية كتابيًا ، ثم أصور إجابتي وأرفقها كملف في المكان المخصص أدناه");
    l = l.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g, "");
    h.append("hfDrawTree", "/Teacher/Assignments/DrawTreeToClassLesson");
    h.append("SchoolId", $("#hSchoolId").val());
    if (0 < e.length) if (d = document.getElementById("radio_nou3alwajep"), document.getElementById("radio_girnou3alwajep"), d.checked) {
        e = "";
        for (var k = d = 0; k < f.length; k++) 4 > k && (d = k + 1, e += "\nالسؤال-" + d + "\nhttps://schools.madrasati.sa/Teacher/QuestionBank/ViewQuestion/" + id + "?isIen=True\n- ");
        h.append("AssignmentType", "2");
        f = document.getElementById("radio_girthtslemwajep");
        d =
            document.getElementById("radio_girtslemwajep");
        console.log(e);
        f.checked ? (h.append("Description", b + e), h.append("FileHelpText", "انسخ الرابط وافتحه في المتصفح لرؤية الأسئلة "), h.append("SolvingType", "3")) : d.checked ? (h.append("Description", m + e), h.append("FileHelpText", "انسخ الرابط وافتحه في المتصفح لرؤية الأسئلة "),
            h.append("SolvingType", "2")) : (h.append("Description", c + e), h.append("FileHelpText", "انسخ الرابط وافتحه في المتصفح لرؤية الأسئلة "), h.append("SolvingType", "1"))
    } else for (h.append("AssignmentType", "3"), h.append("Description", a + "-" + l), h.append("SolvingType", "4"), f = 0, NaN !== parseInt($("[name='quantity']").val()) && (f = e.length >
    parseInt($("[name='quantity']").val()) ? parseInt($("[name='quantity']").val()) : e.length), b = 0; b < f; b++) h.append("AssignmentQuestionsList[" + b + "].Id", e[b]), h.append("AssignmentQuestionsList[" + b + "].Grade", "2"), h.append("AssignmentQuestionsList[" + b + "].IsIenQuestion", "True"); else h.append("AssignmentType", "2"), h.append("Description", d), h.append("SolvingType", "3");
    (f = document.getElementById("radio_ntaq")) ? f.checked ? h.append("AccessType", "False") : h.append("AccessType", "True") : h.append("AccessType", "False");
    h.append("Name", a + l);
    return await $.ajax({
        url: "/Teacher/Assignments/Manage?Length=11",
        headers: {"X-Requested-With": "XMLHttpRequest"},
        cache: !1,
        async: !0,
        processData: !1,
        contentType: !1,
        type: "POST",
        data: h,
        success: function (t) {
        },
        error: function (t) {
            console.log(t)
        }
    })
}

async function AddQuestion1(a, b) {
    a = {
        subjectId: b,
        eschoolId: $("#hSchoolId").val(),
        treeId: a,
        lessonId: a,
        isTreelevel: !1,
        pageNumber: 1,
        searchInput: "",
        questionType: "",
        difficultyLevel: "",
        creator: 0,
        listOfQuestions: []
    };
    return await $.ajax({
        url: "/Teacher/Assignments/AddQuestionListPaging",
        type: "GET",
        cache: !1,
        data: a,
        success: function (e) {
        }
    })
}

async function AddQuestion(a, b) {
    a = {
        subjectId: b[1],
        eschoolId: $("#hSchoolId").val(),
        treeId: b[3],
        lessonId: b[3],
        isTreelevel: !1,
        pageNumber: 1,
        searchInput: "",
        questionType: "",
        difficultyLevel: "",
        creator: 0,
        listOfQuestions: []
    };
    return await $.ajax({
        url: "/Teacher/Assignments/AddQuestionListPaging",
        type: "GET",
        cache: !1,
        data: a,
        success: function (e) {
        }
    })
}

async function getAllAssignments() {
    new FormData;
    var a = "https://schools.madrasati.sa/Teacher/Assignments/Index/" + $("#hSchoolId").val();
    return await $.ajax({
        url: a, type: "GET", cache: !1, processData: !1, contentType: !1, success: function (b) {
        }
    })
}

async function getallproj() {
    var a = "/Projects/Projects/Index/" + $("#hSchoolId").val();
    return await $.ajax({
        url: a,
        type: "GET",
        cache: !1,
        async: !0,
        processData: !1,
        contentType: !1,
        success: function (b) {
        }
    })
}

async function creatExams(a, b) {
    var e = $("#select_" + b[4] + "_" + b[5] + " option:selected").text();
    e = e.replaceAll("،", " ");
    e = e.replaceAll(",", " ");
    e = e.replaceAll("(", " ");
    e = e.replaceAll(")", " ");
    " " == e[0] && e.slice(1);
    " " == e[-1] && e.slice(0, -1);
    var f = await gethash();
    a = new FormData;
    a.append("__RequestVerificationToken", $(f).find('[name="__RequestVerificationToken"]').eq(0).val());
    a.append("HashKey", $(f).find('[name="HashKey"]').eq(0).val());
    a.append("Id", "0");
    a.append("ExamCategory", "3");
    b[6] ? (a.append("SelectedUnitId",
        b[1]), a.append("SelectedTrees_2", b[2]), a.append("SelectedTrees_3", b[6]), a.append("SelectedTrees_4", b[3]), a.append("hfLevelsCount", "4")) : (a.append("SelectedUnitId", b[1]), a.append("SelectedTrees_2", b[2]), a.append("SelectedTrees_3", b[3]), a.append("hfLevelsCount", "3"));
    for (var l = await getgollaxam(b[3], b[3]), h = [], m = "", c = 0; c < l.length; c++) h.push(l[c].Id), a.append("GoalIds", l[c].Id), m += "&GoalIds=" + l[c].Id;
    l = "اختبار ";
    l = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test(e) ?
        "exam " : "اختبار ";
    e = e.replace(/[^؀-ۿ一-鿿a-zA-Z0-9\s-]/g, "");
    a.append("Name", l + e);
    (c = document.getElementById("radio_ntaqak")) ? c.checked ? a.append("AccessType", "False") : a.append("AccessType", "True") : a.append("AccessType", "False");
    a.append("LessonParentId", b[2]);
    a.append("TreeId", b[3]);
    a.append("LessonId", b[3]);
    a.append("IsTreeLevel", "");
    a.append("ExamId", "");
    a.append("SchoolId", $("#hSchoolId").val());
    a.append("AllowLessonContent", "true");
    a.append("ExamType",
        "2");
    a.append("ExamQuestionSource", "ien");
    a.append("Description", l + e);
    a.append("AccessType", "False");
    a.append("AllowLessonContent", "true");
    a.append("hfDrawTree", "/LearningResources/MangeResources/DrawTreeToClassLesson");
    m = "TreeId=" + b[3] + "&LessonId=" + b[3] + "&ExamType=2&IsDraft=false&IsEditDraft=false&ExamCategory=3&&SelectedUnitId=" + b[1] + "&SelectedTrees_2=" + b[2] + "&SelectedTrees_3=" + b[3] + "&Name=&ExamQuestionSource=ien&TotalGrade=&__Invariant_TotalGrade=&Description=&AccessType=false&hfLevelsCount=3&hfDrawTree=/Teacher/Exams/DrawTreeToClassLesson&AllowLessonContent=false" +
        m;
    h = await loadExam(b[1], b[3], b[3], h);
    h = (new DOMParser).parseFromString(h.html, "text/html");
    for (var d = h.querySelectorAll('[name*=".itemCount"]'), k = c = 0; k < d.length; k++) c += parseInt(d[k].value);
    for (d = 0; d < c; d++) try {
        m += "&List[" + d + "].NumberOfQuestions=1&List[" + d + "].QuestionTypeCode=" + $(h).find('[name="List[' + d + '].QuestionTypeCode"]')[0].value + "&List[" + d + "].DifficultyFactor=" + $(h).find('[name="List[' + d + '].DifficultyFactor"]')[0].value + "&List[" + d + "].itemCount=" + $(h).find('[name="List[' + d + '].itemCount"]')[0].value,
            a.append("List[" + d + "].NumberOfQuestions", "1"), a.append("List[" + d + "].QuestionTypeCode", $(h).find('[name="List[' + d + '].QuestionTypeCode"]')[0].value), a.append("List[" + d + "].DifficultyFactor", $(h).find('[name="List[' + d + '].DifficultyFactor"]')[0].value), a.append("List[" + d + "].itemCount", $(h).find('[name="List[' + d + '].itemCount"]')[0].value)
    } catch {
    }
    h = await getq(m);
    h = (new DOMParser).parseFromString(h.html, "text/html");
    h.getElementsByClassName("decimal.grade-input");
    c = 0;
    NaN !== parseInt($("[name='quantity1']").val()) &&
    (c = $(h).find(".form-control.grade-input").length > parseInt($("[name='quantity1']").val()) ? parseInt($("[name='quantity1']").val()) : $(h).find(".form-control.grade-input").length);
    for (d = 0; d < c; d++) m += "&QuestionsList[" + d + "].GradeInAssignment=2", m += "&QuestionsList[" + d + "].QuestionTypeCodeNo=" + $(h).find("[name='QuestionsList[" + d + "].QuestionTypeCodeNo']").eq(0).val(), m += "&QuestionsList[" + d + "].DifficultyFactorNo=" + $(h).find("[name='QuestionsList[" + d + "].DifficultyFactorNo']").eq(0).val(), m += "&QuestionsList[" +
        d + "].Id=" + $(h).find("[name='QuestionsList[" + d + "].Id']").eq(0).val(), a.append("QuestionsList[" + d + "].GradeInAssignment", "2"), a.append("QuestionsList[" + d + "].QuestionTypeCodeNo", $(h).find("[name='QuestionsList[" + d + "].QuestionTypeCodeNo']").eq(0).val()), a.append("QuestionsList[" + d + "].DifficultyFactorNo", $(h).find("[name='QuestionsList[" + d + "].DifficultyFactorNo']").eq(0).val()), a.append("QuestionsList[" + d + "].Id", $(h).find("[name='QuestionsList[" + d + "].Id']").eq(0).val());
    b = "__RequestVerificationToken=" +
        $(f).find('[name="__RequestVerificationToken"]').eq(0).val() + "&Id=0&LessonParentId=" + b[2] + "&TreeId=" + b[3] + "&LessonId=" + b[3] + "&IsTreeLevel=&ExamId=&SchoolId=" + $("#hSchoolId").val() + "&HashKey=" + $(f).find('[name="HashKey"]').eq(0).val() + "&ExamCategory=3&ExamCategory=&SelectedUnitId=" + b[1] + "&SelectedTrees_2=" + b[2] + "&SelectedTrees_3=" + b[3] + "&Name=" + l + e + "&ExamType=2&ExamType=&GoalIds=49523&ExamQuestionSource=ien&TotalGrade=&Description=&AccessType=False&AllowLessonContent=true&AllowLessonContent=true&hfLevelsCount=3&hfDrawTree=/Teacher/Exams/DrawTreeToClassLesson&" +
        m + "&QuestionsList[1].IsDeleted=False&X-Requested-With=XMLHttpRequest";
    a.append("rowIndex", "true");
    return await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Exams/Manage",
        type: "POST",
        headers: {
            accept: "*/*",
            "accept-language": "ar,en-US;q=0.9,en;q=0.8",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest"
        },
        data: b,
        processData: !1,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        xhrFields: {withCredentials: !0},
        success: function (t) {
            console.log("Success:",
                t)
        },
        error: function (t, D, E) {
            console.error("Error:", E)
        }
    })
}

async function getgollaxam(a, b) {
    return await $.ajax({
        url: "/Teacher/Exams/GetExamGoalsByTreeId",
        type: "GET",
        dataType: "json",
        cache: !1,
        data: {treeId: a, lessonId: b},
        success: function (e) {
        }
    })
}

async function getact() {
    return await $.ajax({
        url: "/LearningResources/MangeResources/Index/" + $("#hSchoolId").val(),
        type: "GET",
        cache: !1,
        async: !0,
        dataType: "html",
        success: function (a) {
        }
    })
}

async function getExams() {
    return await $.ajax({
        url: "/Teacher/Exams/Index/" + $("#hSchoolId").val(),
        type: "GET",
        cache: !1,
        async: !0,
        dataType: "html",
        success: function (a) {
        }
    })
}

function getAllles00() {
    $.ajax({
        url: "/Teacher/Lessons/LessonDetails?LessonId=[{ Id: '38544', Name: 'النص الإثرائي (الدرعية)' }]&LectureClassId=0&StartDate=1/23/2023 7:00:00 AM&EndDate=1/23/2023 7:45:00 AM&TreeId=30448",
        type: "GET",
        cache: !1,
        async: !0,
        dataType: "html",
        success: function (a) {
            (new DOMParser).parseFromString(a, "text/html");
            getallGet = !0
        }
    })
}

async function gethash() {
    var a = "/Teacher/Exams/Manage?SchoolId=" + $("#hSchoolId").val();
    return await $.ajax({
        url: a, type: "GET", cache: !1, processData: !1, contentType: !1, success: function (b) {
        }
    })
}

function loadAction000() {
    var a = [], b = [], e = new FormData;
    e.append("rowIndex", "true");
    e.append("rowIndex", "12");
    for (var f of e.entries()) ;
    $.ajax({
        type: "Post",
        cache: !1,
        async: !0,
        data: {LectureClassId: 0, TreeId: 30448, CopyMode: !1, lessonId: 38544, LessonGoalsAndActivity: []},
        url: "/Teacher/LectureTools/GetLessonPlayerForComponent",
        dataType: "html",
        success: function (l) {
            l = (new DOMParser).parseFromString(l, "text/html");
            for (var h = 0; h < $(l).find('[name="activities"]').length; h++) b.push($(l).find('[name="activities"').eq(h).val());
            for (h = 0; h < $(l).find('[name="goals"]').length; h++) a.push($(l).find('[name="goals"').eq(h).val());
            for (l = 0; l < b.length; l++) e.append("activities", activoflessb[l])
        }
    })
}

async function getq(a) {
    console.log(a);
    return await $.ajax({
        url: "/Teacher/Exams/ExamQuestionSettings",
        type: "POST",
        cache: !1,
        async: !0,
        data: a,
        success: function (b) {
        }
    })
}

async function loadExam(a, b, e, f) {
    a = {
        selectedUnitId: a,
        treeId: b,
        lessonId: e,
        examIdEnc: "",
        goalIds: f,
        "goalIds[]": e,
        IsEditDraft: !1,
        SchoolId: $("#hSchoolId").val(),
        Name: ""
    };
    return await $.ajax({
        url: "/Teacher/Exams/ExamSettings",
        type: "POST",
        cache: !1,
        async: !0,
        data: a,
        success: function (l) {
        }
    })
};
