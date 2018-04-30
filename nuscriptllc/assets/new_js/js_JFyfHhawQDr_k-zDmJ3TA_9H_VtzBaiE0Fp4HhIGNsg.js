Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n>1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Une erreur HTTP AJAX s\u0027est produite.","HTTP Result Code: !status":"Code de statut HTTP : !status","An AJAX HTTP request terminated abnormally.":"Une requ\u00eate HTTP AJAX s\u0027est termin\u00e9e anormalement.","Debugging information follows.":"Informations de d\u00e9bogage ci-dessous.","Path: !uri":"Chemin : !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText : !responseText","ReadyState: !readyState":"ReadyState : !readyState","@title dialog":"dialogue de @title","Configure":"Configurer","Show shortcuts":"Afficher les raccourcis","Hide shortcuts":"Cacher les raccourcis","Loading":"En cours de chargement","(active tab)":"(onglet actif)","Hide":"Masquer","Show":"Afficher","Re-order rows by numerical weight instead of dragging.":"R\u00e9-ordonner les lignes avec des poids num\u00e9riques plut\u00f4t qu\u0027en les d\u00e9pla\u00e7ant.","Show row weights":"Afficher le poids des lignes","Hide row weights":"Cacher le poids des lignes","Drag to re-order":"Cliquer-d\u00e9poser pour r\u00e9-organiser","Changes made in this table will not be saved until the form is submitted.":"Les changements effectu\u00e9s dans ce tableau ne seront pris en compte que lorsque la configuration aura \u00e9t\u00e9 enregistr\u00e9e.","Edit":"Modifier","Autocomplete popup":"Popup d\u0027auto-compl\u00e9tion","Searching for matches...":"Recherche de correspondances...","Please wait...":"Veuillez patienter...","Customize dashboard":"Personnaliser le tableau de bord","Done":"Termin\u00e9","Hide summary":"Masquer le r\u00e9sum\u00e9","Edit summary":"Modifier le r\u00e9sum\u00e9","Not in menu":"Pas dans le menu","New revision":"Nouvelle r\u00e9vision","No revision":"Aucune r\u00e9vision","By @name on @date":"Par @name le @date","By @name":"Par @name","Not published":"Non publi\u00e9","Alias: @alias":"Alias : @alias","No alias":"Aucun alias","Select all rows in this table":"S\u00e9lectionner toutes les lignes du tableau","Deselect all rows in this table":"D\u00e9s\u00e9lectionner toutes les lignes du tableau","Requires a title":"Titre obligatoire","Don\u0027t display post information":"Ne pas afficher les informations de la contribution","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Le fichier s\u00e9lectionn\u00e9 %filename ne peut pas \u00eatre transf\u00e9r\u00e9. Seulement les fichiers avec les extensions suivantes sont permis : %extensions.","OK":"OK","@size KB":"@size Ko","@size MB":"@size Mo","@size GB":"@size Go","Upload":"Transf\u00e9rer","This field is required.":"Ce champ est requis.","Flag translations as outdated":"P\u00e9rimer toutes les traductions","Thu":"jeu","1 hour":"@count heure","@count min":"@count min","Cancel":"Annuler","0 sec":"0\u00a0s","Next":"Suivant","@count sec":"@count sec","@count hours":"@count heures","1 min":"@count min","1 day":"@count jour","Thursday":"Jeudi","1 sec":"@count sec","Friday":"Vendredi","Fri":"ven","Jan":"jan","Feb":"f\u00e9v","Mar":"mar","Apr":"avr","May":"mai","Jun":"juin","Jul":"juil","Aug":"ao\u00fb","Sep":"sep","Oct":"oct","Nov":"nov","Dec":"d\u00e9c","Prev":"Pr\u00e9c.","Today":"Aujourd\u0027hui","January":"janvier","February":"F\u00e9vrier","March":"mars","April":"avril","June":"juin","July":"juillet","August":"ao\u00fbt","September":"septembre","October":"octobre","November":"novembre","December":"d\u00e9cembre","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Saturday":"Samedi","Sun":"dim","Mon":"lun","Tue":"mar","Wed":"mer","Sat":"sam","Su":"Di","Mo":"Lu","Tu":"Ma","We":"Me","Th":"Je","Fr":"Ve","Sa":"Sa","mm\/dd\/yy":"dd\/mm\/yy","@count days":"@count jours","This permission is inherited from the authenticated user role.":"Ce droit est h\u00e9rit\u00e9e du r\u00f4le de l\u0027utilisateur authentifi\u00e9.","1 byte":"@count octet","@count bytes":"@count octets","Starting upload...":"D\u00e9but du transfert...","Add a new file":"Ajouter un nouveau fichier"}} };;
(function ($) {

    $(document).ready(function () {

        $('#copy_checkbox').change(function(){
            if($(this).is(':checked')) {
                $('#edit-title input[type="radio"]:checked').each(function(){
                    $('#edit-title-patient div.form-type-radio').eq($(this).parent().index()).find('input[type="radio"]').attr("checked", true);
                });
                $('#edit-lastname-patient').val($('#edit-lastname').val());
                $('#edit-firstname-patient').val($('#edit-firstname').val());
            }
        });

        $('#js-print-bill').bind('click', function(event) {
            event.preventDefault();
            window.frames['framepdf'].focus();
            window.frames['framepdf'].contentWindow.print();
        });

    });

})(jQuery);
;
(function ($) {

    /**
     * Show or hide the block of information about people asking
     * for a rendez vous
     */
    var manageLink = function () {
        if ("0" == $('input[name=for]:checked', $('form.rdv-form')).val()) {
            $('#fieldset-infos--demandeur').hide();
        } else {
            $('#fieldset-infos--demandeur').show();
        }
    };

    var manageMandatoryFields = function () {
        $('.form-required').remove();
        $("form.rdv-form input[type=text], form.rdv-form textarea, form.rdv-form select").each(function(){
            if($(this).hasClass('required')){
                $(this).parent().children('label').append('<span title="" class="form-required">*</span>');
            }
        });
    };

    var  manageTypeRdv  = function () {
        currentVal = $('form.rdv-form  select[name="type"]').val();
        if((currentVal == "premier_rdv" || currentVal == "question") && $(".form-group--doc").find('.js-external').length == 0){
            $(".form-group--doc").hide();
        } else {
            $(".form-group--doc").show();
        }
    };

    var manageExternalPlatform = function() {
        $('#fieldset-infos--patient, #fieldset-infos--demandeur, #form-rdv-remarque').toggle($('#doc-replace').find('select').length > 0);
    };


    $(document).ready(function () {
        if ($('form.rdv-form').length) {

            $('input[name=for], select[name=type]', $('form.rdv-form')).change(function () {
                manageLink();
                manageMandatoryFields();
                manageTypeRdv();
            });

            manageMandatoryFields();
            manageTypeRdv();
            manageExternalPlatform();
            manageLink();
        }

        if($('#edit-when-day').length){
            $('#edit-when-day option').each(function(){
                var one_option = $( this );
                if(one_option.is(':selected')){
                    return false;
                }
                $( this).remove();
            });
            $('#edit-when-month option').each(function(){
                var one_option = $( this );
                if(one_option.is(':selected')){
                    return false;
                }
                $( this).remove();
            });
        }

    });

})(jQuery);
;
(function ($) {

    var manageMandatoryFields = function () {
        $('.form-required').remove();
        $("form.rdv-form input[type=text], form.rdv-form textarea, form.rdv-form select").each(function(){
            if($(this).hasClass('required')){
                $(this).parent().children('label').append('<span title="" class="form-required">*</span>');
            }
        });
    }

    /**
     * Show controlled element
     */
    var showControlled = function(){
        $('input.js-show-controlled').click(function(){
            var ctrlEl = '#' + $(this).attr('aria-controls'),
                state = $(this).attr('aria-expanded') === 'false' ? false : true;

            if( state === false ) {
                if($(this).attr('id').indexOf('why') < 0)return;
                $(this).attr('aria-expanded', !state);
                $(this).parents('.form-group--radio').find('input.js-show-controlled').attr('aria-expanded', !state);
                $(ctrlEl).attr('aria-hidden', state);
            } else {
                $(this).attr('aria-expanded', !state);
                $(this).parents('.form-group--radio').find('input.js-show-controlled').attr('aria-expanded', !state);
                $(ctrlEl).attr('aria-hidden', state);
            }
        });
    };

    $(document).ready(function () {
        if ($('form.rdv-form').length) {
            showControlled();

            $('input[name=for], select[name=type]', $('form.rdv-form')).change(function () {
                manageMandatoryFields();
            });
            manageMandatoryFields();

            /*$('#edit-who-date-sortie').datepicker({
                inline: true,
                showOtherMonths: true,
                dateFormat: 'dd/mm/yy',
                dayNamesMin: ['Sam', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Dim'],
            });*/
        }
    });

})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", "event", "Downloads", Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(), Drupal.googleanalytics.getPageUrl(this.href));
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(this.href) });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", "event", "Mails", "Click", this.href.substring(7));
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode != 2 || (Drupal.settings.googleanalytics.trackDomainMode == 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", "event", "Outbound links", "Click", this.href);
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga('send', 'pageview', location.pathname + location.search + location.hash);
    }
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function () {
    var href = $.colorbox.element().attr("href");
    if (href) {
      ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(href) });
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
