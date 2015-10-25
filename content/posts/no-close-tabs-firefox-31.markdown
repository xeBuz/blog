---
author: xeBuz
comments: true
date: 2014-05-14 13:34:35+00:00
layout: post
published: false
slug: no-close-tabs-firefox-31
title: Close Tab en Firefox 31
wordpress_id: 1490
categories:
- Aplicaciones
- Tips
tags:
- firefox
- mozilla
- nightly
- tips
---

Practicamente desde que uso Mozilla Firefox le quito el ícono de cerrar a las solapas, me ahorra espacio y minimiza el riesgo de cerrar por error alguna. 
En versiones anteriores a Firefox 31, desde **about:config** se podía editar desde la siguiente opción:
`browser.tabs.closeButtons = 0`

Pero debido a cambios en las tabs, esto deja de tener validez, y a partir de la versión 31 la configuración UI se realiza desde:
`browser.uiCustomization.state`
y no es un solo campo, sino que nos da un JSON mucho mas complejo
[spoiler title="Configuración original - JSON" style="fancy" icon="chevron"] 

    
    {
        "placements": {
            "PanelUI-contents": ["edit-controls", "zoom-controls", "new-window-button", "privatebrowsing-button", "save-page-button", "print-button", "history-panelmenu", "fullscreen-button", "find-button", "preferences-button", "add-ons-button", "ecb-button", "abp-toolbarbutton", "tb-venkman-open", "measureit_toolbar_button", "sessionmanager-undo", "sessionmanager-toolbar"],
            "GiT-addon-bar": ["GiT-addon-bar-toggle-button", "epubreader-catalog-button", "useragentswitcher-button", "colorzilla-navbar-button", "awesome-screenshot-toolbarbutton", "RIL_toolbar_button", "feed-button", "customizableui-special-spring51", "widget:jid1-n85lxPv1NAWVTQ@jetpack-freeMemory", "FoxyScrobblerToolbarButton", "GiT-status-bar-container"],
            "web-developer-toolbar": ["web-developer-disable-toolbar", "web-developer-cookies-toolbar", "web-developer-css-toolbar", "web-developer-forms-toolbar", "web-developer-images-toolbar", "web-developer-information-toolbar", "web-developer-miscellaneous-toolbar", "web-developer-outline-toolbar", "web-developer-resize-toolbar", "web-developer-tools-toolbar", "web-developer-view-source-toolbar", "web-developer-options-toolbar", "customizableui-special-spring1", "web-developer-render-mode-statusbar", "web-developer-css-statusbar", "web-developer-javascript-statusbar"],
            "addon-bar": ["addonbar-closebutton", "status-bar"],
            "PersonalToolbar": ["personal-bookmarks"],
            "nav-bar": ["urlbar-container", "search-container", "webrtc-status-button", "downloads-button", "igc-toolbar-button", "social-share-button", "developer-button", "widget:jid1-4P0kohSJxU1qGg@jetpack-browserAction0"],
            "TabsToolbar": ["tabbrowser-tabs", "new-tab-button", "tabview-button", "alltabs-button", "tabs-closebutton"],
            "toolbar-menubar": ["menubar-items"]
        },
        "seen": ["abp-toolbarbutton", "GiT-special-spring", "GiT-special-spacer", "GiT-special-separator"],
        "dirtyAreaCache": ["PersonalToolbar", "nav-bar", "TabsToolbar", "toolbar-menubar", "PanelUI-contents", "web-developer-toolbar", "addon-bar", "GiT-addon-bar"],
        "newElementCount": 59
    }


[/spoiler]

Para dejar de tener el botón, hay que quitar **"tabs-closebutton"**, se aplican los cambios sin reiniciar.
