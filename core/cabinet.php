<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: /index.html");
        exit; 
    }
?>
hello!
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>User Page</h1>
    <button id="logout">LogOUT</button>

    <script src="/js/cookies-tools.js" defer></script>
    <script src="/js/logout.js" defer></script>
</body>

</html>