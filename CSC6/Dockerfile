# --- Build Stage ---
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

# --- Run Stage ---
FROM node:20-alpine

WORKDIR /app

# Copy everything from build stage
COPY --from=builder /app ./

EXPOSE 3000

# Start Vite preview on 0.0.0.0 and port 3000
CMD ["npm", "run", "preview", "--", "--port", "3000", "--host", "0.0.0.0"]
