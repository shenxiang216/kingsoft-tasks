# week03_task
[线上浏览]()(部署在vercel)

> 页面通过ajax读取数据并操作dom的方式将数据填充，所以首屏可能会出现加载缓慢或页面抖动的现象
## 思路

### 项目目录

```js
├─index.html //入口
├─README.md  // note
├─styles
|   └style.css  // 样式
├─scripts
|    └index.js  // 读取文件脚本
├─imgs // imgs文件夹，不再展开
├─data
|  └task.json   // 读取脚本
```
### 项目思路
* 主要分为`header顶部`、`top上方`、`main主体`、`footer页尾`、`script处理点击展示遮罩层和处理读取到的json数据`

* 仔细学习课程的示例代码，发现课程中的读取脚本操作dom的方法十分简洁，代码十分优雅，本次任务操作dom也采用这种方式

* 从dribble官网参考样式、字体，尽可能去还原设计图

* 点击展示遮罩层核心代码,在展示遮罩层的时候，应该把`body`设置为`overflow:hidden`,来防止页面滚动

  ```js
  const open = document.querySelector('.open')
      const close = document.querySelector('.close')
      const header = document.querySelector('header')
      const body = document.querySelector('body')
      open.onclick = function () {
        header.className = 'opened'
        // 隐藏滚动条，禁止滚动
        body.style.overflow = 'hidden'
      }
      close.onclick = function () {
        header.className = ''
        body.style.overflow = ''
      }
  ```

* 读取数据时，通过`XMLHttpRequest`发送请求读取json，通过传回调函数，将拿到的json进行`json.pasrse()`

  ```js
   let data = [];
      (async function () {
        await readTextFile("data/task.json", function (text) {
          data = Array.from(JSON.parse(text))
          let tpl = document.getElementById('tpl').innerHTML
          let html = data.map(item => {
            let result = tpl.replace('{{cover}}', item.cover)
          	....
            return result
          }).join('')
          document.querySelector('.list').innerHTML = html
        })
      })()
  ```

* 断点选择根据设计图，`768,920,1280,1600`

* grid布局`grid-template-columns: repeat(auto-fill, minmax(336px, 1fr))`

## 遇到的问题及解决

* 解析得到的数据时，发现`JSON.parse()`只是返回了类数组，进行调用map方法时出现了错误，发现解析后并未直接返回数组，需要通过`Array.from`生成数组
* 在展示遮罩栏时，需要把`body overflow:hidden`
* 最开始忽略了异步问题，导致没读取完数据，就开始遍历数组
* 根据代码规范，养成良好习惯，给图片添加`alt`属性
* 再一次体会到了`grid`的`auto-fill, minmax()`强大之处