const awsmobile = {
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_7AFoI4FRG',
        userPoolWebClientId: 'ggigbfv929tfoik4ss8a8nhog',
        identityPoolId: 'us-east-1:45a93150-828c-4923-8f75-eda7c0da68c8',
    },
    Storage: {
        AWSS3: {
            bucket: 'filestoragestack-s3bucket64cb25af-1gkb843m1654d',
            region: 'us-east-1',
        },
    },
    aws_project_region: 'us-east-1',
    aws_appsync_graphqlEndpoint:
        'https://gcajw4nblrfjzk5473lklxrhcu.appsync-api.us-east-1.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-1',
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}

export default awsmobile

