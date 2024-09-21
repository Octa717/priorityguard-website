document.addEventListener('DOMContentLoaded', function() {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Initialize Dropotron after the header content is loaded
            if (typeof jQuery !== 'undefined' && jQuery.fn.dropotron) {
                $('#nav > ul').dropotron({
                    mode: 'fade',
                    noOpenerFade: true,
                    alignment: 'center',
                    detach: false
                });
            } else {
                console.error('jQuery or Dropotron is not loaded');
            }
            // Now that the header is loaded, trigger the js logic
            initializeMobileHeader();
        })
        .catch(error => console.error('Error loading header:', error));

    function initializeMobileHeader() {
        var $window = $(window),
            $body = $('body');

        // Breakpoints.
        breakpoints({
            xlarge:  [ '1281px',  '1680px' ],
            large:   [ '981px',   '1280px' ],
            medium:  [ '737px',   '980px'  ],
            small:   [ null,      '736px'  ]
        });

        // Play initial animations on page load.
        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-preload');
            }, 100);
        });

        // Nav.

        // Title Bar.
        $(
            '<div id="titleBar">' +
                '<a href="#navPanel" class="toggle"></a>' +
                '<span class="title">' + $('#logo h1').html() + '</span>' +
            '</div>'
        )
        .appendTo($body);

        // Panel.
        $(
            '<div id="navPanel">' +
                '<nav>' +
                    $('#nav').navList() +
                '</nav>' +
            '</div>'
        )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });
    }
});
