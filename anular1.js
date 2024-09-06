<!DOCTYPE html>
<html lang="en" ng-app="lahiApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to LAHI</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }
        h1 {
            color: #007BFF;
        }
        p {
            font-size: 1.2em;
        }
        .btn {
            display: inline-block;
            margin: 20px 0;
            padding: 10px 20px;
            font-size: 1em;
            color: #fff;
            background-color: #007BFF;
            text-decoration: none;
            border-radius: 5px;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        footer {
            margin-top: 20px;
            font-size: 0.8em;
        }
    </style>
</head>
<body ng-controller="MainController">

    <div class="container">
        <h1>{{ welcomeMessage }}</h1>
        <p>{{ description }}</p>
        <a href="#features" class="btn">Learn More</a>
        <a href="#contact" class="btn">Contact Us</a>
    </div>
    <footer>
        <p>&copy; 2024 LAHI. All rights reserved.</p>
    </footer>

    <script>
        var app = angular.module('lahiApp', []);

        app.controller('MainController', function($scope) {
            $scope.welcomeMessage = 'Welcome to LAHI';
            $scope.description = 'We\'re excited to have you here! LAHI is your go-to solution for [brief description of what LAHI does]. Explore our features and get started today!';
        });
    </script>

</body>
</html>
