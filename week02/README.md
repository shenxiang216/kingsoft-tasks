## week02



### 一、任务思路

* 项目目录

  ```
  ├─index.html   //入口文件
  ├─README.md    
  ├─style        // 样式
  |   └style.css
  ├─js           // 读取js的脚本文件
  | └index.js
  ├─imgs         // 图片
  |  ├─cover_play.png
  |  ├─icon_listen.png
  |  ├─icon_play.png
  |  ├─jingling.png  // 标题精灵图
  |  └qqmusic.png
  ├─db            //json数据
  | └task.json
  ```

* 基本思路

  * 页面主要分为 `顶部导航栏`、`歌单推荐`、`新歌首发`、`MV`、`页脚`五个部分
  * 主要的布局方式采用grid布局，简洁强大
  * `歌单推荐`、`新歌首发`、`MV`尝试采用了`精灵图`，浏览器只需要下载一次图片

* 精灵图

  * 通过background-position去显示不同的图片区域
  * 但是调节定位有点麻烦

* 读取json数据

  * 浏览器由于同源策略的限制，除了用户主动input，是不允许读取文件的。

  * 想到了浏览器原生的`XMLHttpRequest`对象，通过相对路径请求json，拿到json对象

  * 核心代码：

    ```javascript
    /**
     *
     * @param {string} file
     * @param {function} callback
     */
    function readTextFile(file, callback) {
      const rawFile = new XMLHttpRequest()
      rawFile.overrideMimeType("application/json")
      rawFile.open("GET", file, true)
      rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText)
        }
      }
      rawFile.send(null)
    }
    
    //usage:
    readTextFile("../db/task.json", function (text) {
      const data = JSON.parse(text)
      console.log(data)
    })
    ```

  * 但是，操作dom实在是过于繁琐，甚至比直接写死数据还要繁琐。

### 二、问题发现与解决

* 根据任务设计图以及QQ音乐官网，发现`歌单推荐`、`新歌首发`、`MV`这几个并不是一个标题，而是采用的精灵图，正好没有自己尝试写过精灵图，就去扒到了图片：

  ![精灵图](https://y.qq.com/ryqq/static/media/index_tit.ee334dbf.png?max_age=2592000)

* 附加小任务，通过脚本读取数据自动填充，最开始尝试了很多解决方案，最后选定了`XMLHttpRequest`去"读取文件"，得到json对象

* 尺寸、间距等细节问题还是需要更加注意，自己去深入了解了有关高质量还原设计图相关方面的知识

* 看到了有关grid布局兼容性问题讨论的文章，思考了自己写样式也要去考虑兼容性问题