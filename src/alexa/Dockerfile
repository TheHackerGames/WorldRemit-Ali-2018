FROM ubuntu:16.04

MAINTAINER Sureya Sathiamoorthi "ssathiamoorthi@worldremit.com"

FROM python:3.5-slim

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y \
    python-dev \
    python-pip \
    python-nose \
    python3-pip\
    python-setuptools \
    g++ \
    git \
    wget \
    curl \
    openssh-server

# Create Application directory structure
RUN mkdir -p /app


# Copy project specific files  to Container
COPY ally.py /app
COPY templates.yaml /app
COPY requirements.txt /app


# Set the working directory to /app
WORKDIR /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 9558 available to the world outside this container
EXPOSE 9965

# Define environment variable
ENV service_name ally_alexa

# Run app.py when the container launches
CMD ["gunicorn", "-b", "0.0.0.0:9965", "ally:app", "-k", "gevent"]
