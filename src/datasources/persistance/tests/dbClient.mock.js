export const getDBClient = ({dbURI, dbName}) => {
    return {
        collection: (name) => {
            return [{thing: 'one'}, {thing: 'two'}];
        },
    };
};