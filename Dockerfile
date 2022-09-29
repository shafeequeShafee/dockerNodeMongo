

FROM  node:latest

WORKDIR C:/Users/shafeeque.rahman/Desktop/dockerrrnode

COPY package*.json ./
#COPY package*.json ./ 

#RUN npm ci
RUN npm install
# RUN npm ci --only production

# COPY . . --- ella files nneyum copy cheyum include folder 
COPY . .

EXPOSE 4000

CMD [ "node","app.js" ]

#CMD["npm","start"]