import AlbumItem from './AlbumItem.js';
class AlbumList extends React.Component {
    render() {
        return (React.createElement("section", { className: 'list' }, this.props.albums().map((album) => (React.createElement(AlbumItem, { key: album.id, album: album, onDelete: () => this.props.deleteAlbum(album) })))));
    }
}
export default AlbumList;
//# sourceMappingURL=AlbumList.js.map