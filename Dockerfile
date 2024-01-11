# Stage 1: Build the Astro site
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR .

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies using pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the Astro site
RUN pnpm build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine AS production

# Copy built assets from the build stage to the Nginx HTML directory
COPY --from=build /dist /usr/share/nginx/html

# Copy over our modified nginx config
COPY deployment/nginx-default.conf /etc/nginx/conf.d/default.conf
