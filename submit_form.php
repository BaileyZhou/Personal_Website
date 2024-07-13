<?php
// 检查是否是POST请求
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取表单数据
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // 将数据保存到文件中（或者保存到数据库）
    $file = fopen("contact_data.txt", "a");
    fwrite($file, "Name: $name\nEmail: $email\nMessage: $message\n\n");
    fclose($file);

    // 重定向回表单页面，显示提交成功的消息
    header("Location: contact_success.html");
    exit();
}
?>
