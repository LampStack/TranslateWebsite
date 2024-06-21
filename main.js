
// send form data
function sendForm() {
    var xhr = new XMLHttpRequest();
    var formData = new FormData(document.getElementById("translate"));

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };

    xhr.open("POST", 'api.php', true);
    xhr.send(formData);

    var from_dir = document.getElementById("from").value;
    if (from_dir === "fa" || from_dir === "ar") {
        document.getElementById("text").classList.add("rtl");
        document.getElementById("text").classList.remove("ltr");
    } else {
        document.getElementById("text").classList.add("ltr");
        document.getElementById("text").classList.remove("rtl");
    }

    var to_dir = document.getElementById("to").value;
    if (to_dir === "fa" || to_dir === "ar") {
        document.getElementById("result").classList.add("rtl");
        document.getElementById("result").classList.remove("ltr");
    } else {
        document.getElementById("result").classList.add("ltr");
        document.getElementById("result").classList.remove("rtl");
    }
}

// copy result
const okElement = document.getElementById("copy");
const textElement = document.getElementById("result");

okElement.addEventListener("click", function () {
    const text = textElement.textContent;
    navigator.clipboard.writeText(text);
    document.getElementById("copied").classList.remove("d-none");
    document.getElementById("copied").classList.add("d-block");
    setTimeout(function () {
        document.getElementById("copied").classList.remove("d-block");
        document.getElementById("copied").classList.add("d-none");
    }, 3500);
});

// send data realtime
function sendData() {
    var xhr = new XMLHttpRequest();
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var text = document.getElementById('text').value;

    var params = "from=" + encodeURIComponent(from) +
        "&to=" + encodeURIComponent(to) +
        "&from_text=" + encodeURIComponent(text);

    xhr.open("POST", "api.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };

    xhr.send(params);

    var from_dir = document.getElementById("from").value;
    if (from_dir === "fa" || from_dir === "ar") {
        document.getElementById("text").classList.add("rtl");
        document.getElementById("text").classList.remove("ltr");
    } else {
        document.getElementById("text").classList.add("ltr");
        document.getElementById("text").classList.remove("rtl");
    }

    var to_dir = document.getElementById("to").value;
    if (to_dir === "fa" || to_dir === "ar") {
        document.getElementById("result").classList.add("rtl");
        document.getElementById("result").classList.remove("ltr");
    } else {
        document.getElementById("result").classList.add("ltr");
        document.getElementById("result").classList.remove("rtl");
    }
}

// Swap the selected
function swapOptions() {
    var from = document.getElementById('from');
    var to = document.getElementById('to');

    var tempOption = from.value;
    from.value = to.value;
    to.value = tempOption;
}


/*
Start Swap Theme
*/
if (localStorage.getItem("mode") === "dark") {
    setDarkMode();
} else if (localStorage.getItem("mode") === "light") {
    setLightMode();
}

var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function () {
    if (localStorage.getItem("mode") === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
});

var navbar = document.getElementById("navbar-swap");
navbar.addEventListener("click", function () {
    if (localStorage.getItem("mode") === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
});

function setDarkMode() {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
}

function setLightMode() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("mode", "light");
}
/*
End Swap Theme
*/


/* Start Switch Language */
function bindSwitchLangButton() {
    const switchButton = document.getElementById("switch-lang");
    if (switchButton) {
        switchButton.addEventListener("click", () => {
            let lang = localStorage.getItem("lang");
            if (lang === "fa") {
                localStorage.setItem("lang", "en");
            } else {
                localStorage.setItem("lang", "fa");
            }
            let currentLocation = window.location.pathname;
            if (currentLocation === "/" || currentLocation === "/index.php") {
                location.replace(lang === "en" ? "en.php" : "index.php");
            } else {
                location.reload();
            }
        });
    }
}

window.addEventListener("load", () => {
    bindSwitchLangButton();
});
/* End Switch Language */

// Default language is Persian ("fa")
if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "fa");
}

// Check the saved language and redirect accordingly
const currentLang = localStorage.getItem("lang");
if (currentLang === "en" && !window.location.pathname.includes("en.php")) {
    location.replace("en.php");
} else if (currentLang === "fa" && window.location.pathname.includes("en.php")) {
    location.replace("index.php");
}


// User Internet Status
const istatus = document.getElementById('status');
if (navigator.onLine) {
    istatus.classList.remove('text-danger');
    istatus.classList.add('text-success');
    istatus.textContent = 'شما به اینترنت متصل هستید.';
    setTimeout(function () {
        document.getElementById("status").classList.remove("d-block");
        document.getElementById("status").classList.add("d-none");
    }, 3500);
} else {
    document.getElementById("status").classList.remove("d-none");
    document.getElementById("status").classList.add("d-block");
    istatus.classList.remove('text-success');
    istatus.classList.add('text-danger');
    istatus.textContent = 'دسترسی شما به اینترنت قطع شد.';
}
window.addEventListener('online', () => {
    istatus.classList.remove('text-danger');
    istatus.classList.add('text-success');
    istatus.textContent = 'شما به اینترنت متصل هستید.';
    setTimeout(function () {
        document.getElementById("status").classList.remove("d-block");
        document.getElementById("status").classList.add("d-none");
    }, 3500);
});
window.addEventListener('offline', () => {
    document.getElementById("status").classList.remove("d-none");
    document.getElementById("status").classList.add("d-block");
    istatus.classList.remove('text-success');
    istatus.classList.add('text-danger');
    istatus.textContent = 'دسترسی شما به اینترنت قطع شد.';
});