/*
 * @Author: 赵亚鑫Deep Lane
 * @Date: 2022-04-27 01:21:24
 * @LastEditors: 赵亚鑫Deep Lane
 * @LastEditTime: 2022-04-27 12:30:58
 * @Description:
 */
export default class Banner extends React.Component {
    render() {
        return (React.createElement("div", { className: 'top' },
            React.createElement("div", { className: 'top-container' },
                React.createElement("img", { src: 'imgs/banner.webp', alt: 'banner', className: 'banner' }),
                React.createElement("div", { className: 'top-content' },
                    React.createElement("h1", null, "Discover the world\u2019s top designers & creatives"),
                    React.createElement("p", { className: 'top-text' }, "Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals."),
                    React.createElement("a", { href: '#', className: 'sign-up' }, "Sign up")))));
    }
}
//# sourceMappingURL=Banner.js.map