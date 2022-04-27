/*
 * @Author: 赵亚鑫Deep Lane
 * @Date: 2022-04-27 01:15:27
 * @LastEditors: 赵亚鑫Deep Lane
 * @LastEditTime: 2022-04-27 12:29:36
 * @Description:
 */
export default class Header extends React.Component {
    state = {
        show: '',
    };
    // 展开遮罩层
    spread = () => {
        this.setState({
            show: 'opened',
        });
    };
    // 隐藏遮罩层
    fold = () => {
        this.setState({
            show: '',
        });
    };
    render() {
        return (React.createElement("header", { className: this.state.show },
            React.createElement("img", { onClick: this.spread, src: 'imgs/icon-menu.svg', alt: 'icon-menu', width: '18', className: 'open' }),
            React.createElement("img", { onClick: this.fold, src: 'imgs/icon-close.svg', alt: 'icon-close.svg', width: '24', className: 'close' }),
            React.createElement("img", { src: 'imgs/logo-black.svg', alt: 'logo-black', width: '76.5' }),
            React.createElement("div", { className: 'nav' },
                React.createElement("a", { href: '#', className: 'nav-item' }, "Inspiration"),
                React.createElement("a", { href: '#', className: 'nav-item' }, "Find Work"),
                React.createElement("a", { href: '#', className: 'nav-item' }, "Learn Design"),
                React.createElement("a", { href: '#', className: 'nav-item' }, "Go Pro"),
                React.createElement("a", { href: '#', className: 'nav-item' }, "Hire Designers")),
            React.createElement("a", { href: '#' }, "Sign in"),
            React.createElement("button", { className: 'sign-up' }, "Sign up")));
    }
}
//# sourceMappingURL=Header.js.map