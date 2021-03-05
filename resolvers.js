const resolvers = {
    Query: {
        books: (rootValue, args, { db }) => db.getAllBooks(),
        authors: (rootValue, args, { db }) => db.getAllAuthors(),
        users: (rootValue, args, { db }) => db.getAllUsers(),
        author: (rootValue, { id }, { db }) => db.getAuthorById(id),
        book: (rootValue, { id }, { db }) => db.getBookById(id),
        user: (rootValue, { id }, { db }) => db.getUserById(id)
      },
    Book: {
        title: (book) => book.title.toUpperCase(),
        author: (book, args, { db }) => db.getAuthorById(book.authorId),
        cover: book => ({
            path: book.coverPath
        })
    },
    Author: {
        books: (author, args, { db }) => author.bookIds.map(db.getBookById),
        photo: author => ({
            path: author.photoPath
        })
    },
    Avatar: {
        image: avatar => ({
            path: avatar.imagePath
        })
    },
    Image: {
        url: (image, args, context) => context.baseAssetsUrl + image.path
    }
};

module.exports = resolvers;