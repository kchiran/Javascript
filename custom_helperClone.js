<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
 
 
<!-- CSS -->
<style type="text/css">
.square {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    margin-bottom: 5px;
    margin-left: 5px;
    text-align: center;
    line-height: 100px;
    background-color: lightblue;
    cursor: pointer;
}
</style>
 
 
<!-- Javascript -->
<script>
    $(function () {
        $("#helperClone").draggable({
            helper: "clone"
        });
         
        $("#helperCustom").draggable({
            helper: function(){
                var dom = [];
                 
                dom.push("<div style=\"background-color:orange; border:1px solid black;width:100px;height:100px;line-height:100px;\">",
                         "Custom helper</div>");
                 
                return $(dom.join(''));
            }
        });
    });
</script>
 
<!-- HTML -->
<div>
    <div id="helperClone" class="square">
                <span id="info">helper: clone</span>
        </div>                
</div>
<div>
    <div id="helperCustom" class="square">
                <span id="info">helper : custom</span>
        </div>                
</div>