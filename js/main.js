const { createElement, render, Component } = preact;
const h = createElement;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return h(
            'div',
            { class: 'page' },
            h('h4', { class: '' }, 'Oops! Looks like we are not ready yet! Hello! :)'),
            h('p', {}, `Feel free to visit the forums instead.`),
            h(
                'a',
                { href: 'https://forum.altv.life/', title: 'Forums' },
                'Navigate to Forums ->'
            )
        );
    }
}

render(h(App), document.querySelector('#render'));
