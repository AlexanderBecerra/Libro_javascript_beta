$(document).ready(init);
function init() {
    $("#milibro").booklet({
        width:800,
        height:600,

        closed:true,
        covers:true,
        autoCenter:true,
        //pages
        pagePadding:0,
        //recargas
        hoverWidth:100,

        

    });

    $("#bt_go").click(function (){
        $("#milibro").booklet("gotopage", $("#in_go").val());
    });
} 