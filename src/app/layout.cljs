(ns app.layout
  (:require ["@material-ui/core/styles" :refer [createMuiTheme withStyles]]
            ["@material-ui/styles/ThemeProvider" :default ThemeProvider]
            ["@material-ui/core/colors" :as mui-colors]
            ["@material-ui/core/CssBaseline" :default CssBaseline]
            ["@material-ui/core/Typography" :default Typography]
            ["@material-ui/core/Button" :default Button]
            [goog.object :as gobj]))

(def custom-theme
  (createMuiTheme
    #js {:palette #js {:primary #js {:main (gobj/get (.-red ^js/Mui.Colors mui-colors) 100)}}}))

(defn custom-styles [^js/Mui.Theme theme]
      #js {:button    #js {:margin (.spacing theme 1)}
           :textField #js {:width       200
                           :marginLeft  (.spacing theme 1)
                           :marginRight (.spacing theme 1)}})

(def with-custom-styles (withStyles custom-styles))

(defn frame []
      [:<>
       [:> CssBaseline]
       [:> ThemeProvider
        {:theme custom-theme}
        [:h1 "This is my first, simple heading ..."]
        [:> Button {:color :primary :variant :contained} "button"]]])