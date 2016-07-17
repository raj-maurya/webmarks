import { QUERY_SEARCH } from '../../actions/search';

const defaultResults = [
  {
    title: '"Generation 25": Gelebte Einheit - Gelernte Grenzen',
    url: 'http://www.dw.com/de/s%C3%BCndenbock-der-eu-junckers-dilemma/a-19391383',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat."
  },
  {
    title: 'Another result',
    url: 'http://www.dw.com/de/s%C3%BCndenbock-der-eu-junckers-dilemma/a-19391383',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat."
  },
  {
    title: 'Thirld result',
    url: 'http://www.dw.com/de/s%C3%BCndenbock-der-eu-junckers-dilemma/a-19391383',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat."
  },
  {
    title: '"Generation 25": Gelebte Einheit - Gelernte Grenzen',
    url: 'http://www.dw.com/de/s%C3%BCndenbock-der-eu-junckers-dilemma/a-19391383',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat."
  }
];



export default function runtime(state = {}, action) {
  switch (action.type) {
    case QUERY_SEARCH:
      return {
        ...state,
        [query]: action.payload.query,
        [results]: defaultResults
      };
    default:
      return state;
  }
}
