<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/footwear.css">
        <title>footwear</title>
</head>
<body>
        <div class="footwear">

        <!--
                <div class="header">
                        <a href="#">Home</a>
                        <a href="#">Skill</a>
                        <a href="#">Project</a>
                        <a href="#">Contact</a>
                </div>
        -->

                

                <div class="copy-rights">
                        <p>&copy<?php year() ?> </p>
                </div>
        <!--
                <div class="social-media">
                        <a href="https://www.youtube.com/channel/UCWsJgfwwHBKuTJiHifmZ_pA"><img src="assets/youtube.svg" alt="No Youtube Image"></a>
                        <a href="#"><img src="assets/instagram.svg" alt="No Instagram Image"></a>
                        <a href="#"><img src="assets/twitter.svg" alt="No Twitter Image"></a>
                        <a href="https://github.com/theNareshofficial"><img src="assets/github.svg" alt="No Github Image"></a>
                </div>
        -->
        </div>
</body>
</html>


 

<?php 

function year() {             //Automatically Year detect function
        echo date("Y");
}
//year()

?>