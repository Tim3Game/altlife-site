class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
    }

    componentDidMount() {}

    renderVideo({ src }) {
        return h(
            'video',
            {
                muted: true,
                loop: true,
                playsinline: true,
                autoplay: true,
                controls: false
            },
            h('source', {
                src,
                type: 'video/webm'
            })
        );
    }

    render() {
        return h(
            'div',
            { class: 'page' },
            h(
                'div',
                { class: 'containera' },
                h('img', { class: 'logo', src: '../../images/logo.png' }),
                h(
                    'div',
                    { class: 'wrapper' },
                    h('header', {}, 'Welcome!'),
                    h(
                        'content',
                        {},
                        'alt:Life is a RPG server with built-in mechanics for Roleplay on the alt:V client. We focus on TEXT BASED RP. Meaning that it’s a RPG/RP Hybrid server that focuses on script mechanics. Inspiration for alt:V comes from games such as Runescape, Black Desert Online, Godfather Script from SAMP, and many more.'
                    )
                )
            ),
            h(
                'div',
                { class: 'containera' },
                h(this.renderVideo.bind(this), {
                    src: '../../images/webm/sync.webm'
                }),
                h(
                    'div',
                    { class: 'wrapper' },
                    h('header', {}, 'Why alt:Life?'),
                    h(
                        'content',
                        {},
                        `What makes alt:Life different than the average server is the amount of polish that goes into each individual component on the server. All of the components are changing with feedback provided by this community. Thanks to alt:V's perfect synchronization players can spend more time playing rather than bugging out.`
                    ),
                    h(
                        'content',
                        {},
                        'alt:Life is also one of the first text based servers on alt:V.'
                    )
                )
            ),
            h(
                'div',
                { class: 'containera' },
                h(this.renderVideo.bind(this), {
                    src: '../../images/webm/updates.webm'
                }),
                h(
                    'div',
                    { class: 'wrapper' },
                    h('header', {}, 'Consistent Updates'),
                    h(
                        'content',
                        {},
                        'Rather than waiting weeks for updates the world of alt:Life is constantly changing on a weekly basis. New features and systems are constantly being added and updated to give players new things to pursue.'
                    ),
                    h(
                        'content',
                        {},
                        'We even communicate what will be coming in updates with gigantic changelogs that highlight the exact feature that was changed, added, or removed.'
                    )
                )
            ),
            h(
                'div',
                { class: 'containera' },
                h(this.renderVideo.bind(this), {
                    src: '../../images/webm/contextmenu.webm'
                }),
                h(
                    'div',
                    { class: 'wrapper' },
                    h('header', {}, 'Robust Framework'),
                    h(
                        'content',
                        {},
                        'The framework is hand crafted and built with plenty of community feedback. We prioritize performance and ensure that we can get a similar performance across all computers. Our biggest and most influential system is our context menu. Which means you can interact with various things across the entire world of GTA:V. It’s very simple to use in a sense that holding down TAB and Right-Clicking will let you immediately interact with something.'
                    ),
                    h(
                        'content',
                        {},
                        'Our economy allows for a slow trickle of money to be added to the server based on the amount of hours that you play! Which means the amount of money in the server correlates with the amount of time players have spent playing.'
                    )
                )
            ),
            h(
                'div',
                { class: 'containera' },
                h(this.renderVideo.bind(this), {
                    src: '../../images/webm/weather.webm'
                }),
                h(
                    'div',
                    { class: 'wrapper' },
                    h('header', {}, 'Dynamic Systems'),
                    h(
                        'content',
                        {},
                        'The entire script changes dynamically based on the events that occuring. Anything from turfs, weather, and faction interactions is constantly changing. Our weather system alone will give you different weather types across the entire map.'
                    ),
                    h(
                        'content',
                        {},
                        'Our factions can easily be created and removed on a whim. Allowing for an endless amount of factions. You and your friends can make a faction without relying on Administrative permission to make it.'
                    )
                )
            ),
            h(
                'div',
                { class: 'containera' },
                h(this.renderVideo.bind(this), {
                    src: '../../images/webm/community.webm'
                }),
                h(
                    'div',
                    { class: 'wrapper' },
                    h('header', {}, 'Community Funded'),
                    h(
                        'content',
                        {},
                        'alt:Life is a project that is entirely funded through community services such as Twitch, YouTube, and Github. Funds for the server are accumulated whenever Stuyk does something on YouTube, Twitch, or GitHub. All funding is completely public on a spreadsheet.'
                    )
                )
            )
        );
    }
}
