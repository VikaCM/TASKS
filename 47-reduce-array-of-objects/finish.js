/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

/// ------------- My incorect option --------

//  popularPostsIds(posts, minimalComentsQty) => {
//   return posts.reduce((acc, element) => {
//     if (element.comments >= minimalComentsQty) {
//       acc.push(element.acc);
//     }
//     return acc[element.postId];
//   });
// } //  ---------nu am inteles cum lucreaza reduce

//   ----------- INSTRUCTOR OPTION ------------ //

function popularPostsIds(posts, minimalComentsQty) {
  return posts.reduce(
    (postsIds, post) =>
      post.comments >= minimalComentsQty
        ? postsIds.concat([post.postId])
        : postsIds,
    []
  );
}

const inputPosts = [
  {
    title: "Как быстро выучить JavaScript?",
    postId: 3421,
    comments: 25,
  },
  {
    title: "Где используется JavaScript?",
    postId: 5216,
    comments: 3,
  },
  {
    title: "Какая разница между React и Angular?",
    postId: 8135,
    comments: 12,
  },
];

console.log(popularPostsIds(inputPosts, 10)); // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)); // [3421]

console.log(popularPostsIds(inputPosts, 50)); // []

// ---------- My documentation ------
// с помощью reduce() их можно объединить в одной функции filter и map. Иногда это может быть необходимо в целях производительности, поскольку в этом случае будет всего один проход по массиву вместо нескольких в зависимости от количества вызываемых методов.
// concat - uneste 2 valori
