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

    <form method="#" id="change-user-data">
        <!-- <div>Email: <input type="email" name="email" id="signup-email"></div> -->
        <div>Name: <input type="text" name="name" id="signup-name"></div>
        <div>Password: <input type="text" name="pass" id="signup-pass"></div>
        <div>Birthday: <input type="text" name="birthday" id="signup-birthday"></div>
        <div>Sex:
            <div> <input class="radio-sex" type="radio" value="male" name="sex">male</div>
            <div><input class="radio-sex" type="radio" value="female" name="sex">female</div>
            <div><input class="radio-sex" type="radio" value="other" name="sex">other</div>
        </div>
        <input type="submit" value="save" id="save-user-data">
    </form>


    <script src="/js/ajax.js" defer></script>
    <script src="/js/cookies-tools.js" defer></script>
    <script src="/js/get_user_data.js" defer></script>
    <script src="/js/logout.js" defer></script>
</body>

</html>