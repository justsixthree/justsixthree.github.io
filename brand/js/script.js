
$(document).ready(function () {

    $('.main-menu ul li').click(function () {
        var a = $(this).find('a').attr('class');

        if($('body').hasClass(a)){
                       
        }else{
            $('body').removeAttr('class');
            $('body').addClass(a);
        }
        

        var sec = $('#' + a);
        if ($(sec).hasClass('active')) {
        }
        else {
            $('section').removeClass('active');
            $(sec).addClass('active');
        }
    });


    var animation_particles = `<div class="animation-particles">
    <div class="circle-blue left"></div>
    <div class="circle-blue center"></div>
    <div class="circle-navy left"></div>
    <div class="circle-navy right"></div>
    <div class="square-navy left blur"></div>
    <div class="circle-xl center"></div>
    <div class="circle-lg center"></div>
    <div class="circle-md center"></div>
    <div class="svg-wrapper" style="position: absolute;top: 10%; left:20%;">
        <svg class="tri-fill tri" style="position: absolute;top: -10px; left:5px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120px" height="135px" viewBox="0 0 160 180" style="enable-background:new 0 0 160 180;" xml:space="preserve"> <path style="fill:rgba(255,255,255,0.3)" d="M148.434,1.324c-2.078,1.041-4.082,2.232-6.098,3.393C108.063,24.439,73.788,44.158,39.527,63.902 C27.87,70.619,16.164,77.262,4.645,84.211c-6.223,3.752-6.119,9.469-0.13,13.455c1.38,0.92,2.863,1.684,4.302,2.514 c14.395,8.297,28.791,16.59,43.185,24.887c31.671,18.254,63.314,36.559,95.031,54.734c8.063,4.621,13.166,1.443,13.172-7.906 c0.016-26.984,0.004-53.969,0.004-80.951c0-8.162,0.002-16.324,0-24.487c0-19.32,0.037-38.643-0.02-57.965 C160.167,1.099,155.04-1.987,148.434,1.324z"/></svg>
        <svg class="tri-outline tri" style="position: absolute;top: 0; left:0;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="129px" height="140px" viewBox="0 0 166 188" style="enable-background:new 0 0 166 188;" xml:space="preserve"> <path style="fill:#00C5FE;" d="M159,0c-2.334,0-4.666,0-7,0c-0.467,0.404-0.883,0.897-1.408,1.2 C103.248,28.494,55.907,55.795,8.519,83.01C4.98,85.043,1.947,87.383,0,91c0,2,0,4,0,6c1.709,2.41,3.209,4.883,5.969,6.465 C55.005,131.6,103.998,159.807,153,188c2,0,4,0,6,0c3.707-0.961,6.04-3.293,7-7c0-58,0-116,0-174C165.04,3.293,162.707,0.96,159,0z M163.098,69.508c0.002,8.162,0,16.325,0,24.487c0,26.982,0.012,53.967-0.004,80.951c-0.006,9.35-5.109,12.527-13.172,7.906 c-31.717-18.176-63.359-36.48-95.031-54.734c-14.394-8.297-28.79-16.59-43.185-24.887c-1.439-0.83-2.922-1.594-4.302-2.514 c-5.988-3.986-6.092-9.703,0.13-13.455C19.054,80.313,30.76,73.67,42.417,66.953C76.678,47.209,110.953,27.49,145.227,7.768 c2.016-1.16,4.02-2.352,6.098-3.393c6.605-3.311,11.732-0.225,11.754,7.168C163.135,30.865,163.098,50.188,163.098,69.508z" /></svg>
    </div>
    <div class="svg-wrapper" style="position: absolute;top: 0; left:60%;">
        <svg class="tri-fill tri" style="position: absolute;top: -10px; left:5px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120px" height="135px" viewBox="0 0 160 180" style="enable-background:new 0 0 160 180;" xml:space="preserve"> <path style="fill:rgba(255,255,255,0.3)" d="M148.434,1.324c-2.078,1.041-4.082,2.232-6.098,3.393C108.063,24.439,73.788,44.158,39.527,63.902 C27.87,70.619,16.164,77.262,4.645,84.211c-6.223,3.752-6.119,9.469-0.13,13.455c1.38,0.92,2.863,1.684,4.302,2.514 c14.395,8.297,28.791,16.59,43.185,24.887c31.671,18.254,63.314,36.559,95.031,54.734c8.063,4.621,13.166,1.443,13.172-7.906 c0.016-26.984,0.004-53.969,0.004-80.951c0-8.162,0.002-16.324,0-24.487c0-19.32,0.037-38.643-0.02-57.965 C160.167,1.099,155.04-1.987,148.434,1.324z"/></svg>
        <svg class="tri-outline tri" style="position: absolute;top: 0; left:0;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="129px" height="140px" viewBox="0 0 166 188" style="enable-background:new 0 0 166 188;" xml:space="preserve"> <path style="fill:#00C5FE;" d="M159,0c-2.334,0-4.666,0-7,0c-0.467,0.404-0.883,0.897-1.408,1.2 C103.248,28.494,55.907,55.795,8.519,83.01C4.98,85.043,1.947,87.383,0,91c0,2,0,4,0,6c1.709,2.41,3.209,4.883,5.969,6.465 C55.005,131.6,103.998,159.807,153,188c2,0,4,0,6,0c3.707-0.961,6.04-3.293,7-7c0-58,0-116,0-174C165.04,3.293,162.707,0.96,159,0z M163.098,69.508c0.002,8.162,0,16.325,0,24.487c0,26.982,0.012,53.967-0.004,80.951c-0.006,9.35-5.109,12.527-13.172,7.906 c-31.717-18.176-63.359-36.48-95.031-54.734c-14.394-8.297-28.79-16.59-43.185-24.887c-1.439-0.83-2.922-1.594-4.302-2.514 c-5.988-3.986-6.092-9.703,0.13-13.455C19.054,80.313,30.76,73.67,42.417,66.953C76.678,47.209,110.953,27.49,145.227,7.768 c2.016-1.16,4.02-2.352,6.098-3.393c6.605-3.311,11.732-0.225,11.754,7.168C163.135,30.865,163.098,50.188,163.098,69.508z"/></svg>
    </div>
    </div>`;

    $('.section').prepend(animation_particles);

});