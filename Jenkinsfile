pipeline {
    agent any

    stages {
        stage('Deploy on EC2 Host') {
            steps {
                sh '''
                cd /home/ec2-user/node-js-postgresql-crud-example
                git pull origin main
                docker build -t crud-app:latest .
                docker rm -f crud-app || true
                docker run -d --name crud-app --network app-network -p 3000:8080 crud-app:latest
                docker ps
                curl -f http://localhost:3000/api/tutorials
                '''
            }
        }
    }
}
