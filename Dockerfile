#Each instruction in this file creates a new layer
#Here we are getting our node as Base image

FROM  node:latest
#FROM Creates layers of dependencies like we could build an OS layer.


RUN mkdir -p /usr/src/app
#Creating a new directory for app files and setting path in the container

WORKDIR /usr/src/app
# sets the working directory in the container.




# COPY package*.json ./
COPY package.json /usr/src/app
#copying the package.json file(contains dependencies) from project source dir to container dir
#COPY adds files from Docker client’s current directory.


#RUN npm ci
# installing the dependencies into the container
#RUN allows us to install your application and packages required for it.
RUN npm install
# RUN npm ci --only production


COPY . /usr/src/app
#copying the source code of Application into the container dir

#COPY . .
# COPY . . --- ella files nneyum copy cheyum include folder 



# EXPOSE 4000
#container exposed network port number
#EXPOSE instruction informs Docker that the container listens on the specified network port at runtime.

CMD [ "node","app.js" ]
#CMD specifies what command to run within the Container.



#Note: the difference between RUN & CMD is

#The RUN command will execute while creating the image
#The CMD is a list of things to run within a Container that instantiated from an image.

#link: https://medium.com/zenofai/how-to-build-a-node-js-and-mongodb-application-with-docker-containers-15e535baabf5

#CMD["npm","start"]