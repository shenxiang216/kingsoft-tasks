/*
 * @Author: 赵亚鑫Deep Lane
 * @Date: 2022-04-26 19:46:01
 * @LastEditors: 赵亚鑫Deep Lane
 * @LastEditTime: 2022-04-27 00:42:00
 * @Description:
 */
import * as request from './utils/request.js';
import Header from './componets/Header.js';
import Areas from './componets/Areas.js';
import AlbumList from './componets/AlbumList.js';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areas: [],
            albums: [],
            currentArea: 0,
        };
    }
    async load() {
        let [areas, albums] = await Promise.all([
            request.get('data/areas.json'),
            request.get('data/albums.json'),
        ]);
        this.setState({
            areas,
            albums,
            currentArea: areas[0].id,
        });
    }
    changeTab(id) {
        this.setState({
            currentArea: id,
        });
    }
    currentAlbums() {
        return this.state.albums.filter((album) => album.area === this.state.currentArea);
    }
    deleteAlbum(album) {
        let index = this.state.albums.indexOf(album);
        this.state.albums.splice(index, 1);
        this.setState({
            albums: this.state.albums,
        });
    }
    componentDidMount() {
        this.load();
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(React.StrictMode, null,
                React.createElement(Header, null),
                React.createElement("main", null,
                    React.createElement(Areas, { areas: this.state.areas, currentArea: this.state.currentArea, switchTab: this.changeTab.bind(this) }),
                    React.createElement(AlbumList, { albums: () => this.currentAlbums(), currentArea: this.state.currentArea, deleteAlbum: this.deleteAlbum.bind(this) })))));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=main.js.map