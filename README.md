
# Docker Training

experiencing how to dockerize my node application


## Installation

first install Docker and docker-compose 

```bash

```
    


## usage for Docker 
For building an image  
The dot `.` after the end of commands stands for, it looks docker file at current directory

```
 docker build -t <give-a-name-for-custom-image> .
```
creating container from an existing image
```
docker run --name <give-container-name> -d -p 3000:3000 <image-name>
```
removing container and it's associated image
```
 docker rmi <image_id>
```
## usage for Docker-compose

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

## docker swarm
 Docker swarm is a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines.  

 ### to activate docker swarm

```bash
docker swarm init --advertise-addr <your ip address>

```
### to list services
docker swarm works with service instead of container.  
service is pretty much the same as container 

```
docker service ls
```

### edit `docker-compose.prod` file to uses  **docker swam**
add 
~~~
deploy:
    
~~~
### deploying using swarm

give a name to a stack at the end of the line like i did here `myapp`
```
docker stack deploy -c docker-compose.yml -c docker-compose.prod.yml myapp
```

### to list node
```
docker node ls

```
### to list stack
```
docker stack ls

```
  
## flags and their meaning



| flags other options | Description                           |
| :------------------ | :------------------------------------ |
| `-d`                | detach / to run in background         |
| `-it`               | interactive / to see it in foreground |
| `-f`                | file                                  |
| `-v`                | volume                                |
| `down`              | removing container                    |




