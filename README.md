
# Docker Training

learning how to dockerize my node application
# Installation
## step 1 Installing Docker
Docker CE for Linux installation script  
This script is meant for quick & easy install via:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh 
sh get-docker.sh
```
## step 2 Installing Docker Compose
The following command will download the 1.29.2 release and save the executable file at /usr/local/bin/docker-compose, which will make this software globally accessible as docker-compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Next, set the correct permissions so that the docker-compose command is execut
```
sudo chmod +x /usr/local/bin/docker-compose
```
To verify that the installation was successful, you can run:
```
docker-compose --version
```

# usage for Docker 
## Build docker image
The build command optionally takes a –tag flag. The tag is used to set the name of the image and an optional tag in the format `name:tag`. We’ll leave off the optional "`tag`" for now to help simplify things. If you do not pass a tag, docker will use “latest” as it’s default tag. You’ll see this in the last line of the build output.  

The dot `.` after the end of commands stands for, it looks docker file at current directory

```
 docker build -t <give-a-name-for-custom-image> .
```
## creating container from an existing image
```
docker run --name <give-container-name> -d -p 3000:3000 <image-name>
```
## removing container and it's associated image
```
 docker rmi <image_id>
```
## Tagging Images

To create a new tag for the image we built above, run the following command.
```
docker tag <previous-image-name>:latest <previous-image-name>:v1.0.0
```

## pushing to Docker repository
```
$ docker push <username>/<your-image-name:<optional-tag>
```

example
```
$ docker push johnmerga/task-manager-api:v1.0.0
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
deploy: # configuring docker-compose to use docker swarm
  replicas: 8 # how many instances of specific service you want to run
  restart_policy:
    condition: any
  update_config:
    parallelism: 2
    delay: 15s
  
~~~
### deploying using swarm

give a name to a stack at the end of the line like i did here `myapp`  
- `stack name`  is like all of your services bundled together 
```
docker stack deploy -c docker-compose.yml -c docker-compose.prod.yml <stack-name>
```

### to list node
```
docker node ls

```
### to list stack
```
docker stack ls

```

### to list services of stack
```
docker stack services <stack-name>

```
### to list instances of specific services
```
docker service ps <service-name>

```

### Removing stack
```
docker stack rm <stac-name>

```
### updating 
```
docker stack deploy -c docker-compose.yml -c docker-compose.prod.yml <stack-name>
```
## flags and their meaning



| flags other options | Description                           |
| :------------------ | :------------------------------------ |
| `-d`                | detach / to run in background         |
| `-it`               | interactive / to see it in foreground |
| `-f`                | file                                  |
| `-v`                | volume                                |
| `down`              | removing container                    |




