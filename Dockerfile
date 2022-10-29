# Install dependencies only when needed
FROM node:16-alpine 
#RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .

ENV PYTHONUNBUFFERED=1
RUN apk update
RUN apk add --update --no-cache python3 make g++  && ln -sf python3 /usr/bin/python
RUN apk add --no-cache  chromium
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN npm install
RUN npm run build

EXPOSE 3001

ENV PORT 3001

CMD ["npm", "start"]