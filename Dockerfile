FROM ubuntu:latest

WORKDIR .

RUN apt update && apt install nodejs npm -y

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
