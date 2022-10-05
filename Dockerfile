# Install dependencies only when needed
FROM node:16-alpine 
#RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3001

ENV PORT 3001

CMD ["npm", "start"]