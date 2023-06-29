const PLAYERS = [
  { isReady: false, name: 'Kirill', score: 120, id: 1 },
  { isReady: false, name: 'Vadim', score: 15, id: 2 },
  { isReady: true, name: 'Danil', score: 20, id: 3 },
];

const COINS = [1, 2, 3, 4, 5, 6];
const SEASONS: number[][] = [
  [13, 14, 1, 6],
  [13, 14, 3, 5],
  [13, 14, 6, 4],
  [13, 14, 8, 3],
];
const GRID = [
  [
    { id: 1, image: '/images/other/ruins.png' },
    { id: 2, image: '/images/type_card/city_type.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/cell.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/type_card/city_type.png' },
    { id: 2, image: '/images/type_card/city_type.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/mountain.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/ruins.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/ruins.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/cell.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/mountain.png' },
    { id: 10, image: '/images/other/ruins.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/cell.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/cell.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/cell.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/cell.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/cell.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/mountain.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/cell.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/cell.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/cell.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/cell.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/ruins.png' },
    { id: 3, image: '/images/other/mountain.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/cell.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/ruins.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/cell.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/ruins.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/mountain.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
  [
    { id: 1, image: '/images/other/cell.png' },
    { id: 2, image: '/images/other/cell.png' },
    { id: 3, image: '/images/other/cell.png' },
    { id: 4, image: '/images/other/cell.png' },
    { id: 5, image: '/images/other/cell.png' },
    { id: 6, image: '/images/other/cell.png' },
    { id: 7, image: '/images/other/cell.png' },
    { id: 8, image: '/images/other/cell.png' },
    { id: 9, image: '/images/other/cell.png' },
    { id: 10, image: '/images/other/cell.png' },
    { id: 11, image: '/images/other/cell.png' },
  ],
];

export { GRID, PLAYERS, SEASONS, COINS };
