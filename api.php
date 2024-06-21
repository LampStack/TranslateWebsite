<?php

ini_set("log_errors", "off");
error_reporting(0);
require('GoogleTranslate.php');

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (
        empty($_POST['from']) ||
        empty($_POST['to']) ||
        empty($_POST['from_text']) ||
        !isset($_POST['from']) ||
        !isset($_POST['to']) ||
        !isset($_POST['from_text'])
    ) {
        return;
    } else {
        $translation = GoogleTranslate::translate($_POST['from'], $_POST['to'], $_POST['from_text']);
        echo $translation;
    }
} else {
    echo "Method Error";
}