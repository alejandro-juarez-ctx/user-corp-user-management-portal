# user-corp-user-management-portal

## Portal Backend
The project is build as a Java 1.8 Spring Boot Application with Swagger UI integrated for easy documentation/testing.

### Main considerations
- Project must be built wtih Java 1.8 since deployment is done through AWS Elastic Beanstalk. Said Java version is the only major version supported currently.

- The Spring Boot project should load in port 5000 due to AWS EBS default configurations. Setting `server.port=5000` in the properties file should suffice.

### Deployment
As mentioned, projects is deployed through AWS EBS. Project needs to be properly packaged in a jar file and through EBS deployment process it will be deployed into the cloud.

To package the project use the following maven command:
```
mvn clean package spring-boot:repackage
```
Once the project is ready, proceed to deploy your code by executing the following command wherever your `.elasticbeanstalk` folder is located:
```
eb deploy
```
For additional information on how the project is setup for deployment in AWS EBS please visit the following [link](https://www.baeldung.com/spring-boot-deploy-aws-beanstalk).
