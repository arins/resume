# Install dependencies only when needed
FROM debian:stable-slim
#RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y curl 
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get update
RUN apt install -y nodejs

RUN apt-get install -y gcc g++ make
RUN apt-get install -y python3 \
make \
g++ \
chromium \
ca-certificates \
fonts-liberation \
libappindicator3-1 \
libasound2 \
libatk-bridge2.0-0 \
libatk1.0-0 \
libc6 \
libcairo2 \
libcups2 \
libdbus-1-3 \
libexpat1 \
libfontconfig1 \
libgbm1 \
libgcc1 \
libglib2.0-0 \
libgtk-3-0 \
libnspr4 \
libnss3 \
libpango-1.0-0 \
libpangocairo-1.0-0 \
libstdc++6 \
libx11-6 \
libx11-xcb1 \
libxcb1 \
libxcomposite1 \
libxcursor1 \
libxdamage1 \
libxext6 \
libxfixes3 \
libxi6 \
libxrandr2 \
libxrender1 \
libxss1 \
libxtst6 \
lsb-release \
wget \
xdg-utils


RUN npm install
RUN npm run build
RUN mkdir tmp
EXPOSE 3001

ENV PORT=3001

CMD ["npm", "start"]