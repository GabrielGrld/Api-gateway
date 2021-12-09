const usersResolver = {

        Query: {
            userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
                if (userId == userIdToken)
                    return dataSources.authAPI.getUser(userId)
                else
                    return null
        },

    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
    
    const authInput = {
        username:   userInput.username,
        nombre:     userInput.nombre,
        telefono:   userInput.telefono,
        numero_id:  userInput.numero_id,
        ciudad:     userInput.ciudad,
        direccion:  userInput.direccion,
        email:      userInput.email,
        password:   userInput.password,        
    }
    dataSources.authAPI.createUser(authInput);
    },
    
    logIn: (_, { credentials }, { dataSources }) =>
    dataSources.authAPI.authRequest(credentials),

    refreshToken: (_, { refresh }, { dataSources }) =>
        dataSources.authAPI.refreshToken(refresh),
}
};

module.exports = usersResolver;