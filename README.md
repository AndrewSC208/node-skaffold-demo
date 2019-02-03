# Node Skaffold Demo
To learn how to run skaffold for local, and remote docker container builds. This could be a vialbe replacement to my current setup of docker-compose.

Remaining Work Items:
* Finish setting up kaniko for local and remote deployments
  -> Set up a docker registry inside of k8s cluster to push images to
    - namespace.yaml
    - ingress.yaml
    - service.yaml
    - deployment.yaml
    - volume.yaml
    - secret.yaml
* Migrate this to use the skaffold microservice pattern
  -> Add go example
  -> Add pwa example
Nice to haves:
* Remote deployments
* Dev, test, prod optimizations

## How to run
```sh
# from root directory
skaffold dev
```
