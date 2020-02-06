class Highscores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
    }

    componentDidMount() {}
    // 127.0.0.1:7777/v1/api/highscores

    render() {
        return h('div', { class: 'page' }, 'To be added...');
    }
}
