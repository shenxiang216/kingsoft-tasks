/*
 * @Author: 赵亚鑫Deep Lane
 * @Date: 2022-04-26 19:46:46
 * @LastEditors: 赵亚鑫Deep Lane
 * @LastEditTime: 2022-04-27 12:31:28
 * @Description:
 */
import * as request from './utils/request.js';
import List from './componets/List.js';
import Header from './componets/Header.js';
import Footer from './componets/Footer.js';
import Banner from './componets/Banner.js';
class App extends React.Component {
    state = {
        contents: [],
    };
    async getData() {
        let contents = await request.get('data/task.json');
        this.setState({
            contents,
        });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement(Banner, null),
            React.createElement(List, { contents: this.state.contents }),
            React.createElement(Footer, null)));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=main.js.map