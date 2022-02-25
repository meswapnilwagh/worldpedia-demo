interface IImages {
    [key: string]: any;
}
const images = {
    af: require('../assets/images/africa.png'),
    an: require('../assets/images/ociania.png'),
    as: require('../assets/images/asia.png'),
    eu: require('../assets/images/europe.png'),
    na: require('../assets/images/northAmerica.png'),
    oc: require('../assets/images/ociania.png'),
    sa: require('../assets/images/southAmerica.png'),
    glob: require('../assets/images/globe.gif'),
    world: require('../assets/images/world-map.jpeg'),
    noRecord: require('../assets/images/no-record.png'),
    empty: require('../assets/images/empty.png'),

}

export { images }