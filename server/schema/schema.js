const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString} = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'GraphQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                // code to et data from db
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});