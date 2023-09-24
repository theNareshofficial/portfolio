<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/coffee.css">
        <title>Contact</title>
</head>

<?php include("header.php"); ?>

<body>
        <h1 align='center'>Hey Dear<span> <u>Coffee</u><img src="assets/coffee.svg" alt="No Image">
        </span> with <span class="heart">Me</span><img src="assets/heart-solid.svg" alt="no image"></h1>
        <form action="components/_coffee_.php" method="post">
                <label>Name </label><img src="assets/circle-user-solid.svg" alt="No Image"> <br>
                <input type="Name" name="name" placeholder=" Enter Your Name..." required> <br>
                <label>Email </label><img src="assets/envelope-solid.svg" alt="No Image"><br>
                <input type="email" name="email" placeholder=" Enter Your EMail..." required><br>
                <label>Message </label><img src="assets/message-solid.svg" alt="No Image"><br>
                <textarea name="msg" cols="30" rows="5" placeholder="   Coffee..." required></textarea><br>
                <button name="submit">Submit</button>
        </form>
</body>
</html>

<?php include("footwear.php") ?>