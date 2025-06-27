pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('playwright-tests')
                }
            }
        }

        stage('Run Tests in Docker') {
            steps {
                sh 'docker run --rm playwright-tests'
            }
        }
    }
}
