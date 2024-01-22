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
                script {
                    // Identify changed files
                    def changedFiles = sh(script: 'git diff --name-only HEAD^ HEAD', returnStdout: true).trim().split('\n')

                    // Run Selenium tests only if there are changes in test files
                    if (changedFiles.any { it.endsWith('.spec.js') }) {
                        echo 'Running Selenium tests...'
                        sh 'npm test'
                    } else {
                        echo 'No changes in Selenium test files. Skipping tests.'
                    }
                }
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
