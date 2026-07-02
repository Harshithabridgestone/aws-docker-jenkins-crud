pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Source code already cloned by Jenkins'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t crud-app:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f crud-app || true'
            }
        }

        stage('Deploy App Container') {
            steps {
                sh '''
                docker run -d \
                  --name crud-app \
                  --network app-network \
                  -p 3000:8080 \
                  crud-app:latest
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
                sh 'curl -f http://localhost:3000/api/tutorials'
            }
        }
    }
}
