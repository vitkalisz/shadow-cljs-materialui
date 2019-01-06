
(ns app.main
  (:require [app.lib :as lib]
    [reagent.core :as r :refer [atom as-element render-component]]
    ;
    ; ["@material-ui/core/styles/MuiThemeProvider" :default mui-ThemeProvider]
    ; ["@material-ui/core/styles" :refer [createMuiTheme]]
    ; ["@material-ui/core/colors" :as mui-colors]
    ; ["@material-ui/core/CssBaseline" :default mui-CssBaseline]
    ; ["@material-ui/core/Avatar" :default mui-avatar]
    ; ["@material-ui/icons/Android" :default AndroidIcon]

    [app.layout :refer [frame]]))
;

  ;  ["material-ui/Button/Button" :default Button
  ;  ["material-ui/IconButton" :default IconButton]
  ;  ["material-ui/Progress/LinearProgress" :default LinearProgress]
  ;  ["material-ui/Radio/Radio" :default Radio]
  ;  ["material-ui/Radio" :refer [RadioGroup]]
  ;  ["material-ui/Form" :refer [FormLabel FormControl FormControlLabel FormHelperText]]
  ;  ["material-ui/Switch" :default Switch]
  ;  ["material-ui/Dialog" :default Dialog]
  ;  ["material-ui/AppBar/AppBar" :default AppBar]
  ;  ["material-ui/Toolbar" :default Toolbar]
  ;  ["material-ui-icons/Menu" :default MenuIcon]
  ;  ["material-ui-icons/Close" :default CloseIcon]
  ;  ["material-ui-icons/MoreVert" :default MoreVertIcon]
  ;  ["material-ui-icons/ExpandMore" :default ExpandMoreIcon]
  ;  ["material-ui-icons/ExpandLess" :default ExpandLessIcon]
  ;  ["material-ui/Menu" :default Menu :refer [MenuItem]]
  ;  ["material-ui/Typography" :default Typography]
  ;  ["material-ui/Card/Card" :default Card]
  ;  ["material-ui/Avatar" :default Avatar]
  ;  ["material-ui/Card" :refer [CardHeader CardMedia CardContent CardActions]]
  ;  ["material-ui/Paper" :default Paper]
  ;  ["material-ui/transitions/Collapse" :default Collapse]
  ;  ["material-ui/TextField" :default TextField]
  ;  ["material-ui/Drawer/Drawer" :default Drawer]
  ;  ["material-ui/List/List" :default List]
  ;  ["material-ui/List" :refer [ListItem ListItemIcon ListItemText]]
  ;  ["material-ui/Divider" :default Divider]
  ;  ["material-ui/ExpansionPanel/ExpansionPanel" :default ExpansionPanel]
  ;  ["material-ui/ExpansionPanel" :refer [ExpansionPanelDetails ExpansionPanelSummary]]])


;; https://github.com/reagent-project/reagent/blob/master/doc/README.md

;; https://github.com/reagent-project/reagent/blob/master/examples/material-ui/src/example/core.cljs

;; https://purelyfunctional.tv/guide/reagent/

; (:require [goog.string :as gstring])
; [:div "hello"  (gstring/unescapeEntities "&nbsp;") "there"]


(defn main-page []
  [frame "content"])
;


(defn mount-app []
  (render-component 
    [main-page] 
    (js/document.getElementById "app")))  
;

(defn main! []
  (println "[main]: loading")
  (mount-app))
;

(defn reload! []
  (println "[main]: reload!")
  (mount-app))
;

;;.
