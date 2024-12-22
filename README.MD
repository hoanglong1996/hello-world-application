# 🚀 Run the Application on Local Environment

Follow these steps to get the application up and running locally:

1. **Build the Docker Image**

    ```bash
    docker build -t hello-world-application .
    ```

2. **Run the Docker Container**

    ```bash
    docker run -d --name hello-my-world -p 80:80 hello-world-application
    ```

> **Note:** Access the application via [http://localhost](http://localhost)

Happy coding! 🎉
