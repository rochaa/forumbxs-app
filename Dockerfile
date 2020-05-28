# imagem base
FROM node:13.12.0

# diretório de trabalho
WORKDIR /app

# adiciona o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# instalação e cache das dependencias
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.1.7

# copia do app
COPY . /app

# run da aplicação
CMD ng serve --host 0.0.0.0