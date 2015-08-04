/* 
 * 
 *  Author: @vic_rog
 *  Switches content based on menu in and across file.
 * 
 */

$.fn.switcher = function(options)
{
    var $this = $(this);
    var defaults = 
    {
        activeClass: "btn-primary", /* css class to activate menu link */
        inActiveClass: "btn-default", /* css class to inactivate menu link */
        textOnly: true, /* fetch html or text content only */
        changeTitle: false, /* change window's title */
        useFile: false, /* Use HTML file to source content */
        file: "", /* Url to File name that sources content */
        animateContent: false,
        target: "#content" /* target HTML element to display text */
    };
    var settings = $.extend({}, defaults, options);
    var deActivateAllMenuLinks = function()
    {
        var menus = $this.find('a');
        menus.each(function()
        {
            $(this).removeClass(settings.activeClass
                ).addClass(settings.inActiveClass);                            
        });
    };
    var activateMenuLink = function($obj){
        $obj.addClass(settings.activeClass);
    };
    var processMenuLink = function($obj)
    {
        var target = settings.target;
        var menuTitle = $obj.text();
        if(settings.textOnly)
        {
            if(settings.animateContent)
            {                                
                $obj.css({
                    "opacity": 0
                });
                if(settings.useFile)
                {
                    $(target).load(settings.file + " " + 
                        $obj.attr("href"));
                }
                else
                {
                    $(target).text($($obj.attr("href")).text());
                }
                $obj.animate({
                    "opacity": 1
                }, 600, function(){});
                if(settings.changeTitle)
                {
                    $("title").text(menuTitle);
                }
            }
            else
            {
                if(settings.useFile)
                {
                    $(target).load(settings.file + " " + 
                        $obj.attr("href"));
                }
                else
                {
                    $(target).text($($obj.attr("href")).text());
                }
                if(settings.changeTitle)
                {
                    $("title").text(menuTitle);
                }
            }
        }
        else
        {
            if(settings.animateContent)
            {                                
                $obj.css({
                    "opacity": 0
                });
                if(settings.useFile)
                {
                    $(target).load(settings.file + " " + 
                        $obj.attr("href"));
                }
                else
                {
                    $(target).html($($obj.attr("href")).text());
                }
                $obj.animate({
                    "opacity": 1
                }, 600, function(){});
                if(settings.changeTitle)
                {
                    $("title").text(menuTitle);
                }
            }
            else
            {
                if(settings.useFile)
                {
                    $(target).load(settings.file + " " + 
                        $obj.attr("href"));
                }
                else
                {
                    $(target).html($($obj.attr("href")).text());
                }
                if(settings.changeTitle)
                {
                    $("title").text(menuTitle);
                }
            }
        }
    };
    var menuLinksOnClick = function()
    {
        var menus = $this.find('a');                        
        menus.each(function(){
            $(this).click(function()
            {
                deActivateAllMenuLinks();
                activateMenuLink($(this));
                processMenuLink($(this));
            });
        });
    }; 
    menuLinksOnClick();
};
