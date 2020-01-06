(ns app.main
  (:require [reagent.core :refer [atom as-element render-component]]
            [app.layout :as layout]))

(defn main-page []
      [layout/frame])

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
