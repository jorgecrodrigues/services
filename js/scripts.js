(function (window, j, Sly) {
    "use strict";
    // Sly options
    var options = {
        slidee: null,  // Selector, DOM element, or jQuery object with DOM element representing SLIDEE.
        horizontal: true, // Switch to horizontal mode.

        // Item based navigation
        itemNav: 'forceCentered',  // Item navigation type. Can be: 'basic', 'centered', 'forceCentered'.
        itemSelector: null,  // Select only items that match this selector.
        smart: true, // Repositions the activated item to help with further navigation.
        activateOn: null,  // Activate an item on this event. Can be: 'click', 'mouseenter', ...
        activateMiddle: true, // Always activate the item in the middle of the FRAME. forceCentered only.

        // Scrolling
        scrollSource: null,  // Element for catching the mouse wheel scrolling. Default is FRAME.
        scrollBy: 0,     // Pixels or items to move per one mouse scroll. 0 to disable scrolling.
        scrollHijack: 300,   // Milliseconds since last wheel event after which it is acceptable to hijack global scroll.
        scrollTrap: false, // Don't bubble scrolling when hitting scrolling limits.

        // Dragging
        dragSource: null,  // Selector or DOM element for catching dragging events. Default is FRAME.
        mouseDragging: true, // Enable navigation by dragging the SLIDEE with mouse cursor.
        touchDragging: true, // Enable navigation by dragging the SLIDEE with touch events.
        releaseSwing: true, // Ease out on dragging swing release.
        swingSpeed: 0.2,   // Swing synchronization speed, where: 1 = instant, 0 = infinite.
        elasticBounds: true, // Stretch SLIDEE position limits when dragging past FRAME boundaries.
        interactive: null,  // Selector for special interactive elements.

        // Scrollbar
        scrollBar: null,  // Selector or DOM element for scrollbar container.
        dragHandle: false, // Whether the scrollbar handle should be draggable.
        dynamicHandle: false, // Scrollbar handle represents the ratio between hidden and visible content.
        minHandleSize: 50,    // Minimal height or width (depends on sly direction) of a handle in pixels.
        clickBar: false, // Enable navigation by clicking on scrollbar.
        syncSpeed: 0.5,   // Handle => SLIDEE synchronization speed, where: 1 = instant, 0 = infinite.

        // Pagesbar
        pagesBar: document.querySelectorAll('.service__builder'), // Selector or DOM element for pages bar container.
        activatePageOn: 'click', // Event used to activate page. Can be: click, mouseenter, ...
        pageBuilder: function (index) { // Page item generator.
            if (typeof this.items === 'object') {
                if (typeof this.items[index] === 'object') {
                    return '<li class="service__builder--item">' + (this.items[index].el.getAttribute('data-builder-text')) + '</li>';
                }
            }
        },

        // Navigation buttons
        forward: null, // Selector or DOM element for "forward movement" button.
        backward: null, // Selector or DOM element for "backward movement" button.
        prev: document.querySelector('.service__nav--prev'), // Selector or DOM element for "previous item" button.
        next: document.querySelector('.service__nav--next'), // Selector or DOM element for "next item" button.
        prevPage: null, // Selector or DOM element for "previous page" button.
        nextPage: null, // Selector or DOM element for "next page" button.

        // Automated cycling
        cycleBy: 'items',  // Enable automatic cycling by 'items' or 'pages'.
        cycleInterval: 5000,  // Delay between cycles in milliseconds.
        pauseOnHover: true, // Pause cycling when mouse hovers over the FRAME.
        startPaused: false, // Whether to start in paused sate.

        // Mixed options
        moveBy: 300,     // Speed in pixels per second used by forward and backward buttons.
        speed: 0,       // Animations speed in milliseconds. 0 to disable animations.
        easing: 'swing', // Easing for duration based (tweening) animations.
        startAt: null,    // Starting offset in pixels or items.
        keyboardNavBy: null,    // Enable keyboard navigation by 'items' or 'pages'.

        // Classes
        draggedClass: 'dragged', // Class for dragged elements (like SLIDEE or scrollbar handle).
        activeClass: 'active',  // Class for active items and pages.
        disabledClass: 'disabled' // Class for disabled navigation elements.
    };
    // Sly
    var Frame = new Sly('#service', options);
    // Initiate Sly instance
    Frame.init();
}(this, this.$ || this.jQuery || false, this.Sly));