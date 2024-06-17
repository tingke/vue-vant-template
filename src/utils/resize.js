// 自适应
function resize() {
    // 下面的75是根据设计图尺寸修改，例如设计图宽为1220，给左右两边各留10px，即1220-20=1200，1200/16(字体大小)等于75
    // let fs = document.body.clientWidth / 75;
    let fs = document.body.clientWidth / 46.875;
    // 控制字体大小，以免过大过小
    if (fs > 16) {
        fs = 16;
    } else if (fs < 14) {
        fs = 14;
    }
    // ?注意这里不能直接document.body.style
    document.body.parentNode.style = "font-size: " + fs + "px;";
}
resize();
window.onresize = resize;
