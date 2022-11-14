var Menu = {
    oswald: null,
    init: function() {
        this.oswald = $('.oswald').parent();
        this.addEventSelected(this.oswald);
        this.oswald = $.merge(this.oswald, $('.subitems'));
        this.addOswaldHoverEvent();
    },
    addEventListener: function(el, evt, fn) {
        //******************************************
        //    Memorize version b crossbrowser 
        //    Technique - Event listener handler.
        //******************************************
        if (evt.addEventListener) {
            //re-define this.addEventListener.
            this.addEventListener = function(el, evt, fn) {
                el.addEventListener(evt, fn, false);
            };
        } else if (evt.attachEvent) {
            this.addEventListener = function(el, evt, fn) {
                el.attachEvent('on' + evt, fn);
            };
        } else {
            this.addEventListener = function(el, evt, fn) {
                el['on' + evt] = fn;
            };
        }

        //--> runs after evaluation!
        this.addEventListener(el, evt, fn);
    },
    addOswaldHoverEvent: function() {
        that = this;
        li = this.oswald;
        for (var i = 0; i < li.length; i++) {
            that.addEventListener(li[i], 'mouseover', Menu.showSubMenu);
            that.addEventListener(li[i], 'mouseout', Menu.hideSubMenu);
        }
    },
    showSubMenu: function() {

        if (this.getElementsByTagName('ul').length > 0) {
            $(this.getElementsByTagName('ul')[0]).stop().slideDown(200, 'linear', null);
        }
    },
    hideSubMenu: function() {

        if (this.getElementsByTagName('ul').length > 0) {
            $(this.getElementsByTagName('ul')[0]).slideUp(400, 'linear', null);
        }
    },
    selectedHandler: function() {
        $('.oswald').each(function(){
            $(this).removeClass('selected');
        });

        $(this).find('.oswald').addClass('selected');
    },
    addEventSelected: function(arr) {
        for (var i = 0; i < arr.length; i++) {
            this.addEventListener(arr[i], 'click', Menu.selectedHandler);
        }
    }
};

function start() {
    Menu.init();
}

window.document.onload = start();
