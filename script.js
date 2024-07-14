document.addEventListener("DOMContentLoaded", function() {
    var skillButtons = document.querySelectorAll('.skill-button');

    skillButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // 关闭其他打开的下拉菜单
            closeAllDropdowns();
            // 切换当前下拉菜单的显示状态
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
            // 阻止事件传播，以防止触发document的点击事件
            event.stopPropagation();
        });
    });

    // 点击页面其他区域时关闭所有下拉菜单
    document.addEventListener('click', function(event) {
        closeAllDropdowns();
    });
    
    // 阻止点击内容区域时关闭下拉菜单
    var dropdownContents = document.querySelectorAll('.skill-content');
    dropdownContents.forEach(function(content) {
        content.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
    // 关闭所有下拉菜单的函数
    function closeAllDropdowns() {
        var dropdowns = document.querySelectorAll('.skill-content');
        dropdowns.forEach(function(content) {
            content.style.display = "none";
        });
    }
});
