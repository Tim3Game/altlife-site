class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: ""
    };
  }

  componentDidMount() {}

  search(e) {
    this.setState({ keywords: e.target.value });
  }

  renderAnimationBases({ animationList }) {
    const anims = animationList.map(anim => {
      return h("div", { class: "anim" }, anim);
    });

    return h("div", { class: "anims" }, anims);
  }

  renderAnimations() {
    if (this.state.keywords.length <= 0) {
      return h("div", { class: "results" });
    }

    const data = [];
    animations.forEach(animation => {
      if (animation[0].includes(this.state.keywords)) {
        const animationCopy = [...animation];
        const dictionary = animationCopy.shift();

        data.push(
          h(
            "div",
            { class: "animation" },
            h("div", { class: "dictionary" }, `${dictionary}`),
            h(
              "div",
              { class: "options" },
              h(this.renderAnimationBases, { animationList: animationCopy })
            )
          )
        );
      }
    });

    return h("div", { class: "results" }, data);
  }

  render() {
    return h(
      "div",
      { class: "wrapper" },
      h(
        "p",
        {},
        "Like animations but hate searching websites? Try this. Thanks Alex for the animations. Created by Stuyk. GTA:V Animations"
      ),
      h("input", {
        type: "text",
        class: "search",
        placeholder: "Type here to search... then press enter.",
        onchange: this.search.bind(this)
      }),
      h(this.renderAnimations.bind(this))
    );
  }
}

render(h(App), document.querySelector("#render"));
