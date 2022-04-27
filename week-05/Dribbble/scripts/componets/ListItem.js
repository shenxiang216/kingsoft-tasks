export default class ListItem extends React.Component {
    render() {
        let { content } = this.props;
        return (React.createElement("div", null,
            React.createElement("img", { src: content.cover, className: 'item-cover', alt: content.cover }),
            React.createElement("div", { className: 'item-detail' },
                React.createElement("img", { src: content.avatar, className: 'item-avatar', alt: content.avatar }),
                React.createElement("span", { className: 'item-name' }, content.name),
                React.createElement("span", { className: 'item-badge' }, content.badge),
                React.createElement("div", { className: 'item-status' },
                    React.createElement("img", { src: 'imgs/icon-like.svg', width: '14', alt: 'imgs/icon-like.svg' }),
                    React.createElement("span", null, content.likes),
                    React.createElement("img", { src: 'imgs/icon-view.svg', width: '14', alt: 'imgs/icon-view.svg' }),
                    React.createElement("span", null, content.views)))));
    }
}
//# sourceMappingURL=ListItem.js.map