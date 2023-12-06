<?php
session_start();

$host = "localhost";
$user = "rpatel245";
$pass = "rpatel245";
$dbname = "rpatel245";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) 
    {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) 
        {
            $_SESSION['username'] = $username;
            header("Location: dashboard.php");
            exit();
        } 
        else 
        {
            echo "Invalid username or password!";
        }
    } 
    else 
    {
        echo "Invalid username or password!";
    }
}

$conn->close();

?>
