(ns app.layout
  (:require ["@material-ui/core/Button" :default Button]
            ["@material-ui/core/TextField" :default TextField]
            [app.text-field :as text-field]))

(defn frame []
      [:<>
       [:h1 "This is my first, simple heading..."]
       [:> Button {:color :primary :variant :contained} "button"]
       [:div
        [:> TextField]]
       [text-field/text-field]])