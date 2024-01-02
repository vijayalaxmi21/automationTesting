pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from version control
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use Node.js to install project dependencies
                sh 'npm install'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                // Run Selenium tests
                sh 'npm test'
            }
        }

        stage('Publish Test Results') {
            steps {
                // Publish JUnit test results
                junit 'path/to/test-reports/*.xml'
            }
        }
    }

    post {
        always {
            // Cleanup steps (if needed)
            sh 'npm clean'
        }

        success {
            // Notify on success (optional)
            echo 'Tests passed successfully!'
        }

        failure {
            // Notify on failure (optional)
            echo 'Tests failed!'
        }
    }
}
