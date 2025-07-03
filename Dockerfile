FROM mcr.microsoft.com/playwright:v1.52.0-jammy



WORKDIR /tests

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test"]
