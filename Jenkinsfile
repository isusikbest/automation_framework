pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t playwright-tests .'
            }
        }

        stage('Run Tests in Docker') {
            steps {
                sh 'docker run --rm playwright-tests'
            }
        }
    }
}

