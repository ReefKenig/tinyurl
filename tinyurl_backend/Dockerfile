# Docker file for fastapi backend
FROM python:3.8-slim-buster

# Set working directory
WORKDIR /app

# Copy requirements.txt
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy app
COPY . .

# Expose port
EXPOSE 8000

# Run app
CMD ["uvicorn", "app.main:app", "--host", "8000"]

# Build image
# docker build -t tinyurl_backend .

# Run container
# docker run -d --name tinyurl_backend -p 8000:8000 tinyurl_backend

# Stop container
# docker stop tinyurl_backend

# Remove container
# docker rm tinyurl_backend

# Remove image
# docker rmi tinyurl_backend

# Remove all images
# docker rmi $(docker images -a -q)

# Remove all containers
# docker rm $(docker ps -a -q)
