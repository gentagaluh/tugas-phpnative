<?php
session_start();
include "koneksi.php";

if(isset($_POST['login'])){
    $sql = mysqli_query($koneksi, "select * from user where username = '$_POST[iusername]' and password = '$_POST[ipassword]'");
    $cek = mysqli_num_rows($sql);
    if($cek > 0){
        $_SESSION['username'] = $_POST['iusername'];
        echo "<meta http-equiv=refresh content=0;URL='menu.html'>";
    }else{
        echo "<p align=center><b>Data Anda Tidak Cocok Dengan Data Base</b></p>";
        echo "<meta http-equiv=refresh content=2;URL='login.php'>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>BANGUN</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <h1 id="h">H<br>I<br>T<br>U<br>N<br>G</h1>
    <h1 id="b">B<br>A<br>N<br>G<br>U<br>N</h1>
    <div id="box"></div>
    <div id="boxx"></div>
    <div id="box2"></div>
    <div id="box3"></div>
    <div class="form">
        <h1>Login</h1><br>
        <form action="" method="POST">
            <label>Username</label><br>
            <input type="text" name="iusername" placeholder="username" required><br><br>
            <label>Password</label><br>
            <input type="password" name="ipassword" placeholder="password" required><br><br><br>
            <button type="submit" name="login">Login</button>
            <p><a href="daftar.php">Daftar</a> jika belum memiliki akun</p>
        </form>
    </div>
</body>
</html>