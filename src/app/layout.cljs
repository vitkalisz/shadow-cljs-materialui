(ns app.layout
  (:require [app.lib :as lib]
            ["@material-ui/core/styles" :refer [createMuiTheme withStyles]]
            ["@material-ui/styles/ThemeProvider" :default ThemeProvider]
            ["@material-ui/core/colors" :as mui-colors]
            ["@material-ui/core/CssBaseline" :default CssBaseline]
            ["@material-ui/core/Typography" :default Typography]
            [goog.object :as gobj]))


(def custom-theme
  (createMuiTheme
    #js {:palette #js {:primary #js {:main (gobj/get (.-red ^js/Mui.Colors mui-colors) 100)}}}))

(defn custom-styles [^js/Mui.Theme theme]
      #js {:button #js {:margin (.spacing theme 1)}
           :textField #js {:width 200
                           :marginLeft (.spacing theme 1)
                           :marginRight (.spacing theme 1)}})

(def with-custom-styles (withStyles custom-styles))

(defn frame []
      [:<>
       [:> CssBaseline]
       [:> ThemeProvider
        {:theme custom-theme}
        [:h1 "This is my first, simple heading ..."]]])
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
