# syntax = docker/dockerfile:1

# Node.js 빌드 단계
ARG NODE_VERSION=22.8.0
FROM node:${NODE_VERSION}-slim as build

LABEL fly_launch_runtime="Node.js"

WORKDIR /app

ENV NODE_ENV="production"
ARG YARN_VERSION=1.22.22
RUN npm install -g yarn@$YARN_VERSION --force

# Build에 필요한 패키지 설치
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false

COPY . .

# Linting을 생략하고 빌드 실행
RUN echo "Running build..." && yarn run vite build

# Nginx를 이용해 빌드된 결과물 서빙
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
