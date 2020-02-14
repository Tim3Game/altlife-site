const icons = {
    Ammunation: {
        iconUrl: '/images/map/blips/Ammunation.png',
        iconSize: [64, 64]
    },
    Bank: {
        iconUrl: '/images/map/blips/Bank.png',
        iconSize: [42, 60]
    },
    'Barber Shop': {
        iconUrl: '/images/map/blips/Barber_Shop.png',
        iconSize: [62, 62]
    },
    'Clothing Store': {
        iconUrl: '/images/map/blips/Clothing_Shop.png',
        iconSize: [66, 52]
    },
    'Cooking Source': {
        iconUrl: '/images/map/blips/Cooking_Source.png',
        iconSize: [60, 60]
    },
    'Crafting Bench': {
        iconUrl: '/images/map/blips/Crafting_Bench.png',
        iconSize: [64, 65]
    },
    Dealership: {
        iconUrl: '/images/map/blips/Dealership.png',
        iconSize: [66, 48]
    },
    'Food Stand': {
        iconUrl: '/images/map/blips/Food_Stand.png',
        iconSize: [48, 48]
    },
    'Fuel Station': {
        iconUrl: '/images/map/blips/Fuel_Station.png',
        iconSize: [49, 58]
    },
    'Gather Vigorium': {
        iconUrl: '/images/map/blips/Gather.png',
        iconSize: [64, 64]
    },
    'Gather Kevlarium': {
        iconUrl: '/images/map/blips/Gather.png',
        iconSize: [64, 64]
    },
    'General Store': {
        iconUrl: '/images/map/blips/General_Store.png',
        iconSize: [64, 56]
    },
    Helper: {
        iconUrl: '/images/map/blips/Helper.png',
        iconSize: [32, 44]
    },
    'LS Customs': {
        iconUrl: '/images/map/blips/LS_Customs.png',
        iconSize: [40, 42]
    },
    'Metal & Wood Seller': {
        iconUrl: '/images/map/blips/Metal_and_Wood_Seller.png',
        iconSize: [42, 42]
    },
    'Metal Buyer': {
        iconUrl: '/images/map/blips/Metal_Buyer.png',
        iconSize: [42, 42]
    },
    'Wood Buyer': {
        iconUrl: '/images/map/blips/Wood_Buyer.png',
        iconSize: [42, 42]
    },
    'Refine Vigorium': {
        iconUrl: '/images/map/blips/Refine_Drugs.png',
        iconSize: [60, 60]
    },
    'Refine Kevlarium': {
        iconUrl: '/images/map/blips/Refine_Drugs.png',
        iconSize: [60, 60]
    },
    'Refinery Worker': {
        iconUrl: '/images/map/blips/Refinery_Worker.png',
        iconSize: [60, 60]
    },
    'Lumber Worker': {
        iconUrl: '/images/map/blips/Refinery_Worker.png',
        iconSize: [60, 60]
    },
    'Tattoo Shop': {
        iconUrl: '/images/map/blips/Tattoo_Shop.png',
        iconSize: [66, 48]
    },
    'Train Station': {
        iconUrl: '/images/map/blips/Train_Station.png',
        iconSize: [64, 57]
    },
    'Trucking Depot': {
        iconUrl: '/images/map/blips/Trucking_Depot.png',
        iconSize: [63, 46]
    },
    'Agility Training': {
        iconUrl: '/images/map/blips/Agility_Training.png',
        iconSize: [55, 58]
    },
    Farmer: {
        iconUrl: '/images/map/blips/Farmer.png',
        iconSize: [40, 60]
    },
    'Farming Fields': {
        iconUrl: '/images/map/blips/Farming_Fields.png',
        iconSize: [52, 40]
    },
    'City Hall Official': {
        iconUrl: '/images/map/blips/City_Hall_Official.png',
        iconSize: [52, 60]
    }
};

const blipColors = {
    1: 'e13b3b',
    2: '79ce79',
    3: '64b8e6',
    4: 'f0f0f0',
    5: 'efca57',
    6: 'c55758',
    7: 'a074b3',
    8: 'ff81c8',
    9: 'f6a480',
    10: 'b6968b',
    11: '91cfaa',
    12: '78adb3',
    13: 'd5d3e8',
    14: '95859f',
    15: '70c7c1',
    16: 'd8c59e',
    17: 'eb9358',
    18: '9dccea',
    19: 'b6698d',
    20: '95927f',
    21: 'aa7a67',
    22: 'b4abac',
    23: 'e892a0',
    24: 'bfd863',
    25: '17815d',
    26: '80c7ff',
    27: 'ae44e6',
    28: 'd0ac18',
    29: '4e69b1',
    30: '34a9bc',
    31: 'bca183',
    32: 'cde2ff',
    33: 'f0f09b',
    34: 'ed91a4',
    35: 'f98f8f',
    36: 'fdf0aa',
    37: 'f1f1f1',
    38: '3776bd',
    39: '9f9f9f',
    40: '545454',
    41: 'f29e9e',
    42: '6db8d7',
    43: 'b0eeaf',
    44: 'fea75e',
    45: 'f0f0f0',
    46: 'ebef28',
    47: 'ff9a18',
    48: 'f644a4',
    49: 'e03b3b',
    50: '8a6de2',
    51: 'ff8a5c',
    52: '426d42',
    53: 'b3ddf3',
    54: '3a647a',
    55: 'a0a0a0',
    56: '847232',
    57: '65b9e7',
    58: '4c4276',
    59: 'e13b3b',
    60: 'f0cb58',
    61: 'cd3e98',
    62: 'cfcfcf',
    63: '286b9f',
    64: 'd77a1a',
    65: '8e8393',
    66: 'f0ca57',
    67: '64b8e6',
    68: '65b9e7',
    69: '78cd78',
    70: 'efca57',
    71: 'f0cb58',
    72: '000000',
    73: 'f0cb58',
    74: '64b9e7',
    75: 'e13b3b',
    76: '782424',
    77: '65b9e7',
    78: '39647a',
    79: 'e13b3b',
    80: '65b9e7',
    81: 'f2a40c',
    82: 'a4ccaa',
    83: 'a854f2',
    85: '000000'
};

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            bounds: {
                game: {
                    x: {
                        min: -5000,
                        max: 6000
                    },
                    y: {
                        min: 8000,
                        max: -4000
                    }
                },
                map: {
                    x: {
                        min: 4.81,
                        max: 80.9
                    },
                    y: {
                        min: -2.5625,
                        max: -85.675
                    }
                }
            },
            tileLayer: {
                url: '/images/map/tiles/satellite/{z}-{x}_{y}.png',
                options: {
                    minZoom: 4,
                    maxZoom: 7,
                    attribution:
                        '<a target="_blank" href="https://altv.life/">alt:Life</a>',
                    bounds: [
                        [0, 0],
                        [-85.9375, 85.9375]
                    ]
                }
            },
            legend: [],
            legendSelected: [],
            blips: [],
            grid: []
        };
    }

    normalize(value, min, max) {
        return (value - min) / (max - min);
    }

    getLatLng(x, y) {
        return new L.LatLng(
            this.normalize(
                y,
                this.state.bounds.game.y.min,
                this.state.bounds.game.y.max
            ) *
                (this.state.bounds.map.y.max - this.state.bounds.map.y.min) +
                this.state.bounds.map.y.min,
            this.normalize(
                x,
                this.state.bounds.game.x.min,
                this.state.bounds.game.x.max
            ) *
                (this.state.bounds.map.x.max - this.state.bounds.map.x.min) +
                this.state.bounds.map.x.min
        );
    }

    getCoords(lat, lng) {
        return {
            x:
                this.normalize(
                    lng,
                    this.state.bounds.map.x.min,
                    this.state.bounds.map.x.max
                ) *
                    (this.state.bounds.game.x.max - this.state.bounds.game.x.min) +
                this.state.bounds.game.x.min,
            y:
                this.normalize(
                    lat,
                    this.state.bounds.map.y.min,
                    this.state.bounds.map.y.max
                ) *
                    (this.state.bounds.game.y.max - this.state.bounds.game.y.min) +
                this.state.bounds.game.y.min
        };
    }

    componentDidMount() {
        this.map = L.map('map', {
            center: this.getLatLng(0, 0),
            zoom: 5,
            minZoom: 4,
            maxZoom: 7,
            crs: L.CRS.Simple,
            layers: [L.tileLayer(this.state.tileLayer.url, this.state.tileLayer.options)],
            maxBounds: [
                [10, -20],
                [-100, 100]
            ]
        });

        this.setupGrid();
        this.setupBlips();
    }

    setupGrid() {
        fetch(`https://server.altv.life:7443/api/v1/grid`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    grid: data
                });

                this.state.grid.map(sector => {
                    const xy1 = this.getLatLng(
                        sector.sector.coords.first.x,
                        sector.sector.coords.first.y
                    );
                    const xy2 = this.getLatLng(
                        sector.sector.coords.second.x,
                        sector.sector.coords.second.y
                    );
                    const bounds = [
                        [xy1.lat, xy1.lng],
                        [xy2.lat, xy2.lng]
                    ];

                    sector.polygon = L.rectangle(bounds, {
                        color: sector.color ? `#${blipColors[sector.color]}` : '#F1F1F1',
                        fill: true,
                        fillOpacity: sector.noTurf ? 0 : 0.7,
                        weight: 2,
                        opacity: 0.2
                    }).addTo(this.map);

                    sector.popup = sector.polygon
                        .bindPopup(
                            `<h2>${sector.sector.name}</h2><b>Players:</b> ${
                                sector.players
                            }</br>${
                                !sector.noTurf
                                    ? '<b>Gang:</b> ' +
                                      (sector.name ? sector.name : 'Unclaimed')
                                    : ''
                            }`,
                            { permanent: true, direction: 'center' }
                        )
                        .closeTooltip();
                });
            });
    }

    setupBlips() {
        fetch(`https://server.altv.life:7443/api/v1/blips`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    blips: data
                });

                this.state.blips.map(blip => {
                    let icon = icons[blip.label];

                    if (typeof icon == 'undefined') {
                        console.log(blip);
                    }

                    blip.marker = L.marker(this.getLatLng(blip.pos.x, blip.pos.y), {
                        icon: L.icon({
                            iconUrl: icon.iconUrl,
                            iconSize: [icon.iconSize[0] / 2.5, icon.iconSize[1] / 2.5]
                        }),
                        scale: 0.5
                    });
                });

                this.setState({
                    legend: [...new Set(this.state.blips.map(blip => blip.label))],
                    legendSelected: [...new Set(this.state.blips.map(blip => blip.label))]
                });

                this.state.blips.forEach(blip => {
                    if (this.state.legendSelected.includes(blip.label)) {
                        blip.marker.addTo(this.map);
                    }
                });
            });
    }

    renderMap() {
        return h('div', { id: 'map' }, '');
    }

    renderLegend() {
        let elements = [];

        this.state.legend.forEach((blip, index) => {
            const el = h(
                'div',
                { class: 'link' },
                h('input', {
                    type: 'checkbox',
                    id: blip,
                    name: 'skill',
                    checked: this.state.legendSelected.includes(blip),
                    onchange: () => {
                        this.state.legendSelected.includes(blip)
                            ? this.state.legendSelected.splice(
                                  this.state.legendSelected.indexOf(blip),
                                  1
                              )
                            : this.state.legendSelected.push(blip);

                        this.state.blips.forEach(blip => {
                            if (this.state.legendSelected.includes(blip.label)) {
                                blip.marker.addTo(this.map);
                            } else {
                                this.map.removeLayer(blip.marker);
                            }
                        });
                    }
                }),
                h(
                    'label',
                    { for: blip },
                    h('img', { class: 'svg', src: icons[blip].iconUrl }),
                    h('span', {}, blip)
                )
            );

            elements.push(el);
        });

        return h('div', { class: 'map-legend' }, ...elements);
    }

    render() {
        return h('div', { class: 'page' }, this.renderLegend(), this.renderMap());
    }
}
