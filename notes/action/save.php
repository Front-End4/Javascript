<?php

$fp = fopen('../data/data.txt', 'w');
fwrite($fp, $_POST['data']);
fclose($fp);

$servername = "localhost";
$username = "notes";
$password = "notes";
$dbname = "notes";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT publicationdate, ID, title, text FROM data";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "publicationdate: " . $row["publicationdate"]. " - ID: " . $row["ID"]. " title - " . $row["title"]. " text - " . $row["text"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>