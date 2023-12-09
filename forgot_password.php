<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $dbHost = "your_database_host";
    $dbUsername = "your_database_username";
    $dbPassword = "your_database_password";
    $dbName = "your_database_name";

    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $resetLink = "https://example.com/reset_password.php"; 
        $subject = "Password Reset Link";
        $message = "Click the following link to reset your password: $resetLink";
        mail($email, $subject, $message);

        echo "If the email address exists in our database, a password reset link will be sent.";
        
        header("Location: login.html");
        exit();
    } else {
        echo "Email not found in our database. Please check the email address.";
    }

    $conn->close();
}
?>

