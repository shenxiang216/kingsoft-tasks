# week-01

## 一、任务思路

* 目录结构及说明
    ```
    ├─index.html	//入口文件
    ├─README.md		// 文档
    ├─styles		//样式目录
    |   ├─icon.css
    |   └style.css
    ├─imgs			//图片目录
    |  ├─favicon.ico	//网页icon
    |  ├─icon_article.webp
    |  ├─icon_hot.webp
    |  ├─icon_topic.png
    |  ├─rank-top1.png	//排行icon
    |  ├─rank-top2.png
    |  ├─rank-top3.png
    |  ├─rank-top4.png
    |  ├─rank-top5.png
    |  ├─sku-1.jpg		//sku图
    |  ├─sku-2.jpg
    |  ├─sku-3.jpg
    |  ├─sku-4.jpg
    |  └sku-5.png
    ├─fonts			//字体
    |   └icons.woff2
    ```
* 还原设计图，要求移动端,主要分为头部导航栏,内容区域。
* 顶部导航栏用语义化更强的H5标签`header`包裹,导航栏项用`nav`包裹，更加语义化。
* 内容区域用`a`标签包裹，记得加`text-decoration: none;`去除a标签默认的下划线,排名角标采用`子绝父相`定位。图片设置最小高度,防止拉伸变形。下方图标采用flex布局,使左侧`flex:1`元素自动撑开剩余空间
## 二、问题发现与解决
* `overflow`属性的作用有些遗忘了,自己去做了测试,各种属性值以及一些特殊情况会出现的现象。本次task的`overflow:auto`在内容溢出时,会产生滚动条,但滚动条又不是全屏滚动。
* 关于字体图标的原理,去回顾了之前自己写的博客。
* 字体图标和文字起初感觉没有水平对齐,发现设置` vertical-align: middle;`这个属性,不同标签参考的基线可能不同
* 绝对尺寸px不能适配,采用rem布局
* 窗口变化重新计算font-size
  ```javascript
  // 以 375 的设备宽度为基准，375 下 10px 为 1rem
      ((doc, win)=> {
        let docEl = doc.documentElement,
          resizeEvt =
            "orientationchange" in window ? "orientationchange" : "resize",
          recalc = function () {
            let clientWidth = docEl.clientWidth
            if (!clientWidth) {
              return
            }
            docEl.style.fontSize = 10 * (clientWidth / 375) + "px"
          }

        if (!doc.addEventListener) return
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener("DOMContentLoaded", recalc, false)
      })(document, window)
  ```
## 三、总结与反思
* H5学习应当更加关注语义化和浏览器兼容问题,摒弃弃用的标签,尽可能使用更加语气化的标签,利于SEO
* 关注细节,尤其是颜色,间距
* 文件命名、各种变量命名尽可能规范,增加代码可读性
* 看了一遍红宝书并没有太懂,准备进行第二次阅读
* 下周计划复习下之前整理的nginx原理知识
* [在线预览(通过vercel deploy,代码未打包压缩,可能影响访问速度)](https://kingsoft-tasks.vercel.app/)
