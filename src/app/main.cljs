(ns app.main
  (:require [reagent.core :refer [atom as-element render-component]]
            [app.layout :refer [frame]]))

;; https://github.com/reagent-project/reagent/blob/master/doc/README.md

;; https://github.com/reagent-project/reagent/blob/master/examples/material-ui/src/example/core.cljs

;; https://purelyfunctional.tv/guide/reagent/

(defn main-page []
      [frame])

(defn mount-app []
      (render-component
        [main-page]
        (js/document.getElementById "app")))

(defn main! []
      (println "[main]: loading")
      (mount-app))

(defn reload! []
      (println "[main]: reload!")
      (mount-app))
