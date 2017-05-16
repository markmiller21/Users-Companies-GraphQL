const graphql = require('graphql');
const _ = require('lodash');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} = graphql;

const users = [
	{id: 1, firstName: "Mark", age: 25},
	{id: 2, firstName: "Maggie", age: 24},
	{id: 3, firstName: "Karl", age: 36}
];

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: GraphQLString },
		firstName: { type: GraphQLString },
		age: { type: GraphQLInt }
	}
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return _.find(users, { id: args.id });
			}
		}
	}
})