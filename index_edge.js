/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var fonts = {
};
var symbols = {
"stage": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
      dom: [
        {
            id:'dhtml',
            className:'stage_dhtml_id',
            type:'text',
            rect:[645,142,0,0],
            text:"DHTML",
            align:"auto",
            font:["\'Arial Black\', Gadget, sans-serif",26,"rgba(55,101,194,1.00)","normal","none","normal"],
            transform:[[411.9336,-22.00001]]
        },
        {
            id:'flash',
            className:'stage_flash_id',
            type:'text',
            rect:[669,91,0,0],
            text:"Flash",
            align:"auto",
            font:["\'Arial Black\', Gadget, sans-serif",45,"rgba(127,141,169,1.00)","normal","none","normal"],
            transform:[[414.99993,-35]]
        },
        {
            id:'advhtml',
            className:'stage_advhtml_id',
            type:'text',
            rect:[654,34,0,0],
            text:"AdvHTML",
            align:"auto",
            font:["\'Arial Black\', Gadget, sans-serif",32,"rgba(195,170,170,1.00)","normal","none","normal"],
            transform:[[394.99993,-15.23829]]
        },
        {
            id:'javascript',
            className:'stage_javascript_id',
            type:'text',
            rect:[437,117,0,0],
            text:"JavaScript",
            align:"auto",
            font:["\'Arial Black\', Gadget, sans-serif",32,"rgba(125,117,117,1.00)","normal","none","normal"],
            transform:[[405.07031,-19.85547]]
        },
        {
            id:'css',
            className:'stage_css_id',
            type:'text',
            rect:[589,107,0,0],
            text:"CSS",
            align:"auto",
            font:["\'Arial Black\', Gadget, sans-serif",32,"rgba(172,166,166,1.00)","normal","none","normal"],
            transform:[[424.42968,-26]]
        },
        {
            id:'xhtml',
            className:'stage_xhtml_id',
            type:'text',
            rect:[529,29,4.5703125,6.69140625],
            text:"XHTML",
            font:["Arial Black, Gadget, sans-serif",32,"rgba(111,107,107,1.00)","normal","none",""],
            transform:[[395.99999,-3.80469]]
        }],
      symbolInstances: [

      ]
   },
   states: {
      "Base State": {
         "${_xhtml}": [
            ["style", "width", '0px'],
            ["transform", "translateX", '582px'],
            ["style", "height", '0px'],
            ["color", "color", 'rgba(111,107,107,1.00)'],
            ["style", "opacity", '0.04'],
            ["transform", "translateY", '60px'],
            ["style", "font-size", '32px']
         ],
         "${_body_content}": [
            ["transform", "translateX", '-10px'],
            ["style", "width", '624px']
         ],
         "${_sidebar}": [
            ["transform", "translateX", '0px']
         ],
         "${_dhtml}": [
            ["transform", "translateX", '411.9336px'],
            ["color", "color", 'rgba(55,101,194,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-22.00001px'],
            ["style", "font-size", '26px']
         ],
         "${_flash}": [
            ["style", "width", '7px'],
            ["transform", "translateX", '414.99993px'],
            ["style", "height", '1px'],
            ["color", "color", 'rgba(127,141,169,1.00)'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-35px'],
            ["style", "font-size", '45px']
         ],
         "${_body_content} > h1:nth-child(1)": [
            ["style", "opacity", '0'],
            ["transform", "translateX", '-445px'],
            ["transform", "translateY", '0px']
         ],
         "${_javascript}": [
            ["transform", "translateX", '405.07031px'],
            ["style", "height", '45px'],
            ["color", "color", 'rgba(125,117,117,1.00)'],
            ["style", "opacity", '0.04'],
            ["transform", "translateY", '-19.85547px'],
            ["style", "width", '187px']
         ],
         "${_advhtml}": [
            ["transform", "translateX", '312px'],
            ["style", "height", '45px'],
            ["color", "color", 'rgba(195,170,170,1.00)'],
            ["style", "opacity", '0.02'],
            ["transform", "translateY", '-15.23829px'],
            ["style", "width", '167px']
         ],
         "${_css}": [
            ["transform", "translateX", '569px'],
            ["color", "color", 'rgba(172,166,166,1.00)'],
            ["style", "opacity", '0.00090967465753423'],
            ["transform", "translateY", '-26px'],
            ["style", "font-size", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7025,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid60", tween: [ "style", "${_advhtml}", "height", '45px', { fromValue: '45px'}], position: 3260, duration: 0 },
            { id: "eid55", tween: [ "style", "${_advhtml}", "height", '45px', { fromValue: '45px'}], position: 6010, duration: 0 },
            { id: "eid116", tween: [ "transform", "${_css}", "translateY", '-104px', { fromValue: '-26px'}], position: 0, duration: 5, easing: "swing" },
            { id: "eid117", tween: [ "transform", "${_css}", "translateY", '-26px', { fromValue: '-104px'}], position: 5, duration: 7010, easing: "swing" },
            { id: "eid104", tween: [ "style", "${_flash}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 5 },
            { id: "eid105", tween: [ "style", "${_flash}", "opacity", '1', { fromValue: '0'}], position: 5, duration: 7010 },
            { id: "eid101", tween: [ "style", "${_flash}", "height", '69px', { fromValue: '1px'}], position: 0, duration: 7010 },
            { id: "eid29", tween: [ "style", "${_xhtml}", "height", '6px', { fromValue: '0px'}], position: 2005, duration: 1995 },
            { id: "eid71", tween: [ "transform", "${_advhtml}", "translateX", '390px', { fromValue: '312px'}], position: 3260, duration: 2750, easing: "swing" },
            { id: "eid7", tween: [ "style", "${_body_content} > h1:nth-child(1)", "opacity", '0.99', { fromValue: '0'}], position: 0, duration: 1250 },
            { id: "eid49", tween: [ "transform", "${_xhtml}", "translateY", '60px', { fromValue: '60px'}], position: 2005, duration: 0 },
            { id: "eid36", tween: [ "transform", "${_xhtml}", "translateY", '-3.80469px', { fromValue: '60px'}], position: 4000, duration: 0 },
            { id: "eid51", tween: [ "transform", "${_xhtml}", "translateY", '12px', { fromValue: '-3.80469px'}], position: 4005, duration: 2005 },
            { id: "eid82", tween: [ "style", "${_javascript}", "height", '-8px', { fromValue: '45px'}], position: 2005, duration: 5 },
            { id: "eid83", tween: [ "style", "${_javascript}", "height", '45px', { fromValue: '-8px'}], position: 2010, duration: 4990 },
            { id: "eid80", tween: [ "style", "${_javascript}", "width", '-129px', { fromValue: '187px'}], position: 2005, duration: 5 },
            { id: "eid81", tween: [ "style", "${_javascript}", "width", '187px', { fromValue: '-129px'}], position: 2010, duration: 4990 },
            { id: "eid115", tween: [ "style", "${_css}", "opacity", '1', { fromValue: '0.0009096746798604727'}], position: 0, duration: 7020 },
            { id: "eid15", tween: [ "transform", "${_body_content} > h1:nth-child(1)", "translateY", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "transform", "${_body_content} > h1:nth-child(1)", "translateY", '0px', { fromValue: '0px'}], position: 2005, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_body_content} > h1:nth-child(1)", "translateX", '1px', { fromValue: '-445px'}], position: 0, duration: 2005, easing: "easeInBounce" },
            { id: "eid121", tween: [ "transform", "${_css}", "translateX", '569px', { fromValue: '569px'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_css}", "translateX", '422px', { fromValue: '569px'}], position: 5, duration: 7015 },
            { id: "eid32", tween: [ "style", "${_xhtml}", "opacity", '0.99', { fromValue: '0.04'}], position: 2005, duration: 1995 },
            { id: "eid34", tween: [ "style", "${_xhtml}", "opacity", '0.01', { fromValue: '0.9900000095367432'}], position: 4000, duration: 2010 },
            { id: "eid87", tween: [ "style", "${_javascript}", "opacity", '1', { fromValue: '0.04'}], position: 0, duration: 2005 },
            { id: "eid78", tween: [ "style", "${_javascript}", "opacity", '0.03', { fromValue: '1'}], position: 2005, duration: 5 },
            { id: "eid79", tween: [ "style", "${_javascript}", "opacity", '0.87', { fromValue: '0.03'}], position: 2010, duration: 2500 },
            { id: "eid84", tween: [ "style", "${_javascript}", "opacity", '0.04', { fromValue: '0.87'}], position: 4510, duration: 2490 },
            { id: "eid100", tween: [ "style", "${_flash}", "width", '142px', { fromValue: '7px'}], position: 0, duration: 7010 },
            { id: "eid28", tween: [ "style", "${_xhtml}", "width", '4px', { fromValue: '0px'}], position: 2005, duration: 1995 },
            { id: "eid129", tween: [ "style", "${_dhtml}", "opacity", '0.91422303082192', { fromValue: '0'}], position: 0, duration: 7025 },
            { id: "eid59", tween: [ "style", "${_advhtml}", "width", '167px', { fromValue: '167px'}], position: 3260, duration: 0 },
            { id: "eid54", tween: [ "style", "${_advhtml}", "width", '167px', { fromValue: '167px'}], position: 6010, duration: 0 },
            { id: "eid58", tween: [ "transform", "${_advhtml}", "translateY", '-15.23829px', { fromValue: '-15.23829px'}], position: 3260, duration: 0 },
            { id: "eid53", tween: [ "transform", "${_advhtml}", "translateY", '-15.23829px', { fromValue: '-15.23829px'}], position: 6010, duration: 0 },
            { id: "eid66", tween: [ "style", "${_advhtml}", "opacity", '0.95', { fromValue: '0.019999999552965164'}], position: 3260, duration: 2755 },
            { id: "eid46", tween: [ "transform", "${_xhtml}", "translateX", '492px', { fromValue: '582px'}], position: 2005, duration: 2000 },
            { id: "eid44", tween: [ "transform", "${_xhtml}", "translateX", '406px', { fromValue: '492px'}], position: 4005, duration: 2005 }         ]
      }
   }
}
};

Edge.registerCompositionDefn(compId, symbols, fonts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-41610965");
