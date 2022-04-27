# week-05-Dribbble

## 项目目录说明

```text
├─.gitignore
├─global.d.ts
├─index.html
├─package-lock.json
├─package.json
├─README.md
├─tsconfig.json  // ts配置
├─styles
|   └style.css   // 样式文件
├─src
|  ├─main.tsx    // 文件
|  ├─types.ts    // 接口类型
|  ├─utils
|  |   └request.ts   // 封装网络请求
|  ├─componets    // 组件
|  |     ├─Banner.tsx   // 页面横幅组件
|  |     ├─Footer.tsx   // 页脚组件
|  |     ├─Header.tsx   // 页面头部组件
|  |     ├─List.tsx     // 页面列表组件
|  |     └ListItem.tsx  // 页面列表项组件
├─imgs   // 图片资源
├─data
|  └task.json   // 数据文件
```



# 项目思路和问题

* 基本思路与music项目差不多，重复内容不再赘述，只叙述不同的部分

* 项目分为`Main`,`Header(页面头部)`，`Banner(页面上方横幅组件)`，`List(内容列表组件)`，`ListItem(内容列表项组件)`,`Footer(页脚组件)`几个组件，组件的逻辑结构如下所示

  ```react
  组件间的逻辑结构：
  <Main>
        <Header />
        <Banner />
        <List contents={this.state.contents}>
      	<ListItem content={content} key={content.likes} />
        </List>
        <Footer />
  </Main>
  ```

* 处理遮罩层的显隐，不涉及到父子组件通信，直接在`Headr组件`中绑定展开和折叠事件，给元素设置不同的样式即可

  ```react
   // 展开遮罩层
    spread = () => {
      this.setState({
        show: 'opened',
      })
    }
    // 隐藏遮罩层
    fold = () => {
      this.setState({
        show: '',
      })
    }
  ```

* 使用泛型方法请求 `json` 数据（ts的泛型让一些函数的封装更加具有通用性，体会到了ts的强大作用）

* 异步请求使用 `async/await`（async/await是异步解决的终极方案）

* 注意`H5web`语义化，使用恰当的标签，对于`img`标签，养成写`alt`属性的习惯

* 代码风格严格遵循`standardjs`风格
