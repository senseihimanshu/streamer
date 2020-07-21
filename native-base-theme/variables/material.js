import color from "color";

    import { Platform, Dimensions, PixelRatio } from "react-native";
    
    const deviceHeight = Dimensions.get("window").height;
    const deviceWidth = Dimensions.get("window").width;
    const platform = Platform.OS;
    const platformStyle = "material";
    const isIphoneX =
      platform === "ios" && deviceHeight === 812 && deviceWidth === 375;
    
    export default {"platformStyle":"material","platform":"ios","androidRipple":true,"androidRippleColor":"rgba(256, 256, 256, 0.3)","androidRippleColorDark":"rgba(0, 0, 0, 0.15)","btnUppercaseAndroidText":true,"badgeBg":"#ED1727","badgeColor":"#fff","badgePadding":3,"btnFontFamily":"System","btnDisabledBg":"rgba(81,58,122,1)","buttonPadding":6,"btnPrimaryBg":"rgba(115,91,187,1)","btnPrimaryColor":"#fff","btnInfoBg":"#3F57D3","btnInfoColor":"#fff","btnSuccessBg":"#5cb85c","btnSuccessColor":"#fff","btnDangerBg":"#d9534f","btnDangerColor":"#fff","btnWarningBg":"#f0ad4e","btnWarningColor":"#fff","btnTextSize":16.5,"btnTextSizeLarge":22.5,"btnTextSizeSmall":12,"borderRadiusLarge":57,"iconSizeLarge":45,"iconSizeSmall":18,"cardDefaultBg":"rgba(74,52,92,1)","cardBorderColor":"#ccc","CheckboxRadius":32,"CheckboxBorderWidth":2,"CheckboxPaddingLeft":2,"CheckboxPaddingBottom":0,"CheckboxIconSize":18,"CheckboxFontSize":21,"DefaultFontSize":17,"checkboxBgColor":"rgba(115,91,187,1)","checkboxSize":20,"checkboxTickColor":"#fff","brandPrimary":"rgba(115,91,187,1)","brandInfo":"#3F57D3","brandSuccess":"#5cb85c","brandDanger":"#d9534f","brandWarning":"#f0ad4e","brandDark":"#000","brandLight":"#f4f4f4","fontFamily":"System","fontSizeBase":15,"fontSizeH1":27,"fontSizeH2":24,"fontSizeH3":21,"footerHeight":55,"footerDefaultBg":"rgba(55,36,79,1)","footerPaddingBottom":0,"tabBarTextColor":"rgba(204,193,206,1)","tabBarTextSize":12,"activeTab":"#fff","sTabBarActiveTextColor":"#007aff","tabBarActiveTextColor":"rgba(255,255,255,1)","tabActiveBgColor":"rgba(55,36,79,1)","toolbarBtnColor":"rgba(204,193,206,1)","toolbarDefaultBg":"rgba(55,36,79,1)","toolbarHeight":64,"toolbarSearchIconSize":20,"toolbarInputColor":"#fff","searchBarHeight":34,"searchBarInputHeight":30,"toolbarBtnTextColor":"#fff","toolbarDefaultBorder":"rgba(55,36,79,1)","iosStatusbar":"light-content","statusBarColor":"rgba(204,193,206,1)","darkenHeader":"#F0F0F0","iconFamily":"Ionicons","iconFontSize":30,"iconHeaderSize":29,"inputFontSize":17,"inputBorderColor":"#D9D5DC","inputSuccessBorderColor":"#2b8339","inputErrorBorderColor":"#ed2f2f","inputHeightBase":50,"inputColor":"#000","inputColorPlaceholder":"#575757","btnLineHeight":19,"lineHeightH1":32,"lineHeightH2":27,"lineHeightH3":22,"lineHeight":20,"listBg":"#FFF","listBorderColor":"#c9c9c9","listDividerBg":"#f4f4f4","listBtnUnderlayColor":"#DDD","listItemPadding":10,"listNoteColor":"#808080","listNoteSize":13,"defaultProgressColor":"#E4202D","inverseProgressColor":"#1A191B","radioBtnSize":25,"radioSelectedColorAndroid":"rgba(115,91,187,1)","radioBtnLineHeight":29,"segmentBackgroundColor":"rgba(115,91,187,1)","segmentActiveBackgroundColor":"#fff","segmentTextColor":"#fff","segmentActiveTextColor":"rgba(115,91,187,1)","segmentBorderColor":"#fff","segmentBorderColorMain":"#3F51B5","defaultSpinnerColor":"rgba(115,91,187,1)","inverseSpinnerColor":"#1A191B","tabDefaultBg":"#3F51B5","topTabBarTextColor":"#b3c7f9","topTabBarActiveTextColor":"#fff","topTabBarBorderColor":"#fff","topTabBarActiveBorderColor":"#fff","tabBgColor":"#F8F8F8","tabFontSize":15,"textColor":"rgba(204,193,206,1)","inverseTextColor":"#fff","noteFontSize":14,"defaultTextColor":"#000","titleFontfamily":"System","titleFontSize":19,"subTitleFontSize":14,"subtitleColor":"#FFF","titleFontColor":"rgba(204,193,206,1)","borderRadiusBase":5,"borderWidth":1,"contentPadding":10,"dropdownLinkColor":"#414142","inputLineHeight":24,"deviceWidth":1707,"deviceHeight":728,"isIphoneX":false,"inputGroupRoundedBorderRadius":30}