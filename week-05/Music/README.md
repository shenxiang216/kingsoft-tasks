# week-05-Music项目

## 项目目录说明

```text
├─.gitignore
├─global.d.ts
├─index.html
├─package-lock.json
├─package.json
├─README.md
├─tsconfig.json  // ts配置项
├─styles
|   └style.css   // 样式文件
├─src
|  ├─main.tsx    // main文件
|  ├─types.ts    // 类型定义函数
|  ├─utils
|  |   └request.ts  // 封装网络请求
|  ├─componets      // 组件
|  |     ├─AlbumItem.tsx   // album列表项
|  |     ├─AlbumList.tsx   // album列表
|  |     ├─Areas.tsx       // 地区列表
|  |     └Header.tsx       // 页面Header
├─imgs 
|  ├─delete.png
|  └logo.png
├─data              // 数据文件
|  ├─albums.json
|  └areas.json
```



## 项目思路及问题

* 根据上课老师所讲，继续完成本项目

* 页面分为 `Header`、`Areas`、`AlbumList`三个组件，`AlbumList`由`AlbumListItem`组成，组件的逻辑结构如下：

  ```jsx
  组件的逻辑结构：
  
  <React.Fragment>
    <Header/>
    <main>
      <Areas
        areas={this.state.areas}
        currentArea={this.state.currentArea}
        switchTab={this.changeTab.bind(this)}
      />
      <AlbumList
        albums={() => this.currentAlbums()}
        currentArea={this.state.currentArea}
        deleteAlbum={this.deleteAlbum.bind(this)}
      >
           <AlbumItem
              key={album.id}
              album={album}
              onDelete={() => this.props.deleteAlbum(album)}
            />
      </AlbumList>
    </main>
  </React.Fragment>
  ```

* 关于 props 有一些重要的概念需要注意，子组件永远不要直接修改父组件传递过来的 props，需要保持只读的状态

* props 只能由父组件进行修改，这样做的目的是为了保持数据流的单向性，也就是说状态数据应该只能从父组件往子组件流动，而不应该反过来，这样容易造成混乱。

* `album`列表项删除、`Areas`列表切换地区，一律通过回调函数的形式传递给父组件，不得在子组件中直接修改父组件的 props

* 在 `AlbumListItem` 中，点击删除按钮时，需要调用 `DeleteAlbum` 函数，这个函数的作用是将删除的 album 传递给父组件

* 在 `Areas` 中，点击切换地区时，需要调用 `switchTab` 函数，这个函数的作用是将切换的 area 传递给父组件

* 遵循reat哲学，合理拆分组件

* 使用泛型方法请求 `json` 数据（ts的泛型让一些函数的封装更加具有通用性，体会到了ts的强大作用）

* 异步请求使用 `async/await`（async/await是异步解决的终极方案）

* 代码风格遵循 `standard.js` 规范

  - 在`standard.js的github仓库`深入学习了有关代码规范的规则
  - 代码规范对于团队协作开发的重要性
  - 在`vscode`下更加方便地使用`standard.js`风格格式化代码

* **react绑定事件this指向丢失问题的解决方法**
  * render方法中使用bind
  如果使用一个类组件，在其中给某个组件/元素一个onClick属性，它现在并会自定绑定其this到当前组件，解决这个问题的方法是在事件函数后使用.bind(this)将this绑定到当前组件中

  ```javascript
  class App extends React.Component {
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>test</div>
    )
  }
  }
  ```

  这种方式在组件每次render渲染的时候，都会重新进行bind的操作，影响性能

  * render方法中使用箭头函数
  通过ES6的上下文来将this的指向绑定给当前组件，同样再每一次render的时候都会生成新的方法，影响性能

  ```javascript
  class App extends React.Component {
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={e => this.handleClick(e)}>test</div>
    )
  }
  }
  ```

  * constructor中bind
  在constructor中预先bind当前组件，可以避免在render操作中重复绑定

  ```javascript
  class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>test</div>
    )
  }
  }
  ```

  * 定义阶段使用箭头函数绑定
  跟上述方式三一样，能够避免在render操作中重复绑定，实现也非常的简单，如下：

  ```javascript
  class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log('this > ', this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>test</div>
    )
  }
  }
  ```

  * 区别
    * 上述四种方法的方式，区别主要如下：
    
    * 编写方面：方式一、方式二写法简单，方式三的编写过于冗杂
    
    * 性能方面：方式一和方式二在每次组件render的时候都会生成新的方法实例，性能问题欠缺。若该函数作为属性值传给子组件的时候，都会导致额外的渲染。而方式三、方式四只会生成一个方法实例
    
  * 综合上述，方式四是最优的事件绑定方式