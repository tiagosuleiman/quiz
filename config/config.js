var config = {
    database: {
        connectionString: "mongodb://localhost:27017/quizdb",
        databaseName: "quizdb"
    },
    debug: {
        database: {
            connectionString: "mongodb://localhost:27017/quizdb-dev",
            databaseName: "quizdb-dev"
        }
    }
};

module.exports = config;