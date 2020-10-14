<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: /index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <title>User Cabinet</title>

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" defer></script>
    <link rel="stylesheet" href="/css/main-style.css">
    
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col s12 center">
                <h1 class="user-cabinet-header">User Page</h1>
            </div>
            <div class="col s12 center">
                <button class="waves-effect waves-light btn logout-btn deep-purple accent-2" id="logout"><i class="material-icons left">exit_to_app</i>Logout</button>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <form method="#" id="change-user-data" class="user-data-form">
                    <!-- <div>Email: <input type="email" name="email" id="signup-email"></div> -->

                    <div class="row">
                        <div class="input-field col s12 m6 l5 offset-l1">
                            <!-- <i class="material-icons prefix">account_circle</i> -->
                            <input id="signup-name" type="text" class="validate" name="name">
                            <label class="active" for="signup-name">Name</label>
                        </div>
                        <div class="input-field col s12 m6 l5">
                            <input id="signup-pass" type="text" class="validate" name="pass">
                            <label class="active" for="signup-pass">Password</label>
                        </div>
                        <div class="input-field col s12 m6 l5 offset-l1">
                            <input class="datepicker" type="text" name="birthday" id="signup-birthday">
                            <label class="active" for="signup-birthday">Birthday</label>
                        </div>
                        <div class="input-field col s12 m6 l5">
                            <div>
                                <label>Sex:</label>
                                <div>
                                    <label>
                                        <input class="with-gap radio-sex" name="sex" type="radio" value="male">
                                        <span>male</span>
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input class="with-gap radio-sex" name="sex" type="radio" value="female">
                                        <span>female</span>
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input class="with-gap radio-sex" name="sex" type="radio" value="other">
                                        <span>other</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="input-field col s12 center">
                            <button class="waves-effect waves-light btn logout-btn deep-purple accent-2" id="save-user-data"><i class="material-icons right">save</i>Save</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>

    

    <script src="/js/ajax.js" defer></script>
    <script src="/js/cookies-tools.js" defer></script>
    <script src="/js/get_user_data.js" defer></script>
    <script src="/js/logout.js" defer></script>
</body>

</html>