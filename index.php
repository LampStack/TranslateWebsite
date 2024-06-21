<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Meta Tags -->
    <meta name="description" content="the fast php language translator powered by google-translate-php">
    <meta name="keywords" content="Google Translate, Translate, Translator">
    <meta name="author" content="Hossein Pira">
    <link rel="shortcut icon" type="image/png" href="images/favicon.png">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Language Translator">
    <meta property="og:description" content="the fast php language translator powered by google-translate-php">
    <meta property="og:url" content="<?php echo 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>">
    <meta property="og:image" content="images/social.webp">
    <meta property="og:type" content="website">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="images/social.webp">
    <meta name="twitter:title" content="Language Translator">
    <meta name="twitter:description" content="the fast php language translator powered by google-translate-php">
    <meta name="twitter:image" content="images/social.webp">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <title>مترجم زبان</title>
</head>

<!-- 
    Project by Hossein Pira
    Email: h3dev.pira@gmail.com 
-->

<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button id="navbar-swap" type="button" class="btn btn-primary ms-2"><i class="fas fa-circle-half-stroke"></i></button>
        </div>
        </div>
    </nav>

    <!-- Main -->
    <div class="container">
        <div class="row mt-4 mb-3 d-flex align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="text-center mt-1 mb-2">
                    <h1 class="fw-bold ms-2">مترجم زبان</h1>
                    <h2 id="status" class="fs-5 mb-2 mt-2 d-none"></h2>
                </div>
                <form method="post" id="translate">
                    <div class="row mb-3">
                        <div class="col-lg-6 col-md-6 col-sm-12 mb-2">
                            <label class="form-label">از</label>
                            <select name="from" oninput="sendData()" class="form-select" id="from">
                                <option value="en" selected>انگلیسی</option>
                                <option value="fa">فارسی</option>
                                <option value="ar">عربی</option>
                                <option value="fr">فرانسوی</option>
                                <option value="de">آلمانی</option>
                                <option value="hi">هندی</option>
                                <option value="tr">ترکی</option>
                                <option value="pl">لهستانی</option>
                                <option value="ru">روسی</option>
                                <option value="it">ایتالیایی</option>
                                <option value="es">اسپانیایی</option>
                                <option value="uz">ازبکی</option>
                                <option value="hy">ارمنی</option>
                                <option value="bn">بنگلادشی</option>
                                <!-- <option value="ex">example</option> -->
                            </select>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 mb-2">
                            <label class="form-label">به</label>
                            <select name="to" oninput="sendData()" class="form-select" id="to">
                                <option value="fa" selected>فارسی</option>
                                <option value="en">انگلیسی</option>
                                <option value="ar">عربی</option>
                                <option value="fr">فرانسوی</option>
                                <option value="de">آلمانی</option>
                                <option value="hi">هندی</option>
                                <option value="tr">ترکی</option>
                                <option value="pl">لهستانی</option>
                                <option value="ru">روسی</option>
                                <option value="it">ایتالیایی</option>
                                <option value="es">اسپانیایی</option>
                                <option value="uz">ازبکی</option>
                                <option value="hy">ارمنی</option>
                                <option value="bn">بنگلادشی</option>
                                <!-- <option value="ex">example</option> -->
                            </select>
                        </div>
                    </div>
                    <div class="text-center mt-2 mb-3">
                        <button id="swap" type="button" class="btn btn-dark ms-2 w-100" onclick="swapOptions()"><i class="fas fa-arrow-right-arrow-left ms-2"></i> تعویض</button>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">متن شما</label>
                        <textarea id="text" oninput="sendData()" class="form-control" name="from_text" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">نتیجه</label>
                        <textarea id="result" disabled class="form-control" name="from-text" rows="3"></textarea>
                    </div>
                    <button id="toggleButton" type="button" class="btn btn-primary ms-2"><i class="fas fa-circle-half-stroke"></i></button>
                    <button type="button" class="btn btn-primary ms-2" onclick="swapOptions()"><i class="fas fa-arrow-right-arrow-left"></i></button>
                    <button type="button" id="copy" class="btn btn-secondary">کپی متن</button>
                    <p id="copied" class="text-success mt-2 d-none">متن در کلیپ بورد کپی شد</p>
                    <hr>
                    <button type="button" class="btn btn-primary w-100" onclick="sendForm()">ترجمه</button>
                </form>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 d-none d-sm-block text-center">
                <img src="images/translate.svg" alt="Language Translate">
            </div>
        </div>
    </div>

    <script src="main.js" defer></script>
    <script src="js/bootstrap.bundle.min.js" defer></script>
</body>

</html>