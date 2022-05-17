
# Docker Training

experiencing how to dockerize my node application


## Installation

first install Docker and docker-compose 

```bash

```
    


## CLI

to run docker files in background

```bash
   docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```
to remove unwanted volumes.(run the container before we delete the volumes because it will also delete our named volumes)

```bash
   docker volume prune
```

only to stop the running container

```bash
   docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```

to stop the running container and delete container and it's volume

```bash
   docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
```
to inspect/ info like ip address of the container 

```bash
    docker inspect <container-name>
    
```
to see docker container logs

```bash
    docker logs <container-name>
```

to follow logs / to see interactive docker container logs

```bash
    docker logs <container-name> -f
```

to add another instance of our node application for load balancing

```bash
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale node-app=2

```
to check if it's load balancing 

```bash
docker logs docker-training_node-app_2 -f 

```

## flags and their meaning



| flags other options | Description                           |
| :------------------ | :------------------------------------ |
| `-d`                | detach / to run in background         |
| `-it`               | interactive / to see it in foreground |
| `-f`                | file                                  |
| `-v`                | volume                                |
| `down`              | removing container                    |




