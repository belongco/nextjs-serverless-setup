# nextjs-serverless
Deploying a next JS site to serverless.

### Running it locally

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
