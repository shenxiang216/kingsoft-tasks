import ListItem from './ListItem.js';
export default class List extends React.Component {
    render() {
        return (React.createElement("main", null,
            React.createElement("div", { className: 'list' }, this.props.contents.map((content) => (React.createElement(ListItem, { content: content, key: content.likes }))))));
    }
}
//# sourceMappingURL=List.js.map