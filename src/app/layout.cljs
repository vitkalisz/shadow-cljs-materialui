
(ns app.layout
  (:require [app.lib :as lib]
    ["@material-ui/core/styles/MuiThemeProvider" :default ThemeProvider]
    ["@material-ui/core/styles" :refer [createMuiTheme withStyles]]
    ["@material-ui/core/colors" :as mui-colors]
    ["@material-ui/core/CssBaseline" :default CssBaseline]
    ["@material-ui/core/Typography" :default Typography]
    ; ["@material-ui/core/Avatar" :default mui-avatar]
    ; ["@material-ui/icons/Android" :default AndroidIcon]

    ["@material-ui/core/AppBar" :default AppBar]
    ["@material-ui/core/Toolbar" :default ToolBar]
    ["@material-ui/core/IconButton" :default IconButton];
    ["@material-ui/icons/Menu" :default MenuIcon]

    ["@material-ui/core/Button" :default Button]))
;

(defn custom-theme []
  (createMuiTheme 
    (clj->js
      { :palette 
          {:type       "light"
           :primary    (.-blue mui-colors)
           :secondary  (.-amber mui-colors)}
        :typography
          { :useNextVariants true}})))
            ;;; !!! :font-family "Roboto, sans-serif"}})))
            ;:fontSize 12}})))
            
;

(defn frame [content]
  [:> ThemeProvider
    {:theme (custom-theme)}
    [:<> ;div {:class :root}
      [:> CssBaseline]
      [:> AppBar
        { :position "static"
          :className "appBar"}   ;, this.state.open && classes.appBarShift}
        [:> ToolBar
          {}
          
          [:> IconButton {:class "menuButton" :color "inherit"}
            [:> MenuIcon]]
          
          [:> Typography 
            {:variant "h6" :color "inherit" :no-wrap :true}
            "Album layout"]]]
          ;
          

      [:h1 "This is my first, simple heading ..."]
      
      [:> Button {:color :primary :variant :contained} "button"] 
      
      ; [:> mui-avatar
      ;   [:> AndroidIcon {:color :secondary}]]
      content]])
;
  

  ; state = {}
  ;   open: true,
  ; ;

  ; handleDrawerOpen = () => {}
  ;   this.setState({ open: true});
  ; ;

  ; handleDrawerClose = () => {}
  ;   this.setState({ open: false});
  ; ;

  ; render() {}
  ;   const { classes } = this.props;

  ;   return ()
  ;     <div className={classes.root}>
  ;       <CssBaseline />
  ;       <AppBar
  ;         position="absolute"
  ;         className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
  ;       >
  ;         <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
  ;           <IconButton
  ;             color="inherit"
  ;             aria-label="Open drawer"
  ;             onClick={this.handleDrawerOpen}
  ;             className={classNames()}
  ;               classes.menuButton,
  ;               this.state.open && classes.menuButtonHidden,
              
  ;           >
  ;             <MenuIcon />
  ;           </IconButton>
  ;           <Typography
  ;             component="h1"
  ;             variant="h6"
  ;             color="inherit"
  ;             noWrap
  ;             className={classes.title}
  ;           >
  ;             Dashboard
  ;           </Typography>
  ;           <IconButton color="inherit">
  ;             <Badge badgeContent={4} color="secondary">
  ;               <NotificationsIcon />
  ;             </Badge>
  ;           </IconButton>
  ;         </Toolbar>
  ;       </AppBar>
  ;       <Drawer
  ;         variant="permanent"
  ;         classes={{}}
  ;           paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          
  ;         open={this.state.open}
  ;       >
  ;         <div className={classes.toolbarIcon}>
  ;           <IconButton onClick={this.handleDrawerClose}>
  ;             <ChevronLeftIcon />
  ;           </IconButton>
  ;         </div>
  ;         <Divider />
  ;         <List>{mainListItems}</List>
  ;         <Divider />
  ;         <List>{secondaryListItems}</List>
  ;       </Drawer>
  ;       <main className={classes.content}>
  ;         <div className={classes.appBarSpacer} />
  ;         <Typography variant="h4" gutterBottom component="h2">
  ;           Orders
  ;         </Typography>
  ;         <Typography component="div" className={classes.chartContainer}>
  ;           <SimpleLineChart />
  ;         </Typography>
  ;         <Typography variant="h4" gutterBottom component="h2">
  ;           Products
  ;         </Typography>
  ;         <div className={classes.tableContainer}>
  ;           <SimpleTable />
  ;         </div>
  ;       </main>
  ;     </div>)
        
;;.
