# nextjs-serverless
Deploying a next JS site to serverless.

### Running it locally

First install the dependencies
```
yarn install
```

You will also need to install [DynamoDB locally](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html).

To start DynamoDB run,
```
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```
For Development,
```
yarn run dev
```


### Deploying it on Lambda

Ensure you populate the serverless-vpc-variables.yml file with
the values from your infrastucture against the various variables
defined.


Creating a domain.
```
serverless create_domain --stage staging
```
It might take about 40 minutes for the domain to initialize.


Post that, deploy the serverless stack using the command
```
SLS_DEBUG=* serverless deploy --stage staging # For staging
SLS_DEBUG=* serverless deploy --stage production # For production
```
