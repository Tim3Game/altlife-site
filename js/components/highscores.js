class Highscores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            players: [],
            skills: [
                'agility',
                'cooking',
                'crafting',
                'fishing',
                'gathering',
                'mechanic',
                'medicine',
                'mining',
                'smithing',
                'woodcutting',
                'shooting'
            ],
            selectedSkill: null
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(`http://145.239.255.55:7777/api/v1/highscore${this.state.selectedSkill == null ? '' : '?skill=' + this.state.selectedSkill}`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({
                players: data.sort((a, b) => {
                    const sortBy = a.total ? 'total' : 'level';
                    return a[sortBy] > b[sortBy] ? -1 : b[sortBy] > a[sortBy] ? 1 : 0
                })
            });
        });
    }

    renderSkillSelect() {
        let elements = [];

        this.state.skills.forEach((skill) => {
            const el = h(
                'div',
                { class: 'link' },
                h(
                    'input',
                    {
                        type: 'radio',
                        id: skill,
                        name: 'skill',
                        checked: this.state.selectedSkill == skill,
                        onclick: () => {
                            this.setState({
                                selectedSkill: skill
                            });

                            this.getData();
                        }
                    },
                ),
                h(
                    'label',
                    { for: skill },
                    h('img', { class: 'svg', src: `./images/icons/skills/${skill}.svg` }),
                    h('span', {}, skill)
                )
            );

            elements.push(el);
        });

        return h(
            'div',
            { class: 'skill-select' },
            h(
                'div',
                { class: 'link' },
                h(
                    'input',
                    {
                        type: 'radio',
                        id: 'level',
                        name: 'skill',
                        checked: this.state.selectedSkill == null,
                        onclick: () => {
                            this.setState({
                                selectedSkill: null
                            });

                            this.getData();
                        }
                    },
                ),
                h(
                    'label',
                    { for: 'level' },
                    h('img', { class: 'svg', src: `./images/icons/skills/level.svg` }),
                    h('span', {}, 'level')
                )
            ),
            ...elements
        );
    }

    renderLeaderboard() {
        let elements = [];
        let players = this.state.players.slice(0, 10);

        players.forEach((player, index) => {
            if (player.name == null) return;

            const el = h(
                'tr',
                {},
                h('td', {}, `${index + 1}. ${player.name}`),
                h('td', {}, player.total ? player.total : player.level)
            );

            elements.push(el);
        });

        return h(
            'table',
            { class: 'leaderboard' },
            h(
                'thead',
                {},
                h(
                    'tr',
                    {},
                    h('th', {}, 'Player'),
                    h('th', {}, 'Level'),
                )
            ),
            h(
                'tbody',
                {},
                ...elements
            )
        );
    }

    render() {
        return h(
            'div',
            { class: 'page' },
            this.renderSkillSelect(),
            this.renderLeaderboard()
        );
    }
}
