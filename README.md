# switcher-plugin
Allows to switching text based on menus.

<div class="menu">
    <a class="btn btn-lg btn-default" href="#first">First</a>
    <a class="btn btn-lg btn-default" href="#second">Second</a>
</div>
<p class="hide" id="first">The first text.</p>
<p class="hide" id="second">The second text.</p>
<div id="content">
    ....
</div>

<script type="text/javascript">
    $(document).ready(function($){       
        $('.menu').switcher({});
    });
</script>
