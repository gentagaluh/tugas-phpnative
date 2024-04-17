<?php
include "koneksi.php";

if(isset($_POST['daftar'])){
    mysqli_query($koneksi, "insert into user set
    username = '$_POST[iusername]',
    password = '$_POST[ipassword]'");

    echo "<p align=center><b>Data Berhasil Disimpan</b></p>";
    echo "<meta http-equiv=refresh content=2;URL='menu.html'>";
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
    <div id="box1"></div>
    <div id="box2"></div>
    <div id="box3"></div>
    <div class="form">
        <h1>Daftar</h1><br>
        <form method="post">
            <label>Username</label><br>
            <input type="text" name="iusername" placeholder="username" required><br><br>
            <label>Password</label><br>
            <input type="password" name="ipassword" placeholder="password" required><br><br><br>
            <button type="submit" name="daftar">Daftar</button>
            <p><a href="login.php">Login</a> jika sudah memiliki akun</p>
        </form>
    </div>
</body>
</html>