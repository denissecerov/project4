<!DOCTYPE html>
<html>
<head>
    <title>Forgot Password</title>
    <link rel="stylesheet" type="text/css" href="forgot_password.css"> 
</head>
<body>
    <div class="forgot-password-container">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email address and we'll send you a link to set your password.</p>

        <form action="forgot_password.php" method="POST">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter email" required>
            </div>
            
            <input type="submit" value="Send">
        </form>

        <p>Know your password? <a href="login.php">Sign in</a></p>
    </div>
</body>
</html>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    echo "If the email address exists in our database, a password reset link will be sent.";
}
?>
