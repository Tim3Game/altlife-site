class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };

        this.pages = {
            0: Home,
            1: Highscores
        };

        this.pageNames = {
            0: 'Home',
            1: 'Highscores'
        };

        this.links = {
            Discord: 'https://discord.gg/mdHzDDn',
            Forums: 'https://forum.altv.life/',
            ServerInfo: 'https://altstats.net/server/202'
        };
    }

    onNavigate(e) {
        const key = e.target.id;
        if (!key) {
            return;
        }

        if (!this.pages[key]) {
            return;
        }

        document.title = `alt:Life | ${this.pageNames[key]}`;
        this.setState({ page: parseInt(key) });
    }

    renderNavigation() {
        const links = Object.keys(this.pages).map(key => {
            const pageName = this.pageNames[key];

            return h(
                'button',
                { class: 'link', id: key, onclick: this.onNavigate.bind(this) },
                h('img', { class: 'svg', src: `./images/${pageName}.svg` }),
                pageName
            );
        });

        Object.keys(this.links).forEach(key => {
            const link = this.links[key];
            links.push(
                h(
                    'button',
                    {
                        class: 'link',
                        onclick: () => {
                            window.location.href = link;
                        }
                    },
                    h('img', { class: 'svg', src: `./images/${key}.svg` }),
                    key
                )
            );
        });

        return h('div', { class: 'navigation' }, links);
    }

    render() {
        const page = this.pages[this.state.page];
        return h(
            'div',
            { class: 'container' },
            h(this.renderNavigation.bind(this)),
            h(page)
        );
    }
}

render(h(App), document.querySelector('#render'));
