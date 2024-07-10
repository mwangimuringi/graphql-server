let books = [
    { id: '1', title: 'Zelda, Tears of the kingdom', platform: ['Switch'] },
    { id: '2', title: 'hfjfujjiir', platform: ['Ps5', 'Xbox'] },
    { id: '3', title: 'Eden Ring', platform: ['ps5', 'Xbox', 'Pc'] },
    { id: '4', title: 'Mario kart', platform: ['Switch'] },
    { id: '5', title: 'Pokemon Scarlet', platform: ['ps5', 'Xbox', 'Pc'] },
];
let authors = [
    { id: '1', name: 'mario', verified: true },
    { id: '2', name: 'yoshi', verified: false },
    { id: '3', name: 'peach', verified: true },
];
let reviews = [
    { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', book_id: '2' },
    { id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', book_id: '1' },
    { id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', book_id: '3' },
    { id: '4', rating: 6, content: 'lorem ipsum', author_id: '4', book_id: '4' },
    { id: '5', rating: 7, content: 'lorem ipsum', author_id: '1', book_id: '2' },
];
export default { books, authors, reviews };
