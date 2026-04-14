# Use the official Bun image
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# Install dependencies into a temp directory to cache them
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Copy everything to the final image
FROM base AS release
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Expose the port the app runs on
EXPOSE 3000/tcp

# Run the app
CMD ["bun", "run", "start"]