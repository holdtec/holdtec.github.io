//book.js
module.exports = {
  root: ".", //根目录
  language: "zh-hans",
  title: "万能复式记账用户手册",
  author: "John Woo",
  description: "万能复式记账用户手册",
  "theme-default": {
    showLevel: true,
  },
  label: {
    en: "Edit This Page",
    "zh-cn": "编辑本页",
  },

  styles: {
    website: "styles/website.css",
  },
  // 在左侧导航栏添加链接信息
  // links: {
  //   sidebar: {
  //     "官网" : "https://www.wemarket.top",
  //   },
  // },
  "structure": {
        "readme": "README.md"
    },

  // Plugins list, can contain "-name" for removing default plugins
  plugins: [
    "-highlight", //替换官方插件
    "prism", //代码着色
    "prism-themes",

    "github", //链接到github仓库
    "sharing-plus", //分享增强
    "-lunr",
    "-search",
    "-sharing",
    "search-pro", //增强中文搜索
    "chapter-fold", //导航折叠插件
    "splitter", //菜单动态伸缩.
    "back-to-top-button",
    "theme-fexa",
    "code", //代码行号、复制
    "tbfed-pagefooter",
    "editlink",
    "todo",
    // "codetabs",
    "donate",
    "theme-comscore", //多彩主题插件
    "favicon", //网站的小图标
    "versions-select", //多版本选择
  ],
  variables: {
    themeFexa: {
      nav: [
        {
          url: "https://www.wemarket.top",
          target: "_self",
          name: "<strong>🏠官网首页</strong>",
        },
        {
          url: "https://www.wemarket.top/news/",
          target: "_self",
          name: "<strong>📄博客文章</strong>",
        },
        {
          url: "https://github.com/holdtec/holdtec.github.io.git",
          target: "_blank",
          name: "<strong>🔗GitHub仓库</strong>",
        },
      ],
    },
  },

  // Global configuration for plugins
  pluginsConfig: {
    pluginsConfig: {
      "chapter-fold": {},
    },
    "theme-default": {
      // showLevel: true,
    },
    github: {
      url: "https://github.com/holdtec/holdtec.github.io.git",
    },
    prism: {
      css: ["prism-themes/themes/prism-gruvbox-light.css"],
    },
    "theme-fexa": {
      "search-placeholder": "输入关键字搜索", //搜索框提示信息
      logo: "assets/logo-11.png", //logo地址
      favicon: "./favicon.ico", //ico地址
    },
    "tbfed-pagefooter": {
      copyright: "万能复式记账©️版权所有",
      // "modify_label": "上次修改：",
      modify_format: "YYYY-MM-DD HH:mm:ss",
    },
    sharing: {
      // "douban": true,
      // "facebook": true,
      // "google": true,
      // "twitter": true,
      // "whatsapp": true,
      // "all": [
      //     "hatenaBookmark",
      //     "instapaper",
      //     "line",
      //     "linkedin",
      //     "messenger",
      //     "pocket",
      //     "qq",
      //     "qzone",
      //     "stumbleupon",
      //     "viber",
      //     "vk",
      //     "weibo"
      // ]
    },
    editlink: {
      base: "https://github.com/holdtec/holdtec.github.io/blob/main",
      label: "Edit This Page",
      multilingual: false,
    },
    donate: {
      wechat: "/assets/wechat_qr.png",
      alipay: "/assets/alipay_qr.png",
      title: "请作者喝杯咖啡",
      button: "支持一下",
      alipayText: "",
      wechatText: "",
    },
    //多版本选择
    // "versions":{
    //     "options": [
    //         {
    //           "value": "",
    //           "text": "Theme API"
    //         },
    //         {
    //           "value": "",
    //           "text": "Theme comscore",
    //           "selected": true
    //         }
    //       ]
    // },
    favicon: {
      shortcut: "favicon.ico",
      bookmark: "favicon.ico",
      appleTouch: "assets/logo_red.png",
      appleTouchMore: {
        "120x120": "assets/logo_red.png",
        "180x180": "assets/logo_red.png",
      },
    },
  },
};
